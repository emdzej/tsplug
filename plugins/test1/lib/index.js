"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Test1Plugin {
    constructor() {
        this.name = "test1";
        this.version = "1.0.0";
        this.description = "Test1 plugin";
        this.init = () => console.log("Test1 plugin initialized");
        this.destroy = () => console.log("Test1 plugin destroyed");
    }
}
exports.default = Test1Plugin;
