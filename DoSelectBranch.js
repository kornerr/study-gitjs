function DoSelectBranch(
    elForm,
    elAccept
) {
    this._construct = function() {
        this.doCheckout = false;
        this.elForm = elForm;
        this.elAccept = elAccept;
        this.rootFiles = [];
        this.schedule = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.doCheckout = true;
            self.schedule();
        });
    };
    this._construct();

    this.checkoutBranch = async function() {
        var proceed = this.shouldProceedCheckout();
        console.log("ИГР DoSB.checkoutB-00 proceed:", proceed);
        if (!proceed) {
            console.log("ИГР DoSB.checkoutB-01.interrupt");
            return;
        }
        this.doCheckout = false;

        console.log("ИГР DoSB.checkoutB-02");
        this.setLoading(true);

        /*
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
        */

        this.setLoading(false);
    };

    this.execute = async function() {
        await this.resetRootFiles();
        console.log("ИГР DoSB.execute");
        /*
        this.resetUIVisiblity();
        await this.checkoutBranch();
        */
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUIVisiblity = function() {
        /*
        var isVisible = !this.rootFiles.includes(DIR_REL);
        elForm.style.display = isVisible ? "block" : "none";
        */
    };

    this.setLoading = function(state) {
        // TODO
        this.elAccept.style.display = state ? "none" : "block";
    };

    this.shouldProceedCheckout = function() {
        // TODO
        return false;
    };
}
