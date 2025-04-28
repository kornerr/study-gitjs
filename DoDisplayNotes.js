function DoDisplayNotes(
    elForm,
    elSection
) {
    this._construct = function() {
        this.elForm = elForm;
        this.elSection = elSection;
        this.currentNotes = [];
        this.dirFiles = [];
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.displayNotes = async function() {
        if (this.currentNotes.length == 0) {
            return;
        }
        console.log("ИГР DoDN.displayN-1 notes");
        var html = "";
        for (var i in this.currentNotes) {
            var n = notes[i];
            html += FMT_NOTE
                .replaceAll("%DATE%", formatDate(n.date))
                .replaceAll("%TEXT%", n.text);
        }
        this.elSection.innerHTML = html;
        this.elForm.style.display = "block";
    };

    this.execute = async function() {
        await this.resetFiles();
        await this.readCurrentNotes();
        //await this.readOtherNotes();
        this.displayNotes();
    };

    this.readCurrentNotes = async function() {
        if (!this.dirFiles.includes(FILE_LOG_REL)) {
            return;
        }
        console.log("ИГР DoDN.readCN-1")
        var contentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        this.currentNotes = parseNotes(contentLog);
    };

    this.resetFiles = async function() {
        this.rootFiles = await pfs.readdir(ROOT);
        if (this.rootFiles.includes(DIR_REL)) {
            this.dirFiles = await pfs.readdir(DIR);
        }
    };
}
