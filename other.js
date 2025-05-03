async function activeBranch() {
    try {
        var name = await git.currentBranch({
            dir: DIR,
            fullname: false,
        });
        return name;
    } catch (e) {
        reportError("activeB-01 error:", e);
        return null;
    }
}

// Get element by id using a short function name
function deId(sid) {
    return document.getElementById(sid);
}

// Keep newlines in HTML.
function replaceNewlinesWithBr(text) {
    return text.replaceAll("\n", "<br>");
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
        reportError("listBranches-01 error:", e);
        return null;
    }
}

function loadURL(p) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        var url = p.url;
        if (p.mangleURL) {
            url += "?" + uuid();
        }
        req.open(p.method, url);
        req.onload = function() {
            if (
                req.readyState == 4 &&
                req.status == 200
            ) {
                resolve(req);
            } else {
                resolve(req);
            }
        };
        req.send(p.body);
    });
}

function parseNotes(dict, terminal, content) {
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
            // Second date. Set item.
            currentItem.terminal = terminal;
            dict[currentItem.id] = currentItem;
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
    // Last item. Set it.
    if (currentItem.date != null) {
        currentItem.terminal = terminal;
        dict[currentItem.id] = currentItem;
    }
}

function parseTerminal(content) {
    var lines = content.split("\n");
    for (var i in lines) {
        var ln = lines[i];
        var parts = ln.split(" = ");
        if (
            parts.length == 2 &&
            parts[0] == TERMINAL
        ) {
            return parts[1];
        }
    }

    return null;
}

// Report error with an alert
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

function sortedNotes(dict) {
    // Convert dictionary to array
    var items = [];
    for (var i in dict) {
        var item = dict[i];
        items.push(item);
    }
    // Sort the array
    items.sort(function(item1, item2) {
        return item1.date - item2.date;
    });

    return items;
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
