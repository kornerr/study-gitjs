function DoPrintNotes() {
    this._construct = function() {
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.printNotes = async function() {
        console.log("ИГР DoPN.printN-1")
    };

    this.execute = async function() {
        await this.resetRootFiles();
        await this.printNotes();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };
}
