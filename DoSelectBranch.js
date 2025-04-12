function DoSelectBranch(
    elForm,
    elAccept
) {
    this._construct = function() {
        //this.doCheckout = false;
        this.branches = [];
        this.elForm = elForm;
        this.elAccept = elAccept;
        this.rootFiles = [];
        this.schedule = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            //self.doCheckout = true;
            self.schedule();
        });
    };
    this._construct();

    this.listBranches = async function() {
        var proceed = this.shouldProceedListingBranches();
        console.log("ИГР DoSB.listB-00 proceed:", proceed);
        if (!proceed) {
            console.log("ИГР DoSB.listb-01.interrupt");
            return;
        }
        //this.doCheckout = false;

        console.log("ИГР DoSB.listB-02");
        this.setLoading(true);

        try {
            var brs = await git.listBranches({
                dir: DIR,
                corsProxy: PROXY,
                remote: "origin"
            });
            this.branches = brs.filter(br => br != "HEAD");
            console.log("ИГР DoSB.listB-02.1 branches:", this.branches);
            //this.schedule();
        } catch (e) {
            reportError("DoSelectBranch?", e);
        }
        console.log("ИГР DoSB.listB-03");

        this.setLoading(false);
    };

    this.execute = async function() {
        await this.resetRootFiles();
        console.log("ИГР DoSB.execute");
        await this.listBranches();
        this.resetUI();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUI = function() {
        var html = "";
        for (var i in this.branches) {
            var branch = this.branches[i];
            html += FMT_BRANCH_BUTTON.replace("%ID%", `branch-$i`).replace("%VALUE%", branch);
        }
        elForm.innerHTML = html;
        /*
        var isVisible = !this.rootFiles.includes(DIR_REL);
        elForm.style.display = isVisible ? "block" : "none";
        */
    };

    this.setLoading = function(state) {
        // TODO
        this.elAccept.style.display = state ? "none" : "block";
    };

    this.shouldProceedListingBranches = function() {
        // TODO
        return true;
    };
}
