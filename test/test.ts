import { expect, tap } from 'tapbundle'
import * as backupgate from '../ts/index'

let testBackupgate: backupgate.Backupgate

tap.test('first test', async () => {
  testBackupgate = new backupgate.Backupgate()
})

tap.start()
