function DoDisplayNotes(
    elForm,
    elSection
) {
    this._construct = function() {
        this.elForm = elForm;
        this.elSection = elSection;
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.displayNotes = async function() {
        console.log("ИГР DoDN.displayN-1")
        var files = await pfs.readdir(DIR);

        var contentLog = "";
        if (files.includes(FILE_LOG_REL)) {
            contentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        }
        console.log("ИГР DoDN.displayN-3 log:", contentLog);
    };

    this.execute = async function() {
        await this.resetRootFiles();
        await this.displayNotes();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };
}
