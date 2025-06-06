function DoCheckoutBranch(
    elForm,
    elSection,
    elAccept
) {
    this._construct = function() {
        this.activeBranch = null;
        this.doCheckoutBranch = null;
        this.branches = [];
        this.elForm = elForm;
        this.elSection = elSection;
        this.elAccept = elAccept;
        this.isVisible = true;
        this.rootFiles = [];
        this.schedule = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.doCheckoutBranch = self.selectedFormBranch();
            self.schedule();
        });
    };
    this._construct();

    this.checkoutBranch = async function() {
        var proceed = this.shouldCheckoutBranch();
        console.log("ИГР DoCB.checkoutB-00 proceed:", proceed);
        if (!proceed) {
            console.log("ИГР DoCB.checkoutB-01.interrupt");
            return;
        }

        console.log("ИГР DoCB.checkoutB-02");
        this.setLoading(true);
        try {
            await git.checkout({
                dir: DIR,
                ref: this.doCheckoutBranch,
            });
            this.schedule();
        } catch (e) {
            reportError(ERR_GIT_CHECKOUT_FAILED, e);
        }
        this.doCheckoutBranch = null;
        this.setLoading(false);
    };

    this.collectBranches = async function() {
        if (!this.isVisible) {
            return;
        }
        this.branches = await listBranches();
        console.log("ИГР DoCB.collectB-01 branches:", this.branches);
    };

    this.execute = async function() {
        console.log("ИГР DoCB.execute");
        await this.resetRootFiles();
        this.resetUIVisibility();
        await this.checkoutBranch();
        await this.collectBranches();
        await this.resetActiveBranch();
        this.resetUI();
    };

    this.resetActiveBranch = async function() {
        if (!this.isVisible) {
            return;
        }
        this.activeBranch = await activeBranch();
        console.log("ИГР DoCB.resetAB activeB:", this.activeBranch);
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUI = function() {
        var html = "";
        for (var i in this.branches) {
            var branch = this.branches[i];
            var isActive = (branch == this.activeBranch);
            var selected = isActive ? "selected" : "";
            var fmt = FMT_BRANCH_OPTION
                .replaceAll("%ID%", `branch-${i}`)
                .replaceAll("%VALUE%", branch)
                .replaceAll("%SELECTED%", selected);
            html += fmt;
        }
        this.elSection.innerHTML = html;
    };

    this.resetUIVisibility = function() {
        this.isVisible = this.rootFiles.includes(DIR_REL);
        this.elForm.style.display = this.isVisible ? "block" : "none";
    };

    this.selectedFormBranch = function() {
        return deId("branch-div").value;
    };

    this.setLoading = function(state) {
        setElementEnabled(this.elAccept, state);
    };

    this.shouldCheckoutBranch = function() {
        return this.doCheckoutBranch != null;
    };
}
