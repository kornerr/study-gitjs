function DoSelectBranch(
    elForm,
    elSection,
    elAccept
) {
    this._construct = function() {
        this.doSaveWriteBranch = false;
        this.branches = [];
        this.elForm = elForm;
        this.elSeciton = elSection;
        this.elAccept = elAccept;
        this.rootFiles = [];
        this.schedule = null;
        this.selectedWriteBranch = null;

        var self = this;
        this.elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self.doSaveWriteBranch = true;
            self.setSelectedWriteBranch();
            self.schedule();
        });
    };
    this._construct();

    this.listBranches = async function() {
        var proceed = this.shouldListBranches();
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
        await this.saveWriteBranch();
        this.resetUI();
    };

    this.resetRootFiles = async function() {
        this.rootFiles = await pfs.readdir("/");
    };

    this.resetUI = function() {
        var html = "";
        for (var i in this.branches) {
            var branch = this.branches[i];
            var fmt = FMT_BRANCH_BUTTON.replaceAll("%ID%", `branch-${i}`).replaceAll("%VALUE%", branch);
            html += fmt;
        }
        elSection.innerHTML = html;
        /*
        var isVisible = !this.rootFiles.includes(DIR_REL);
        elForm.style.display = isVisible ? "block" : "none";
        */
    };

    this.saveWriteBranch = async function() {
        var proceed = this.shouldSaveWriteBranch();
        console.log("ИГР DoSB.saveWB-00 proceed:", proceed);
        if (!proceed) {
            return;
        }
        this.doSaveWriteBranch = false;
        await pfs.writeFile("/" + FILE_WRITE_BRANCH, this.selectedWriteBranch , {encoding: "utf8"});
    }

    this.setLoading = function(state) {
        // TODO
        this.elAccept.style.display = state ? "none" : "block";
    };

    self.setSelectedWriteBranch = function() {
        var radios = document.quearySelectorAll("input[name='branch']");
        for (var i in radios) {
            var radio = radios[i];
            if (radio.checked) {
              self.writeBranch = radio.value;
            }
        }
    }

    this.shouldListBranches = function() {
        var targetFileIsPresent = this.rootFiles.includes(FILE_WRITE_BRANCH);
        return !targetFileIsPresent;
    };

    this.shouldSaveWriteBranch = function() {
        return self.saveWriteBranch;
    };
}
