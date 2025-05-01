function DoDisplayNotes(
    elForm,
    elSection
) {
    this._construct = function() {
        this.elForm = elForm;
        this.elSection = elSection;
        this.currentLog = "";
        this.currentTerminal = null;
        this.otherLogs = "";
        this.dirFiles = [];
        this.notes = [];
        this.rootFiles = [];
        this.schedule = null;
    };
    this._construct();

    this.parseLogs = function() {
        var json = JSON.parse(this.otherLogs);
        json[this.currentTerminal] = this.currentLog;
        var dict = {};
        for (var branch in json) {
            var log = json[branch];
            parseNotes(dict, branch, log);
        }
        this.notes = sortedNotes(dict);
    };

    this.displayNotes = async function() {
        console.log("ИГР DoDN.displayN-1 notes");
        var html = "";
        for (var i in this.notes) {
            var n = this.notes[i];
            html += FMT_NOTE
                .replaceAll("%DATE%", formatDate(n.date))
                .replaceAll("%TERMINAL%", n.terminal)
                .replaceAll("%TEXT%", n.text);
        }
        //console.log("ИГР DoDN.displayN-2 html:", html);
        this.elSection.innerHTML = html;
        this.elForm.style.display = "block";
    };

    this.execute = async function() {
        if (!this.rootFiles.includes(DIR_REL)) {
            return;
        }
        await this.resetFiles();
        await this.readCurrentLog();
        await this.readCurrentTerminal();
        await this.readOtherLogs();
        this.parseLogs();
        this.displayNotes();
    };

    this.readCurrentLog = async function() {
        console.log("ИГР DoDN.readCL-1")
        if (!this.dirFiles.includes(FILE_LOG_REL)) {
            this.currentLog = "";
            return;
        }
        console.log("ИГР DoDN.readCL-2")
        this.currentLog = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
    };

    this.readCurrentTerminal = async function() {
        this.currentTerminal = await activeBranch();
        /*
        console.log("ИГР DoDN.readCT-1");
        if (!this.dirFiles.includes(FILE_CONFIG_REL)) {
            this.currentTerminal = "undefined-terminal";
            return;
        }
        var config = await pfs.readFile(FILE_CONFIG, {encoding: "utf8"});
        this.currentTerminal = parseTerminal(config);
        console.log("ИГР DoDN.readCT-2 currentT:", this.currentTerminal);
        */
    };

    this.readOtherLogs = async function() {
        console.log("ИГР DoDN.readOL-1")
        if (!this.dirFiles.includes(FILE_RO_LOG_REL)) {
            return;
        }
        console.log("ИГР DoDN.readOL-2")
        this.otherLogs  = await pfs.readFile(FILE_RO_LOG, {encoding: "utf8"});
    };

    this.resetFiles = async function() {
        this.rootFiles = await pfs.readdir(ROOT);
        if (this.rootFiles.includes(DIR_REL)) {
            this.dirFiles = await pfs.readdir(DIR);
        }
    };
}
