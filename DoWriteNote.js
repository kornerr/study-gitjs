function DoWriteNote(
    elAccept,
    elForm,
    elText
) {
    this._construct = function() {
        this.elAccept = elAccept;
        this.elForm = elForm;
        this.elText = elText;
        this.rootFiles = [];
        this.schedule = null;
        this.write = false;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.write = true;
            self.schedule();
        });
    };
    this._construct();

    this.commitNote = async function() {
        console.log("ИГР DoWN.commitN-01");
        var contents = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        await git.add({
            dir: DIR,
            filepath: FILE_LOG_REL
        });
        await git.commit({
            dir: DIR,
            message: "From JS",
            author: {
                name: "JS",
                email: "gitjs.org"
            }
        });
    };

    this.execute = async function() {
        await this.resetRootFiles();
        this.resetUIVisibility();
        if (this.write) {
          this.write = false;
          await this.saveNote();
          await this.commitNote();
          //await this.pushNote();
          this.schedule();
        }
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUIVisibility = function() {
        var isVisible = this.rootFiles.includes(DIR_REL);
        this.elForm.style.display = isVisible ? "block" : "none";
    };

    this.saveNote = async function() {
        console.log("ИГР DoWN.saveN-01");
        var contents = await pfs.readFile(FILE_LOG, {encoding: "utf8"});
        console.log("ИГР DoWN.saveN-02 contents:", contents);
        var dt = (new Date()).toISOString();
        var id = uuid();
        var msg = this.elText.value;
        contents += `\n${dt}\n${id}\n${msg}\n`;
        await pfs.writeFile(FILE_LOG, contents, {encoding: "utf8"});
        console.log("ИГР DoWN.saveN-03 contents:", contents);
    };
}
