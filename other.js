// Get element by id using a short function name.
function deId(sid) {
    return document.getElementById(sid);
}

// Return date string in YYYY-MM-DD H:m format (or something like that)
function formatDate(dt) {
    var year = dt.getFullYear();
    var mon = String(dt.getMonth() + 1).padStart(2, "0");
    var day = String(dt.getDate()).padStart(2, "0");
    var h = String(dt.getHours()).padStart(2, "0");
    var min = String(dt.getMinutes()).padStart(2, "0");
    return `${year}-${mon}-${day} ${h}:${min}`;
}

// https://stackoverflow.com/a/1353711/3404710
function isDate(dt) {
    return dt instanceof Date && !isNaN(dt);
}

async function listBranches() {
    try {
        var items = await git.listBranches({
            dir: DIR,
            remote: ORIGIN
        });
        return items.filter(item => item != "HEAD");
    } catch (e) {
        reportError("listBranches", e);
    }
}

function parseNotes(content) {
    var items = [];
    var lines = content.split("\n");
    var currentItem = new Note();
    for (var i in lines) {
        var ln = lines[i];
        var dt = new Date(ln);
        if (
            currentItem.date == null &&
            isDate(dt)
        ) {
            // First date
            currentItem.date = dt;
        } else if (
            currentItem.date != null &&
            isDate(dt)
        ) {
            // Second date. Add item.
            items.push(currentItem);
            currentItem = new Note();
            currentItem.date = dt;
        } else if (
            // Id
            currentItem.date != null &&
            currentItem.id == null
        ) {
            currentItem.id = ln;
        } else if (
            // First text
            currentItem.id != null &&
            currentItem.text == null &&
            !isDate(dt)
        ) {
            currentItem.text = ln;
        } else if (
            // Second text
            currentItem.id != null &&
            currentItem.text != null &&
            !isDate(dt)
        ) {
            currentItem.text += "\n" + ln;
        }
    }
    // Last item.
    if (currentItem.date != null) {
       items.push(currentItem);
    }

    return items;
}

// Report error with an alert.
function reportError(title, err) {
    alert(title + "\n\n" + err.name + ": " + err.message);
}
       
function setElementEnabled(el, state) {
    if (state) {
        el.setAttribute("disabled", "true");
    } else {
        el.removeAttribute("disabled");
    }
}

// https://stackoverflow.com/a/2117523
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function(c)
        {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }
    );
}

/*
async function createFileSystem(storageName) {
  fs = new LightningFS(storageName);
  git.plugins.set("fs", fs);
  return fs.promises;
}

async function pull(url, branch) {
  return await git.pull({
    dir: DIR,
    corsProxy: CORS_PROXY,
    url: url,
    ref: branch,
    singleBranch: true,
  });
}
*/
