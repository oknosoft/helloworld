/**
 * ### При установке параметров сеанса
 * Процедура устанавливает параметры работы программы при старте веб-приложения
 *
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 */
module.exports = function settings(prm) {

  if(!prm) {
    prm = {};
  };
  
  var lsprefix = 'hw_';
  var couch_path = 'http://cou221:5984/' + lsprefix;

  return Object.assign(prm, {

    // разделитель для localStorage
    local_storage_prefix: lsprefix,

    // гостевые пользователи для демо-режима
    guests: [{
      username: 'Гость',
      password: 'hQI7OhIGlVeOWi8='
    }],

    // расположение couchdb для сайта (редирект настроен в nginx)
    // если couchdb выполняется на том же сервере, что и nginx, можно указать "//localhost:5984/",
    couch_path: "/couchdb/" + lsprefix,

    // расположение couchdb для nodejs
    couch_local: process.env.COUCH_LOCAL || couch_path,

    // если указать режим couch_direct здесь (не важно, true или false),
    // будет использовано это значение, а не константа из localStorage
    //couch_direct: true,

    // фильтр для репликации с CouchDB не используем
    pouch_filter: {
      meta: 'auth/meta',
    },

    // по умолчанию, обращаемся к зоне 1
    zone: 1,

    // объявляем номер демо-зоны
    zone_demo: 1,

    // если use_meta === false, не используем базу meta в рантайме
    // см.: https://github.com/oknosoft/metadata.js/issues/255
    use_meta: false,

    // размер вложений 2Mb
    attachment_max_size: 2000000,

    // разрешаем сохранение пароля
    enable_save_pwd: true,

    // геокодер не используем
    use_ip_geo: false,

    // карты google не используем
    use_google_geo: '',

  });

};
