/**
 * ### При установке параметров сеанса
 * Процедура устанавливает параметры работы программы при старте веб-приложения
 *
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 */
export default function settings(prm) {

  Object.assign(prm, {

    // разделитель для localStorage
    local_storage_prefix: "hw_",

    // гостевые пользователи для демо-режима
    guests: [{
	    username: "Гость",
	    password: "hQI7OhIGlVeOWi8="
    }],

    // если понадобится обратиться к 1С, будем использовать irest
    irest_enabled: true,

    // расположение rest-сервиса 1c по умолчанию
    rest_path: "",

    // расположение couchdb
    //couch_path: "/couchdb/hw_",
    couch_path: "http://localhost:5984/hw_",

    pouch_filter: {
      doc: "auth/by_partner",
      meta: "auth/meta"
    },

    // по умолчанию, обращаемся к зоне 0
    zone: 0,

    // объявляем номер демо-зоны
    zone_demo: 1,

    // размер вложений
    attachment_max_size: 10000000,

    // разрешаем сохранение пароля
    enable_save_pwd: true

  })

}
