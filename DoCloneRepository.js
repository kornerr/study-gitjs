function DoCloneRepository(
    elForm,
    elAccept,
    elURL
) {
    this._construct = function() {
        this.doClone = false;
        this.elForm = elForm;
        this.elAccept = elAccept;
        this.elURL = elURL;
        this.rootFiles = [];
        this.schedule = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.doClone = true;
            self.schedule();
        });
    };
    this._construct();

    this.cloneRepository = async function() {
        var proceed = this.shouldProceedCloning();
        console.log("ИГР DoRR.cloneR-00 proceed:", proceed);
        if (!proceed) {
            console.log("ИГР DoRR.cloneR-01.interrupt");
            return;
        }
        this.doClone = false;

        console.log("ИГР DoRR.cloneR-02 url:", this.elURL.value);
        this.setLoading(true);

        try {
            await git.clone({
                dir: DIR,
                corsProxy: PROXY,
                url: this.elURL.value,
            });
            this.schedule();
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

    this.shouldProceedCloning = function() {
        var targetDirIsPresent = this.rootFiles.includes(DIR_REL);
        var urlIsEmpty = (this.elURL.value.length == 0);
        console.log("ИГР DoRR.shouldPC-01 targetDIP/urlIE/elURL/doC:", targetDirIsPresent, urlIsEmpty, this.elURL.value, this.doClone);
        return this.doClone && !targetDirIsPresent && !urlIsEmpty;
    };
}
