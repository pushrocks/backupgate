import * as plugins from './backupgate.plugins';
import { Server, Route, Handler } from 'smartexpress'


export class Backupgate {
  server = new Server({
    cors: true,
    forceSsl: true,
    defaultAnswer: `backupgate v1.0`,
    port: 3000
  })

  constructor() {

  }

  /**
   * runs a series of checks that makes sure everything is in place.
   */
  async checkEnv() {
    // check for rclone
    try {
      await plugins.smartshell.which('rclone')
    }
    catch (err) {
      console.log()
      return
    }

    // check for config
    
  }
}
