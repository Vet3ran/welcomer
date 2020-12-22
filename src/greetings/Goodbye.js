const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = "GOODBYE";
        this.textMessage = "Left The {server}";
        this.colorTitle = "#df0909";
    }
};