function DoEnd() {
    this._construct = function() {
        this.schedule = null;
    };
    this._construct();

    this.execute = async function() {
        console.log("ИГР DoE.execute-01");
    };
}
