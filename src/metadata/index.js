
// конструктор metadata.js
import MetaEngine from 'metadata-core';
import plugin_pouchdb from 'metadata-pouchdb';
import plugin_ui from 'metadata-abstract-ui';
import plugin_ui_tabulars from 'metadata-abstract-ui/tabulars';
import plugin_react from 'metadata-react/plugin';

// функция установки параметров сеанса
import settings from '../../config/app.settings';

// генератор события META_LOADED для redux
import {metaActions} from 'metadata-redux';

// подключаем плагины к MetaEngine
MetaEngine
  .plugin(plugin_pouchdb)     // подключаем pouchdb-адаптер к прототипу metadata.js
  .plugin(plugin_ui)          // подключаем общие методы интерфейса пользователя
  .plugin(plugin_ui_tabulars) // подключаем методы экспорта табличной части
  .plugin(plugin_react);      // подключаем react-специфичные модификаторы к scheme_settings

// создаём экземпляр MetaEngine
const $p = new MetaEngine();

// параметры сеанса инициализируем сразу
$p.wsql.init(settings);

// скрипт инициализации в привязке к store приложения
export function init(dispatch) {

  // плагин pouchdb-authentication подключаем асинхронно
  return import('pouchdb-authentication')

    // читаем скрипт инициализации метаданных, полученный в результате выполнения meta:prebuild
    .then(() => import('./init'))
    .then((meta_init) => {

    // выполняем скрипт инициализации метаданных
    meta_init($p);

    // сообщяем адаптерам пути, суффиксы и префиксы
    const {wsql, job_prm, adapters} = $p;
    adapters.pouch.init(wsql, job_prm);

    // читаем скрипты модификаторов DataObj`s и DataManager`s
    return import('./modifiers');
  })
    .then((modifiers) => {

      // выполняем модификаторы
      modifiers.default($p);

      // информируем хранилище о готовности MetaEngine
      dispatch(metaActions.META_LOADED($p));

      // читаем локальные данные в ОЗУ
      return $p.adapters.pouch.load_data();
    })
    .catch($p && $p.record_log);
}

// экспортируем $p и PouchDB глобально
global.$p = $p;

export default $p;
