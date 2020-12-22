const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "WELCOME";
        this.textMessage = "Welcome Fellow Player To {server}";
        this.colorTitle = "#03A9F4";
    }
};