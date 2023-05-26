export interface LoadablePlugin {
    name: string;
    version: string;
    description: string;
    init: () => void;
    destroy: () => void;
}