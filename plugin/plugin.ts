import { PluginSettings } from "../sdk";

class ExamplePlugin {

    public readonly settings: PluginSettings = {
        name: "PluginName",
        version: 1.0,
        author: "AuthorName"
    }

    constructor() {
    }
}

export default ExamplePlugin;