import MetaEngine from '@oknosoft/metadata/packages/core/src';
import pluginPouchdb from '@oknosoft/metadata/packages/pouchdb/src';
import settings from '../../../config/app.settings';
import {meta, classes, exclude} from '../../meta';

// подключаем плагины к MetaEngine
MetaEngine
  .plugin(pluginPouchdb);

const $p = global.$p = new MetaEngine();

// параметры сеанса инициализируем сразу
$p.jobPrm.init(settings);
// создаём структуру метаданных
$p.md.init(meta);
// создаём менеджеры данных
$p.md.createManagers(classes, exclude);

export function init(handleIfaceState) {

  try{

    // сообщяем адаптерам пути, суффиксы и префиксы
    const {jobPrm, classes, adapters: {pouch}} = $p;
    if(jobPrm.get('couch_path') !== jobPrm.couch_path && process.env.NODE_ENV !== 'development') {
      jobPrm.set('couch_path', jobPrm.couch_path);
    }
    if(!jobPrm.get('auth_provider')) {
      jobPrm.set('auth_provider', 'couchdb');
    }

    // classes.PouchDB.plugin(proxy_login());
    // pouch.init(jobPrm);

    // выполняем модификаторы
    //modifiers($p);

    // информируем хранилище о готовности MetaEngine
    handleIfaceState({meta_loaded: true});

    // читаем общие данные в ОЗУ
    //return load_common($p);

  }
  catch(err) {
    $p.utils.record_log(err);
  }

}
