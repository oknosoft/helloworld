/**
 * Копирует dev-версию файлов в node_modules (для отладки библиотек)
 */

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const localNodeModules = path.resolve(appDirectory, 'node_modules');
const remoteNodeModules = 'D:\\WORK\\0KNOSOFT\\UniServer\\www\\builder2\\git-osde\\packages';
const libs = 'metadata-core,metadata-redux,metadata-pouchdb,metadata-abstract-ui,metadata-react,metadata-external'.split(',');

for(const lib of libs){
  const lpath = path.resolve(localNodeModules, lib);
  const rpath = path.resolve(remoteNodeModules, lib);
}
