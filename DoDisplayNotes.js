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
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        console.log("ИГР DoDN.displayN-1")
        var files = await pfs.readdir(DIR);

        var contentLog = "";
        if (files.includes(FILE_LOG_REL)) {
            contentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        }
        var notes = parseNotes(contentLog);
        console.log("ИГР DoDN.displayN-2 notes:", notes);
    };

    this.execute = async function() {
        await this.resetRootFiles();
        await this.displayNotes();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };
}
