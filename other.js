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
