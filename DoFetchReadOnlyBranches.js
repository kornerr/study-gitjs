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
        await this.collectBranches();
    };

    this.collectBranches = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        this.branches = await listBranches();
        console.log("ИГР DoFROB.collectB-01 branches:", this.branches);
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
