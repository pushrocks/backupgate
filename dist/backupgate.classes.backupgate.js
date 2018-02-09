"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./backupgate.plugins");
const smartexpress_1 = require("smartexpress");
class Backupgate {
    constructor() {
        this.server = new smartexpress_1.Server({
            cors: true,
            forceSsl: true,
            defaultAnswer: `backupgate v1.0`,
            port: 3000
        });
    }
    /**
     * runs a series of checks that makes sure everything is in place.
     */
    checkEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            // check for rclone
            try {
                yield plugins.smartshell.which('rclone');
            }
            catch (err) {
                console.log();
                return;
            }
            // check for config
        });
    }
}
exports.Backupgate = Backupgate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3VwZ2F0ZS5jbGFzc2VzLmJhY2t1cGdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iYWNrdXBnYXRlLmNsYXNzZXMuYmFja3VwZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQWdEO0FBQ2hELCtDQUFxRDtBQUdyRDtJQVFFO1FBUEEsV0FBTSxHQUFHLElBQUkscUJBQU0sQ0FBQztZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFLGlCQUFpQjtZQUNoQyxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQTtJQUlGLENBQUM7SUFFRDs7T0FFRztJQUNHLFFBQVE7O1lBQ1osbUJBQW1CO1lBQ25CLElBQUksQ0FBQztnQkFDSCxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzFDLENBQUM7WUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtnQkFDYixNQUFNLENBQUE7WUFDUixDQUFDO1lBRUQsbUJBQW1CO1FBRXJCLENBQUM7S0FBQTtDQUNGO0FBNUJELGdDQTRCQyJ9