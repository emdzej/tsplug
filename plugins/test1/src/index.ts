import { LoadablePlugin } from "@tsplug/core";

export default class Test1Plugin implements LoadablePlugin {
    name: string = "test1";
    version: string = "1.0.0";
    description: string = "Test1 plugin";
    init =  () => console.log("Test1 plugin initialized");
    destroy = () => console.log("Test1 plugin destroyed");
}