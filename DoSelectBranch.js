function DoSelectBranch(
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
        this.rootFiles = [];
        this.schedule = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.doCheckoutBranch = self.selectedBranch();
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
        this.doCheckoutBranch = false;

        console.log("ИГР DoSB.checkoutB-02");
        this.setLoading(true);
        // TODO CHECKOUT
        this.setLoading(false);
    };

    this.collectBranches = async function() {
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
        await this.checkoutBranch();
        await this.collectBranches();
        await this.resetActiveBranch();
        this.resetUI();
    };

    this.resetActiveBranch = async function() {
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
    }

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUI = function() {
        var html = "";
        for (var i in this.branches) {
            var branch = this.branches[i];
            var isActive = (branch == this.activeBranch);
            var checked = isActive ? "checked" : "";
            var fmt = FMT_BRANCH_BUTTON
                .replaceAll("%ID%", `branch-${i}`)
                .replaceAll("%VALUE%", branch)
                .replaceAll("%CHECKED%", checked);
            html += fmt;
        }
        this.elSection.innerHTML = html;
    };

    this.selectedBranch = function() {
        var radios = document.querySelectorAll("input[name='branch']");
        for (var i in radios) {
            var radio = radios[i];
            if (radio.checked) {
              return radio.value;
            }
        }
        return null
    }

    this.setLoading = function(state) {
        // TODO
        this.elAccept.style.display = state ? "none" : "block";
    };

    this.shouldCheckoutBranch = function() {
        return this.doCheckoutBranch;
        /*
        var targetFileIsPresent = this.rootFiles.includes(FILE_WRITE_BRANCH);
        return !targetFileIsPresent;
        */
    };
}
