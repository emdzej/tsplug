import { PluginManager  } from "./manager";


console.log("Loading plugins");


let manager = new PluginManager();
manager.load("../../plugins/test1/lib/index.js");