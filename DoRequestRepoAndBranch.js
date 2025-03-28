function DoRequestRepoAndBranch(elForm) {
    this.elForm = elForm;

    this.execute = async function() {
        var root = await pfs.readdir("/");
        console.log("ИГР DoRRAB-01. root:", root);
        if (!root.includes(DIR_REL)) {
            elForm.style.display = "block";
        }
    };
}
