async function createFileSystem(storageName) {
  fs = new LightningFS(storageName);
  git.plugins.set("fs", fs);
  return fs.promises;
}
