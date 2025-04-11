async function checkIsomorphic() {
  // Initialize isomorphic-git with a file system
  // WIPE clean each run
  window.fs = new LightningFS('fs', {wipe: true})
  git.plugins.set('fs', window.fs)
  window.pfs = window.fs.promises

  console.log("01", DIR);
  await pfs.mkdir(DIR);
  console.log("02", DIR);
  // Behold - it is empty!
  var files = await pfs.readdir(DIR);
  console.log("03 before:", files);

  await git.clone({
    dir: DIR,
    corsProxy: CORS_PROXY,
    url: REPO_URL,
    ref: REPO_BRANCH,
    singleBranch: true,
    depth: 1
  });

  console.log("03.1");
  // Now it should not be empty...
  files = await pfs.readdir(DIR);
  console.log("04 after:", files);
  var logs = await git.log({dir: DIR});
  console.log("05 logs:", logs);

  // Write to a file.
  var filePath = `${DIR}/${REPO_FILE}`;
  console.log("filePath", filePath);
  var contents = "This came from js. Now is: " + Date.now();
  await pfs.writeFile(filePath, contents);

  // Add.
  await git.add({
    dir: DIR,
    filepath: REPO_FILE
  });

  // Commit.
  await git.commit({
    dir: DIR,
    message: contents,
    author: {
      name: "GitJS",
      email: "kornerr@gmail.com"
    }
  });

  var logs = await git.log({dir: DIR});
  console.log("06 logs:", logs);
}

async function doPush() {
  var usr = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  console.log("push", usr);
  var ret = await git.push({
    dir: DIR,
    username: usr,
    password: pwd
  });
  console.log("push done:", ret);
};
