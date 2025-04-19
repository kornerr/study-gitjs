function DoPrintNotes() {
    this._construct = function() {
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.printNotes = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        console.log("ИГР DoPN.printN-1")
        var files = await pfs.readdir(DIR);

        var contentConfig = "(null)";
        if (files.includes(FILE_CONFIG_REL)) {
            contentConfig = await pfs.readFile(FILE_CONFIG, {encoding: "utf8"});
        }
        console.log("ИГР DoPN.print-2 config:", contentConfig);

        var contentLog = "(null)";
        if (files.includes(FILE_LOG_REL)) {
            contentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        }
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
