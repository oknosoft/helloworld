/**
 * ### При установке параметров сеанса
 * Процедура устанавливает параметры работы программы при старте веб-приложения
 *
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 */
module.exports = function settings(prm) {

  if(!prm){
    prm = {};
  };

  return Object.assign(prm, {

    // разделитель для localStorage
    local_storage_prefix: 'hw_',

    // гостевые пользователи для демо-режима
    guests: [{
      username: "Гость",
      password: "hQI7OhIGlVeOWi8="
    }],

    // расположение couchdb для сайта (редирект настроен в nginx)
    couch_path: "/couchdb/hw_",

    // расположение couchdb для nodejs (компиляция метаданных)
    couch_local: "http://cou200:5984/hw_",

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
