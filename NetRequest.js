function NetRequest() {
    this._construct = function() {
        this.body = "";
        this.mangleURL = false;
        this.method = "GET";
        this.url = null;
    };
    this._construct();
}
