# helloworld
Шаблон пустого проекта на metadata.js
По мотивам http://infostart.ru/public/540168/ для [v2](https://github.com/oknosoft/metadata.js/tree/develop/packages)

### Назначение и возможности
- Ввод и редактирование докумнтов поступления - выбытия - перемещения денег
- Формирование отчета о движении денег
- Автономная работа при отсутствии доступа к Интернет
- Фоновая синхронизация с ИБ 1С

### Демо онлайн
Живое демо доступно по ссылке https://light.oknosoft.ru/helloworld/v2/

### Использованы следующие библиотеки и инструменты:
#### Серверная часть
- [CouchDB](http://couchdb.apache.org/), NoSQL база данных с поддержкой master-master репликации
- [Nginx](http://nginx.org/ru/), высокопроизводительный HTTP-сервер
- [NodeJS](https://nodejs.org/en/), JavaScript runtime built on Chrome's V8 JavaScript engine

#### Управление данными в памяти браузера
- [Metadata-core](https://github.com/oknosoft/metadata.js/tree/develop/packages/metadata-core), движок ссылочной типизации для браузера и Node.js
- [PouchDB](https://pouchdb.com/), клиентская NoSQL база данных с поддержкой автономной работы и репликации с CouchDB
- [AlaSQL](https://github.com/agershun/alasql), SQL-интерфейс к массивам javascript в памяти браузера и Node.js
- [Aes](http://www.movable-type.co.uk/scripts/aes.html), библиотека шифрования/дешифрования строк
- [Redux](https://github.com/reactjs/redux), диспетчер состояния веб-приложения
- [Xlsx](https://github.com/SheetJS/js-xlsx), библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS

#### UI библиотеки и компоненты интерфейса
- [Material-ui](http://www.material-ui.com/), компоненты React UI в стиле Google's material design
- [React virtualized](https://github.com/bvaughn/react-virtualized), компоненты React для динамических списков
- [React data grid](https://github.com/adazzle/react-data-grid), React компонент табличной части
- [Filesaver.js](https://github.com/eligrey/FileSaver.js), HTML5 реализация метода saveAs
- [Moment.js](http://momentjs.com/), библиотека форматирования интервалов и дат
- [Rubles.js](http://meritt.github.io/rubles/), библиотека форматирования чисел - сумма прописью


#### Конфигурация приложения
1. Подготовка данных и экспорт их в couchdb ((подробное описание)[http://infostart.ru/public/540168/]).

2. Генерация менеджеров объектов по метаданным 1C. В результате будет получен init.js.
Для этого необходимо задать url couchdb и префик баз данных в файле `config/metadata.config.js`.

3. Сконфигурировать приложение, путем модификации файла `config/app.settings.js`.

## Лицензия
[MIT](LICENSE)

Данная лицензия распространяется на все содержимое репозитория, но не заменеют существующие лицензии для продуктов, используемых библиотекой metadata.js

(c) 2014-2017, компания Окнософт (info@oknosoft.ru)
