function NetRequest() {
    this._construct = function() {
        this.body = null;
        this.method = "GET";
        this.url = null;
    };
    this._construct();
}
