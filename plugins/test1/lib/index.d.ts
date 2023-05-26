import { LoadablePlugin } from "@tsplug/core";
export default class Test1Plugin implements LoadablePlugin {
    name: string;
    version: string;
    description: string;
    init: () => void;
    destroy: () => void;
}
