import { LoadablePlugin } from "@tsplug/core";

export class PluginManager {
    plugins: LoadablePlugin[] = [];

    load = async (path: string) => {
        let Plugin = await import(path)
        console.log(Plugin);
        let plugin = new Plugin.default();
        this.plugins.push(plugin);
        plugin.init();
    }
}