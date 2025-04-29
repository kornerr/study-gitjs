function DoFetchReadOnlyBranches() {
    this._construct = function() {
        this.otherNotes = {};
        this.readOnlyNoteURLs = {};
        this.repoURL = null;
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.collectReadOnlyNoteURLs = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        var branches = await listBranches();
        var current = await activeBranch();
        console.log("ИГР DoFROB.collectRONU-01 branches/current:", branches, current);
        this.readOnlyNoteURLs = {};
        for (var i in branches) {
            var branch = branches[i];
            // Exclude checked out branch
            if (branch == current) {
                continue;
            }
            var url = FMT_RAW_GITEA_FILE
                .replaceAll("%REPO_URL%", this.repoURL)
                .replaceAll("%BRANCH%", branch)
                .replaceAll("%FILE%", FILE_LOG_REL);
            this.readOnlyNoteURLs[branch] = url;
        }
        //console.log("ИГР DoFROB.collectRONU-02 urls:", this.readOnlyNoteURLs);
    };

    this.execute = async function() {
        console.log("ИГР DoFROB.execute");
        await this.resetRootFiles();
        await this.readRepoURL();
        await this.collectReadOnlyNoteURLs();
        await this.loadOtherNotes();
        await this.saveOtherNotes();
    };

    this.loadOtherNotes = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        this.otherNotes = {};
        for (var branch in this.readOnlyNoteURLs) {
            var url = this.readOnlyNoteURLs[branch];
            const params = new NetRequest();
            params.url = url;
            var res = await loadURL(params);
            //console.log("ИГР DoFROB.loadON-1 url/res:", url, res);
            if (res.status == 200) {
                this.otherNotes[branch] = res.responseText;
                //console.log("ИГР DoFROB.loadON-2 url/notes:", url, notes);
            }
        }
    }

    this.readRepoURL = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        console.log("ИГР DoFROB.readRU-01");
        var remotes = await git.listRemotes({ dir: DIR });
        for (var i in remotes) {
            var item = remotes[i];
            if (item.remote == ORIGIN) {
                this.repoURL = item.url;
                break;
            }
        }
        console.log("ИГР DoFROB.readRU-02 repoU:", this.repoURL);
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.saveOtherNotes = async function() {
        console.log("ИГР DoFROB.saveON-01");
        contents = JSON.stringify(this.otherNotes);
        await pfs.writeFile(FILE_RO_LOG, contents, {encoding: "utf8"});
        //console.log("ИГР DoFROB.saveON-02 contents:", contents);
    };
}
