function DoRequestRepo(
    elForm,
    elAccept,
    elURL,
    scheduleExec
) {
    this._construct = function() {
        this.elForm = elForm;
        this.elAccept = elAccept;
        this.elURL = elURL;
        this.rootFiles = [];

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            scheduleExec();
        });
    };
    this._construct();

    this.cloneRepository = async function() {
        // Skip cloning if:
        // 1. target directory is already present
        // 2. URL is empty
        if (this.shouldSkipCloning()) {
            console.log("ИГР DoRR.cloneR-01.interrupt");
            return;
        }

        console.log("ИГР DoRR.cloneR-02 url:", this.elURL.value);
        this.setLoading(true);

        try {
            await git.clone({
                dir: DIR,
                corsProxy: PROXY,
                url: this.elURL.value,
            });
            scheduleExec();
        } catch (e) {
            this.eraseClone();
            reportError(ERR_GIT_CLONE_FAILED, e);
        }
        console.log("ИГР DoRR.cloneR-03");

        this.setLoading(false);
    };

    this.eraseClone = async function() {
        // Collect all files and directories.
        var files = [];
        await walkFiles(DIR, files);
        // Remove collected files and directories.
        await rmFiles(files.reverse());
    };

    this.execute = async function() {
        await this.resetRootFiles();
        this.resetUIVisiblity();
        await this.cloneRepository();

        var files = [];
        await walkFiles("/", files);
        console.log("ИГР DoRR.execute-01 files:", files);
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUIVisiblity = function() {
        var isVisible = !this.rootFiles.includes(DIR_REL);
        elForm.style.display = isVisible ? "block" : "none";
    };

    this.setLoading = function(state) {
        if (state) {
            this.elURL.setAttribute("disabled", "true");
        } else {
            this.elURL.removeAttribute("disabled");
        }
        this.elAccept.style.display = state ? "none" : "block";
    };

    this.shouldSkipCloning = function() {
        var targetDirIsPresent = this.rootFiles.includes(DIR_REL);
        var urlIsEmpty = (this.elURL.value.length == 0);
        console.log("ИГР DoRR.shouldSC-01 targetDIP/urlIE/elURL:", targetDirIsPresent, urlIsEmpty, this.elURL.value);
        return !targetDirIsPresent || urlIsEmpty;
    };
}
