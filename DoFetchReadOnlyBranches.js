function DoFetchReadOnlyBranches() {
    this._construct = function() {
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.execute = async function() {
        await this.resetRootFiles();
        console.log("ИГР DoFROB.execute");
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };
}
