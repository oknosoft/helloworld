export default {
  // разделитель для localStorage
  local_storage_prefix: "hw_",

  // гостевые пользователи для демо-режима
  guests: [{
    username: "Гость",
    password: "hQI7OhIGlVeOWi8="
  }],

  // если понадобится обратиться к 1C, будем использовать irest
  irest_enabled: true,

  // расположение rest-сервиса 1C по умолчанию
  rest_path: "",

  // расположение couchdb
  couch_path: "http://localhost:5984",

  pouch_filter: {
    meta: "auth/meta"
  },

  // по умолчанию, обращаемся к зоне 0
  zone: 0,

  // объявляем номер демо-зоны
  zone_demo: 0,

  // размер вложений
  attachment_max_size: 10000000,

  // разрешаем сохранение пароля
  enable_save_pwd: true
}