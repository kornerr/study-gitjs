function DoRequestRepo(
    elForm,
    elAccept,
    elURL
) {
    this.construct = function() {
        this.elForm = elForm;
        this.elAccept = elAccept;
        this.elURL = elURL;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.processURL();
        });
    };
    this.construct();

    this.displayUI = function(rootFiles) {
        var isVisible = !rootFiles.includes(DIR_REL);
        elForm.style.display = isVisible ? "block" : "none";
    };

    this.execute = async function() {
        var rootFiles = await pfs.readdir("/");
        this.displayUI(rootFiles);
    };

    this.processURL = async function() {
        console.log("ИГР DoRR.processU-01");
        this.setLoading(true);
        console.log("ИГР DoRR.processU-02 url:", this.elURL.value);

        try {
            await git.clone({
                dir: DIR,
                corsProxy: PROXY,
                url: this.elURL.value,
            });
        } catch (e) {
            reportError(ERR_GIT_CLONE_FAILED, e);
            // Collect all files and directories.
            var files = [];
            await walkFiles(DIR, files);
            // Remove collected files and directories.
            await rmFiles(files.reverse());
        }
        console.log("ИГР DoRR.processU-03");

        this.setLoading(false);
    };

    this.setLoading = function(state) {
        if (state) {
            this.elURL.setAttribute("disabled", "true");
        } else {
            this.elURL.removeAttribute("disabled");
        }
        this.elAccept.style.display = state ? "none" : "block";
    };
}
