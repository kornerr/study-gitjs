function DoFetchReadOnlyBranches() {
    this._construct = function() {
        this.repoURL = null;
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.execute = async function() {
        console.log("ИГР DoFROB.execute");
        await this.resetRootFiles();
        await this.readRepoURL();
        await this.collectReadOnlyNotes();
    };

    this.collectReadOnlyNotes = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        var branches = await listBranches();
        var current = await activeBranch();
        console.log("ИГР DoFROB.collectB-01 branches/current:", branches, current);
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
}
