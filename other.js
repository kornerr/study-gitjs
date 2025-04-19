// https://stackoverflow.com/a/1353711/3404710
function isDate(dt) {
    return dt instanceof Date && !isNaN(dt);
}

function parseNotes(content) {
    var items = [];
    var lines = content.split("\n");
    var currentItem = new Note();
    for (var i in lines) {
        var ln = lines[i];
        console.log("Line", ln);
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
            // Text
            currentItem.id != null &&
            !isDate(dt)
        ) {
            currentItem.text += ln;
        }
    }
    // Last item.
    if (currentItem.date != null) {
       items.push(currentItem);
    }

    return items;
}

/*
async function add(path) {
  return await git.add({
    dir: DIR,
    filepath: path,
  });
}

async function clone(url, branch) {
  return await git.clone({
    dir: DIR,
    corsProxy: CORS_PROXY,
    url: url,
    ref: branch,
    singleBranch: true,
    depth: 1
  });
}

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

async function push(url, branch) {
  return await git.push({
    dir: DIR,
    corsProxy: CORS_PROXY,
    url: url,
    ref: branch,
    singleBranch: true,
  });
}
*/
