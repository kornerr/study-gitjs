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
        console.log("ИГР DoSB.checkoutB-00 proceed:", proceed);
        if (!proceed) {
            console.log("ИГР DoSB.checkoutB-01.interrupt");
            return;
        }

        console.log("ИГР DoSB.checkoutB-02");
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

        try {
            var brs = await git.listBranches({
                dir: DIR,
                remote: "origin"
            });
            this.branches = brs.filter(br => br != "HEAD");
            console.log("ИГР DoSB.collectB-01 branches:", this.branches);
            //this.schedule();
        } catch (e) {
            reportError("doSB?.collectB-02", e);
        }
    };

    this.execute = async function() {
        console.log("ИГР DoSB.execute");
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

        try {
            var br = await git.currentBranch({
                dir: DIR,
                fullname: false,
            });
            this.activeBranch = br;
            console.log("ИГР DoSB.resetAB-01 activeB:", this.activeBranch);
            //this.schedule();
        } catch (e) {
            reportError("doSB?.resetAB-02", e);
        }
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
            var fmt = FMT_BRANCH_BUTTON
                .replaceAll("%ID%", `branch-${i}`)
                .replaceAll("%VALUE%", branch)
                .replaceAll("%CHECKED%", selected);
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
        /*
        el.options[el.selectedIndex].
        var options = document.querySelectorAll("option[name='branch']");
        for (var i in options) {
            var option = options[i];
            if (option.selected) {
                return option.value;
            }
        }
        */
        return null
    };

    this.setLoading = function(state) {
        if (state) {
            this.elAccept.setAttribute("disabled", "true");
        } else {
            this.elAccept.removeAttribute("disabled");
        }
    };

    this.shouldCheckoutBranch = function() {
        return this.doCheckoutBranch != null;
    };
}
