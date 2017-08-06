/* eslint-disable */
module.exports = function meta($p) {

$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR); CREATE TABLE IF NOT EXISTS `doc_cash_moving` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `sender` CHAR, `recipient` CHAR, `doc_amount` FLOAT, `cash_flow_article` CHAR, `responsible` CHAR, `note` CHAR); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `async` BOOLEAN, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_cash_flow_articles` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `definition` CHAR, `sorting_field` INT, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `invalid` BOOLEAN, `department` CHAR, `individual_person` CHAR, `note` CHAR, `ancillary` BOOLEAN, `Подготовлен` BOOLEAN, `user_ib_uid` CHAR, `user_fresh_uid` CHAR, `СвойстваПользователяИБ` CHAR, `predefined_name` CHAR, `ts_extra_fields` JSON, `ts_contact_information` JSON); CREATE TABLE IF NOT EXISTS `cat_nom` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `article` CHAR, `nom_kind` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `КоличествоРеквизитов` CHAR, `КоличествоСведений` CHAR, `used` BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_extra_properties` JSON); CREATE TABLE IF NOT EXISTS `cat_cashboxes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `funds_currency` CHAR, `predefined_name` CHAR, `ts_contact_information` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ПорядокКоллекции` INT, `moniker` CHAR, `synonym` CHAR, `full_moniker` CHAR, `ПолныйСиноним` CHAR, `БезДанных` BOOLEAN, `ЗначениеПустойСсылки` CHAR, `КлючОбъектаМетаданных` CHAR, `НоваяСсылка` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values_hierarchy` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `full_name` CHAR, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `full_name` CHAR, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `nom_type` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_information_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `АдресТолькоРоссийский` BOOLEAN, `ВидПоляДругое` CHAR, `ВключатьСтрануВПредставление` BOOLEAN, `ЗапретитьРедактированиеПользователем` BOOLEAN, `used` BOOLEAN, `МожноИзменятьСпособРедактирования` BOOLEAN, `mandatory_fields` BOOLEAN, `ПроверятьКорректность` BOOLEAN, `ПроверятьПоФИАС` BOOLEAN, `РазрешитьВводНесколькихЗначений` BOOLEAN, `РедактированиеТолькоВДиалоге` BOOLEAN, `sorting_field` INT, `СкрыватьНеактуальныеАдреса` BOOLEAN, `ТелефонCДобавочнымНомером` BOOLEAN, `type` CHAR, `УдалитьМногострочноеПоле` BOOLEAN, `УказыватьОКТМО` BOOLEAN, `ХранитьИсториюИзменений` BOOLEAN, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_currencies` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ЗагружаетсяИзИнтернета` BOOLEAN, `name_full` CHAR, `extra_charge` FLOAT, `main_currency` CHAR, `parameters_russian_recipe` CHAR, `course_calc_formula` CHAR, `course_installation_method` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_scheme_settings` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `obj` CHAR, `user` CHAR, `order` INT, `query` CHAR, `date_from` Date, `date_till` Date, `formula` CHAR, `tag` CHAR, `ts_fields` JSON, `ts_sorting` JSON, `ts_dimensions` JSON, `ts_resources` JSON, `ts_selection` JSON, `ts_params` JSON, `ts_composition` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_fields` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_meta_objs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `type` CHAR, `ts_elmnts` JSON); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `sorting_field` INT, `extra_values_owner` CHAR, `ДополнительныеЗначенияИспользуются` BOOLEAN, `ДополнительныеЗначенияСВесом` BOOLEAN, `available` BOOLEAN, `shown` BOOLEAN, `ЗаголовокФормыВыбораЗначения` CHAR, `ЗаголовокФормыЗначения` CHAR, `list` INT, `note` CHAR, `МногострочноеПолеВвода` INT, `destination` CHAR, `tooltip` CHAR, `УдалитьСклоненияПредмета` CHAR, `ФорматСвойства` CHAR, `is_extra_property` BOOLEAN, `mandatory` BOOLEAN, `ВключатьВНаименование` BOOLEAN, `caption` CHAR, `ВключатьВОписание` BOOLEAN, `predefined_name` CHAR, `type` JSON, `ts_extra_fields_dependencies` JSON); CREATE TABLE IF NOT EXISTS `enm_nom_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contact_information_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_reduce_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_caching_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_unload_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_obj_delivery_states` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_data_field_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_label_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_comparison_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sort_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); ', []);

$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"}],"sort_directions":[{"order":0,"name":"asc","synonym":"По возрастанию"},{"order":1,"name":"desc","synonym":"По убыванию"}],"comparison_types":[{"order":0,"name":"gt","synonym":"Больше"},{"order":1,"name":"gte","synonym":"Больше или равно"},{"order":2,"name":"lt","synonym":"Меньше"},{"order":3,"name":"lte","synonym":"Меньше или равно "},{"order":4,"name":"eq","synonym":"Равно"},{"order":5,"name":"ne","synonym":"Не равно"},{"order":6,"name":"in","synonym":"В списке"},{"order":7,"name":"nin","synonym":"Не в списке"},{"order":8,"name":"lke","synonym":"Содержит "},{"order":9,"name":"nlk","synonym":"Не содержит"}],"label_positions":[{"order":0,"name":"auto","synonym":"Авто"},{"order":1,"name":"hide","synonym":"Скрыть"},{"order":2,"name":"left","synonym":"Лево"},{"order":3,"name":"right","synonym":"Право"},{"order":4,"name":"top","synonym":"Верх"},{"order":5,"name":"bottom","synonym":"Низ"}],"data_field_kinds":[{"order":0,"name":"input","synonym":"Поле ввода"},{"order":1,"name":"label","synonym":"Поле надписи"},{"order":2,"name":"toggle","synonym":"Поле переключателя"},{"order":3,"name":"image","synonym":"Поле картинки"},{"order":4,"name":"text","synonym":"Редактор многострочного текста"}],"obj_delivery_states":[{"order":0,"name":"Черновик","synonym":"Черновик"},{"order":1,"name":"Отправлен","synonym":"Отправлен"},{"order":2,"name":"Подтвержден","synonym":"Подтвержден"},{"order":3,"name":"Отклонен","synonym":"Отклонен"},{"order":4,"name":"Отозван","synonym":"Отозван"},{"order":5,"name":"Архив","synonym":"Перенесён в архив"},{"order":6,"name":"Шаблон","synonym":"Шаблон"}],"unload_type":[{"order":0,"name":"unload","synonym":"unload"},{"order":1,"name":"not_upload","synonym":"not_upload"},{"order":2,"name":"mixin","synonym":"mixin"}],"caching_type":[{"order":0,"name":"ram","synonym":"ram"},{"order":1,"name":"doc","synonym":"doc"},{"order":2,"name":"doc_remote","synonym":"doc_remote"},{"order":3,"name":"doc_ram","synonym":"doc_ram"},{"order":4,"name":"remote","synonym":"remote"},{"order":5,"name":"user","synonym":"user"},{"order":6,"name":"meta","synonym":"meta"},{"order":7,"name":"e1cib","synonym":"e1cib"},{"order":8,"name":"pgsql","synonym":"pgsql"}],"reduce_type":[{"order":0,"name":"record","synonym":"Запись"},{"order":1,"name":"array","synonym":"Массив"},{"order":2,"name":"slice_last","synonym":"Срез последних"},{"order":3,"name":"balances","synonym":"Остатки"},{"order":4,"name":"day","synonym":"Дневные обороты"},{"order":5,"name":"month","synonym":"Месячные обороты"}],"contact_information_types":[{"order":0,"name":"Адрес","synonym":"Адрес"},{"order":1,"name":"Телефон","synonym":"Телефон"},{"order":2,"name":"АдресЭлектроннойПочты","synonym":"Адрес электронной почты"},{"order":3,"name":"ВебСтраница","synonym":"Веб страница"},{"order":4,"name":"Факс","synonym":"Факс"},{"order":5,"name":"Другое","synonym":"Другое"},{"order":6,"name":"Skype","synonym":"Skype"}],"nom_types":[{"order":0,"name":"Товар","synonym":"Товар, материал"},{"order":1,"name":"Услуга","synonym":"Услуга"},{"order":2,"name":"Работа","synonym":"Работа, техоперация"}]},"ireg":{"log":{"name":"log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}}}}},"cat":{"meta_objs":{"fields":{}},"meta_fields":{"fields":{}},"scheme_settings":{"name":"scheme_settings","synonym":"Настройки отчетов и списков","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"obj":{"synonym":"Объект","tooltip":"Имя класса метаданных","type":{"types":["string"],"str_len":250}},"user":{"synonym":"Пользователь","tooltip":"Если пусто - публичная настройка","type":{"types":["string"],"str_len":50}},"order":{"synonym":"Порядок","tooltip":"Порядок варианта","type":{"types":["number"],"digits":6,"fraction_figits":0}},"query":{"synonym":"Запрос","tooltip":"Индекс CouchDB или текст SQL","type":{"types":["string"],"str_len":0}},"date_from":{"synonym":"Начало периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"date_till":{"synonym":"Конец периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"formula":{"synonym":"Формула","tooltip":"Формула инициализации","type":{"types":["cat.formulas"],"is_ref":true}},"tag":{"synonym":"Дополнительные свойства","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"fields":{"name":"fields","synonym":"Доступные поля","tooltip":"Состав, порядок и ширина колонок","fields":{"parent":{"synonym":"Родитель","tooltip":"Для плоского списка, родитель пустой","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"width":{"synonym":"Ширина","tooltip":"","type":{"types":["string"],"str_len":6}},"caption":{"synonym":"Заголовок","tooltip":"","type":{"types":["string"],"str_len":100}},"tooltip":{"synonym":"Подсказка","tooltip":"","type":{"types":["string"],"str_len":100}},"ctrl_type":{"synonym":"Тип","tooltip":"Тип элемента управления","type":{"types":["string"],"str_len":100}},"formatter":{"synonym":"Формат","tooltip":"Функция форматирования","type":{"types":["cat.formulas"],"is_ref":true}},"editor":{"synonym":"Редактор","tooltip":"Компонент редактирования","type":{"types":["cat.formulas"],"is_ref":true}}}},"sorting":{"name":"sorting","synonym":"Поля сортировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"direction":{"synonym":"Направление","tooltip":"","type":{"types":["enm.sort_directions"],"is_ref":true}}}},"dimensions":{"name":"dimensions","synonym":"Поля группировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}}}},"resources":{"name":"resources","synonym":"Ресурсы","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"formula":{"synonym":"Формула","tooltip":"По умолчанию - сумма","type":{"types":["cat.formulas"],"is_ref":true}}}},"selection":{"name":"selection","synonym":"Отбор","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"left_value":{"synonym":"Левое значение","tooltip":"","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"","type":{"types":["string"],"str_len":100}}}},"params":{"name":"params","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","tooltip":"","type":{"types":["string"],"str_len":100}},"value_type":{"synonym":"Тип","tooltip":"Тип значения","type":{"types":["string"],"str_len":100}},"value":{"synonym":"Значение","tooltip":"Может иметь примитивный или ссылочный тип или массив","type":{"types":["string","number"],"str_len":0,"digits":15,"fraction_figits":3}}}},"composition":{"name":"composition","synonym":"Структура","tooltip":"","fields":{"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"elm":{"synonym":"Элемент","tooltip":"Элемент структуры отчета","type":{"types":["string"],"str_len":50}},"kind":{"synonym":"Вид раздела отчета","tooltip":"список, таблица, группировка строк, группировка колонок","type":{"types":["string"],"str_len":50}},"definition":{"synonym":"Описание","tooltip":"Описание раздела структуры","type":{"types":["string"],"str_len":50}}}}},"cachable":"doc"},"currencies":{"name":"Валюты","splitted":false,"synonym":"Валюты","illustration":"Валюты, используемые при расчетах","obj_presentation":"Валюта","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"ЗагружаетсяИзИнтернета":{"synonym":"Загружается из Интернета","multiline_mode":false,"tooltip":"Курс валюты загружается из сети Интернет","type":{"types":["boolean"]}},"name_full":{"synonym":"Наименование валюты","multiline_mode":false,"tooltip":"Полное наименование валюты","mandatory":true,"type":{"types":["string"],"str_len":50}},"extra_charge":{"synonym":"Наценка","multiline_mode":false,"tooltip":"Коэффициент, который применяется к курсу основной валюты для вычисления курса текущей валюты.","type":{"types":["number"],"digits":10,"fraction_figits":2}},"main_currency":{"synonym":"Основная валюта","multiline_mode":false,"tooltip":"Валюта, на основании курса которой рассчитывается курс текущей валюты","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"parameters_russian_recipe":{"synonym":"Параметры прописи на русском","multiline_mode":false,"tooltip":"Параметры прописи валюты на русском языке","type":{"types":["string"],"str_len":200}},"course_calc_formula":{"synonym":"Формула расчета курса","multiline_mode":false,"tooltip":"Курсы других валют в формуле обозначаются их символьными кодами. Пример:\n(0,55 * USD + 0,45 * EUR) / 2","mandatory":true,"type":{"types":["string"],"str_len":100}},"course_installation_method":{"synonym":"Способ установки курса","multiline_mode":false,"tooltip":"Определяет используемый способ установки курса валюты.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.course_installation_methods"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":["ref","_deleted","id","name as presentation","name_full"],"cols":[{"id":"id","width":"120","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Обозначение"},{"id":"name_full","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{"Дополнительно":["main_currency","extra_charge"]," ":["id","name","name_full","parameters_russian_recipe"]},"tabular_sections":{},"tabular_sections_order":[]}}},"contact_information_kinds":{"name":"ВидыКонтактнойИнформации","splitted":false,"synonym":"Виды контактной информации","illustration":"","obj_presentation":"Вид контактной информации","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"АдресТолькоРоссийский":{"synonym":"Адрес только российский","multiline_mode":false,"tooltip":"Допустимы только российские адреса","type":{"types":["boolean"]}},"ВидПоляДругое":{"synonym":"Вид поля другое","multiline_mode":false,"tooltip":"Внешний вид поля другое на форме","type":{"types":["string"],"str_len":20}},"ВключатьСтрануВПредставление":{"synonym":"Включать страну в представление","multiline_mode":false,"tooltip":"В представление будет включена страна адреса.","type":{"types":["boolean"]}},"ЗапретитьРедактированиеПользователем":{"synonym":"Запретить редактирование пользователем","multiline_mode":false,"tooltip":"Запретить редактирование пользователем вида пользователем","type":{"types":["boolean"]}},"used":{"synonym":"Используется","multiline_mode":false,"tooltip":"Вид контактной информации используется","type":{"types":["boolean"]}},"МожноИзменятьСпособРедактирования":{"synonym":"Можно изменять способ редактирования","multiline_mode":false,"tooltip":"Разрешено изменять способ редактирования","type":{"types":["boolean"]}},"mandatory_fields":{"synonym":"Обязательное заполнение","multiline_mode":false,"tooltip":"Вид контактной информации обязателен к заполнению","type":{"types":["boolean"]}},"ПроверятьКорректность":{"synonym":"Запрещать ввод некорректного адреса","multiline_mode":false,"tooltip":"Проверять корректность ввода контактной информации","type":{"types":["boolean"]}},"ПроверятьПоФИАС":{"synonym":"Проверять по ФИАС","multiline_mode":false,"tooltip":"Проверять корректность ввода адресов по классификатору ФИАС","type":{"types":["boolean"]}},"РазрешитьВводНесколькихЗначений":{"synonym":"Разрешить ввод нескольких значений","multiline_mode":false,"tooltip":"Возможность добавления более одной записи этого вида","type":{"types":["boolean"]}},"РедактированиеТолькоВДиалоге":{"synonym":"Редактирование только в диалоге","multiline_mode":false,"tooltip":"Редактировать контактную информацию только в диалоге (ручной ввод информации невозможен)","type":{"types":["boolean"]}},"sorting_field":{"synonym":"Реквизит доп упорядочивания","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":5,"fraction_figits":0}},"СкрыватьНеактуальныеАдреса":{"synonym":"Скрывать неактуальные адреса","multiline_mode":false,"tooltip":"Скрывать неактуальные адреса при выборе из классификатора","type":{"types":["boolean"]}},"ТелефонCДобавочнымНомером":{"synonym":"Телефон c добавочным номером","multiline_mode":false,"tooltip":"Телефон может содержать добавочный номер","type":{"types":["boolean"]}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (адрес, телефон и т.д.)","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.contact_information_types"],"is_ref":true}},"УдалитьМногострочноеПоле":{"synonym":"(не используется) Многострочное поле","multiline_mode":false,"tooltip":"Выводит многострочное поле ","type":{"types":["boolean"]}},"УказыватьОКТМО":{"synonym":"Указывать ОКТМО","multiline_mode":false,"tooltip":"Возможность ввода ОКТМО в адресе","type":{"types":["boolean"]}},"ХранитьИсториюИзменений":{"synonym":"Хранить историю изменений","multiline_mode":false,"tooltip":"Сохранять историю изменения контактной информации","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа вида контактной информации","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"nom_kinds":{"name":"ВидыНоменклатуры","splitted":false,"synonym":"Виды номенклатуры","illustration":"","obj_presentation":"Вид номенклатуры","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"nom_type":{"synonym":"Тип номенклатуры","multiline_mode":false,"tooltip":"Указывается тип, к которому относится номенклатура данного вида.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.nom_types"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":false,"synonym":"Дополнительные значения","illustration":"","obj_presentation":"Дополнительное значение","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction_figits":2}},"full_name":{"synonym":"Полное наименование","multiline_mode":true,"tooltip":"Подробное описание значения дополнительного реквизита","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа дополнительных значений свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"property_values_hierarchy":{"name":"ЗначенияСвойствОбъектовИерархия","splitted":false,"synonym":"Дополнительные значения (иерархия)","illustration":"","obj_presentation":"Дополнительное значение (иерархия)","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction_figits":2}},"full_name":{"synonym":"Полное наименование","multiline_mode":true,"tooltip":"Подробное описание значения дополнительного реквизита","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Вышестоящее дополнительное значение свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values_hierarchy"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданных","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"ПорядокКоллекции":{"synonym":"Порядок коллекции","multiline_mode":false,"tooltip":"Порядок коллекции объекта метаданных,\nиспользуемый для сортировки в отчетах,\nнапример, коллекция \"Справочники\"\nперед коллекцией \"Документы\"","type":{"types":["number"],"digits":2,"fraction_figits":0}},"moniker":{"synonym":"Имя","multiline_mode":false,"tooltip":"Имя объекта метаданных","type":{"types":["string"],"str_len":255}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним объекта метаданных,\nнапример, \"Объекты адресации задач\"","type":{"types":["string"],"str_len":255}},"full_moniker":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных","type":{"types":["string"],"str_len":430}},"ПолныйСиноним":{"synonym":"Полный синоним","multiline_mode":false,"tooltip":"Полный синоним объекта метаданных,\nнапример, \"Планы видов характеристик. Объекты адресации задач\"","type":{"types":["string"],"str_len":430}},"БезДанных":{"synonym":"Без данных","multiline_mode":false,"tooltip":"Объект метаданных не имеет таблиц данных","type":{"types":["boolean"]}},"ЗначениеПустойСсылки":{"synonym":"Значение пустой ссылки","multiline_mode":false,"tooltip":"Для ссылочных типов объектов метаданных \nсодержит пустую ссылку своего типа,\nдля остальных - Неопределено\n(в форме показано представление\nтипа значения пустой ссылки)","choice_groups_elm":"elm","type":{"types":["cat.ПапкиЭлектронныхПисем","doc.cash_moving","cch.predefined_elmnts","cat.currencies","cat.property_values_hierarchy","cat.formulas","cat.property_values","cat.cash_flow_articles","cat.destinations","cch.properties","cat.nom_kinds","cat.users","cat.cashboxes","cat.nom","cat.meta_ids","cat.contact_information_kinds"],"is_ref":true}},"КлючОбъектаМетаданных":{"synonym":"Ключ объекта метаданных","multiline_mode":false,"tooltip":"Хранилище ключа по которому определяется объект метаданных без использования полного имени","type":{"types":["Хранилище значения"]}},"НоваяСсылка":{"synonym":"Новая ссылка","multiline_mode":false,"tooltip":"Используется при обработке дублей идентификаторов подчиненного узла распределенной информационной базы.","choice_groups_elm":"elm","type":{"types":["cat.meta_ids"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа объектов","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"cashboxes":{"name":"Кассы","splitted":false,"synonym":"Кассы, подотчетники, контрагенты","illustration":"Список мест фактического хранения и движения наличных денежных средств.","obj_presentation":"Касса","list_presentation":"Кассы, подотчетники, контрагенты","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"funds_currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"Валюта учета денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"8fc6d5dc-55bb-11e6-82b8-d85d4c80ec2a"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0},"hide":true},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100},"hide":true},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"АдресЭП":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100},"hide":true},"server_domain_name":{"synonym":"Доменное имя сервера","multiline_mode":false,"tooltip":"Доменное имя сервера электронной почты или веб-страницы","type":{"types":["string"],"str_len":100},"hide":true},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20},"hide":true},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20},"hide":true},"ВидДляСписка":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"ДействуетС":{"synonym":"Действует С","multiline_mode":false,"tooltip":"Дата актуальности контактная информация","type":{"types":["date"],"date_part":"date"}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}}},"cachable":"ram"},"destinations":{"name":"НаборыДополнительныхРеквизитовИСведений","splitted":false,"synonym":"Наборы дополнительных реквизитов и сведений","illustration":"","obj_presentation":"Набор дополнительных реквизитов и сведений","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"КоличествоРеквизитов":{"synonym":"Количество реквизитов","multiline_mode":false,"tooltip":"Количество реквизитов в наборе не помеченных на удаление.","type":{"types":["string"],"str_len":5}},"КоличествоСведений":{"synonym":"Количество сведений","multiline_mode":false,"tooltip":"Количество сведений в наборе не помеченных на удаление.","type":{"types":["string"],"str_len":5}},"used":{"synonym":"Используется","multiline_mode":false,"tooltip":"Набор свойств отображается в форме списка","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа, к которой относится набор.","type":{"types":["cat.destinations"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Дополнительный реквизит","multiline_mode":false,"tooltip":"Дополнительный реквизит этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного реквизита из набора,\nчтобы можно было вернуть связь с уникальным дополнительным реквизитом.","type":{"types":["boolean"]}}}},"extra_properties":{"name":"ДополнительныеСведения","synonym":"Дополнительные сведения","tooltip":"","fields":{"property":{"synonym":"Дополнительное сведение","multiline_mode":false,"tooltip":"Дополнительное сведение этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного сведения из набора,\nчтобы можно было вернуть связь с уникальным дополнительным сведением.","type":{"types":["boolean"]}}}}},"cachable":"ram","hide":true},"nom":{"name":"Номенклатура","splitted":false,"synonym":"Номенклатура","illustration":"Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг","obj_presentation":"Позиция номенклатуры","list_presentation":"","input_by_string":["name","id","article"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"Артикул номенклатуры.","type":{"types":["string"],"str_len":25}},"nom_kind":{"synonym":"Вид номенклатуры","multiline_mode":false,"tooltip":"Указывается вид, к которому следует отнести данную позицию номенклатуры.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_kinds"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа, в которую входит данная позиция номенклатуры.","type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"remote","hide":true},"users":{"name":"Пользователи","splitted":false,"synonym":"Пользователи","illustration":"","obj_presentation":"Пользователь","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"invalid":{"synonym":"Недействителен","multiline_mode":false,"tooltip":"Пользователь больше не работает в программе, но сведения о нем сохранены.\nНедействительные пользователи скрываются из всех списков\nпри выборе или подборе в документах и других местах программы.","type":{"types":["boolean"]}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"Подразделение, в котором работает пользователь","type":{"types":["string"],"str_len":10}},"individual_person":{"synonym":"Физическое лицо","multiline_mode":false,"tooltip":"Физическое лицо, с которым связан пользователь","type":{"types":["string"],"str_len":10}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":0}},"ancillary":{"synonym":"Служебный","multiline_mode":false,"tooltip":"Неразделенный или разделенный служебный пользователь, права к которому устанавливаются непосредственно и программно.","type":{"types":["boolean"]}},"Подготовлен":{"synonym":"Подготовлен","multiline_mode":false,"tooltip":"Пользователь подготовлен ответственным за список пользователей.","type":{"types":["boolean"]}},"user_ib_uid":{"synonym":"Идентификатор пользователя ИБ","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя информационной базы, с которым сопоставлен этот элемент справочника.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"user_fresh_uid":{"synonym":"Идентификатор пользователя сервиса","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя сервиса, с которым сопоставлен этот элемент справочника.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"СвойстваПользователяИБ":{"synonym":"Свойства пользователя ИБ","multiline_mode":false,"tooltip":"Служебное хранилище некоторых свойств пользователя ИБ","type":{"types":["Хранилище значения"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"2d084a4c-55b8-11e6-82b8-d85d4c80ec2a"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0}},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"АдресЭП":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"server_domain_name":{"synonym":"Доменное имя сервера","multiline_mode":false,"tooltip":"Доменное имя сервера электронной почты или веб-страницы","type":{"types":["string"],"str_len":100}},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20}},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20}},"ВидДляСписка":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}}}},"cachable":"ram","hide":true,"form":{"obj":{"head":{"Дополнительно":["ancillary","invalid",{"id":"user_ib_uid","path":"o.user_ib_uid","synonym":"Идентификатор пользователя ИБ","type":"ro"},{"id":"user_fresh_uid","path":"o.user_fresh_uid","synonym":"Идентификатор пользователя сервиса","type":"ro"},"note"]," ":["id","name"]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","splitted":false,"synonym":"Статьи движения денежных средств","illustration":"Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. ","obj_presentation":"Статья движения денежных средств","list_presentation":"Статьи движения денежных средств","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Рекомендации по выбору статьи движения денежных средств в документах","type":{"types":["string"],"str_len":1024}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Определяет порядок вывода вариантов анализа в мониторе целевых показателей при группировке по категориям целей.","type":{"types":["number"],"digits":5,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"В группе статей","multiline_mode":false,"tooltip":"Группа статей движения денежных средств","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"formulas":{"name":"Формулы","splitted":false,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации","obj_presentation":"Формула","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html шаблон отчета","type":{"types":["string"],"str_len":0}},"async":{"synonym":"Асинхронный режим","multiline_mode":false,"tooltip":"Создавать асинхронную функцию","type":{"types":["boolean"]}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":50}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["param"],"path":["params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["params","param"],"elm":0},"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}}}}},"cachable":"doc","hide":true}},"dp":{"scheme_settings":{"name":"scheme_settings","synonym":"Варианты настроек","fields":{"scheme":{"synonym":"Текущая настройка","tooltip":"Текущий вариант настроек","mandatory":true,"type":{"types":["cat.scheme_settings"],"is_ref":true}}}}},"doc":{"cash_moving":{"name":"ДвижениеДенег","splitted":false,"synonym":"Перемещение денег","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"sender":{"synonym":"Отправитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"recipient":{"synonym":"Получатель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья ДДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ.","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","sender","sender","recipient","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"sender","width":"180","type":"ro","align":"left","sort":"na","caption":"Оправитель"},{"id":"recipient","width":"180","type":"ro","align":"left","sort":"na","caption":"Получатель"},{"id":"doc_amount","width":"120","type":"ron","align":"right","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]}}}},"areg":{},"rep":{"cash_moving":{"name":"ДвижениеДенег","splitted":false,"synonym":"Движение денег","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"period_from":{"synonym":"Начало периода","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"period_till":{"synonym":"Конец периода","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}}},"tabular_sections":{"cashboxes":{"name":"Кассы","synonym":"Кассы","tooltip":"","fields":{"cashbox":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}}}},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","synonym":"Статьи ДДС","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья ДДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}}},"data":{"name":"Данные","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"cashbox":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"cash_flow_article":{"synonym":"Статья ДДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"initial_balance":{"synonym":"Начальный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"debit":{"synonym":"Приход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"credit":{"synonym":"Расход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"final_balance":{"synonym":"Конечный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}},"cachable":"ram"}},"cch":{"properties":{"name":"ДополнительныеРеквизитыИСведения","splitted":false,"synonym":"Дополнительные реквизиты и сведения","illustration":"","obj_presentation":"Дополнительный реквизит / сведение","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"sorting_field":{"synonym":"Реквизит доп упорядочивания","multiline_mode":false,"tooltip":"Используется для сортировки в списках свойств (служебный)","type":{"types":["number"],"digits":5,"fraction_figits":0}},"extra_values_owner":{"synonym":"Владелец дополнительных значений","multiline_mode":false,"tooltip":"Свойство-образец, с которым у этого свойства одинаковый список дополнительных значений","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"ДополнительныеЗначенияИспользуются":{"synonym":"Дополнительные значения используются","multiline_mode":false,"tooltip":"Тип значения включает дополнительные значения","type":{"types":["boolean"]}},"ДополнительныеЗначенияСВесом":{"synonym":"Значения дополнительно характеризуются весовым коэффициентом","multiline_mode":false,"tooltip":"Для дополнительных значений можно указать весовой коэффициент","type":{"types":["boolean"]}},"available":{"synonym":"Доступен","multiline_mode":false,"tooltip":"Настройка доступности дополнительного реквизита","type":{"types":["boolean"]}},"shown":{"synonym":"Виден","multiline_mode":false,"tooltip":"Настройка видимости дополнительного реквизита","type":{"types":["boolean"]}},"ЗаголовокФормыВыбораЗначения":{"synonym":"Заголовок формы выбора значения","multiline_mode":false,"tooltip":"Используется в заголовке формы выбора дополнительного значения свойства","type":{"types":["string"],"str_len":150}},"ЗаголовокФормыЗначения":{"synonym":"Заголовок формы значения","multiline_mode":false,"tooltip":"Используется в заголовке формы дополнительного значения свойства","type":{"types":["string"],"str_len":150}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"Реквизит подсистемы интеграции metadata.js - реализует функциональность списка опций","type":{"types":["number"],"digits":1,"fraction_figits":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Поясняет назначение свойства","type":{"types":["string"],"str_len":0}},"МногострочноеПолеВвода":{"synonym":"Многострочное поле ввода","multiline_mode":false,"tooltip":"Число строк в многострочном поле ввода","type":{"types":["number"],"digits":2,"fraction_figits":0}},"destination":{"synonym":"Набор свойств","multiline_mode":false,"tooltip":"Набор свойств, которому принадлежит уникальное свойство. Если не задан, значит свойство общее.","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"tooltip":{"synonym":"Подсказка","multiline_mode":false,"tooltip":"Показывается пользователю при редактировании свойства в форме объекта","type":{"types":["string"],"str_len":0}},"УдалитьСклоненияПредмета":{"synonym":"(не используется) Склонения предмета","multiline_mode":false,"tooltip":"Ранее содержал заголовок формы значения и заголовок формы выбора значений","type":{"types":["string"],"str_len":0}},"ФорматСвойства":{"synonym":"Формат свойства","multiline_mode":false,"tooltip":"Хранит формат свойства для удобства представления","type":{"types":["string"],"str_len":0}},"is_extra_property":{"synonym":"Это дополнительное сведение","multiline_mode":false,"tooltip":"Свойство является дополнительным сведением, а не дополнительным реквизитом","type":{"types":["boolean"]}},"mandatory":{"synonym":"Заполнять обязательно","multiline_mode":false,"tooltip":"Настройка проверки заполненности дополнительного реквизита","type":{"types":["boolean"]}},"ВключатьВНаименование":{"synonym":"Включать в наименование","multiline_mode":false,"tooltip":"Добавлять значение параметра в наименование продукции","type":{"types":["boolean"]}},"caption":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Краткое представление свойства, которое\nвыводится в формах редактирования его значения","mandatory":true,"type":{"types":["string"],"str_len":75}},"ВключатьВОписание":{"synonym":"Включать в описание","multiline_mode":false,"tooltip":"Добавлять имя и значение параметра в строку описания продукции","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"type":{"synonym":"","multiline_mode":false,"tooltip":"Типы значения, которое можно ввести при заполнении свойства.","mandatory":true,"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}}},"tabular_sections":{"extra_fields_dependencies":{"name":"ЗависимостиДополнительныхРеквизитов","synonym":"Зависимости дополнительных реквизитов","tooltip":"","fields":{"ЗависимоеСвойство":{"synonym":"Зависимое свойство","multiline_mode":false,"tooltip":"Имя свойства дополнительного реквизита, для которого настроена зависимость.","type":{"types":["string"],"str_len":0}},"field":{"synonym":"Реквизит","multiline_mode":false,"tooltip":"Имя реквизита формы или ссылка на дополнительный реквизит, от которого зависит текущий дополнительный реквизит.","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":99}},"condition":{"synonym":"Условие","multiline_mode":false,"tooltip":"Вид зависимости. \"Равно\", \"Не равно\", \"Заполнено\" или \"Не заполнено\".","type":{"types":["string"],"str_len":20}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение реквизита в условии.","choice_groups_elm":"elm","type":{"types":["cat.ПапкиЭлектронныхПисем","enm.caching_type","doc.cash_moving","cch.predefined_elmnts","enm.reduce_type","cat.currencies","enm.contact_information_types","cat.property_values_hierarchy","cat.formulas","boolean","enm.unload_type","cat.property_values","cat.cash_flow_articles","cat.destinations","cch.properties","enm.nom_types","string","cat.nom_kinds","date","number","cat.users","cat.cashboxes","cat.nom","enm.obj_delivery_states","cat.meta_ids","cat.contact_information_kinds"],"is_ref":true,"str_len":50,"date_part":"date","digits":10,"fraction_figits":0}}}}},"cachable":"ram","hide":true},"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":false,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":["name","synonym"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента","mandatory":true,"type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}}}},"cachable":"doc","form":{"obj":{"head":{"Реквизиты":[{"id":"name","path":"o.name","synonym":"Наименование","type":"ro"},{"id":"synonym","path":"o.synonym","synonym":"Синоним","type":"ro"},"list","zone","value"]},"tabular_sections":{"elmnts":{"fields":["elm","value"],"headers":"Элемент,Значение","widths":"*,*","min_widths":"150,150","aligns":"","sortings":"na,na","types":"ref,ref"}}}}}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["Автор","Артикул","БазоваяЕдиницаИзмерения","Банк","БанкДляРасчетов","Банки","БанковскиеСчета","БанковскиеСчетаКонтрагентов","БанковскиеСчетаОрганизаций","БанковскийСчет","БизнесПроцесс","БИКБанка","БИКБанкаДляРасчетов","Булево","Валюта","ВалютаВзаиморасчетов","ВалютаДенежныхСредств","ВалютаДокумента","ВалютаЦены","Валюты","ВводПоСтроке","ВедениеВзаиморасчетов","ВедениеВзаиморасчетовПоДоговорам","ВедущаяЗадача","ВедущаяФормула","Ведущий","ВерсияДанных","Вес","Вид","ВидДоговора","Виден","ВидНоменклатуры","ВидОперации","ВидСчета","ВидыДоговоровКонтрагентов","ВидыКонтактнойИнформации","ВидыНоменклатуры","Владелец","ВладелецДополнительныхЗначений","Владельцы","ВремяИзменения","ВремяНачала","ВремяОкончания","ВремяСобытия","Всего","ВходящееИсходящееСобытие","ВыборГруппИЭлементов","Выполнена","Высота","Глубина","Город","ГородБанка","ГородБанкаДляРасчетов","Готовность","ГрафикиРаботников","ГрафикРаботы","ГруппыФинансовогоУчетаНоменклатуры","ДаНет","Данные","Дата","ДатаДоставки","ДатаИзменения","ДатаНачала","ДатаОкончания","ДатаРождения","ДатаСобытия","ДвижениеДенег","ДебетКредит","Действие","ДержатьРезервБезОплатыОграниченноеВремя","Длина","ДлинаКода","ДлинаНомера","ДниНедели","ДоговорКонтрагента","ДоговорыКонтрагентов","ДокументУдостоверяющийЛичность","Долгота","ДоменноеИмяСервера","ДополнительныеРеквизиты","ДополнительныеРеквизитыИСведения","ДополнительныеСведения","ДопустимаяСуммаЗадолженности","ДопустимоеЧислоДнейЗадолженности","Доступен","ЕдиницаИзмерения","ЕдиницаПоКлассификатору","ЕдиницаХраненияОстатков","ЕдиницыИзмерения","Завершен","Завершение","ЗависимостиДополнительныхРеквизитов","Заголовок","Заказ","ЗаказПокупателя","ЗаказПоставщику","Закрыт","Запасы","ЗаполнятьОбязательно","Запуск","Значение","ЗначениеЗаполнения","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","ЗначенияСвойствОбъектовИерархия","Идентификатор","ИдентификаторПользователяИБ","ИдентификаторПользователяСервиса","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","Имя","ИмяПредопределенныхДанных","Инд","Индекс","ИндивидуальныйПредприниматель","ИНН","ИнтеграцияКешСсылок","ИнтеграцияПраваПользователей","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипВыгрузки","ИнтеграцияТипКеширования","ИнтеграцияТипСвёртки","Исполнители","Исполнитель","Используется","Касса","Кассы","Категория","КлассификаторБанковРФ","КлассификаторЕдиницИзмерения","Код","КодАльфа2","КодАльфа3","КодИМНС","КодПоОКПО","Количество","Комментарий","КонецПериода","КонечныйОстаток","КонтактнаяИнформация","КонтактныеЛица","КонтактныеЛицаКонтрагентов","Контрагент","Контрагенты","КонтролироватьСуммуЗадолженности","КонтролироватьЧислоДнейЗадолженности","КорректировкаРегистров","КоррСчет","КоррСчетБанка","КоррСчетБанкаДляРасчетов","Коэффициент","КоэффициентПотерь","КПП","Кратность","КратностьВзаиморасчетов","Курс","КурсВзаиморасчетов","КурсыВалют","Марка","Масса","Материалы","МеждународноеСокращение","Менеджер","МестоРождения","МногострочныйРежим","Мощность","Набор","НаборСвойств","НаборыДополнительныхРеквизитовИСведений","Наименование","НаименованиеБанка","НаименованиеПолное","НаименованиеСокращенное","НалогообложениеНДС","Наценка","НачалоПериода","НачальныйОстаток","Недействителен","Номенклатура","НоменклатурнаяГруппа","Номер","НомерСтроки","НомерСчета","НомерТелефона","НомерТелефонаБезКодов","Область","Объект","ОбъектДоступа","ОбъектыДоступа","Объем","ОбязательноеЗаполнение","ОкруглятьВБольшуюСторону","ОкруглятьКоличество","Описание","Организации","Организация","ОсновнаяВалюта","ОсновнаяСтатьяДвиженияДенежныхСредств","ОсновноаяКасса","ОсновноеПредставлениеИмя","ОсновнойБанковскийСчет","ОсновнойДоговорКонтрагента","ОсновнойМенеджерПокупателя","ОсновнойПроект","Отбор","Ответственный","Отправитель","ОтражатьВБухгалтерскомУчете","ОтражатьВНалоговомУчете","Отступы","Параметр","Параметры","ПараметрыВыбора","ПараметрыОтбора","ПараметрыПрописиНаРусском","Период","Планирование","ПлатежноеПоручениеВходящее","ПлатежноеПоручениеИсходящее","ПлатежныйКалендарь","Плотность","Площадь","Поворачивать","ПоДоговоруВЦелом","Подразделение","Подразделения","Подсказка","Подчиненый","ПоЗаказам","Покупатель","Пол","ПолноеИмя","ПолноеНаименование","Получатель","ПолФизическихЛиц","Пользователи","ПометкаУдаления","ПорогОкругления","Порядок","ПорядокОкругления","Поставщик","ПоступлениеТоваровУслуг","ПоСчетам","ПоУмолчанию","Пояснение","Предоплата","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Принудительно","Приоритет","Приход","ПриходныйКассовыйОрдер","Проведен","Проект","Проекты","Процент","ПроцентАвтоматическихСкидок","ПроцентПредоплаты","ПроцентСкидкиНаценки","ПроцентСкидкиНаценкиВнутр","Прочее","Разделитель","Расход","РасходныйКассовыйОрдер","РасчетныйСчет","РасчетыСКонтрагентами","РасширенныйРежим","РасшифровкаПлатежа","РеализацияТоваровУслуг","Регион","Реквизит","РеквизитДопУпорядочивания","Реквизиты","Родитель","СвидетельствоДатаВыдачи","СвидетельствоКодОргана","СвидетельствоНаименованиеОргана","СвидетельствоСерияНомер","СВИФТБИК","Свойство","Связи","СвязиПараметровВыбора","СвязьПоТипу","Сделка","Себестоимость","Синоним","Скидка","СкидкиНаценки","Склад","Склады","СКомиссионером","СКомитентом","Скрыть","Сложный","Служебный","Событие","Содержание","Соответствие","Состояние","СостояниеТранспорта","Сотрудник","Сотрудники","Спецификации","Спецификация","Список","СПокупателем","СпособУстановкиКурса","СпособыУстановкиКурсаВалюты","СПоставщиком","СрокДействия","Ссылка","СтавкаНДС","СтавкиНДС","Старт","Стартован","СтатусМатериальныхЗатрат","СтатусыЗаказов","СтатьиДвиженияДенежныхСредств","СтатьиЗатрат","СтатьяДвиженияДенежныхСредств","СтатьяЗатрат","Стоимость","Страна","СтраныМира","СтраховойНомерПФР","Строка","СтруктурнаяЕдиница","Сумма","СуммаАвтоматическойСкидки","СуммаВзаиморасчетов","СуммаВключаетНДС","СуммаДокумента","СуммаНДС","СуммаСНаценкой","СуммаУпр","Суффикс","СчетУчета","ТаблицаРегистров","ТабличнаяЧасть","ТабличныеЧасти","ТекстКорреспондента","ТекстНазначения","ТекстоваяСтрока","Телефон","Телефоны","ТелефоныБанка","Тип","ТипДенежныхСредств","ТипНоменклатуры","ТипСчета","ТипЦен","ТипыДенежныхСредств","ТипыКонтактнойИнформации","ТипыНалогообложенияНДС","ТипыНоменклатуры","ТипыСобытий","ТипыСтруктурныхЕдиниц","ТипыСчетов","ТипыЦенНоменклатуры","Товары","Толщина","ТочкаМаршрута","ТранспортныеСредства","Управленческий","Условие","Услуги","УстановкаЦенНоменклатуры","УчитыватьНДС","ФизическиеЛица","ФизическоеЛицо","Финиш","Формула","ФормулаРасчетаКурса","ФормулаУсловия","Формулы","Характеристика","ХарактеристикаНоменклатуры","ХарактеристикиНоменклатуры","Цвет","Цвета","Цена","ЦенаВключаетНДС","ЦенаВнутр","ЦеноваяГруппа","ЦеновыеГруппы","ЦеныНоменклатуры","Число","ЧислоДнейРезерваБезОплаты","Шаблон","Шаг","Ширина","Широта","Штуки","Экземпляр","Элемент","Элементы","ЭтоГруппа","ЭтоДополнительноеСведение","ЭтоНабор","ЭтоУслуга","ЮрЛицо","ЮрФизЛицо","Ячейка","Ячейки"],"syns_js":["author","article","base_unit","bank","settlements_bank","banks","bank_accounts","partner_bank_accounts","organization_bank_accounts","bank_account","buisness_process","bank_bic","settlements_bank_bic","boolean","currency","settlements_currency","funds_currency","doc_currency","price_currency","currencies","input_by_string","mutual_settlements","mutual_contract_settlements","leading_task","leading_formula","master","data_version","heft","kind","contract_kind","shown","nom_kind","transactions_kind","account_kind","contract_kinds","contact_information_kinds","nom_kinds","owner","extra_values_owner","owners","change_time","begin_time","end_time","event_time","altogether","inbound_outbound","choice_groups_elm","completed","height","depth","city","bank_city","settlements_bank_city","readiness","workers_schedules","worker_schedule","nom_groups","yes_no","data","date","shipping_date","change_date","start_date","expiration_date","birth_date","event_date","cash_moving","debit_credit","action","check_days_without_pay","len","code_length","number_doc_len","week_days","contract","contracts","identification_document","longitude","server_domain_name","extra_fields","properties","extra_properties","allowable_debts_amount","allowable_debts_days","available","unit","qualifier_unit","storage_unit","nom_units","finished","completion","extra_fields_dependencies","caption","invoice","buyers_order","purchase_order","closed","inventories","mandatory","launch","value","fill_value","values","values_fields","address_fields","property_values","property_values_hierarchy","identifier","user_ib_uid","user_fresh_uid","meta_ids","hierarchical","group_hierarchy","moniker","predefined_name","icounter","ind","individual_entrepreneur","inn","integration_links_cache","users_acl","obj_delivery_states","unload_type","caching_type","reduce_type","executors","executor","used","cashbox","cashboxes","category","banks_qualifier","units","id","alpha2","alpha3","imns_code","okpo","quantity","note","period_till","final_balance","contact_information","contact_persons","contact_persons_partners","partner","partners","check_debts_amount","check_debts_days","registers_correction","correspondent_account","bank_correspondent_account","settlements_bank_correspondent_account","coefficient","loss_factor","kpp","multiplicity","settlements_multiplicity","course","settlements_course","currency_courses","brand","weight","materials","international_short","manager","birth_place","multiline_mode","performance","set","destination","destinations","name","bank_name","name_full","name_short","vat","extra_charge","period_from","initial_balance","invalid","nom","nom_group","number_doc","row","account_number","phone_number","phone_without_codes","area","obj","acl_obj","acl_objs","volume","mandatory_fields","rounding_in_a_big_way","rounding_quantity","definition","organizations","organization","main_currency","main_cash_flow_article","main_cashbox","main_presentation_name","main_bank_account","main_contract","buyer_main_manager","main_project","selection","responsible","sender","accounting_reflect","tax_accounting_reflect","offsets","param","params","choice_params","selection_params","parameters_russian_recipe","period","planning","debit_bank_order","credit_bank_order","calendar_payments","density","s","rotate","by_entire_contract","department","divisions","tooltip","has_owners","by_orders","is_buyer","sex","full_moniker","full_name","recipient","gender","users","_deleted","rounding_threshold","sorting","rounding_order","is_supplier","purchase","by_invoices","by_default","illustration","prepayment","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","forcibly","priority","debit","debit_cash_order","posted","project","projects","rate","discount_percent_automatic","prepayment_percent","discount_percent","discount_percent_internal","others","delimiter","credit","credit_cash_order","current_account","invoice_payments","extended_mode","payment_details","selling","region","field","sorting_field","fields","parent","certificate_date_issue","certificate_authority_code","certificate_authority_name","certificate_series_number","swift","property","links","choice_links","choice_type","trans","first_cost","synonym","discount","charges_discounts","warehouse","stores","with_commission_agent","with_committent","hide","difficult","ancillary","event","content","conformity","state","obj_delivery_state","employee","staff","specifications","specification","list","with_buyer","course_installation_method","course_installation_methods","with_supplier","validity","ref","vat_rate","vat_rates","start","started","costs_material_feed","invoice_conditions","cash_flow_articles","cost_items","cash_flow_article","cost_item","cost","country","countries","pfr_number","string","organizational_unit","amount","discount_amount_automatic","amount_mutual","vat_included","doc_amount","vat_amount","amount_marged","amount_operation","suffix","account_accounting","registers_table","tabular_section","tabular_sections","correspondent_text","appointments_text","txt_row","phone","phone_numbers","bank_phone_numbers","type","cash_flow_type","nom_type","account_type","price_type","cash_flow_types","contact_information_types","vat_types","nom_types","event_types","structural_unit_types","account_types","nom_prices_types","goods","thickness","buisness_process_point","transport_means","managerial","condition","services","nom_prices_setup","vat_consider","individuals","individual_person","finish","formula","course_calc_formula","condition_formula","formulas","characteristic","nom_characteristic","characteristics","clr","colors","price","vat_price_included","price_internal","price_group","price_groups","nom_prices","number","days_without_pay","template","step","width","latitude","is_pieces","specimen","elm","elmnts","is_folder","is_extra_property","is_set","is_service","legal_person","individual_legal","cell","cells"]});

(function(){
  const {EnumManager,CatManager,DocManager,DataProcessorsManager,ChartOfCharacteristicManager,ChartOfAccountManager,
    InfoRegManager,AccumRegManager,BusinessProcessManager,TaskManager,CatObj, DocObj, TabularSectionRow, DataProcessorObj,
    RegisterRow, BusinessProcessObj, TaskObj} = $p.constructor.classes;
    
  const _define = Object.defineProperties;
    
  function conf(target, key, descriptor) {
    descriptor.configurable = true;
    return descriptor;
  }

$p.enm.create('accumulation_record_type');
$p.enm.create('sort_directions');
$p.enm.create('comparison_types');
$p.enm.create('label_positions');
$p.enm.create('data_field_kinds');
$p.enm.create('obj_delivery_states');
$p.enm.create('unload_type');
$p.enm.create('caching_type');
$p.enm.create('reduce_type');
$p.enm.create('contact_information_types');
$p.enm.create('nom_types');

/**
* ### План видов характеристик ДополнительныеРеквизитыИСведения
* Дополнительные реквизиты и сведения
* @class CchProperties
* @extends CatObj
* @constructor 
*/
class CchProperties extends CatObj{
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get extra_values_owner(){return this._getter('extra_values_owner')}
set extra_values_owner(v){this._setter('extra_values_owner',v)}
get ДополнительныеЗначенияИспользуются(){return this._getter('ДополнительныеЗначенияИспользуются')}
set ДополнительныеЗначенияИспользуются(v){this._setter('ДополнительныеЗначенияИспользуются',v)}
get ДополнительныеЗначенияСВесом(){return this._getter('ДополнительныеЗначенияСВесом')}
set ДополнительныеЗначенияСВесом(v){this._setter('ДополнительныеЗначенияСВесом',v)}
get available(){return this._getter('available')}
set available(v){this._setter('available',v)}
get shown(){return this._getter('shown')}
set shown(v){this._setter('shown',v)}
get ЗаголовокФормыВыбораЗначения(){return this._getter('ЗаголовокФормыВыбораЗначения')}
set ЗаголовокФормыВыбораЗначения(v){this._setter('ЗаголовокФормыВыбораЗначения',v)}
get ЗаголовокФормыЗначения(){return this._getter('ЗаголовокФормыЗначения')}
set ЗаголовокФормыЗначения(v){this._setter('ЗаголовокФормыЗначения',v)}
get list(){return this._getter('list')}
set list(v){this._setter('list',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get МногострочноеПолеВвода(){return this._getter('МногострочноеПолеВвода')}
set МногострочноеПолеВвода(v){this._setter('МногострочноеПолеВвода',v)}
get destination(){return this._getter('destination')}
set destination(v){this._setter('destination',v)}
get tooltip(){return this._getter('tooltip')}
set tooltip(v){this._setter('tooltip',v)}
get УдалитьСклоненияПредмета(){return this._getter('УдалитьСклоненияПредмета')}
set УдалитьСклоненияПредмета(v){this._setter('УдалитьСклоненияПредмета',v)}
get ФорматСвойства(){return this._getter('ФорматСвойства')}
set ФорматСвойства(v){this._setter('ФорматСвойства',v)}
get is_extra_property(){return this._getter('is_extra_property')}
set is_extra_property(v){this._setter('is_extra_property',v)}
get mandatory(){return this._getter('mandatory')}
set mandatory(v){this._setter('mandatory',v)}
get ВключатьВНаименование(){return this._getter('ВключатьВНаименование')}
set ВключатьВНаименование(v){this._setter('ВключатьВНаименование',v)}
get caption(){return this._getter('caption')}
set caption(v){this._setter('caption',v)}
get ВключатьВОписание(){return this._getter('ВключатьВОписание')}
set ВключатьВОписание(v){this._setter('ВключатьВОписание',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get extra_fields_dependencies(){return this._getter_ts('extra_fields_dependencies')}
set extra_fields_dependencies(v){this._setter_ts('extra_fields_dependencies',v)}
}
$p.CchProperties = CchProperties;
class CchPropertiesExtra_fields_dependenciesRow extends TabularSectionRow{
get ЗависимоеСвойство(){return this._getter('ЗависимоеСвойство')}
set ЗависимоеСвойство(v){this._setter('ЗависимоеСвойство',v)}
get field(){return this._getter('field')}
set field(v){this._setter('field',v)}
get condition(){return this._getter('condition')}
set condition(v){this._setter('condition',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CchPropertiesExtra_fields_dependenciesRow = CchPropertiesExtra_fields_dependenciesRow;
$p.cch.create('properties');

/**
* ### План видов характеристик ПредопределенныеЭлементы
* Хранит значения настроек и параметров подсистем
* @class CchPredefined_elmnts
* @extends CatObj
* @constructor 
*/
class CchPredefined_elmnts extends CatObj{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get synonym(){return this._getter('synonym')}
set synonym(v){this._setter('synonym',v)}
get list(){return this._getter('list')}
set list(v){this._setter('list',v)}
get zone(){return this._getter('zone')}
set zone(v){this._setter('zone',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get elmnts(){return this._getter_ts('elmnts')}
set elmnts(v){this._setter_ts('elmnts',v)}
}
$p.CchPredefined_elmnts = CchPredefined_elmnts;
class CchPredefined_elmntsElmntsRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CchPredefined_elmntsElmntsRow = CchPredefined_elmntsElmntsRow;
$p.cch.create('predefined_elmnts');

/**
* ### Справочник Валюты
* Валюты, используемые при расчетах
* @class CatCurrencies
* @extends CatObj
* @constructor 
*/
class CatCurrencies extends CatObj{
get ЗагружаетсяИзИнтернета(){return this._getter('ЗагружаетсяИзИнтернета')}
set ЗагружаетсяИзИнтернета(v){this._setter('ЗагружаетсяИзИнтернета',v)}
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get extra_charge(){return this._getter('extra_charge')}
set extra_charge(v){this._setter('extra_charge',v)}
get main_currency(){return this._getter('main_currency')}
set main_currency(v){this._setter('main_currency',v)}
get parameters_russian_recipe(){return this._getter('parameters_russian_recipe')}
set parameters_russian_recipe(v){this._setter('parameters_russian_recipe',v)}
get course_calc_formula(){return this._getter('course_calc_formula')}
set course_calc_formula(v){this._setter('course_calc_formula',v)}
get course_installation_method(){return this._getter('course_installation_method')}
set course_installation_method(v){this._setter('course_installation_method',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatCurrencies = CatCurrencies;
$p.cat.create('currencies');

/**
* ### Справочник ВидыКонтактнойИнформации
* Виды контактной информации
* @class CatContact_information_kinds
* @extends CatObj
* @constructor 
*/
class CatContact_information_kinds extends CatObj{
get АдресТолькоРоссийский(){return this._getter('АдресТолькоРоссийский')}
set АдресТолькоРоссийский(v){this._setter('АдресТолькоРоссийский',v)}
get ВидПоляДругое(){return this._getter('ВидПоляДругое')}
set ВидПоляДругое(v){this._setter('ВидПоляДругое',v)}
get ВключатьСтрануВПредставление(){return this._getter('ВключатьСтрануВПредставление')}
set ВключатьСтрануВПредставление(v){this._setter('ВключатьСтрануВПредставление',v)}
get ЗапретитьРедактированиеПользователем(){return this._getter('ЗапретитьРедактированиеПользователем')}
set ЗапретитьРедактированиеПользователем(v){this._setter('ЗапретитьРедактированиеПользователем',v)}
get used(){return this._getter('used')}
set used(v){this._setter('used',v)}
get МожноИзменятьСпособРедактирования(){return this._getter('МожноИзменятьСпособРедактирования')}
set МожноИзменятьСпособРедактирования(v){this._setter('МожноИзменятьСпособРедактирования',v)}
get mandatory_fields(){return this._getter('mandatory_fields')}
set mandatory_fields(v){this._setter('mandatory_fields',v)}
get ПроверятьКорректность(){return this._getter('ПроверятьКорректность')}
set ПроверятьКорректность(v){this._setter('ПроверятьКорректность',v)}
get ПроверятьПоФИАС(){return this._getter('ПроверятьПоФИАС')}
set ПроверятьПоФИАС(v){this._setter('ПроверятьПоФИАС',v)}
get РазрешитьВводНесколькихЗначений(){return this._getter('РазрешитьВводНесколькихЗначений')}
set РазрешитьВводНесколькихЗначений(v){this._setter('РазрешитьВводНесколькихЗначений',v)}
get РедактированиеТолькоВДиалоге(){return this._getter('РедактированиеТолькоВДиалоге')}
set РедактированиеТолькоВДиалоге(v){this._setter('РедактированиеТолькоВДиалоге',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get СкрыватьНеактуальныеАдреса(){return this._getter('СкрыватьНеактуальныеАдреса')}
set СкрыватьНеактуальныеАдреса(v){this._setter('СкрыватьНеактуальныеАдреса',v)}
get ТелефонCДобавочнымНомером(){return this._getter('ТелефонCДобавочнымНомером')}
set ТелефонCДобавочнымНомером(v){this._setter('ТелефонCДобавочнымНомером',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get УдалитьМногострочноеПоле(){return this._getter('УдалитьМногострочноеПоле')}
set УдалитьМногострочноеПоле(v){this._setter('УдалитьМногострочноеПоле',v)}
get УказыватьОКТМО(){return this._getter('УказыватьОКТМО')}
set УказыватьОКТМО(v){this._setter('УказыватьОКТМО',v)}
get ХранитьИсториюИзменений(){return this._getter('ХранитьИсториюИзменений')}
set ХранитьИсториюИзменений(v){this._setter('ХранитьИсториюИзменений',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatContact_information_kinds = CatContact_information_kinds;
$p.cat.create('contact_information_kinds');

/**
* ### Справочник ВидыНоменклатуры
* Виды номенклатуры
* @class CatNom_kinds
* @extends CatObj
* @constructor 
*/
class CatNom_kinds extends CatObj{
get nom_type(){return this._getter('nom_type')}
set nom_type(v){this._setter('nom_type',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatNom_kinds = CatNom_kinds;
$p.cat.create('nom_kinds');

/**
* ### Справочник ЗначенияСвойствОбъектов
* Дополнительные значения
* @class CatProperty_values
* @extends CatObj
* @constructor 
*/
class CatProperty_values extends CatObj{
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get full_name(){return this._getter('full_name')}
set full_name(v){this._setter('full_name',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatProperty_values = CatProperty_values;
$p.cat.create('property_values');

/**
* ### Справочник ЗначенияСвойствОбъектовИерархия
* Дополнительные значения (иерархия)
* @class CatProperty_values_hierarchy
* @extends CatObj
* @constructor 
*/
class CatProperty_values_hierarchy extends CatObj{
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get full_name(){return this._getter('full_name')}
set full_name(v){this._setter('full_name',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatProperty_values_hierarchy = CatProperty_values_hierarchy;
$p.cat.create('property_values_hierarchy');

/**
* ### Справочник ИдентификаторыОбъектовМетаданных
* Идентификаторы объектов метаданных для использования в базе данных.
* @class CatMeta_ids
* @extends CatObj
* @constructor 
*/
class CatMeta_ids extends CatObj{
get ПорядокКоллекции(){return this._getter('ПорядокКоллекции')}
set ПорядокКоллекции(v){this._setter('ПорядокКоллекции',v)}
get moniker(){return this._getter('moniker')}
set moniker(v){this._setter('moniker',v)}
get synonym(){return this._getter('synonym')}
set synonym(v){this._setter('synonym',v)}
get full_moniker(){return this._getter('full_moniker')}
set full_moniker(v){this._setter('full_moniker',v)}
get ПолныйСиноним(){return this._getter('ПолныйСиноним')}
set ПолныйСиноним(v){this._setter('ПолныйСиноним',v)}
get БезДанных(){return this._getter('БезДанных')}
set БезДанных(v){this._setter('БезДанных',v)}
get ЗначениеПустойСсылки(){return this._getter('ЗначениеПустойСсылки')}
set ЗначениеПустойСсылки(v){this._setter('ЗначениеПустойСсылки',v)}
get КлючОбъектаМетаданных(){return this._getter('КлючОбъектаМетаданных')}
set КлючОбъектаМетаданных(v){this._setter('КлючОбъектаМетаданных',v)}
get НоваяСсылка(){return this._getter('НоваяСсылка')}
set НоваяСсылка(v){this._setter('НоваяСсылка',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatMeta_ids = CatMeta_ids;
$p.cat.create('meta_ids');

/**
* ### Справочник Кассы
* Список мест фактического хранения и движения наличных денежных средств.
* @class CatCashboxes
* @extends CatObj
* @constructor 
*/
class CatCashboxes extends CatObj{
get funds_currency(){return this._getter('funds_currency')}
set funds_currency(v){this._setter('funds_currency',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatCashboxes = CatCashboxes;
class CatCashboxesContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get АдресЭП(){return this._getter('АдресЭП')}
set АдресЭП(v){this._setter('АдресЭП',v)}
get server_domain_name(){return this._getter('server_domain_name')}
set server_domain_name(v){this._setter('server_domain_name',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
get ВидДляСписка(){return this._getter('ВидДляСписка')}
set ВидДляСписка(v){this._setter('ВидДляСписка',v)}
get ДействуетС(){return this._getter('ДействуетС')}
set ДействуетС(v){this._setter('ДействуетС',v)}
}
$p.CatCashboxesContact_informationRow = CatCashboxesContact_informationRow;
class CatCashboxesExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatCashboxesExtra_fieldsRow = CatCashboxesExtra_fieldsRow;
$p.cat.create('cashboxes');

/**
* ### Справочник НаборыДополнительныхРеквизитовИСведений
* Наборы дополнительных реквизитов и сведений
* @class CatDestinations
* @extends CatObj
* @constructor 
*/
class CatDestinations extends CatObj{
get КоличествоРеквизитов(){return this._getter('КоличествоРеквизитов')}
set КоличествоРеквизитов(v){this._setter('КоличествоРеквизитов',v)}
get КоличествоСведений(){return this._getter('КоличествоСведений')}
set КоличествоСведений(v){this._setter('КоличествоСведений',v)}
get used(){return this._getter('used')}
set used(v){this._setter('used',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get extra_properties(){return this._getter_ts('extra_properties')}
set extra_properties(v){this._setter_ts('extra_properties',v)}
}
$p.CatDestinations = CatDestinations;
class CatDestinationsExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_fieldsRow = CatDestinationsExtra_fieldsRow;
class CatDestinationsExtra_propertiesRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_propertiesRow = CatDestinationsExtra_propertiesRow;
$p.cat.create('destinations');

/**
* ### Справочник Номенклатура
* Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг
* @class CatNom
* @extends CatObj
* @constructor 
*/
class CatNom extends CatObj{
get article(){return this._getter('article')}
set article(v){this._setter('article',v)}
get nom_kind(){return this._getter('nom_kind')}
set nom_kind(v){this._setter('nom_kind',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatNom = CatNom;
$p.cat.create('nom');

/**
* ### Справочник Пользователи
* Пользователи
* @class CatUsers
* @extends CatObj
* @constructor 
*/
class CatUsers extends CatObj{
get invalid(){return this._getter('invalid')}
set invalid(v){this._setter('invalid',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get individual_person(){return this._getter('individual_person')}
set individual_person(v){this._setter('individual_person',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get ancillary(){return this._getter('ancillary')}
set ancillary(v){this._setter('ancillary',v)}
get Подготовлен(){return this._getter('Подготовлен')}
set Подготовлен(v){this._setter('Подготовлен',v)}
get user_ib_uid(){return this._getter('user_ib_uid')}
set user_ib_uid(v){this._setter('user_ib_uid',v)}
get user_fresh_uid(){return this._getter('user_fresh_uid')}
set user_fresh_uid(v){this._setter('user_fresh_uid',v)}
get СвойстваПользователяИБ(){return this._getter('СвойстваПользователяИБ')}
set СвойстваПользователяИБ(v){this._setter('СвойстваПользователяИБ',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
}
$p.CatUsers = CatUsers;
class CatUsersExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatUsersExtra_fieldsRow = CatUsersExtra_fieldsRow;
class CatUsersContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get АдресЭП(){return this._getter('АдресЭП')}
set АдресЭП(v){this._setter('АдресЭП',v)}
get server_domain_name(){return this._getter('server_domain_name')}
set server_domain_name(v){this._setter('server_domain_name',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
get ВидДляСписка(){return this._getter('ВидДляСписка')}
set ВидДляСписка(v){this._setter('ВидДляСписка',v)}
}
$p.CatUsersContact_informationRow = CatUsersContact_informationRow;
$p.cat.create('users');

/**
* ### Справочник СтатьиДвиженияДенежныхСредств
* Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. 
* @class CatCash_flow_articles
* @extends CatObj
* @constructor 
*/
class CatCash_flow_articles extends CatObj{
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatCash_flow_articles = CatCash_flow_articles;
$p.cat.create('cash_flow_articles');

/**
* ### Справочник Формулы
* Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации
* @class CatFormulas
* @extends CatObj
* @constructor 
*/
class CatFormulas extends CatObj{
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get leading_formula(){return this._getter('leading_formula')}
set leading_formula(v){this._setter('leading_formula',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get async(){return this._getter('async')}
set async(v){this._setter('async',v)}
get zone(){return this._getter('zone')}
set zone(v){this._setter('zone',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}
}
$p.CatFormulas = CatFormulas;
class CatFormulasParamsRow extends TabularSectionRow{
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CatFormulasParamsRow = CatFormulasParamsRow;
$p.cat.create('formulas');

/**
* ### Документ ДвижениеДенег
* Перемещение денег
* @class DocCash_moving
* @extends DocObj
* @constructor 
*/
class DocCash_moving extends DocObj{
get sender(){return this._getter('sender')}
set sender(v){this._setter('sender',v)}
get recipient(){return this._getter('recipient')}
set recipient(v){this._setter('recipient',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get cash_flow_article(){return this._getter('cash_flow_article')}
set cash_flow_article(v){this._setter('cash_flow_article',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
}
$p.DocCash_moving = DocCash_moving;
$p.doc.create('cash_moving');

/**
* ### Отчет ДвижениеДенег
* Движение денег
* @class RepCash_moving
* @extends DataProcessorObj
* @constructor 
*/
class RepCash_moving extends DataProcessorObj{
get period_from(){return this._getter('period_from')}
set period_from(v){this._setter('period_from',v)}
get period_till(){return this._getter('period_till')}
set period_till(v){this._setter('period_till',v)}
get cashboxes(){return this._getter_ts('cashboxes')}
set cashboxes(v){this._setter_ts('cashboxes',v)}
get cash_flow_articles(){return this._getter_ts('cash_flow_articles')}
set cash_flow_articles(v){this._setter_ts('cash_flow_articles',v)}
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepCash_moving = RepCash_moving;
class RepCash_movingCashboxesRow extends TabularSectionRow{
get cashbox(){return this._getter('cashbox')}
set cashbox(v){this._setter('cashbox',v)}
}
$p.RepCash_movingCashboxesRow = RepCash_movingCashboxesRow;
class RepCash_movingCash_flow_articlesRow extends TabularSectionRow{
get cash_flow_article(){return this._getter('cash_flow_article')}
set cash_flow_article(v){this._setter('cash_flow_article',v)}
}
$p.RepCash_movingCash_flow_articlesRow = RepCash_movingCash_flow_articlesRow;
class RepCash_movingDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get cashbox(){return this._getter('cashbox')}
set cashbox(v){this._setter('cashbox',v)}
get cash_flow_article(){return this._getter('cash_flow_article')}
set cash_flow_article(v){this._setter('cash_flow_article',v)}
get initial_balance(){return this._getter('initial_balance')}
set initial_balance(v){this._setter('initial_balance',v)}
get debit(){return this._getter('debit')}
set debit(v){this._setter('debit',v)}
get credit(){return this._getter('credit')}
set credit(v){this._setter('credit',v)}
get final_balance(){return this._getter('final_balance')}
set final_balance(v){this._setter('final_balance',v)}
}
$p.RepCash_movingDataRow = RepCash_movingDataRow;
$p.rep.create('cash_moving');
})();
};