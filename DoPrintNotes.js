function DoPrintNotes() {
    this._construct = function() {
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.printNotes = async function() {
        console.log("ИГР DoPN.printN-1")
        var contentConfig = await pfs.readFile(FILE_CONFIG, {encoding: "utf8"});
        console.log("ИГР DoPN.print-2 config:", contentConfig);
        var contentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        console.log("ИГР DoPN.print-3 log:", contentLog);
    };

    this.execute = async function() {
        await this.resetRootFiles();
        await this.printNotes();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };
}
