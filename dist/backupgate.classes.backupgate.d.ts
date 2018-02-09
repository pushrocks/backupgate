import { Server } from 'smartexpress';
export declare class Backupgate {
    server: Server;
    constructor();
    /**
     * runs a series of checks that makes sure everything is in place.
     */
    checkEnv(): Promise<void>;
}
