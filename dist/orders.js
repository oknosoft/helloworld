;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Orders = factory();
  }
}(this, function() {
$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_$log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR); CREATE TABLE IF NOT EXISTS `doc_nom_prices_setup` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `note` CHAR, `responsible` CHAR, `НеПроводитьНулевыеЗначения` BOOLEAN, `Информация` CHAR, `ts_goods` JSON, `ts_ТипыЦен` JSON); CREATE TABLE IF NOT EXISTS `doc_credit_cash_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `Касса` CHAR, `department` CHAR, `responsible` CHAR, `Выдать` CHAR, `Основание` CHAR, `contract` CHAR, `ВалютаВзаиморасчетовРаботника` CHAR, `doc_currency` CHAR, `Приложение` CHAR, `ДатаПогашенияАванса` Date, `РасчетныйДокумент` CHAR, `ПоДокументу` CHAR, `ОтражатьВУправленческомУчете` BOOLEAN, `accounting_reflect` BOOLEAN, `note` CHAR, `ОтраженоВОперУчете` BOOLEAN, `Оплачено` BOOLEAN, `partner` CHAR, `partner_T` CHAR, `ВидОперации` CHAR, `doc_amount` FLOAT, `ДокументОснование` CHAR, `ДокументОснование_T` CHAR, `tax_accounting_reflect` BOOLEAN, `СубконтоДт1` CHAR, `СубконтоДт1_T` CHAR, `СубконтоДт2` CHAR, `СубконтоДт2_T` CHAR, `СубконтоДт3` CHAR, `СубконтоДт3_T` CHAR, `СчетУчетаРасчетовСКонтрагентом` CHAR, `cash_flow_article` CHAR, `СчетОрганизации` CHAR, `Содержание_УСН` CHAR, `Графа4_УСН` FLOAT, `Графа5_УСН` FLOAT, `Графа6_УСН` FLOAT, `Графа7_УСН` FLOAT, `ДоходыЕНВД_УСН` BOOLEAN, `РасходыЕНВД_УСН` BOOLEAN, `НДС_УСН` FLOAT, `РучнаяНастройка_УСН` BOOLEAN, `ВидВыдачиДенежныхСредств` CHAR, `ОбъявлениеНаВзносНаличными` CHAR, `НомерЧекаККМ` INT, `СчетУчетаРасчетовСКонтрагентомНУ` CHAR, `СубконтоНУДт1` CHAR, `СубконтоНУДт1_T` CHAR, `СубконтоНУДт2` CHAR, `СубконтоНУДт2_T` CHAR, `СубконтоНУДт3` CHAR, `СубконтоНУДт3_T` CHAR, `ts_ВыплатаЗаработнойПлаты` JSON, `ts_РасшифровкаПлатежа` JSON, `ts_ВыплатаДепонентов` JSON, `ts_individuals` JSON); CREATE TABLE IF NOT EXISTS `doc_debit_cash_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `Касса` CHAR, `department` CHAR, `ВидОперации` CHAR, `partner` CHAR, `partner_T` CHAR, `contract` CHAR, `ВалютаВзаиморасчетовПодотчетника` CHAR, `doc_currency` CHAR, `doc_amount` FLOAT, `ПринятоОт` CHAR, `Основание` CHAR, `Приложение` CHAR, `responsible` CHAR, `ОтраженоВОперУчете` BOOLEAN, `Оплачено` BOOLEAN, `note` CHAR, `ОтражатьВУправленческомУчете` BOOLEAN, `ДокументОснование` CHAR, `ДокументОснование_T` CHAR, `accounting_reflect` BOOLEAN, `РасчетныйДокумент` CHAR, `РасчетныйДокумент_T` CHAR, `tax_accounting_reflect` BOOLEAN, `СчетУчетаРасчетовСКонтрагентом` CHAR, `СубконтоКт1` CHAR, `СубконтоКт1_T` CHAR, `СубконтоКт2` CHAR, `СубконтоКт2_T` CHAR, `СубконтоКт3` CHAR, `СубконтоКт3_T` CHAR, `СчетОрганизации` CHAR, `cash_flow_article` CHAR, `vat_rate` CHAR, `Содержание_УСН` CHAR, `Графа4_УСН` FLOAT, `Графа5_УСН` FLOAT, `Графа6_УСН` FLOAT, `Графа7_УСН` FLOAT, `ДоходыЕНВД_УСН` BOOLEAN, `РасходыЕНВД_УСН` BOOLEAN, `НДС_УСН` FLOAT, `РучнаяНастройка_УСН` BOOLEAN, `ВыручкаСНТТ` BOOLEAN, `НомерЧекаККМ` INT, `ВидПриемаРозничнойВыручки` CHAR, `ДенежныйЧек` CHAR, `ts_РасшифровкаПлатежа` JSON); CREATE TABLE IF NOT EXISTS `doc_credit_bank_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `ДокументОснование` CHAR, `organization` CHAR, `СчетОрганизации` CHAR, `partner` CHAR, `ДатаОплаты` Date, `СчетКонтрагента` CHAR, `contract` CHAR, `ВидПлатежа` CHAR, `ОчередностьПлатежа` INT, `НазначениеПлатежа` CHAR, `ТекстПлательщика` CHAR, `doc_currency` CHAR, `ТекстПолучателя` CHAR, `note` CHAR, `Оплачено` BOOLEAN, `ИННПлательщика` CHAR, `КПППлательщика` CHAR, `ИННПолучателя` CHAR, `КПППолучателя` CHAR, `responsible` CHAR, `accounting_reflect` BOOLEAN, `КодБК` CHAR, `ОтраженоВОперУчете` BOOLEAN, `КодОКАТО` CHAR, `ПоказательДаты` Date, `ПоказательНомера` CHAR, `ПоказательОснования` CHAR, `ПоказательПериода` CHAR, `ПоказательТипа` CHAR, `СтатусСоставителя` CHAR, `doc_amount` FLOAT, `ВидОперации` CHAR, `cash_flow_article` CHAR, `СчетУчетаРасчетовСКонтрагентом` CHAR, `СубконтоДт1` CHAR, `СубконтоДт1_T` CHAR, `СубконтоДт2` CHAR, `СубконтоДт2_T` CHAR, `СубконтоДт3` CHAR, `СубконтоДт3_T` CHAR, `tax_accounting_reflect` BOOLEAN, `ФизЛицо` CHAR, `ДоговорЗайма` CHAR, `ВалютаВзаиморасчетовРаботника` CHAR, `ЧастичнаяОплата` BOOLEAN, `Содержание_УСН` CHAR, `Графа4_УСН` FLOAT, `Графа5_УСН` FLOAT, `Графа6_УСН` FLOAT, `Графа7_УСН` FLOAT, `ДоходыЕНВД_УСН` BOOLEAN, `РасходыЕНВД_УСН` BOOLEAN, `НДС_УСН` FLOAT, `РучнаяНастройка_УСН` BOOLEAN, `department` CHAR, `СчетУчетаРасчетовСКонтрагентомНУ` CHAR, `СубконтоНУДт1` CHAR, `СубконтоНУДт1_T` CHAR, `СубконтоНУДт2` CHAR, `СубконтоНУДт2_T` CHAR, `СубконтоНУДт3` CHAR, `СубконтоНУДт3_T` CHAR, `ДатаПогашенияАванса` Date, `РасчетныйДокументРаботника` CHAR, `ПеречислениеВБюджет` BOOLEAN, `ВидПеречисленияВБюджет` CHAR, `ИдентификаторПлатежа` CHAR, `ts_ПеречислениеЗаработнойПлаты` JSON, `ts_РасшифровкаПлатежа` JSON, `ts_РеквизитыКонтрагента` JSON, `ts_Работники` JSON); CREATE TABLE IF NOT EXISTS `doc_debit_bank_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `doc_currency` CHAR, `ВидОперации` CHAR, `contract` CHAR, `ДокументОснование` CHAR, `ДокументОснование_T` CHAR, `note` CHAR, `partner` CHAR, `НомерВходящегоДокумента` CHAR, `ДатаВходящегоДокумента` Date, `Оплачено` BOOLEAN, `organization` CHAR, `responsible` CHAR, `ОтраженоВОперУчете` BOOLEAN, `tax_accounting_reflect` BOOLEAN, `ДатаОплаты` Date, `ЧастичнаяОплата` BOOLEAN, `cash_flow_article` CHAR, `СубконтоКт1` CHAR, `СубконтоКт1_T` CHAR, `accounting_reflect` BOOLEAN, `СубконтоКт2` CHAR, `СубконтоКт2_T` CHAR, `СубконтоКт3` CHAR, `СубконтоКт3_T` CHAR, `doc_amount` FLOAT, `СчетКонтрагента` CHAR, `СчетОрганизации` CHAR, `СчетУчетаРасчетовСКонтрагентом` CHAR, `Содержание_УСН` CHAR, `Графа4_УСН` FLOAT, `Графа5_УСН` FLOAT, `Графа6_УСН` FLOAT, `Графа7_УСН` FLOAT, `ДоходыЕНВД_УСН` BOOLEAN, `РасходыЕНВД_УСН` BOOLEAN, `НДС_УСН` FLOAT, `РучнаяНастройка_УСН` BOOLEAN, `department` CHAR, `НазначениеПлатежа` CHAR, `СчетУчетаРасчетовСКонтрагентомНУ` CHAR, `СубконтоНУКт1` CHAR, `СубконтоНУКт1_T` CHAR, `СубконтоНУКт2` CHAR, `СубконтоНУКт2_T` CHAR, `СубконтоНУКт3` CHAR, `СубконтоНУКт3_T` CHAR, `cost_item` CHAR, `nom_group` CHAR, `ПодразделениеЗатраты` CHAR, `ПодразделениеОрганизацииЗатраты` CHAR, `СуммаУслуг` FLOAT, `ts_РасшифровкаПлатежа` JSON, `ts_РеквизитыКонтрагента` JSON); CREATE TABLE IF NOT EXISTS `doc_debt_adjustment` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `ВидОперации` CHAR, `department` CHAR, `КонтрагентДебитор` CHAR, `КонтрагентКредитор` CHAR, `ОтражатьВУправленческомУчете` BOOLEAN, `accounting_reflect` BOOLEAN, `note` CHAR, `responsible` CHAR, `tax_accounting_reflect` BOOLEAN, `doc_currency` CHAR, `КурсДокумента` FLOAT, `КратностьДокумента` INT, `contract` CHAR, `ИспользоватьВспомогательныйСчет` BOOLEAN, `СчетДт` CHAR, `СубконтоДт1` CHAR, `СубконтоДт1_T` CHAR, `СубконтоДт2` CHAR, `СубконтоДт2_T` CHAR, `СубконтоДт3` CHAR, `СубконтоДт3_T` CHAR, `СчетКт` CHAR, `СубконтоКт1` CHAR, `СубконтоКт1_T` CHAR, `СубконтоКт2` CHAR, `СубконтоКт2_T` CHAR, `СубконтоКт3` CHAR, `СубконтоКт3_T` CHAR, `СчетДтНУ` CHAR, `СубконтоДтНУ1` CHAR, `СубконтоДтНУ1_T` CHAR, `СубконтоДтНУ2` CHAR, `СубконтоДтНУ2_T` CHAR, `СубконтоДтНУ3` CHAR, `СубконтоДтНУ3_T` CHAR, `СчетКтНУ` CHAR, `СубконтоКтНУ1` CHAR, `СубконтоКтНУ1_T` CHAR, `СубконтоКтНУ2` CHAR, `СубконтоКтНУ2_T` CHAR, `СубконтоКтНУ3` CHAR, `СубконтоКтНУ3_T` CHAR, `ДокументОснование` CHAR, `ts_СуммыДолга` JSON); CREATE TABLE IF NOT EXISTS `doc_buyers_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `shipping_address` CHAR, `doc_currency` CHAR, `ВидОперации` CHAR, `ВремяНапоминания` Date, `ДатаОплаты` Date, `ДатаОтгрузки` Date, `contract` CHAR, `ИспользоватьПлановуюСебестоимость` BOOLEAN, `ИтогПлановаяСебестоимость` FLOAT, `note` CHAR, `partner` CHAR, `settlements_multiplicity` INT, `settlements_course` FLOAT, `НапомнитьОСобытии` BOOLEAN, `organization` CHAR, `responsible` CHAR, `accounting_reflect` BOOLEAN, `tax_accounting_reflect` BOOLEAN, `department` CHAR, `organizational_unit` CHAR, `organizational_unit_T` CHAR, `СкладГруппа` CHAR, `СкладГруппа_T` CHAR, `vat_included` BOOLEAN, `doc_amount` FLOAT, `price_type` CHAR, `vat_consider` BOOLEAN, `Грузополучатель` CHAR, `КонтактноеЛицоКонтрагента` CHAR, `УсловиеПродаж` CHAR, `ДополнениеКАдресуДоставки` CHAR, `ДокументОснование` CHAR, `Грузоотправитель` CHAR, `НомерПоДаннымПокупателя` CHAR, `ДатаПоДаннымПокупателя` Date, `УсловияДоставки` CHAR, `ДатаПоставки` Date, `obj_delivery_state` CHAR, `ts_goods` JSON, `ts_ВозвратнаяТара` JSON, `ts_services` JSON, `ts_materials` JSON, `ts_СоставНабора` JSON, `ts_ПараметрыВыпускаПродукции` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_price_groups` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `sequence` INT, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_characteristics` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ОКП` CHAR, `Активная` BOOLEAN, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_ФП_ЛекарственныеФормы` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_individuals` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаРождения` Date, `ИНН` CHAR, `КодИМНС` CHAR, `note` CHAR, `СтраховойНомерПФР` CHAR, `Пол` CHAR, `МестоРождения` CHAR, `ОсновноеИзображение` CHAR, `МестоРожденияКодПоОКАТО` CHAR, `ГруппаДоступаФизическогоЛица` CHAR, `ЛьготаПриНачисленииПособий` CHAR, `ИмеетНаучныеТруды` BOOLEAN, `ИмеетИзобретения` BOOLEAN, `ПостоянноПроживалВКрыму18Марта2014Года` BOOLEAN, `Должность` CHAR, `Фамилия` CHAR, `Имя` CHAR, `Отчество` CHAR, `parent` CHAR, `ts_СоставСемьи` JSON, `ts_Образование` JSON, `ts_ТрудоваяДеятельность` JSON, `ts_ЗнаниеЯзыков` JSON, `ts_Профессии` JSON, `ts_Стажи` JSON, `ts_Награды` JSON, `ts_УченыеСтепени` JSON, `ts_УченыеЗвания` JSON); CREATE TABLE IF NOT EXISTS `cat_sale_conditions` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_nom_prices_types_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `price_currency` CHAR, `vat_price_included` BOOLEAN, `nom_prices_type` CHAR, `ОписаниеТипаЦеныНоменклатурыКонтрагента` CHAR, `note` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_prices_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `price_currency` CHAR, `БазовыйТипЦен` CHAR, `Рассчитывается` BOOLEAN, `discount_percent` FLOAT, `vat_price_included` BOOLEAN, `ПорядокОкругления` CHAR, `ОкруглятьВБольшуюСторону` BOOLEAN, `note` CHAR, `СпособРасчетаЦены` CHAR); CREATE TABLE IF NOT EXISTS `cat_charge_discounts_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `currency` CHAR, `ДляВсейНоменклатуры` BOOLEAN, `discount_percent` FLOAT, `ЗначениеУсловия` CHAR, `ОбщееВремяНачала` Date, `ОбщееВремяОкончания` Date, `ОграничениеСкидкиНаценки` FLOAT, `condition` CHAR, `quality` CHAR, `ДляВсехПолучателей` BOOLEAN, `ПоДнямНедели` BOOLEAN, `ВидСкидки` CHAR, `ts_ВремяПоДнямНедели` JSON); CREATE TABLE IF NOT EXISTS `cat_cost_items` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `cost_kind` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_cash_flow_articles` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_stores` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `ТипЦенРозничнойТорговли` CHAR, `department` CHAR, `ВидСклада` CHAR, `НомерСекции` INT, `РасчетРозничныхЦенПоТорговойНаценке` BOOLEAN, `Карантин` BOOLEAN, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_serial_numbers` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_series` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `СерийныйНомер` CHAR, `СрокГодности` Date, `НомерГТД` CHAR, `СтранаПроисхождения` CHAR, `ОсновноеИзображение` CHAR, `note` CHAR, `ТехническийНомер` CHAR, `ДатаИзготовления` Date, `department` CHAR, `ОжидаемоеКоличествоВыпуска` FLOAT, `ДатаЗапускаСерии` Date, `nom_characteristic` CHAR, `ЕдиницаМест` CHAR, `Изготовитель` CHAR, `ДатаИзготовленияСубстанции` Date, `МаршрутнаяКарта` CHAR, `ПроцентноеСодержание` FLOAT, `owner` CHAR, `ts_Спецификации` JSON); CREATE TABLE IF NOT EXISTS `cat_regions` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `КодРегиона` CHAR, `КодАдресногоЭлемента` INT, `ЖДСтанцияНазначения` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_projects` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаНачала` Date, `ДатаОкончания` Date, `responsible` CHAR, `definition` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_orders_closing_reasons` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ФизЛицо` CHAR, `ИдентификаторПользователяИБ` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_divisions` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ВидПодразделения` CHAR, `ВидЦФО` CHAR, `main_project` CHAR, `sequence` INT, `warehouse` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_organizations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `prefix` CHAR, `ИНН` CHAR, `КПП` CHAR, `РегистрационныйНомерПФР` CHAR, `ГоловнаяОрганизация` CHAR, `name_full` CHAR, `КодПоОКПО` CHAR, `КодПоОКАТО` CHAR, `КодИМНС` CHAR, `РайонныйКоэффициент` FLOAT, `individual_legal` CHAR, `ТерриториальныеУсловияПФР` CHAR, `ОсновнойБанковскийСчет` CHAR, `ВидСтавокЕСНиПФР` CHAR, `НаименованиеПлательщикаПриПеречисленииНалогов` CHAR, `ИностраннаяОрганизация` BOOLEAN, `ДатаРегистрации` Date, `КодОКОПФ` CHAR, `НаименованиеОКОПФ` CHAR, `КодОКФС` CHAR, `НаименованиеОКФС` CHAR, `СвидетельствоСерияНомер` CHAR, `СвидетельствоДатаВыдачи` Date, `СвидетельствоНаименованиеОргана` CHAR, `СвидетельствоКодОргана` CHAR, `СтранаРегистрации` CHAR, `СтранаПостоянногоМестонахождения` CHAR, `КодВСтранеРегистрации` CHAR, `ОГРН` CHAR, `НаименованиеИнострОрганизации` CHAR, `РегистрационныйНомерФСС` CHAR, `НаименованиеИМНС` CHAR, `КодОКВЭД` CHAR, `НаименованиеОКВЭД` CHAR, `КодОКОНХ` CHAR, `ИндивидуальныйПредприниматель` CHAR, `ОбменКодАбонента` CHAR, `ОбменКаталогОтправкиДанныхОтчетности` CHAR, `ОбменКаталогПрограммыЭлектроннойПочты` CHAR, `РайонныйКоэффициентРФ` FLOAT, `ОтражатьВРегламентированномУчете` BOOLEAN, `КодИФНСПолучателя` CHAR, `НаименованиеТерриториальногоОрганаПФР` CHAR, `НаименованиеСокращенное` CHAR, `ВидОбменаСКонтролирующимиОрганами` CHAR, `УчетнаяЗаписьОбмена` CHAR, `КодОрганаПФР` CHAR, `КодОрганаФСГС` CHAR, `ДополнительныйКодФСС` CHAR, `КодПодчиненностиФСС` CHAR, `ЦифровойИндексОбособленногоПодразделения` INT, `РегистрационныйНомерТФОМС` CHAR, `ИПРегистрационныйНомерПФР` CHAR, `ИПРегистрационныйНомерФСС` CHAR, `ИПКодПодчиненностиФСС` CHAR, `ИПРегистрационныйНомерТФОМС` CHAR, `НаименованиеТерриториальногоОрганаФСС` CHAR, `КодПоОКТМО` CHAR, `Регион` CHAR); CREATE TABLE IF NOT EXISTS `cat_gtd_numbers` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_groups` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `storage_unit` CHAR, `base_unit` CHAR, `vat_rate` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `article` CHAR, `ВестиОперативныйУчетОстатковНЗП` BOOLEAN, `ВестиУчетПоСериям` BOOLEAN, `ВестиУчетПоСериямВНЗП` BOOLEAN, `ВестиУчетПоХарактеристикам` BOOLEAN, `nom_kind` CHAR, `ЕдиницаДляОтчетов` CHAR, `storage_unit` CHAR, `base_unit` CHAR, `Набор` BOOLEAN, `vat_rate` CHAR, `note` CHAR, `Услуга` BOOLEAN, `nom_group` CHAR, `СтранаПроисхождения` CHAR, `НомерГТД` CHAR, `ТребуетсяВнешняяСертификация` BOOLEAN, `ТребуетсяВнутренняяСертификация` BOOLEAN, `cost_item` CHAR, `ВестиСерийныеНомера` BOOLEAN, `Комплект` BOOLEAN, `price_group` CHAR, `piece_unit` CHAR, `Производитель` CHAR, `Импортер` CHAR, `ПроцентСрокаГодности` INT, `ВремяПроверкиЗаказа` INT, `МинимальнаяПартияЗакупки` FLOAT, `ЦиклПоставкиДней` INT, `РегистрационныйНомер` CHAR, `ФормулаОсновногоДействующегоВещества` CHAR, `Дозировка` CHAR, `Упаковка` INT, `ЛекарственнаяФорма` CHAR, `ЖНВЛП` BOOLEAN, `Изготовитель` CHAR, `НаименованиеМеждународное` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `note` CHAR, `ДополнительноеОписание` CHAR, `ГоловнойКонтрагент` CHAR, `КодПоОКПО` CHAR, `ИНН` CHAR, `КПП` CHAR, `individual_legal` CHAR, `ОсновнойБанковскийСчет` CHAR, `main_contract` CHAR, `ДокументУдостоверяющийЛичность` CHAR, `ОсновнойМенеджерПокупателя` CHAR, `Покупатель` BOOLEAN, `Поставщик` BOOLEAN, `ОсновноеКонтактноеЛицо` CHAR, `Регион` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_persons_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `Должность` CHAR, `note` CHAR, `КонтактноеЛицо` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_persons` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `Фамилия` CHAR, `Имя` CHAR, `Отчество` CHAR, `ДатаРождения` Date, `definition` CHAR, `Пол` CHAR); CREATE TABLE IF NOT EXISTS `cat_countries` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `КодАльфа2` CHAR); CREATE TABLE IF NOT EXISTS `cat_units` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `МеждународноеСокращение` CHAR); CREATE TABLE IF NOT EXISTS `cat_quality` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_obj_categories` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `НазначениеКатегории` CHAR); CREATE TABLE IF NOT EXISTS `cat_cashboxes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `funds_currency` CHAR, `ПодразделениеОрганизации` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_users_acl` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `prefix` CHAR, `owner` CHAR, `ts_acl_objs` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ПорядокКоллекции` INT, `Имя` CHAR, `synonym` CHAR, `ПолноеИмя` CHAR, `ПолныйСиноним` CHAR, `БезДанных` BOOLEAN, `ЗначениеПустойСсылки` CHAR, `ЗначениеПустойСсылки_T` CHAR, `КлючОбъектаМетаданных` CHAR, `НоваяСсылка` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_units` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `qualifier_unit` CHAR, `Вес` FLOAT, `Объем` FLOAT, `coefficient` FLOAT, `ПорогОкругления` INT, `ПредупреждатьОНецелыхМестах` BOOLEAN, `owner` CHAR, `owner_T` CHAR); CREATE TABLE IF NOT EXISTS `cat_contracts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `settlements_currency` CHAR, `mutual_settlements` CHAR, `note` CHAR, `check_days_without_pay` BOOLEAN, `allowable_debts_amount` FLOAT, `allowable_debts_days` INT, `organization` CHAR, `check_debts_amount` BOOLEAN, `check_debts_days` BOOLEAN, `prepayment_percent` FLOAT, `price_type` CHAR, `price_type_T` CHAR, `contract_kind` CHAR, `ЧислоДнейРезерваБезОплаты` INT, `date` Date, `number_doc` CHAR, `main_project` CHAR, `main_cash_flow_article` CHAR, `СрокДействия` Date, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `nom_type` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_information_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `type` CHAR, `ВидОбъектаКонтактнойИнформации` CHAR); CREATE TABLE IF NOT EXISTS `cat_currencies` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `ПараметрыПрописиНаРусском` CHAR); CREATE TABLE IF NOT EXISTS `cat_bank_accounts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `НомерСчета` CHAR, `Банк` CHAR, `БанкДляРасчетов` CHAR, `ТекстКорреспондента` CHAR, `ТекстНазначения` CHAR, `ВидСчета` CHAR, `funds_currency` CHAR, `НомерИДатаРазрешения` CHAR, `ДатаОткрытия` Date, `ДатаЗакрытия` Date, `МесяцПрописью` BOOLEAN, `СуммаБезКопеек` BOOLEAN, `ОтдельныйСчетГОЗ` BOOLEAN, `ГосударственныйКонтракт` CHAR, `owner` CHAR, `owner_T` CHAR); CREATE TABLE IF NOT EXISTS `cat_banks_qualifier` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `КоррСчет` CHAR, `Город` CHAR, `address` CHAR, `Телефоны` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `НазначениеСвойства` CHAR, `type` JSON); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `value_T` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `parent` CHAR, `type` CHAR, `ts_Элементы` JSON); CREATE TABLE IF NOT EXISTS `cch_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR, `type` CHAR); CREATE TABLE IF NOT EXISTS `enm_individual_legal` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_users_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_nom_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_contact_information_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_vat_rates` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_obj_delivery_states` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_stores_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_costs_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_contract_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_mutual_contract_settlements` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); ', []);

$p.md.create_managers=function(){
$p.enm.accumulation_record_type = new $p.EnumManager('enm.accumulation_record_type');
$p.enm.mutual_contract_settlements = new $p.EnumManager('enm.mutual_contract_settlements');
$p.enm.contract_kinds = new $p.EnumManager('enm.contract_kinds');
$p.enm.costs_kinds = new $p.EnumManager('enm.costs_kinds');
$p.enm.stores_kinds = new $p.EnumManager('enm.stores_kinds');
$p.enm.obj_delivery_states = new $p.EnumManager('enm.obj_delivery_states');
$p.enm.vat_rates = new $p.EnumManager('enm.vat_rates');
$p.enm.contact_information_types = new $p.EnumManager('enm.contact_information_types');
$p.enm.nom_types = new $p.EnumManager('enm.nom_types');
$p.enm.users_types = new $p.EnumManager('enm.users_types');
$p.enm.individual_legal = new $p.EnumManager('enm.individual_legal');

/**
* ### План видов характеристик НазначенияСвойствКатегорийОбъектов
* Назначения свойств категорий объектов
* @class CchDestinations
* @extends CatObj
* @constructor 
*/
function CchDestinations(attr, manager){CchDestinations.superclass.constructor.call(this, attr, manager)}
CchDestinations._extend($p.CatObj);
$p.CchDestinations = CchDestinations;
CchDestinations.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true}});
$p.cch.destinations = new $p.ChartOfCharacteristicManager('cch.destinations');

/**
* ### План видов характеристик ПредопределенныеЭлементы
* Хранит значения настроек и параметров подсистем
* @class CchPredefined_elmnts
* @extends CatObj
* @constructor 
*/
function CchPredefined_elmnts(attr, manager){CchPredefined_elmnts.superclass.constructor.call(this, attr, manager)}
CchPredefined_elmnts._extend($p.CatObj);
$p.CchPredefined_elmnts = CchPredefined_elmnts;
CchPredefined_elmnts.prototype.__define({value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
synonym: {get: function(){return this._getter('synonym')}, set: function(v){this._setter('synonym',v)}, enumerable: true, configurable: true},
list: {get: function(){return this._getter('list')}, set: function(v){this._setter('list',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true}});
function CchPredefined_elmntsЭлементыRow(owner){CchPredefined_elmntsЭлементыRow.superclass.constructor.call(this, owner)};
CchPredefined_elmntsЭлементыRow._extend($p.TabularSectionRow);
$p.CchPredefined_elmntsЭлементыRow = CchPredefined_elmntsЭлементыRow;
CchPredefined_elmntsЭлементыRow.prototype.__define({value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
elm: {get: function(){return this._getter('elm')}, set: function(v){this._setter('elm',v)}, enumerable: true, configurable: true}});
CchPredefined_elmnts.prototype.__define('Элементы', {get: function(){return this._getter_ts('Элементы')}, set: function(v){this._setter_ts('Элементы',v)}, enumerable: true, configurable: true});
$p.cch.predefined_elmnts = new $p.ChartOfCharacteristicManager('cch.predefined_elmnts');

/**
* ### План видов характеристик СвойстваОбъектов
* Свойства объектов
* @class CchProperties
* @extends CatObj
* @constructor 
*/
function CchProperties(attr, manager){CchProperties.superclass.constructor.call(this, attr, manager)}
CchProperties._extend($p.CatObj);
$p.CchProperties = CchProperties;
CchProperties.prototype.__define({НазначениеСвойства: {get: function(){return this._getter('НазначениеСвойства')}, set: function(v){this._setter('НазначениеСвойства',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true}});
$p.cch.properties = new $p.ChartOfCharacteristicManager('cch.properties');

/**
* ### Справочник Банки
* Банки
* @class CatBanks_qualifier
* @extends CatObj
* @constructor 
*/
function CatBanks_qualifier(attr, manager){CatBanks_qualifier.superclass.constructor.call(this, attr, manager)}
CatBanks_qualifier._extend($p.CatObj);
$p.CatBanks_qualifier = CatBanks_qualifier;
CatBanks_qualifier.prototype.__define({КоррСчет: {get: function(){return this._getter('КоррСчет')}, set: function(v){this._setter('КоррСчет',v)}, enumerable: true, configurable: true},
Город: {get: function(){return this._getter('Город')}, set: function(v){this._setter('Город',v)}, enumerable: true, configurable: true},
address: {get: function(){return this._getter('address')}, set: function(v){this._setter('address',v)}, enumerable: true, configurable: true},
Телефоны: {get: function(){return this._getter('Телефоны')}, set: function(v){this._setter('Телефоны',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.banks_qualifier = new $p.CatManager('cat.banks_qualifier');

/**
* ### Справочник БанковскиеСчета
* Банковские счета организаций и контрагентов
* @class CatBank_accounts
* @extends CatObj
* @constructor 
*/
function CatBank_accounts(attr, manager){CatBank_accounts.superclass.constructor.call(this, attr, manager)}
CatBank_accounts._extend($p.CatObj);
$p.CatBank_accounts = CatBank_accounts;
CatBank_accounts.prototype.__define({НомерСчета: {get: function(){return this._getter('НомерСчета')}, set: function(v){this._setter('НомерСчета',v)}, enumerable: true, configurable: true},
Банк: {get: function(){return this._getter('Банк')}, set: function(v){this._setter('Банк',v)}, enumerable: true, configurable: true},
БанкДляРасчетов: {get: function(){return this._getter('БанкДляРасчетов')}, set: function(v){this._setter('БанкДляРасчетов',v)}, enumerable: true, configurable: true},
ТекстКорреспондента: {get: function(){return this._getter('ТекстКорреспондента')}, set: function(v){this._setter('ТекстКорреспондента',v)}, enumerable: true, configurable: true},
ТекстНазначения: {get: function(){return this._getter('ТекстНазначения')}, set: function(v){this._setter('ТекстНазначения',v)}, enumerable: true, configurable: true},
ВидСчета: {get: function(){return this._getter('ВидСчета')}, set: function(v){this._setter('ВидСчета',v)}, enumerable: true, configurable: true},
funds_currency: {get: function(){return this._getter('funds_currency')}, set: function(v){this._setter('funds_currency',v)}, enumerable: true, configurable: true},
НомерИДатаРазрешения: {get: function(){return this._getter('НомерИДатаРазрешения')}, set: function(v){this._setter('НомерИДатаРазрешения',v)}, enumerable: true, configurable: true},
ДатаОткрытия: {get: function(){return this._getter('ДатаОткрытия')}, set: function(v){this._setter('ДатаОткрытия',v)}, enumerable: true, configurable: true},
ДатаЗакрытия: {get: function(){return this._getter('ДатаЗакрытия')}, set: function(v){this._setter('ДатаЗакрытия',v)}, enumerable: true, configurable: true},
МесяцПрописью: {get: function(){return this._getter('МесяцПрописью')}, set: function(v){this._setter('МесяцПрописью',v)}, enumerable: true, configurable: true},
СуммаБезКопеек: {get: function(){return this._getter('СуммаБезКопеек')}, set: function(v){this._setter('СуммаБезКопеек',v)}, enumerable: true, configurable: true},
ОтдельныйСчетГОЗ: {get: function(){return this._getter('ОтдельныйСчетГОЗ')}, set: function(v){this._setter('ОтдельныйСчетГОЗ',v)}, enumerable: true, configurable: true},
ГосударственныйКонтракт: {get: function(){return this._getter('ГосударственныйКонтракт')}, set: function(v){this._setter('ГосударственныйКонтракт',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.bank_accounts = new $p.CatManager('cat.bank_accounts');

/**
* ### Справочник Валюты
* Валюты
* @class CatCurrencies
* @extends CatObj
* @constructor 
*/
function CatCurrencies(attr, manager){CatCurrencies.superclass.constructor.call(this, attr, manager)}
CatCurrencies._extend($p.CatObj);
$p.CatCurrencies = CatCurrencies;
CatCurrencies.prototype.__define({name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
ПараметрыПрописиНаРусском: {get: function(){return this._getter('ПараметрыПрописиНаРусском')}, set: function(v){this._setter('ПараметрыПрописиНаРусском',v)}, enumerable: true, configurable: true}});
$p.cat.currencies = new $p.CatManager('cat.currencies');

/**
* ### Справочник ВидыКонтактнойИнформации
* Виды контактной информации
* @class CatContact_information_kinds
* @extends CatObj
* @constructor 
*/
function CatContact_information_kinds(attr, manager){CatContact_information_kinds.superclass.constructor.call(this, attr, manager)}
CatContact_information_kinds._extend($p.CatObj);
$p.CatContact_information_kinds = CatContact_information_kinds;
CatContact_information_kinds.prototype.__define({type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
ВидОбъектаКонтактнойИнформации: {get: function(){return this._getter('ВидОбъектаКонтактнойИнформации')}, set: function(v){this._setter('ВидОбъектаКонтактнойИнформации',v)}, enumerable: true, configurable: true}});
$p.cat.contact_information_kinds = new $p.CatManager('cat.contact_information_kinds');

/**
* ### Справочник ВидыНоменклатуры
* Виды номенклатуры
* @class CatNom_kinds
* @extends CatObj
* @constructor 
*/
function CatNom_kinds(attr, manager){CatNom_kinds.superclass.constructor.call(this, attr, manager)}
CatNom_kinds._extend($p.CatObj);
$p.CatNom_kinds = CatNom_kinds;
CatNom_kinds.prototype.__define({nom_type: {get: function(){return this._getter('nom_type')}, set: function(v){this._setter('nom_type',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.nom_kinds = new $p.CatManager('cat.nom_kinds');

/**
* ### Справочник ДоговорыКонтрагентов
* Перечень договоров, заключенных с контрагентами
* @class CatContracts
* @extends CatObj
* @constructor 
*/
function CatContracts(attr, manager){CatContracts.superclass.constructor.call(this, attr, manager)}
CatContracts._extend($p.CatObj);
$p.CatContracts = CatContracts;
CatContracts.prototype.__define({settlements_currency: {get: function(){return this._getter('settlements_currency')}, set: function(v){this._setter('settlements_currency',v)}, enumerable: true, configurable: true},
mutual_settlements: {get: function(){return this._getter('mutual_settlements')}, set: function(v){this._setter('mutual_settlements',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
check_days_without_pay: {get: function(){return this._getter('check_days_without_pay')}, set: function(v){this._setter('check_days_without_pay',v)}, enumerable: true, configurable: true},
allowable_debts_amount: {get: function(){return this._getter('allowable_debts_amount')}, set: function(v){this._setter('allowable_debts_amount',v)}, enumerable: true, configurable: true},
allowable_debts_days: {get: function(){return this._getter('allowable_debts_days')}, set: function(v){this._setter('allowable_debts_days',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
check_debts_amount: {get: function(){return this._getter('check_debts_amount')}, set: function(v){this._setter('check_debts_amount',v)}, enumerable: true, configurable: true},
check_debts_days: {get: function(){return this._getter('check_debts_days')}, set: function(v){this._setter('check_debts_days',v)}, enumerable: true, configurable: true},
prepayment_percent: {get: function(){return this._getter('prepayment_percent')}, set: function(v){this._setter('prepayment_percent',v)}, enumerable: true, configurable: true},
price_type: {get: function(){return this._getter('price_type')}, set: function(v){this._setter('price_type',v)}, enumerable: true, configurable: true},
contract_kind: {get: function(){return this._getter('contract_kind')}, set: function(v){this._setter('contract_kind',v)}, enumerable: true, configurable: true},
ЧислоДнейРезерваБезОплаты: {get: function(){return this._getter('ЧислоДнейРезерваБезОплаты')}, set: function(v){this._setter('ЧислоДнейРезерваБезОплаты',v)}, enumerable: true, configurable: true},
date: {get: function(){return this._getter('date')}, set: function(v){this._setter('date',v)}, enumerable: true, configurable: true},
number_doc: {get: function(){return this._getter('number_doc')}, set: function(v){this._setter('number_doc',v)}, enumerable: true, configurable: true},
main_project: {get: function(){return this._getter('main_project')}, set: function(v){this._setter('main_project',v)}, enumerable: true, configurable: true},
main_cash_flow_article: {get: function(){return this._getter('main_cash_flow_article')}, set: function(v){this._setter('main_cash_flow_article',v)}, enumerable: true, configurable: true},
СрокДействия: {get: function(){return this._getter('СрокДействия')}, set: function(v){this._setter('СрокДействия',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.contracts = new $p.CatManager('cat.contracts');

/**
* ### Справочник ЕдиницыИзмерения
* Перечень единиц измерения номенклатуры и номенклатурных групп
* @class CatNom_units
* @extends CatObj
* @constructor 
*/
function CatNom_units(attr, manager){CatNom_units.superclass.constructor.call(this, attr, manager)}
CatNom_units._extend($p.CatObj);
$p.CatNom_units = CatNom_units;
CatNom_units.prototype.__define({qualifier_unit: {get: function(){return this._getter('qualifier_unit')}, set: function(v){this._setter('qualifier_unit',v)}, enumerable: true, configurable: true},
Вес: {get: function(){return this._getter('Вес')}, set: function(v){this._setter('Вес',v)}, enumerable: true, configurable: true},
Объем: {get: function(){return this._getter('Объем')}, set: function(v){this._setter('Объем',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
ПорогОкругления: {get: function(){return this._getter('ПорогОкругления')}, set: function(v){this._setter('ПорогОкругления',v)}, enumerable: true, configurable: true},
ПредупреждатьОНецелыхМестах: {get: function(){return this._getter('ПредупреждатьОНецелыхМестах')}, set: function(v){this._setter('ПредупреждатьОНецелыхМестах',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.nom_units = new $p.CatManager('cat.nom_units');

/**
* ### Справочник ЗначенияСвойствОбъектов
* Значения свойств объектов (Классификатор)
* @class CatProperty_values
* @extends CatObj
* @constructor 
*/
function CatProperty_values(attr, manager){CatProperty_values.superclass.constructor.call(this, attr, manager)}
CatProperty_values._extend($p.CatObj);
$p.CatProperty_values = CatProperty_values;
CatProperty_values.prototype.__define({owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.property_values = new $p.CatManager('cat.property_values');

/**
* ### Справочник ИдентификаторыОбъектовМетаданных
* Идентификаторы объектов метаданных для использования в базе данных.
* @class CatMeta_ids
* @extends CatObj
* @constructor 
*/
function CatMeta_ids(attr, manager){CatMeta_ids.superclass.constructor.call(this, attr, manager)}
CatMeta_ids._extend($p.CatObj);
$p.CatMeta_ids = CatMeta_ids;
CatMeta_ids.prototype.__define({ПорядокКоллекции: {get: function(){return this._getter('ПорядокКоллекции')}, set: function(v){this._setter('ПорядокКоллекции',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
synonym: {get: function(){return this._getter('synonym')}, set: function(v){this._setter('synonym',v)}, enumerable: true, configurable: true},
ПолноеИмя: {get: function(){return this._getter('ПолноеИмя')}, set: function(v){this._setter('ПолноеИмя',v)}, enumerable: true, configurable: true},
ПолныйСиноним: {get: function(){return this._getter('ПолныйСиноним')}, set: function(v){this._setter('ПолныйСиноним',v)}, enumerable: true, configurable: true},
БезДанных: {get: function(){return this._getter('БезДанных')}, set: function(v){this._setter('БезДанных',v)}, enumerable: true, configurable: true},
ЗначениеПустойСсылки: {get: function(){return this._getter('ЗначениеПустойСсылки')}, set: function(v){this._setter('ЗначениеПустойСсылки',v)}, enumerable: true, configurable: true},
КлючОбъектаМетаданных: {get: function(){return this._getter('КлючОбъектаМетаданных')}, set: function(v){this._setter('КлючОбъектаМетаданных',v)}, enumerable: true, configurable: true},
НоваяСсылка: {get: function(){return this._getter('НоваяСсылка')}, set: function(v){this._setter('НоваяСсылка',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.meta_ids = new $p.CatManager('cat.meta_ids');

/**
* ### Справочник ИнтеграцияПраваПользователей
* Права внешних пользователей
* @class CatUsers_acl
* @extends CatObj
* @constructor 
*/
function CatUsers_acl(attr, manager){CatUsers_acl.superclass.constructor.call(this, attr, manager)}
CatUsers_acl._extend($p.CatObj);
$p.CatUsers_acl = CatUsers_acl;
CatUsers_acl.prototype.__define({prefix: {get: function(){return this._getter('prefix')}, set: function(v){this._setter('prefix',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
function CatUsers_aclAcl_objsRow(owner){CatUsers_aclAcl_objsRow.superclass.constructor.call(this, owner)};
CatUsers_aclAcl_objsRow._extend($p.TabularSectionRow);
$p.CatUsers_aclAcl_objsRow = CatUsers_aclAcl_objsRow;
CatUsers_aclAcl_objsRow.prototype.__define({acl_obj: {get: function(){return this._getter('acl_obj')}, set: function(v){this._setter('acl_obj',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
by_default: {get: function(){return this._getter('by_default')}, set: function(v){this._setter('by_default',v)}, enumerable: true, configurable: true}});
CatUsers_acl.prototype.__define('acl_objs', {get: function(){return this._getter_ts('acl_objs')}, set: function(v){this._setter_ts('acl_objs',v)}, enumerable: true, configurable: true});
$p.cat.users_acl = new $p.CatManager('cat.users_acl');

/**
* ### Справочник Кассы
* Кассы
* @class CatCashboxes
* @extends CatObj
* @constructor 
*/
function CatCashboxes(attr, manager){CatCashboxes.superclass.constructor.call(this, attr, manager)}
CatCashboxes._extend($p.CatObj);
$p.CatCashboxes = CatCashboxes;
CatCashboxes.prototype.__define({funds_currency: {get: function(){return this._getter('funds_currency')}, set: function(v){this._setter('funds_currency',v)}, enumerable: true, configurable: true},
ПодразделениеОрганизации: {get: function(){return this._getter('ПодразделениеОрганизации')}, set: function(v){this._setter('ПодразделениеОрганизации',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.cashboxes = new $p.CatManager('cat.cashboxes');

/**
* ### Справочник КатегорииОбъектов
* Категории объектов
* @class CatObj_categories
* @extends CatObj
* @constructor 
*/
function CatObj_categories(attr, manager){CatObj_categories.superclass.constructor.call(this, attr, manager)}
CatObj_categories._extend($p.CatObj);
$p.CatObj_categories = CatObj_categories;
CatObj_categories.prototype.__define({НазначениеКатегории: {get: function(){return this._getter('НазначениеКатегории')}, set: function(v){this._setter('НазначениеКатегории',v)}, enumerable: true, configurable: true}});
$p.cat.obj_categories = new $p.CatManager('cat.obj_categories');

/**
* ### Справочник Качество
* Качество
* @class CatQuality
* @extends CatObj
* @constructor 
*/
function CatQuality(attr, manager){CatQuality.superclass.constructor.call(this, attr, manager)}
CatQuality._extend($p.CatObj);
$p.CatQuality = CatQuality;
$p.cat.quality = new $p.CatManager('cat.quality');

/**
* ### Справочник КлассификаторЕдиницИзмерения
* Классификатор единиц измерения
* @class CatUnits
* @extends CatObj
* @constructor 
*/
function CatUnits(attr, manager){CatUnits.superclass.constructor.call(this, attr, manager)}
CatUnits._extend($p.CatObj);
$p.CatUnits = CatUnits;
CatUnits.prototype.__define({name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
МеждународноеСокращение: {get: function(){return this._getter('МеждународноеСокращение')}, set: function(v){this._setter('МеждународноеСокращение',v)}, enumerable: true, configurable: true}});
$p.cat.units = new $p.CatManager('cat.units');

/**
* ### Справочник КлассификаторСтранМира
* Классификатор стран мира
* @class CatCountries
* @extends CatObj
* @constructor 
*/
function CatCountries(attr, manager){CatCountries.superclass.constructor.call(this, attr, manager)}
CatCountries._extend($p.CatObj);
$p.CatCountries = CatCountries;
CatCountries.prototype.__define({name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
КодАльфа2: {get: function(){return this._getter('КодАльфа2')}, set: function(v){this._setter('КодАльфа2',v)}, enumerable: true, configurable: true}});
$p.cat.countries = new $p.CatManager('cat.countries');

/**
* ### Справочник КонтактныеЛица
* Контактные лица
* @class CatContact_persons
* @extends CatObj
* @constructor 
*/
function CatContact_persons(attr, manager){CatContact_persons.superclass.constructor.call(this, attr, manager)}
CatContact_persons._extend($p.CatObj);
$p.CatContact_persons = CatContact_persons;
CatContact_persons.prototype.__define({Фамилия: {get: function(){return this._getter('Фамилия')}, set: function(v){this._setter('Фамилия',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
Отчество: {get: function(){return this._getter('Отчество')}, set: function(v){this._setter('Отчество',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
Пол: {get: function(){return this._getter('Пол')}, set: function(v){this._setter('Пол',v)}, enumerable: true, configurable: true}});
$p.cat.contact_persons = new $p.CatManager('cat.contact_persons');

/**
* ### Справочник КонтактныеЛицаКонтрагентов
* Контактные лица контрагентов
* @class CatContact_persons_partners
* @extends CatObj
* @constructor 
*/
function CatContact_persons_partners(attr, manager){CatContact_persons_partners.superclass.constructor.call(this, attr, manager)}
CatContact_persons_partners._extend($p.CatObj);
$p.CatContact_persons_partners = CatContact_persons_partners;
CatContact_persons_partners.prototype.__define({Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
КонтактноеЛицо: {get: function(){return this._getter('КонтактноеЛицо')}, set: function(v){this._setter('КонтактноеЛицо',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.contact_persons_partners = new $p.CatManager('cat.contact_persons_partners');

/**
* ### Справочник Контрагенты
* Перечень контрагентов: поставщиков, покупателей, комиссионеров, комитентов и др.
* @class CatPartners
* @extends CatObj
* @constructor 
*/
function CatPartners(attr, manager){CatPartners.superclass.constructor.call(this, attr, manager)}
CatPartners._extend($p.CatObj);
$p.CatPartners = CatPartners;
CatPartners.prototype.__define({name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ДополнительноеОписание: {get: function(){return this._getter('ДополнительноеОписание')}, set: function(v){this._setter('ДополнительноеОписание',v)}, enumerable: true, configurable: true},
ГоловнойКонтрагент: {get: function(){return this._getter('ГоловнойКонтрагент')}, set: function(v){this._setter('ГоловнойКонтрагент',v)}, enumerable: true, configurable: true},
КодПоОКПО: {get: function(){return this._getter('КодПоОКПО')}, set: function(v){this._setter('КодПоОКПО',v)}, enumerable: true, configurable: true},
ИНН: {get: function(){return this._getter('ИНН')}, set: function(v){this._setter('ИНН',v)}, enumerable: true, configurable: true},
КПП: {get: function(){return this._getter('КПП')}, set: function(v){this._setter('КПП',v)}, enumerable: true, configurable: true},
individual_legal: {get: function(){return this._getter('individual_legal')}, set: function(v){this._setter('individual_legal',v)}, enumerable: true, configurable: true},
ОсновнойБанковскийСчет: {get: function(){return this._getter('ОсновнойБанковскийСчет')}, set: function(v){this._setter('ОсновнойБанковскийСчет',v)}, enumerable: true, configurable: true},
main_contract: {get: function(){return this._getter('main_contract')}, set: function(v){this._setter('main_contract',v)}, enumerable: true, configurable: true},
ДокументУдостоверяющийЛичность: {get: function(){return this._getter('ДокументУдостоверяющийЛичность')}, set: function(v){this._setter('ДокументУдостоверяющийЛичность',v)}, enumerable: true, configurable: true},
ОсновнойМенеджерПокупателя: {get: function(){return this._getter('ОсновнойМенеджерПокупателя')}, set: function(v){this._setter('ОсновнойМенеджерПокупателя',v)}, enumerable: true, configurable: true},
Покупатель: {get: function(){return this._getter('Покупатель')}, set: function(v){this._setter('Покупатель',v)}, enumerable: true, configurable: true},
Поставщик: {get: function(){return this._getter('Поставщик')}, set: function(v){this._setter('Поставщик',v)}, enumerable: true, configurable: true},
ОсновноеКонтактноеЛицо: {get: function(){return this._getter('ОсновноеКонтактноеЛицо')}, set: function(v){this._setter('ОсновноеКонтактноеЛицо',v)}, enumerable: true, configurable: true},
Регион: {get: function(){return this._getter('Регион')}, set: function(v){this._setter('Регион',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.partners = new $p.CatManager('cat.partners');

/**
* ### Справочник Номенклатура
* Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг
* @class CatNom
* @extends CatObj
* @constructor 
*/
function CatNom(attr, manager){CatNom.superclass.constructor.call(this, attr, manager)}
CatNom._extend($p.CatObj);
$p.CatNom = CatNom;
CatNom.prototype.__define({article: {get: function(){return this._getter('article')}, set: function(v){this._setter('article',v)}, enumerable: true, configurable: true},
ВестиОперативныйУчетОстатковНЗП: {get: function(){return this._getter('ВестиОперативныйУчетОстатковНЗП')}, set: function(v){this._setter('ВестиОперативныйУчетОстатковНЗП',v)}, enumerable: true, configurable: true},
ВестиУчетПоСериям: {get: function(){return this._getter('ВестиУчетПоСериям')}, set: function(v){this._setter('ВестиУчетПоСериям',v)}, enumerable: true, configurable: true},
ВестиУчетПоСериямВНЗП: {get: function(){return this._getter('ВестиУчетПоСериямВНЗП')}, set: function(v){this._setter('ВестиУчетПоСериямВНЗП',v)}, enumerable: true, configurable: true},
ВестиУчетПоХарактеристикам: {get: function(){return this._getter('ВестиУчетПоХарактеристикам')}, set: function(v){this._setter('ВестиУчетПоХарактеристикам',v)}, enumerable: true, configurable: true},
nom_kind: {get: function(){return this._getter('nom_kind')}, set: function(v){this._setter('nom_kind',v)}, enumerable: true, configurable: true},
ЕдиницаДляОтчетов: {get: function(){return this._getter('ЕдиницаДляОтчетов')}, set: function(v){this._setter('ЕдиницаДляОтчетов',v)}, enumerable: true, configurable: true},
storage_unit: {get: function(){return this._getter('storage_unit')}, set: function(v){this._setter('storage_unit',v)}, enumerable: true, configurable: true},
base_unit: {get: function(){return this._getter('base_unit')}, set: function(v){this._setter('base_unit',v)}, enumerable: true, configurable: true},
Набор: {get: function(){return this._getter('Набор')}, set: function(v){this._setter('Набор',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
Услуга: {get: function(){return this._getter('Услуга')}, set: function(v){this._setter('Услуга',v)}, enumerable: true, configurable: true},
nom_group: {get: function(){return this._getter('nom_group')}, set: function(v){this._setter('nom_group',v)}, enumerable: true, configurable: true},
СтранаПроисхождения: {get: function(){return this._getter('СтранаПроисхождения')}, set: function(v){this._setter('СтранаПроисхождения',v)}, enumerable: true, configurable: true},
НомерГТД: {get: function(){return this._getter('НомерГТД')}, set: function(v){this._setter('НомерГТД',v)}, enumerable: true, configurable: true},
ТребуетсяВнешняяСертификация: {get: function(){return this._getter('ТребуетсяВнешняяСертификация')}, set: function(v){this._setter('ТребуетсяВнешняяСертификация',v)}, enumerable: true, configurable: true},
ТребуетсяВнутренняяСертификация: {get: function(){return this._getter('ТребуетсяВнутренняяСертификация')}, set: function(v){this._setter('ТребуетсяВнутренняяСертификация',v)}, enumerable: true, configurable: true},
cost_item: {get: function(){return this._getter('cost_item')}, set: function(v){this._setter('cost_item',v)}, enumerable: true, configurable: true},
ВестиСерийныеНомера: {get: function(){return this._getter('ВестиСерийныеНомера')}, set: function(v){this._setter('ВестиСерийныеНомера',v)}, enumerable: true, configurable: true},
Комплект: {get: function(){return this._getter('Комплект')}, set: function(v){this._setter('Комплект',v)}, enumerable: true, configurable: true},
price_group: {get: function(){return this._getter('price_group')}, set: function(v){this._setter('price_group',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
Производитель: {get: function(){return this._getter('Производитель')}, set: function(v){this._setter('Производитель',v)}, enumerable: true, configurable: true},
Импортер: {get: function(){return this._getter('Импортер')}, set: function(v){this._setter('Импортер',v)}, enumerable: true, configurable: true},
ПроцентСрокаГодности: {get: function(){return this._getter('ПроцентСрокаГодности')}, set: function(v){this._setter('ПроцентСрокаГодности',v)}, enumerable: true, configurable: true},
ВремяПроверкиЗаказа: {get: function(){return this._getter('ВремяПроверкиЗаказа')}, set: function(v){this._setter('ВремяПроверкиЗаказа',v)}, enumerable: true, configurable: true},
МинимальнаяПартияЗакупки: {get: function(){return this._getter('МинимальнаяПартияЗакупки')}, set: function(v){this._setter('МинимальнаяПартияЗакупки',v)}, enumerable: true, configurable: true},
ЦиклПоставкиДней: {get: function(){return this._getter('ЦиклПоставкиДней')}, set: function(v){this._setter('ЦиклПоставкиДней',v)}, enumerable: true, configurable: true},
РегистрационныйНомер: {get: function(){return this._getter('РегистрационныйНомер')}, set: function(v){this._setter('РегистрационныйНомер',v)}, enumerable: true, configurable: true},
ФормулаОсновногоДействующегоВещества: {get: function(){return this._getter('ФормулаОсновногоДействующегоВещества')}, set: function(v){this._setter('ФормулаОсновногоДействующегоВещества',v)}, enumerable: true, configurable: true},
Дозировка: {get: function(){return this._getter('Дозировка')}, set: function(v){this._setter('Дозировка',v)}, enumerable: true, configurable: true},
Упаковка: {get: function(){return this._getter('Упаковка')}, set: function(v){this._setter('Упаковка',v)}, enumerable: true, configurable: true},
ЛекарственнаяФорма: {get: function(){return this._getter('ЛекарственнаяФорма')}, set: function(v){this._setter('ЛекарственнаяФорма',v)}, enumerable: true, configurable: true},
ЖНВЛП: {get: function(){return this._getter('ЖНВЛП')}, set: function(v){this._setter('ЖНВЛП',v)}, enumerable: true, configurable: true},
Изготовитель: {get: function(){return this._getter('Изготовитель')}, set: function(v){this._setter('Изготовитель',v)}, enumerable: true, configurable: true},
НаименованиеМеждународное: {get: function(){return this._getter('НаименованиеМеждународное')}, set: function(v){this._setter('НаименованиеМеждународное',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.nom = new $p.CatManager('cat.nom');

/**
* ### Справочник НоменклатурныеГруппы
* Перечень номенклатурных групп для учета затрат и укрупненного планирования продаж, закупок и производства
* @class CatNom_groups
* @extends CatObj
* @constructor 
*/
function CatNom_groups(attr, manager){CatNom_groups.superclass.constructor.call(this, attr, manager)}
CatNom_groups._extend($p.CatObj);
$p.CatNom_groups = CatNom_groups;
CatNom_groups.prototype.__define({storage_unit: {get: function(){return this._getter('storage_unit')}, set: function(v){this._setter('storage_unit',v)}, enumerable: true, configurable: true},
base_unit: {get: function(){return this._getter('base_unit')}, set: function(v){this._setter('base_unit',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.nom_groups = new $p.CatManager('cat.nom_groups');

/**
* ### Справочник НомераГТД
* Номера ГТД
* @class CatGtd_numbers
* @extends CatObj
* @constructor 
*/
function CatGtd_numbers(attr, manager){CatGtd_numbers.superclass.constructor.call(this, attr, manager)}
CatGtd_numbers._extend($p.CatObj);
$p.CatGtd_numbers = CatGtd_numbers;
CatGtd_numbers.prototype.__define({note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true}});
$p.cat.gtd_numbers = new $p.CatManager('cat.gtd_numbers');

/**
* ### Справочник Организации
* Перечень организаций, входящих в состав предприятия
* @class CatOrganizations
* @extends CatObj
* @constructor 
*/
function CatOrganizations(attr, manager){CatOrganizations.superclass.constructor.call(this, attr, manager)}
CatOrganizations._extend($p.CatObj);
$p.CatOrganizations = CatOrganizations;
CatOrganizations.prototype.__define({prefix: {get: function(){return this._getter('prefix')}, set: function(v){this._setter('prefix',v)}, enumerable: true, configurable: true},
ИНН: {get: function(){return this._getter('ИНН')}, set: function(v){this._setter('ИНН',v)}, enumerable: true, configurable: true},
КПП: {get: function(){return this._getter('КПП')}, set: function(v){this._setter('КПП',v)}, enumerable: true, configurable: true},
РегистрационныйНомерПФР: {get: function(){return this._getter('РегистрационныйНомерПФР')}, set: function(v){this._setter('РегистрационныйНомерПФР',v)}, enumerable: true, configurable: true},
ГоловнаяОрганизация: {get: function(){return this._getter('ГоловнаяОрганизация')}, set: function(v){this._setter('ГоловнаяОрганизация',v)}, enumerable: true, configurable: true},
name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
КодПоОКПО: {get: function(){return this._getter('КодПоОКПО')}, set: function(v){this._setter('КодПоОКПО',v)}, enumerable: true, configurable: true},
КодПоОКАТО: {get: function(){return this._getter('КодПоОКАТО')}, set: function(v){this._setter('КодПоОКАТО',v)}, enumerable: true, configurable: true},
КодИМНС: {get: function(){return this._getter('КодИМНС')}, set: function(v){this._setter('КодИМНС',v)}, enumerable: true, configurable: true},
РайонныйКоэффициент: {get: function(){return this._getter('РайонныйКоэффициент')}, set: function(v){this._setter('РайонныйКоэффициент',v)}, enumerable: true, configurable: true},
individual_legal: {get: function(){return this._getter('individual_legal')}, set: function(v){this._setter('individual_legal',v)}, enumerable: true, configurable: true},
ТерриториальныеУсловияПФР: {get: function(){return this._getter('ТерриториальныеУсловияПФР')}, set: function(v){this._setter('ТерриториальныеУсловияПФР',v)}, enumerable: true, configurable: true},
ОсновнойБанковскийСчет: {get: function(){return this._getter('ОсновнойБанковскийСчет')}, set: function(v){this._setter('ОсновнойБанковскийСчет',v)}, enumerable: true, configurable: true},
ВидСтавокЕСНиПФР: {get: function(){return this._getter('ВидСтавокЕСНиПФР')}, set: function(v){this._setter('ВидСтавокЕСНиПФР',v)}, enumerable: true, configurable: true},
НаименованиеПлательщикаПриПеречисленииНалогов: {get: function(){return this._getter('НаименованиеПлательщикаПриПеречисленииНалогов')}, set: function(v){this._setter('НаименованиеПлательщикаПриПеречисленииНалогов',v)}, enumerable: true, configurable: true},
ИностраннаяОрганизация: {get: function(){return this._getter('ИностраннаяОрганизация')}, set: function(v){this._setter('ИностраннаяОрганизация',v)}, enumerable: true, configurable: true},
ДатаРегистрации: {get: function(){return this._getter('ДатаРегистрации')}, set: function(v){this._setter('ДатаРегистрации',v)}, enumerable: true, configurable: true},
КодОКОПФ: {get: function(){return this._getter('КодОКОПФ')}, set: function(v){this._setter('КодОКОПФ',v)}, enumerable: true, configurable: true},
НаименованиеОКОПФ: {get: function(){return this._getter('НаименованиеОКОПФ')}, set: function(v){this._setter('НаименованиеОКОПФ',v)}, enumerable: true, configurable: true},
КодОКФС: {get: function(){return this._getter('КодОКФС')}, set: function(v){this._setter('КодОКФС',v)}, enumerable: true, configurable: true},
НаименованиеОКФС: {get: function(){return this._getter('НаименованиеОКФС')}, set: function(v){this._setter('НаименованиеОКФС',v)}, enumerable: true, configurable: true},
СвидетельствоСерияНомер: {get: function(){return this._getter('СвидетельствоСерияНомер')}, set: function(v){this._setter('СвидетельствоСерияНомер',v)}, enumerable: true, configurable: true},
СвидетельствоДатаВыдачи: {get: function(){return this._getter('СвидетельствоДатаВыдачи')}, set: function(v){this._setter('СвидетельствоДатаВыдачи',v)}, enumerable: true, configurable: true},
СвидетельствоНаименованиеОргана: {get: function(){return this._getter('СвидетельствоНаименованиеОргана')}, set: function(v){this._setter('СвидетельствоНаименованиеОргана',v)}, enumerable: true, configurable: true},
СвидетельствоКодОргана: {get: function(){return this._getter('СвидетельствоКодОргана')}, set: function(v){this._setter('СвидетельствоКодОргана',v)}, enumerable: true, configurable: true},
СтранаРегистрации: {get: function(){return this._getter('СтранаРегистрации')}, set: function(v){this._setter('СтранаРегистрации',v)}, enumerable: true, configurable: true},
СтранаПостоянногоМестонахождения: {get: function(){return this._getter('СтранаПостоянногоМестонахождения')}, set: function(v){this._setter('СтранаПостоянногоМестонахождения',v)}, enumerable: true, configurable: true},
КодВСтранеРегистрации: {get: function(){return this._getter('КодВСтранеРегистрации')}, set: function(v){this._setter('КодВСтранеРегистрации',v)}, enumerable: true, configurable: true},
ОГРН: {get: function(){return this._getter('ОГРН')}, set: function(v){this._setter('ОГРН',v)}, enumerable: true, configurable: true},
НаименованиеИнострОрганизации: {get: function(){return this._getter('НаименованиеИнострОрганизации')}, set: function(v){this._setter('НаименованиеИнострОрганизации',v)}, enumerable: true, configurable: true},
РегистрационныйНомерФСС: {get: function(){return this._getter('РегистрационныйНомерФСС')}, set: function(v){this._setter('РегистрационныйНомерФСС',v)}, enumerable: true, configurable: true},
НаименованиеИМНС: {get: function(){return this._getter('НаименованиеИМНС')}, set: function(v){this._setter('НаименованиеИМНС',v)}, enumerable: true, configurable: true},
КодОКВЭД: {get: function(){return this._getter('КодОКВЭД')}, set: function(v){this._setter('КодОКВЭД',v)}, enumerable: true, configurable: true},
НаименованиеОКВЭД: {get: function(){return this._getter('НаименованиеОКВЭД')}, set: function(v){this._setter('НаименованиеОКВЭД',v)}, enumerable: true, configurable: true},
КодОКОНХ: {get: function(){return this._getter('КодОКОНХ')}, set: function(v){this._setter('КодОКОНХ',v)}, enumerable: true, configurable: true},
ИндивидуальныйПредприниматель: {get: function(){return this._getter('ИндивидуальныйПредприниматель')}, set: function(v){this._setter('ИндивидуальныйПредприниматель',v)}, enumerable: true, configurable: true},
ОбменКодАбонента: {get: function(){return this._getter('ОбменКодАбонента')}, set: function(v){this._setter('ОбменКодАбонента',v)}, enumerable: true, configurable: true},
ОбменКаталогОтправкиДанныхОтчетности: {get: function(){return this._getter('ОбменКаталогОтправкиДанныхОтчетности')}, set: function(v){this._setter('ОбменКаталогОтправкиДанныхОтчетности',v)}, enumerable: true, configurable: true},
ОбменКаталогПрограммыЭлектроннойПочты: {get: function(){return this._getter('ОбменКаталогПрограммыЭлектроннойПочты')}, set: function(v){this._setter('ОбменКаталогПрограммыЭлектроннойПочты',v)}, enumerable: true, configurable: true},
РайонныйКоэффициентРФ: {get: function(){return this._getter('РайонныйКоэффициентРФ')}, set: function(v){this._setter('РайонныйКоэффициентРФ',v)}, enumerable: true, configurable: true},
ОтражатьВРегламентированномУчете: {get: function(){return this._getter('ОтражатьВРегламентированномУчете')}, set: function(v){this._setter('ОтражатьВРегламентированномУчете',v)}, enumerable: true, configurable: true},
КодИФНСПолучателя: {get: function(){return this._getter('КодИФНСПолучателя')}, set: function(v){this._setter('КодИФНСПолучателя',v)}, enumerable: true, configurable: true},
НаименованиеТерриториальногоОрганаПФР: {get: function(){return this._getter('НаименованиеТерриториальногоОрганаПФР')}, set: function(v){this._setter('НаименованиеТерриториальногоОрганаПФР',v)}, enumerable: true, configurable: true},
НаименованиеСокращенное: {get: function(){return this._getter('НаименованиеСокращенное')}, set: function(v){this._setter('НаименованиеСокращенное',v)}, enumerable: true, configurable: true},
ВидОбменаСКонтролирующимиОрганами: {get: function(){return this._getter('ВидОбменаСКонтролирующимиОрганами')}, set: function(v){this._setter('ВидОбменаСКонтролирующимиОрганами',v)}, enumerable: true, configurable: true},
УчетнаяЗаписьОбмена: {get: function(){return this._getter('УчетнаяЗаписьОбмена')}, set: function(v){this._setter('УчетнаяЗаписьОбмена',v)}, enumerable: true, configurable: true},
КодОрганаПФР: {get: function(){return this._getter('КодОрганаПФР')}, set: function(v){this._setter('КодОрганаПФР',v)}, enumerable: true, configurable: true},
КодОрганаФСГС: {get: function(){return this._getter('КодОрганаФСГС')}, set: function(v){this._setter('КодОрганаФСГС',v)}, enumerable: true, configurable: true},
ДополнительныйКодФСС: {get: function(){return this._getter('ДополнительныйКодФСС')}, set: function(v){this._setter('ДополнительныйКодФСС',v)}, enumerable: true, configurable: true},
КодПодчиненностиФСС: {get: function(){return this._getter('КодПодчиненностиФСС')}, set: function(v){this._setter('КодПодчиненностиФСС',v)}, enumerable: true, configurable: true},
ЦифровойИндексОбособленногоПодразделения: {get: function(){return this._getter('ЦифровойИндексОбособленногоПодразделения')}, set: function(v){this._setter('ЦифровойИндексОбособленногоПодразделения',v)}, enumerable: true, configurable: true},
РегистрационныйНомерТФОМС: {get: function(){return this._getter('РегистрационныйНомерТФОМС')}, set: function(v){this._setter('РегистрационныйНомерТФОМС',v)}, enumerable: true, configurable: true},
ИПРегистрационныйНомерПФР: {get: function(){return this._getter('ИПРегистрационныйНомерПФР')}, set: function(v){this._setter('ИПРегистрационныйНомерПФР',v)}, enumerable: true, configurable: true},
ИПРегистрационныйНомерФСС: {get: function(){return this._getter('ИПРегистрационныйНомерФСС')}, set: function(v){this._setter('ИПРегистрационныйНомерФСС',v)}, enumerable: true, configurable: true},
ИПКодПодчиненностиФСС: {get: function(){return this._getter('ИПКодПодчиненностиФСС')}, set: function(v){this._setter('ИПКодПодчиненностиФСС',v)}, enumerable: true, configurable: true},
ИПРегистрационныйНомерТФОМС: {get: function(){return this._getter('ИПРегистрационныйНомерТФОМС')}, set: function(v){this._setter('ИПРегистрационныйНомерТФОМС',v)}, enumerable: true, configurable: true},
НаименованиеТерриториальногоОрганаФСС: {get: function(){return this._getter('НаименованиеТерриториальногоОрганаФСС')}, set: function(v){this._setter('НаименованиеТерриториальногоОрганаФСС',v)}, enumerable: true, configurable: true},
КодПоОКТМО: {get: function(){return this._getter('КодПоОКТМО')}, set: function(v){this._setter('КодПоОКТМО',v)}, enumerable: true, configurable: true},
Регион: {get: function(){return this._getter('Регион')}, set: function(v){this._setter('Регион',v)}, enumerable: true, configurable: true}});
$p.cat.organizations = new $p.CatManager('cat.organizations');

/**
* ### Справочник Подразделения
* Перечень подразделений предприятия
* @class CatDivisions
* @extends CatObj
* @constructor 
*/
function CatDivisions(attr, manager){CatDivisions.superclass.constructor.call(this, attr, manager)}
CatDivisions._extend($p.CatObj);
$p.CatDivisions = CatDivisions;
CatDivisions.prototype.__define({ВидПодразделения: {get: function(){return this._getter('ВидПодразделения')}, set: function(v){this._setter('ВидПодразделения',v)}, enumerable: true, configurable: true},
ВидЦФО: {get: function(){return this._getter('ВидЦФО')}, set: function(v){this._setter('ВидЦФО',v)}, enumerable: true, configurable: true},
main_project: {get: function(){return this._getter('main_project')}, set: function(v){this._setter('main_project',v)}, enumerable: true, configurable: true},
sequence: {get: function(){return this._getter('sequence')}, set: function(v){this._setter('sequence',v)}, enumerable: true, configurable: true},
warehouse: {get: function(){return this._getter('warehouse')}, set: function(v){this._setter('warehouse',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.divisions = new $p.CatManager('cat.divisions');

/**
* ### Справочник Пользователи
* Перечень пользователей информационной базы
* @class CatUsers
* @extends CatObj
* @constructor 
*/
function CatUsers(attr, manager){CatUsers.superclass.constructor.call(this, attr, manager)}
CatUsers._extend($p.CatObj);
$p.CatUsers = CatUsers;
CatUsers.prototype.__define({ФизЛицо: {get: function(){return this._getter('ФизЛицо')}, set: function(v){this._setter('ФизЛицо',v)}, enumerable: true, configurable: true},
ИдентификаторПользователяИБ: {get: function(){return this._getter('ИдентификаторПользователяИБ')}, set: function(v){this._setter('ИдентификаторПользователяИБ',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.users = new $p.CatManager('cat.users');

/**
* ### Справочник ПричиныЗакрытияЗаказов
* Причины закрытия заказов
* @class CatOrders_closing_reasons
* @extends CatObj
* @constructor 
*/
function CatOrders_closing_reasons(attr, manager){CatOrders_closing_reasons.superclass.constructor.call(this, attr, manager)}
CatOrders_closing_reasons._extend($p.CatObj);
$p.CatOrders_closing_reasons = CatOrders_closing_reasons;
$p.cat.orders_closing_reasons = new $p.CatManager('cat.orders_closing_reasons');

/**
* ### Справочник Проекты
* Проекты
* @class CatProjects
* @extends CatObj
* @constructor 
*/
function CatProjects(attr, manager){CatProjects.superclass.constructor.call(this, attr, manager)}
CatProjects._extend($p.CatObj);
$p.CatProjects = CatProjects;
CatProjects.prototype.__define({ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.projects = new $p.CatManager('cat.projects');

/**
* ### Справочник Регионы
* Регионы
* @class CatRegions
* @extends CatObj
* @constructor 
*/
function CatRegions(attr, manager){CatRegions.superclass.constructor.call(this, attr, manager)}
CatRegions._extend($p.CatObj);
$p.CatRegions = CatRegions;
CatRegions.prototype.__define({note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
КодРегиона: {get: function(){return this._getter('КодРегиона')}, set: function(v){this._setter('КодРегиона',v)}, enumerable: true, configurable: true},
КодАдресногоЭлемента: {get: function(){return this._getter('КодАдресногоЭлемента')}, set: function(v){this._setter('КодАдресногоЭлемента',v)}, enumerable: true, configurable: true},
ЖДСтанцияНазначения: {get: function(){return this._getter('ЖДСтанцияНазначения')}, set: function(v){this._setter('ЖДСтанцияНазначения',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.regions = new $p.CatManager('cat.regions');

/**
* ### Справочник СерииНоменклатуры
* Серии номенклатуры
* @class CatNom_series
* @extends CatObj
* @constructor 
*/
function CatNom_series(attr, manager){CatNom_series.superclass.constructor.call(this, attr, manager)}
CatNom_series._extend($p.CatObj);
$p.CatNom_series = CatNom_series;
CatNom_series.prototype.__define({СерийныйНомер: {get: function(){return this._getter('СерийныйНомер')}, set: function(v){this._setter('СерийныйНомер',v)}, enumerable: true, configurable: true},
СрокГодности: {get: function(){return this._getter('СрокГодности')}, set: function(v){this._setter('СрокГодности',v)}, enumerable: true, configurable: true},
НомерГТД: {get: function(){return this._getter('НомерГТД')}, set: function(v){this._setter('НомерГТД',v)}, enumerable: true, configurable: true},
СтранаПроисхождения: {get: function(){return this._getter('СтранаПроисхождения')}, set: function(v){this._setter('СтранаПроисхождения',v)}, enumerable: true, configurable: true},
ОсновноеИзображение: {get: function(){return this._getter('ОсновноеИзображение')}, set: function(v){this._setter('ОсновноеИзображение',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ТехническийНомер: {get: function(){return this._getter('ТехническийНомер')}, set: function(v){this._setter('ТехническийНомер',v)}, enumerable: true, configurable: true},
ДатаИзготовления: {get: function(){return this._getter('ДатаИзготовления')}, set: function(v){this._setter('ДатаИзготовления',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
ОжидаемоеКоличествоВыпуска: {get: function(){return this._getter('ОжидаемоеКоличествоВыпуска')}, set: function(v){this._setter('ОжидаемоеКоличествоВыпуска',v)}, enumerable: true, configurable: true},
ДатаЗапускаСерии: {get: function(){return this._getter('ДатаЗапускаСерии')}, set: function(v){this._setter('ДатаЗапускаСерии',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
ЕдиницаМест: {get: function(){return this._getter('ЕдиницаМест')}, set: function(v){this._setter('ЕдиницаМест',v)}, enumerable: true, configurable: true},
Изготовитель: {get: function(){return this._getter('Изготовитель')}, set: function(v){this._setter('Изготовитель',v)}, enumerable: true, configurable: true},
ДатаИзготовленияСубстанции: {get: function(){return this._getter('ДатаИзготовленияСубстанции')}, set: function(v){this._setter('ДатаИзготовленияСубстанции',v)}, enumerable: true, configurable: true},
МаршрутнаяКарта: {get: function(){return this._getter('МаршрутнаяКарта')}, set: function(v){this._setter('МаршрутнаяКарта',v)}, enumerable: true, configurable: true},
ПроцентноеСодержание: {get: function(){return this._getter('ПроцентноеСодержание')}, set: function(v){this._setter('ПроцентноеСодержание',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
function CatNom_seriesСпецификацииRow(owner){CatNom_seriesСпецификацииRow.superclass.constructor.call(this, owner)};
CatNom_seriesСпецификацииRow._extend($p.TabularSectionRow);
$p.CatNom_seriesСпецификацииRow = CatNom_seriesСпецификацииRow;
CatNom_seriesСпецификацииRow.prototype.__define({ВыходнаяПродукция: {get: function(){return this._getter('ВыходнаяПродукция')}, set: function(v){this._setter('ВыходнаяПродукция',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
Единица: {get: function(){return this._getter('Единица')}, set: function(v){this._setter('Единица',v)}, enumerable: true, configurable: true},
ХарактеристикаПродукции: {get: function(){return this._getter('ХарактеристикаПродукции')}, set: function(v){this._setter('ХарактеристикаПродукции',v)}, enumerable: true, configurable: true},
ДатаЗапуска: {get: function(){return this._getter('ДатаЗапуска')}, set: function(v){this._setter('ДатаЗапуска',v)}, enumerable: true, configurable: true},
УдалитьНомерМаршрутнойКарты: {get: function(){return this._getter('УдалитьНомерМаршрутнойКарты')}, set: function(v){this._setter('УдалитьНомерМаршрутнойКарты',v)}, enumerable: true, configurable: true},
Объединение: {get: function(){return this._getter('Объединение')}, set: function(v){this._setter('Объединение',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true}});
CatNom_series.prototype.__define('Спецификации', {get: function(){return this._getter_ts('Спецификации')}, set: function(v){this._setter_ts('Спецификации',v)}, enumerable: true, configurable: true});
$p.cat.nom_series = new $p.CatManager('cat.nom_series');

/**
* ### Справочник СерийныеНомера
* Серийные номера
* @class CatSerial_numbers
* @extends CatObj
* @constructor 
*/
function CatSerial_numbers(attr, manager){CatSerial_numbers.superclass.constructor.call(this, attr, manager)}
CatSerial_numbers._extend($p.CatObj);
$p.CatSerial_numbers = CatSerial_numbers;
CatSerial_numbers.prototype.__define({owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.serial_numbers = new $p.CatManager('cat.serial_numbers');

/**
* ### Справочник Склады
* Склады (места хранения)
* @class CatStores
* @extends CatObj
* @constructor 
*/
function CatStores(attr, manager){CatStores.superclass.constructor.call(this, attr, manager)}
CatStores._extend($p.CatObj);
$p.CatStores = CatStores;
CatStores.prototype.__define({note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ТипЦенРозничнойТорговли: {get: function(){return this._getter('ТипЦенРозничнойТорговли')}, set: function(v){this._setter('ТипЦенРозничнойТорговли',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
ВидСклада: {get: function(){return this._getter('ВидСклада')}, set: function(v){this._setter('ВидСклада',v)}, enumerable: true, configurable: true},
НомерСекции: {get: function(){return this._getter('НомерСекции')}, set: function(v){this._setter('НомерСекции',v)}, enumerable: true, configurable: true},
РасчетРозничныхЦенПоТорговойНаценке: {get: function(){return this._getter('РасчетРозничныхЦенПоТорговойНаценке')}, set: function(v){this._setter('РасчетРозничныхЦенПоТорговойНаценке',v)}, enumerable: true, configurable: true},
Карантин: {get: function(){return this._getter('Карантин')}, set: function(v){this._setter('Карантин',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.stores = new $p.CatManager('cat.stores');

/**
* ### Справочник СтатьиДвиженияДенежныхСредств
* Статьи движения денежных средств
* @class CatCash_flow_articles
* @extends CatObj
* @constructor 
*/
function CatCash_flow_articles(attr, manager){CatCash_flow_articles.superclass.constructor.call(this, attr, manager)}
CatCash_flow_articles._extend($p.CatObj);
$p.CatCash_flow_articles = CatCash_flow_articles;
CatCash_flow_articles.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.cash_flow_articles = new $p.CatManager('cat.cash_flow_articles');

/**
* ### Справочник СтатьиЗатрат
* Статьи затрат
* @class CatCost_items
* @extends CatObj
* @constructor 
*/
function CatCost_items(attr, manager){CatCost_items.superclass.constructor.call(this, attr, manager)}
CatCost_items._extend($p.CatObj);
$p.CatCost_items = CatCost_items;
CatCost_items.prototype.__define({cost_kind: {get: function(){return this._getter('cost_kind')}, set: function(v){this._setter('cost_kind',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.cost_items = new $p.CatManager('cat.cost_items');

/**
* ### Справочник ТипыСкидокНаценок
* Типы скидок и наценок
* @class CatCharge_discounts_types
* @extends CatObj
* @constructor 
*/
function CatCharge_discounts_types(attr, manager){CatCharge_discounts_types.superclass.constructor.call(this, attr, manager)}
CatCharge_discounts_types._extend($p.CatObj);
$p.CatCharge_discounts_types = CatCharge_discounts_types;
CatCharge_discounts_types.prototype.__define({currency: {get: function(){return this._getter('currency')}, set: function(v){this._setter('currency',v)}, enumerable: true, configurable: true},
ДляВсейНоменклатуры: {get: function(){return this._getter('ДляВсейНоменклатуры')}, set: function(v){this._setter('ДляВсейНоменклатуры',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
ЗначениеУсловия: {get: function(){return this._getter('ЗначениеУсловия')}, set: function(v){this._setter('ЗначениеУсловия',v)}, enumerable: true, configurable: true},
ОбщееВремяНачала: {get: function(){return this._getter('ОбщееВремяНачала')}, set: function(v){this._setter('ОбщееВремяНачала',v)}, enumerable: true, configurable: true},
ОбщееВремяОкончания: {get: function(){return this._getter('ОбщееВремяОкончания')}, set: function(v){this._setter('ОбщееВремяОкончания',v)}, enumerable: true, configurable: true},
ОграничениеСкидкиНаценки: {get: function(){return this._getter('ОграничениеСкидкиНаценки')}, set: function(v){this._setter('ОграничениеСкидкиНаценки',v)}, enumerable: true, configurable: true},
condition: {get: function(){return this._getter('condition')}, set: function(v){this._setter('condition',v)}, enumerable: true, configurable: true},
quality: {get: function(){return this._getter('quality')}, set: function(v){this._setter('quality',v)}, enumerable: true, configurable: true},
ДляВсехПолучателей: {get: function(){return this._getter('ДляВсехПолучателей')}, set: function(v){this._setter('ДляВсехПолучателей',v)}, enumerable: true, configurable: true},
ПоДнямНедели: {get: function(){return this._getter('ПоДнямНедели')}, set: function(v){this._setter('ПоДнямНедели',v)}, enumerable: true, configurable: true},
ВидСкидки: {get: function(){return this._getter('ВидСкидки')}, set: function(v){this._setter('ВидСкидки',v)}, enumerable: true, configurable: true}});
function CatCharge_discounts_typesВремяПоДнямНеделиRow(owner){CatCharge_discounts_typesВремяПоДнямНеделиRow.superclass.constructor.call(this, owner)};
CatCharge_discounts_typesВремяПоДнямНеделиRow._extend($p.TabularSectionRow);
$p.CatCharge_discounts_typesВремяПоДнямНеделиRow = CatCharge_discounts_typesВремяПоДнямНеделиRow;
CatCharge_discounts_typesВремяПоДнямНеделиRow.prototype.__define({Выбран: {get: function(){return this._getter('Выбран')}, set: function(v){this._setter('Выбран',v)}, enumerable: true, configurable: true},
ДеньНедели: {get: function(){return this._getter('ДеньНедели')}, set: function(v){this._setter('ДеньНедели',v)}, enumerable: true, configurable: true},
ВремяНачала: {get: function(){return this._getter('ВремяНачала')}, set: function(v){this._setter('ВремяНачала',v)}, enumerable: true, configurable: true},
ВремяОкончания: {get: function(){return this._getter('ВремяОкончания')}, set: function(v){this._setter('ВремяОкончания',v)}, enumerable: true, configurable: true}});
CatCharge_discounts_types.prototype.__define('ВремяПоДнямНедели', {get: function(){return this._getter_ts('ВремяПоДнямНедели')}, set: function(v){this._setter_ts('ВремяПоДнямНедели',v)}, enumerable: true, configurable: true});
$p.cat.charge_discounts_types = new $p.CatManager('cat.charge_discounts_types');

/**
* ### Справочник ТипыЦенНоменклатуры
* Перечень типов отпускных цен предприятия
* @class CatNom_prices_types
* @extends CatObj
* @constructor 
*/
function CatNom_prices_types(attr, manager){CatNom_prices_types.superclass.constructor.call(this, attr, manager)}
CatNom_prices_types._extend($p.CatObj);
$p.CatNom_prices_types = CatNom_prices_types;
CatNom_prices_types.prototype.__define({price_currency: {get: function(){return this._getter('price_currency')}, set: function(v){this._setter('price_currency',v)}, enumerable: true, configurable: true},
БазовыйТипЦен: {get: function(){return this._getter('БазовыйТипЦен')}, set: function(v){this._setter('БазовыйТипЦен',v)}, enumerable: true, configurable: true},
Рассчитывается: {get: function(){return this._getter('Рассчитывается')}, set: function(v){this._setter('Рассчитывается',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
vat_price_included: {get: function(){return this._getter('vat_price_included')}, set: function(v){this._setter('vat_price_included',v)}, enumerable: true, configurable: true},
ПорядокОкругления: {get: function(){return this._getter('ПорядокОкругления')}, set: function(v){this._setter('ПорядокОкругления',v)}, enumerable: true, configurable: true},
ОкруглятьВБольшуюСторону: {get: function(){return this._getter('ОкруглятьВБольшуюСторону')}, set: function(v){this._setter('ОкруглятьВБольшуюСторону',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
СпособРасчетаЦены: {get: function(){return this._getter('СпособРасчетаЦены')}, set: function(v){this._setter('СпособРасчетаЦены',v)}, enumerable: true, configurable: true}});
$p.cat.nom_prices_types = new $p.CatManager('cat.nom_prices_types');

/**
* ### Справочник ТипыЦенНоменклатурыКонтрагентов
* Перечень типов цен контрагентов: поставщиков, конкурентов и др.
* @class CatNom_prices_types_partners
* @extends CatObj
* @constructor 
*/
function CatNom_prices_types_partners(attr, manager){CatNom_prices_types_partners.superclass.constructor.call(this, attr, manager)}
CatNom_prices_types_partners._extend($p.CatObj);
$p.CatNom_prices_types_partners = CatNom_prices_types_partners;
CatNom_prices_types_partners.prototype.__define({price_currency: {get: function(){return this._getter('price_currency')}, set: function(v){this._setter('price_currency',v)}, enumerable: true, configurable: true},
vat_price_included: {get: function(){return this._getter('vat_price_included')}, set: function(v){this._setter('vat_price_included',v)}, enumerable: true, configurable: true},
nom_prices_type: {get: function(){return this._getter('nom_prices_type')}, set: function(v){this._setter('nom_prices_type',v)}, enumerable: true, configurable: true},
ОписаниеТипаЦеныНоменклатурыКонтрагента: {get: function(){return this._getter('ОписаниеТипаЦеныНоменклатурыКонтрагента')}, set: function(v){this._setter('ОписаниеТипаЦеныНоменклатурыКонтрагента',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.nom_prices_types_partners = new $p.CatManager('cat.nom_prices_types_partners');

/**
* ### Справочник УсловияПродаж
* Условия продаж
* @class CatSale_conditions
* @extends CatObj
* @constructor 
*/
function CatSale_conditions(attr, manager){CatSale_conditions.superclass.constructor.call(this, attr, manager)}
CatSale_conditions._extend($p.CatObj);
$p.CatSale_conditions = CatSale_conditions;
$p.cat.sale_conditions = new $p.CatManager('cat.sale_conditions');

/**
* ### Справочник ФизическиеЛица
* Физические лица
* @class CatIndividuals
* @extends CatObj
* @constructor 
*/
function CatIndividuals(attr, manager){CatIndividuals.superclass.constructor.call(this, attr, manager)}
CatIndividuals._extend($p.CatObj);
$p.CatIndividuals = CatIndividuals;
CatIndividuals.prototype.__define({ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ИНН: {get: function(){return this._getter('ИНН')}, set: function(v){this._setter('ИНН',v)}, enumerable: true, configurable: true},
КодИМНС: {get: function(){return this._getter('КодИМНС')}, set: function(v){this._setter('КодИМНС',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
СтраховойНомерПФР: {get: function(){return this._getter('СтраховойНомерПФР')}, set: function(v){this._setter('СтраховойНомерПФР',v)}, enumerable: true, configurable: true},
Пол: {get: function(){return this._getter('Пол')}, set: function(v){this._setter('Пол',v)}, enumerable: true, configurable: true},
МестоРождения: {get: function(){return this._getter('МестоРождения')}, set: function(v){this._setter('МестоРождения',v)}, enumerable: true, configurable: true},
ОсновноеИзображение: {get: function(){return this._getter('ОсновноеИзображение')}, set: function(v){this._setter('ОсновноеИзображение',v)}, enumerable: true, configurable: true},
МестоРожденияКодПоОКАТО: {get: function(){return this._getter('МестоРожденияКодПоОКАТО')}, set: function(v){this._setter('МестоРожденияКодПоОКАТО',v)}, enumerable: true, configurable: true},
ГруппаДоступаФизическогоЛица: {get: function(){return this._getter('ГруппаДоступаФизическогоЛица')}, set: function(v){this._setter('ГруппаДоступаФизическогоЛица',v)}, enumerable: true, configurable: true},
ЛьготаПриНачисленииПособий: {get: function(){return this._getter('ЛьготаПриНачисленииПособий')}, set: function(v){this._setter('ЛьготаПриНачисленииПособий',v)}, enumerable: true, configurable: true},
ИмеетНаучныеТруды: {get: function(){return this._getter('ИмеетНаучныеТруды')}, set: function(v){this._setter('ИмеетНаучныеТруды',v)}, enumerable: true, configurable: true},
ИмеетИзобретения: {get: function(){return this._getter('ИмеетИзобретения')}, set: function(v){this._setter('ИмеетИзобретения',v)}, enumerable: true, configurable: true},
ПостоянноПроживалВКрыму18Марта2014Года: {get: function(){return this._getter('ПостоянноПроживалВКрыму18Марта2014Года')}, set: function(v){this._setter('ПостоянноПроживалВКрыму18Марта2014Года',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Фамилия: {get: function(){return this._getter('Фамилия')}, set: function(v){this._setter('Фамилия',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
Отчество: {get: function(){return this._getter('Отчество')}, set: function(v){this._setter('Отчество',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
function CatIndividualsСоставСемьиRow(owner){CatIndividualsСоставСемьиRow.superclass.constructor.call(this, owner)};
CatIndividualsСоставСемьиRow._extend($p.TabularSectionRow);
$p.CatIndividualsСоставСемьиRow = CatIndividualsСоставСемьиRow;
CatIndividualsСоставСемьиRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('СоставСемьи', {get: function(){return this._getter_ts('СоставСемьи')}, set: function(v){this._setter_ts('СоставСемьи',v)}, enumerable: true, configurable: true});
function CatIndividualsОбразованиеRow(owner){CatIndividualsОбразованиеRow.superclass.constructor.call(this, owner)};
CatIndividualsОбразованиеRow._extend($p.TabularSectionRow);
$p.CatIndividualsОбразованиеRow = CatIndividualsОбразованиеRow;
CatIndividualsОбразованиеRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('Образование', {get: function(){return this._getter_ts('Образование')}, set: function(v){this._setter_ts('Образование',v)}, enumerable: true, configurable: true});
function CatIndividualsТрудоваяДеятельностьRow(owner){CatIndividualsТрудоваяДеятельностьRow.superclass.constructor.call(this, owner)};
CatIndividualsТрудоваяДеятельностьRow._extend($p.TabularSectionRow);
$p.CatIndividualsТрудоваяДеятельностьRow = CatIndividualsТрудоваяДеятельностьRow;
CatIndividualsТрудоваяДеятельностьRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('ТрудоваяДеятельность', {get: function(){return this._getter_ts('ТрудоваяДеятельность')}, set: function(v){this._setter_ts('ТрудоваяДеятельность',v)}, enumerable: true, configurable: true});
function CatIndividualsЗнаниеЯзыковRow(owner){CatIndividualsЗнаниеЯзыковRow.superclass.constructor.call(this, owner)};
CatIndividualsЗнаниеЯзыковRow._extend($p.TabularSectionRow);
$p.CatIndividualsЗнаниеЯзыковRow = CatIndividualsЗнаниеЯзыковRow;
CatIndividualsЗнаниеЯзыковRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('ЗнаниеЯзыков', {get: function(){return this._getter_ts('ЗнаниеЯзыков')}, set: function(v){this._setter_ts('ЗнаниеЯзыков',v)}, enumerable: true, configurable: true});
function CatIndividualsПрофессииRow(owner){CatIndividualsПрофессииRow.superclass.constructor.call(this, owner)};
CatIndividualsПрофессииRow._extend($p.TabularSectionRow);
$p.CatIndividualsПрофессииRow = CatIndividualsПрофессииRow;
CatIndividualsПрофессииRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true},
Профессия: {get: function(){return this._getter('Профессия')}, set: function(v){this._setter('Профессия',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('Профессии', {get: function(){return this._getter_ts('Профессии')}, set: function(v){this._setter_ts('Профессии',v)}, enumerable: true, configurable: true});
function CatIndividualsСтажиRow(owner){CatIndividualsСтажиRow.superclass.constructor.call(this, owner)};
CatIndividualsСтажиRow._extend($p.TabularSectionRow);
$p.CatIndividualsСтажиRow = CatIndividualsСтажиRow;
CatIndividualsСтажиRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true},
Профессия: {get: function(){return this._getter('Профессия')}, set: function(v){this._setter('Профессия',v)}, enumerable: true, configurable: true},
ВидСтажа: {get: function(){return this._getter('ВидСтажа')}, set: function(v){this._setter('ВидСтажа',v)}, enumerable: true, configurable: true},
ДатаОтсчета: {get: function(){return this._getter('ДатаОтсчета')}, set: function(v){this._setter('ДатаОтсчета',v)}, enumerable: true, configurable: true},
РазмерМесяцев: {get: function(){return this._getter('РазмерМесяцев')}, set: function(v){this._setter('РазмерМесяцев',v)}, enumerable: true, configurable: true},
РазмерДней: {get: function(){return this._getter('РазмерДней')}, set: function(v){this._setter('РазмерДней',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('Стажи', {get: function(){return this._getter_ts('Стажи')}, set: function(v){this._setter_ts('Стажи',v)}, enumerable: true, configurable: true});
function CatIndividualsНаградыRow(owner){CatIndividualsНаградыRow.superclass.constructor.call(this, owner)};
CatIndividualsНаградыRow._extend($p.TabularSectionRow);
$p.CatIndividualsНаградыRow = CatIndividualsНаградыRow;
CatIndividualsНаградыRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true},
Профессия: {get: function(){return this._getter('Профессия')}, set: function(v){this._setter('Профессия',v)}, enumerable: true, configurable: true},
ВидСтажа: {get: function(){return this._getter('ВидСтажа')}, set: function(v){this._setter('ВидСтажа',v)}, enumerable: true, configurable: true},
ДатаОтсчета: {get: function(){return this._getter('ДатаОтсчета')}, set: function(v){this._setter('ДатаОтсчета',v)}, enumerable: true, configurable: true},
РазмерМесяцев: {get: function(){return this._getter('РазмерМесяцев')}, set: function(v){this._setter('РазмерМесяцев',v)}, enumerable: true, configurable: true},
РазмерДней: {get: function(){return this._getter('РазмерДней')}, set: function(v){this._setter('РазмерДней',v)}, enumerable: true, configurable: true},
Награда: {get: function(){return this._getter('Награда')}, set: function(v){this._setter('Награда',v)}, enumerable: true, configurable: true},
НомерПриказа: {get: function(){return this._getter('НомерПриказа')}, set: function(v){this._setter('НомерПриказа',v)}, enumerable: true, configurable: true},
ДатаПриказа: {get: function(){return this._getter('ДатаПриказа')}, set: function(v){this._setter('ДатаПриказа',v)}, enumerable: true, configurable: true},
ЧейПриказ: {get: function(){return this._getter('ЧейПриказ')}, set: function(v){this._setter('ЧейПриказ',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('Награды', {get: function(){return this._getter_ts('Награды')}, set: function(v){this._setter_ts('Награды',v)}, enumerable: true, configurable: true});
function CatIndividualsУченыеСтепениRow(owner){CatIndividualsУченыеСтепениRow.superclass.constructor.call(this, owner)};
CatIndividualsУченыеСтепениRow._extend($p.TabularSectionRow);
$p.CatIndividualsУченыеСтепениRow = CatIndividualsУченыеСтепениRow;
CatIndividualsУченыеСтепениRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true},
Профессия: {get: function(){return this._getter('Профессия')}, set: function(v){this._setter('Профессия',v)}, enumerable: true, configurable: true},
ВидСтажа: {get: function(){return this._getter('ВидСтажа')}, set: function(v){this._setter('ВидСтажа',v)}, enumerable: true, configurable: true},
ДатаОтсчета: {get: function(){return this._getter('ДатаОтсчета')}, set: function(v){this._setter('ДатаОтсчета',v)}, enumerable: true, configurable: true},
РазмерМесяцев: {get: function(){return this._getter('РазмерМесяцев')}, set: function(v){this._setter('РазмерМесяцев',v)}, enumerable: true, configurable: true},
РазмерДней: {get: function(){return this._getter('РазмерДней')}, set: function(v){this._setter('РазмерДней',v)}, enumerable: true, configurable: true},
Награда: {get: function(){return this._getter('Награда')}, set: function(v){this._setter('Награда',v)}, enumerable: true, configurable: true},
НомерПриказа: {get: function(){return this._getter('НомерПриказа')}, set: function(v){this._setter('НомерПриказа',v)}, enumerable: true, configurable: true},
ДатаПриказа: {get: function(){return this._getter('ДатаПриказа')}, set: function(v){this._setter('ДатаПриказа',v)}, enumerable: true, configurable: true},
ЧейПриказ: {get: function(){return this._getter('ЧейПриказ')}, set: function(v){this._setter('ЧейПриказ',v)}, enumerable: true, configurable: true},
УченаяСтепень: {get: function(){return this._getter('УченаяСтепень')}, set: function(v){this._setter('УченаяСтепень',v)}, enumerable: true, configurable: true},
ДатаПрисужденияУченойСтепени: {get: function(){return this._getter('ДатаПрисужденияУченойСтепени')}, set: function(v){this._setter('ДатаПрисужденияУченойСтепени',v)}, enumerable: true, configurable: true},
ОтрасльНауки: {get: function(){return this._getter('ОтрасльНауки')}, set: function(v){this._setter('ОтрасльНауки',v)}, enumerable: true, configurable: true},
ДиссертационныйСовет: {get: function(){return this._getter('ДиссертационныйСовет')}, set: function(v){this._setter('ДиссертационныйСовет',v)}, enumerable: true, configurable: true},
ДипломСерияНомер: {get: function(){return this._getter('ДипломСерияНомер')}, set: function(v){this._setter('ДипломСерияНомер',v)}, enumerable: true, configurable: true},
ДипломВыданОрганизация: {get: function(){return this._getter('ДипломВыданОрганизация')}, set: function(v){this._setter('ДипломВыданОрганизация',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('УченыеСтепени', {get: function(){return this._getter_ts('УченыеСтепени')}, set: function(v){this._setter_ts('УченыеСтепени',v)}, enumerable: true, configurable: true});
function CatIndividualsУченыеЗванияRow(owner){CatIndividualsУченыеЗванияRow.superclass.constructor.call(this, owner)};
CatIndividualsУченыеЗванияRow._extend($p.TabularSectionRow);
$p.CatIndividualsУченыеЗванияRow = CatIndividualsУченыеЗванияRow;
CatIndividualsУченыеЗванияRow.prototype.__define({СтепеньРодства: {get: function(){return this._getter('СтепеньРодства')}, set: function(v){this._setter('СтепеньРодства',v)}, enumerable: true, configurable: true},
Имя: {get: function(){return this._getter('Имя')}, set: function(v){this._setter('Имя',v)}, enumerable: true, configurable: true},
УдалитьГодРождения: {get: function(){return this._getter('УдалитьГодРождения')}, set: function(v){this._setter('УдалитьГодРождения',v)}, enumerable: true, configurable: true},
ДатаРождения: {get: function(){return this._getter('ДатаРождения')}, set: function(v){this._setter('ДатаРождения',v)}, enumerable: true, configurable: true},
ВидОбразования: {get: function(){return this._getter('ВидОбразования')}, set: function(v){this._setter('ВидОбразования',v)}, enumerable: true, configurable: true},
УчебноеЗаведение: {get: function(){return this._getter('УчебноеЗаведение')}, set: function(v){this._setter('УчебноеЗаведение',v)}, enumerable: true, configurable: true},
Специальность: {get: function(){return this._getter('Специальность')}, set: function(v){this._setter('Специальность',v)}, enumerable: true, configurable: true},
Диплом: {get: function(){return this._getter('Диплом')}, set: function(v){this._setter('Диплом',v)}, enumerable: true, configurable: true},
ГодОкончания: {get: function(){return this._getter('ГодОкончания')}, set: function(v){this._setter('ГодОкончания',v)}, enumerable: true, configurable: true},
Квалификация: {get: function(){return this._getter('Квалификация')}, set: function(v){this._setter('Квалификация',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ДатаНачала: {get: function(){return this._getter('ДатаНачала')}, set: function(v){this._setter('ДатаНачала',v)}, enumerable: true, configurable: true},
ДатаОкончания: {get: function(){return this._getter('ДатаОкончания')}, set: function(v){this._setter('ДатаОкончания',v)}, enumerable: true, configurable: true},
Должность: {get: function(){return this._getter('Должность')}, set: function(v){this._setter('Должность',v)}, enumerable: true, configurable: true},
Язык: {get: function(){return this._getter('Язык')}, set: function(v){this._setter('Язык',v)}, enumerable: true, configurable: true},
СтепеньЗнанияЯзыка: {get: function(){return this._getter('СтепеньЗнанияЯзыка')}, set: function(v){this._setter('СтепеньЗнанияЯзыка',v)}, enumerable: true, configurable: true},
Профессия: {get: function(){return this._getter('Профессия')}, set: function(v){this._setter('Профессия',v)}, enumerable: true, configurable: true},
ВидСтажа: {get: function(){return this._getter('ВидСтажа')}, set: function(v){this._setter('ВидСтажа',v)}, enumerable: true, configurable: true},
ДатаОтсчета: {get: function(){return this._getter('ДатаОтсчета')}, set: function(v){this._setter('ДатаОтсчета',v)}, enumerable: true, configurable: true},
РазмерМесяцев: {get: function(){return this._getter('РазмерМесяцев')}, set: function(v){this._setter('РазмерМесяцев',v)}, enumerable: true, configurable: true},
РазмерДней: {get: function(){return this._getter('РазмерДней')}, set: function(v){this._setter('РазмерДней',v)}, enumerable: true, configurable: true},
Награда: {get: function(){return this._getter('Награда')}, set: function(v){this._setter('Награда',v)}, enumerable: true, configurable: true},
НомерПриказа: {get: function(){return this._getter('НомерПриказа')}, set: function(v){this._setter('НомерПриказа',v)}, enumerable: true, configurable: true},
ДатаПриказа: {get: function(){return this._getter('ДатаПриказа')}, set: function(v){this._setter('ДатаПриказа',v)}, enumerable: true, configurable: true},
ЧейПриказ: {get: function(){return this._getter('ЧейПриказ')}, set: function(v){this._setter('ЧейПриказ',v)}, enumerable: true, configurable: true},
УченаяСтепень: {get: function(){return this._getter('УченаяСтепень')}, set: function(v){this._setter('УченаяСтепень',v)}, enumerable: true, configurable: true},
ДатаПрисужденияУченойСтепени: {get: function(){return this._getter('ДатаПрисужденияУченойСтепени')}, set: function(v){this._setter('ДатаПрисужденияУченойСтепени',v)}, enumerable: true, configurable: true},
ОтрасльНауки: {get: function(){return this._getter('ОтрасльНауки')}, set: function(v){this._setter('ОтрасльНауки',v)}, enumerable: true, configurable: true},
ДиссертационныйСовет: {get: function(){return this._getter('ДиссертационныйСовет')}, set: function(v){this._setter('ДиссертационныйСовет',v)}, enumerable: true, configurable: true},
ДипломСерияНомер: {get: function(){return this._getter('ДипломСерияНомер')}, set: function(v){this._setter('ДипломСерияНомер',v)}, enumerable: true, configurable: true},
ДипломВыданОрганизация: {get: function(){return this._getter('ДипломВыданОрганизация')}, set: function(v){this._setter('ДипломВыданОрганизация',v)}, enumerable: true, configurable: true},
УченоеЗвание: {get: function(){return this._getter('УченоеЗвание')}, set: function(v){this._setter('УченоеЗвание',v)}, enumerable: true, configurable: true},
ДатаПрисвоенияУченогоЗвания: {get: function(){return this._getter('ДатаПрисвоенияУченогоЗвания')}, set: function(v){this._setter('ДатаПрисвоенияУченогоЗвания',v)}, enumerable: true, configurable: true},
АттестатСерия: {get: function(){return this._getter('АттестатСерия')}, set: function(v){this._setter('АттестатСерия',v)}, enumerable: true, configurable: true},
АттестатНомер: {get: function(){return this._getter('АттестатНомер')}, set: function(v){this._setter('АттестатНомер',v)}, enumerable: true, configurable: true},
АттестатВыданОрганизация: {get: function(){return this._getter('АттестатВыданОрганизация')}, set: function(v){this._setter('АттестатВыданОрганизация',v)}, enumerable: true, configurable: true},
НаучнаяСпециальность: {get: function(){return this._getter('НаучнаяСпециальность')}, set: function(v){this._setter('НаучнаяСпециальность',v)}, enumerable: true, configurable: true}});
CatIndividuals.prototype.__define('УченыеЗвания', {get: function(){return this._getter_ts('УченыеЗвания')}, set: function(v){this._setter_ts('УченыеЗвания',v)}, enumerable: true, configurable: true});
$p.cat.individuals = new $p.CatManager('cat.individuals');

/**
* ### Справочник Формулы
* Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации
* @class CatFormulas
* @extends CatObj
* @constructor 
*/
function CatFormulas(attr, manager){CatFormulas.superclass.constructor.call(this, attr, manager)}
CatFormulas._extend($p.CatObj);
$p.CatFormulas = CatFormulas;
CatFormulas.prototype.__define({formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
leading_formula: {get: function(){return this._getter('leading_formula')}, set: function(v){this._setter('leading_formula',v)}, enumerable: true, configurable: true},
condition_formula: {get: function(){return this._getter('condition_formula')}, set: function(v){this._setter('condition_formula',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
template: {get: function(){return this._getter('template')}, set: function(v){this._setter('template',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
function CatFormulasParamsRow(owner){CatFormulasParamsRow.superclass.constructor.call(this, owner)};
CatFormulasParamsRow._extend($p.TabularSectionRow);
$p.CatFormulasParamsRow = CatFormulasParamsRow;
CatFormulasParamsRow.prototype.__define({param: {get: function(){return this._getter('param')}, set: function(v){this._setter('param',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true}});
CatFormulas.prototype.__define('params', {get: function(){return this._getter_ts('params')}, set: function(v){this._setter_ts('params',v)}, enumerable: true, configurable: true});
$p.cat.formulas = new $p.CatManager('cat.formulas');

/**
* ### Справочник ФП_ЛекарственныеФормы
* Лекарственные формы
* @class CatФП_ЛекарственныеФормы
* @extends CatObj
* @constructor 
*/
function CatФП_ЛекарственныеФормы(attr, manager){CatФП_ЛекарственныеФормы.superclass.constructor.call(this, attr, manager)}
CatФП_ЛекарственныеФормы._extend($p.CatObj);
$p.CatФП_ЛекарственныеФормы = CatФП_ЛекарственныеФормы;
$p.cat.ФП_ЛекарственныеФормы = new $p.CatManager('cat.ФП_ЛекарственныеФормы');

/**
* ### Справочник ХарактеристикиНоменклатуры
* Характеристики номенклатуры
* @class CatCharacteristics
* @extends CatObj
* @constructor 
*/
function CatCharacteristics(attr, manager){CatCharacteristics.superclass.constructor.call(this, attr, manager)}
CatCharacteristics._extend($p.CatObj);
$p.CatCharacteristics = CatCharacteristics;
CatCharacteristics.prototype.__define({ОКП: {get: function(){return this._getter('ОКП')}, set: function(v){this._setter('ОКП',v)}, enumerable: true, configurable: true},
Активная: {get: function(){return this._getter('Активная')}, set: function(v){this._setter('Активная',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
$p.cat.characteristics = new $p.CatManager('cat.characteristics');

/**
* ### Справочник ЦеновыеГруппы
* Ценовые группы
* @class CatPrice_groups
* @extends CatObj
* @constructor 
*/
function CatPrice_groups(attr, manager){CatPrice_groups.superclass.constructor.call(this, attr, manager)}
CatPrice_groups._extend($p.CatObj);
$p.CatPrice_groups = CatPrice_groups;
CatPrice_groups.prototype.__define({sequence: {get: function(){return this._getter('sequence')}, set: function(v){this._setter('sequence',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.price_groups = new $p.CatManager('cat.price_groups');

/**
* ### Документ ЗаказПокупателя
* Заказ покупателя
* @class DocBuyers_order
* @extends DocObj
* @constructor 
*/
function DocBuyers_order(attr, manager){DocBuyers_order.superclass.constructor.call(this, attr, manager)}
DocBuyers_order._extend($p.DocObj);
$p.DocBuyers_order = DocBuyers_order;
DocBuyers_order.prototype.__define({shipping_address: {get: function(){return this._getter('shipping_address')}, set: function(v){this._setter('shipping_address',v)}, enumerable: true, configurable: true},
doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
ВремяНапоминания: {get: function(){return this._getter('ВремяНапоминания')}, set: function(v){this._setter('ВремяНапоминания',v)}, enumerable: true, configurable: true},
ДатаОплаты: {get: function(){return this._getter('ДатаОплаты')}, set: function(v){this._setter('ДатаОплаты',v)}, enumerable: true, configurable: true},
ДатаОтгрузки: {get: function(){return this._getter('ДатаОтгрузки')}, set: function(v){this._setter('ДатаОтгрузки',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ИспользоватьПлановуюСебестоимость: {get: function(){return this._getter('ИспользоватьПлановуюСебестоимость')}, set: function(v){this._setter('ИспользоватьПлановуюСебестоимость',v)}, enumerable: true, configurable: true},
ИтогПлановаяСебестоимость: {get: function(){return this._getter('ИтогПлановаяСебестоимость')}, set: function(v){this._setter('ИтогПлановаяСебестоимость',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
partner: {get: function(){return this._getter('partner')}, set: function(v){this._setter('partner',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
НапомнитьОСобытии: {get: function(){return this._getter('НапомнитьОСобытии')}, set: function(v){this._setter('НапомнитьОСобытии',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
organizational_unit: {get: function(){return this._getter('organizational_unit')}, set: function(v){this._setter('organizational_unit',v)}, enumerable: true, configurable: true},
СкладГруппа: {get: function(){return this._getter('СкладГруппа')}, set: function(v){this._setter('СкладГруппа',v)}, enumerable: true, configurable: true},
vat_included: {get: function(){return this._getter('vat_included')}, set: function(v){this._setter('vat_included',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
price_type: {get: function(){return this._getter('price_type')}, set: function(v){this._setter('price_type',v)}, enumerable: true, configurable: true},
vat_consider: {get: function(){return this._getter('vat_consider')}, set: function(v){this._setter('vat_consider',v)}, enumerable: true, configurable: true},
Грузополучатель: {get: function(){return this._getter('Грузополучатель')}, set: function(v){this._setter('Грузополучатель',v)}, enumerable: true, configurable: true},
КонтактноеЛицоКонтрагента: {get: function(){return this._getter('КонтактноеЛицоКонтрагента')}, set: function(v){this._setter('КонтактноеЛицоКонтрагента',v)}, enumerable: true, configurable: true},
УсловиеПродаж: {get: function(){return this._getter('УсловиеПродаж')}, set: function(v){this._setter('УсловиеПродаж',v)}, enumerable: true, configurable: true},
ДополнениеКАдресуДоставки: {get: function(){return this._getter('ДополнениеКАдресуДоставки')}, set: function(v){this._setter('ДополнениеКАдресуДоставки',v)}, enumerable: true, configurable: true},
ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true},
Грузоотправитель: {get: function(){return this._getter('Грузоотправитель')}, set: function(v){this._setter('Грузоотправитель',v)}, enumerable: true, configurable: true},
НомерПоДаннымПокупателя: {get: function(){return this._getter('НомерПоДаннымПокупателя')}, set: function(v){this._setter('НомерПоДаннымПокупателя',v)}, enumerable: true, configurable: true},
ДатаПоДаннымПокупателя: {get: function(){return this._getter('ДатаПоДаннымПокупателя')}, set: function(v){this._setter('ДатаПоДаннымПокупателя',v)}, enumerable: true, configurable: true},
УсловияДоставки: {get: function(){return this._getter('УсловияДоставки')}, set: function(v){this._setter('УсловияДоставки',v)}, enumerable: true, configurable: true},
ДатаПоставки: {get: function(){return this._getter('ДатаПоставки')}, set: function(v){this._setter('ДатаПоставки',v)}, enumerable: true, configurable: true},
obj_delivery_state: {get: function(){return this._getter('obj_delivery_state')}, set: function(v){this._setter('obj_delivery_state',v)}, enumerable: true, configurable: true}});
function DocBuyers_orderGoodsRow(owner){DocBuyers_orderGoodsRow.superclass.constructor.call(this, owner)};
DocBuyers_orderGoodsRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderGoodsRow = DocBuyers_orderGoodsRow;
DocBuyers_orderGoodsRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('goods', {get: function(){return this._getter_ts('goods')}, set: function(v){this._setter_ts('goods',v)}, enumerable: true, configurable: true});
function DocBuyers_orderВозвратнаяТараRow(owner){DocBuyers_orderВозвратнаяТараRow.superclass.constructor.call(this, owner)};
DocBuyers_orderВозвратнаяТараRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderВозвратнаяТараRow = DocBuyers_orderВозвратнаяТараRow;
DocBuyers_orderВозвратнаяТараRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('ВозвратнаяТара', {get: function(){return this._getter_ts('ВозвратнаяТара')}, set: function(v){this._setter_ts('ВозвратнаяТара',v)}, enumerable: true, configurable: true});
function DocBuyers_orderServicesRow(owner){DocBuyers_orderServicesRow.superclass.constructor.call(this, owner)};
DocBuyers_orderServicesRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderServicesRow = DocBuyers_orderServicesRow;
DocBuyers_orderServicesRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
Содержание: {get: function(){return this._getter('Содержание')}, set: function(v){this._setter('Содержание',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('services', {get: function(){return this._getter_ts('services')}, set: function(v){this._setter_ts('services',v)}, enumerable: true, configurable: true});
function DocBuyers_orderMaterialsRow(owner){DocBuyers_orderMaterialsRow.superclass.constructor.call(this, owner)};
DocBuyers_orderMaterialsRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderMaterialsRow = DocBuyers_orderMaterialsRow;
DocBuyers_orderMaterialsRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
Содержание: {get: function(){return this._getter('Содержание')}, set: function(v){this._setter('Содержание',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('materials', {get: function(){return this._getter_ts('materials')}, set: function(v){this._setter_ts('materials',v)}, enumerable: true, configurable: true});
function DocBuyers_orderСоставНабораRow(owner){DocBuyers_orderСоставНабораRow.superclass.constructor.call(this, owner)};
DocBuyers_orderСоставНабораRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderСоставНабораRow = DocBuyers_orderСоставНабораRow;
DocBuyers_orderСоставНабораRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
Содержание: {get: function(){return this._getter('Содержание')}, set: function(v){this._setter('Содержание',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('СоставНабора', {get: function(){return this._getter_ts('СоставНабора')}, set: function(v){this._setter_ts('СоставНабора',v)}, enumerable: true, configurable: true});
function DocBuyers_orderПараметрыВыпускаПродукцииRow(owner){DocBuyers_orderПараметрыВыпускаПродукцииRow.superclass.constructor.call(this, owner)};
DocBuyers_orderПараметрыВыпускаПродукцииRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderПараметрыВыпускаПродукцииRow = DocBuyers_orderПараметрыВыпускаПродукцииRow;
DocBuyers_orderПараметрыВыпускаПродукцииRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
Содержание: {get: function(){return this._getter('Содержание')}, set: function(v){this._setter('Содержание',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
ВидПараметра: {get: function(){return this._getter('ВидПараметра')}, set: function(v){this._setter('ВидПараметра',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('ПараметрыВыпускаПродукции', {get: function(){return this._getter_ts('ПараметрыВыпускаПродукции')}, set: function(v){this._setter_ts('ПараметрыВыпускаПродукции',v)}, enumerable: true, configurable: true});
function DocBuyers_orderExtra_fieldsRow(owner){DocBuyers_orderExtra_fieldsRow.superclass.constructor.call(this, owner)};
DocBuyers_orderExtra_fieldsRow._extend($p.TabularSectionRow);
$p.DocBuyers_orderExtra_fieldsRow = DocBuyers_orderExtra_fieldsRow;
DocBuyers_orderExtra_fieldsRow.prototype.__define({unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
first_cost: {get: function(){return this._getter('first_cost')}, set: function(v){this._setter('first_cost',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
specification: {get: function(){return this._getter('specification')}, set: function(v){this._setter('specification',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
placing: {get: function(){return this._getter('placing')}, set: function(v){this._setter('placing',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
Содержание: {get: function(){return this._getter('Содержание')}, set: function(v){this._setter('Содержание',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
discount_percent_auto: {get: function(){return this._getter('discount_percent_auto')}, set: function(v){this._setter('discount_percent_auto',v)}, enumerable: true, configurable: true},
УсловиеАвтоматическойСкидки: {get: function(){return this._getter('УсловиеАвтоматическойСкидки')}, set: function(v){this._setter('УсловиеАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
ЗначениеУсловияАвтоматическойСкидки: {get: function(){return this._getter('ЗначениеУсловияАвтоматическойСкидки')}, set: function(v){this._setter('ЗначениеУсловияАвтоматическойСкидки',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
qty: {get: function(){return this._getter('qty')}, set: function(v){this._setter('qty',v)}, enumerable: true, configurable: true},
piece_unit: {get: function(){return this._getter('piece_unit')}, set: function(v){this._setter('piece_unit',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
coefficient: {get: function(){return this._getter('coefficient')}, set: function(v){this._setter('coefficient',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
quantity: {get: function(){return this._getter('quantity')}, set: function(v){this._setter('quantity',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
КлючСтроки: {get: function(){return this._getter('КлючСтроки')}, set: function(v){this._setter('КлючСтроки',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаБУ: {get: function(){return this._getter('ПринятыеСчетУчетаБУ')}, set: function(v){this._setter('ПринятыеСчетУчетаБУ',v)}, enumerable: true, configurable: true},
ПринятыеСчетУчетаНУ: {get: function(){return this._getter('ПринятыеСчетУчетаНУ')}, set: function(v){this._setter('ПринятыеСчетУчетаНУ',v)}, enumerable: true, configurable: true},
СчетУчетаБУ: {get: function(){return this._getter('СчетУчетаБУ')}, set: function(v){this._setter('СчетУчетаБУ',v)}, enumerable: true, configurable: true},
СчетУчетаНУ: {get: function(){return this._getter('СчетУчетаНУ')}, set: function(v){this._setter('СчетУчетаНУ',v)}, enumerable: true, configurable: true},
series: {get: function(){return this._getter('series')}, set: function(v){this._setter('series',v)}, enumerable: true, configurable: true},
ВидПараметра: {get: function(){return this._getter('ВидПараметра')}, set: function(v){this._setter('ВидПараметра',v)}, enumerable: true, configurable: true},
КлючСвязи: {get: function(){return this._getter('КлючСвязи')}, set: function(v){this._setter('КлючСвязи',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
txt_row: {get: function(){return this._getter('txt_row')}, set: function(v){this._setter('txt_row',v)}, enumerable: true, configurable: true}});
DocBuyers_order.prototype.__define('extra_fields', {get: function(){return this._getter_ts('extra_fields')}, set: function(v){this._setter_ts('extra_fields',v)}, enumerable: true, configurable: true});
$p.doc.buyers_order = new $p.DocManager('doc.buyers_order');

/**
* ### Документ КорректировкаДолга
* Корректировка долга
* @class DocDebt_adjustment
* @extends DocObj
* @constructor 
*/
function DocDebt_adjustment(attr, manager){DocDebt_adjustment.superclass.constructor.call(this, attr, manager)}
DocDebt_adjustment._extend($p.DocObj);
$p.DocDebt_adjustment = DocDebt_adjustment;
DocDebt_adjustment.prototype.__define({organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
КонтрагентДебитор: {get: function(){return this._getter('КонтрагентДебитор')}, set: function(v){this._setter('КонтрагентДебитор',v)}, enumerable: true, configurable: true},
КонтрагентКредитор: {get: function(){return this._getter('КонтрагентКредитор')}, set: function(v){this._setter('КонтрагентКредитор',v)}, enumerable: true, configurable: true},
ОтражатьВУправленческомУчете: {get: function(){return this._getter('ОтражатьВУправленческомУчете')}, set: function(v){this._setter('ОтражатьВУправленческомУчете',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
КурсДокумента: {get: function(){return this._getter('КурсДокумента')}, set: function(v){this._setter('КурсДокумента',v)}, enumerable: true, configurable: true},
КратностьДокумента: {get: function(){return this._getter('КратностьДокумента')}, set: function(v){this._setter('КратностьДокумента',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ИспользоватьВспомогательныйСчет: {get: function(){return this._getter('ИспользоватьВспомогательныйСчет')}, set: function(v){this._setter('ИспользоватьВспомогательныйСчет',v)}, enumerable: true, configurable: true},
СчетДт: {get: function(){return this._getter('СчетДт')}, set: function(v){this._setter('СчетДт',v)}, enumerable: true, configurable: true},
СубконтоДт1: {get: function(){return this._getter('СубконтоДт1')}, set: function(v){this._setter('СубконтоДт1',v)}, enumerable: true, configurable: true},
СубконтоДт2: {get: function(){return this._getter('СубконтоДт2')}, set: function(v){this._setter('СубконтоДт2',v)}, enumerable: true, configurable: true},
СубконтоДт3: {get: function(){return this._getter('СубконтоДт3')}, set: function(v){this._setter('СубконтоДт3',v)}, enumerable: true, configurable: true},
СчетКт: {get: function(){return this._getter('СчетКт')}, set: function(v){this._setter('СчетКт',v)}, enumerable: true, configurable: true},
СубконтоКт1: {get: function(){return this._getter('СубконтоКт1')}, set: function(v){this._setter('СубконтоКт1',v)}, enumerable: true, configurable: true},
СубконтоКт2: {get: function(){return this._getter('СубконтоКт2')}, set: function(v){this._setter('СубконтоКт2',v)}, enumerable: true, configurable: true},
СубконтоКт3: {get: function(){return this._getter('СубконтоКт3')}, set: function(v){this._setter('СубконтоКт3',v)}, enumerable: true, configurable: true},
СчетДтНУ: {get: function(){return this._getter('СчетДтНУ')}, set: function(v){this._setter('СчетДтНУ',v)}, enumerable: true, configurable: true},
СубконтоДтНУ1: {get: function(){return this._getter('СубконтоДтНУ1')}, set: function(v){this._setter('СубконтоДтНУ1',v)}, enumerable: true, configurable: true},
СубконтоДтНУ2: {get: function(){return this._getter('СубконтоДтНУ2')}, set: function(v){this._setter('СубконтоДтНУ2',v)}, enumerable: true, configurable: true},
СубконтоДтНУ3: {get: function(){return this._getter('СубконтоДтНУ3')}, set: function(v){this._setter('СубконтоДтНУ3',v)}, enumerable: true, configurable: true},
СчетКтНУ: {get: function(){return this._getter('СчетКтНУ')}, set: function(v){this._setter('СчетКтНУ',v)}, enumerable: true, configurable: true},
СубконтоКтНУ1: {get: function(){return this._getter('СубконтоКтНУ1')}, set: function(v){this._setter('СубконтоКтНУ1',v)}, enumerable: true, configurable: true},
СубконтоКтНУ2: {get: function(){return this._getter('СубконтоКтНУ2')}, set: function(v){this._setter('СубконтоКтНУ2',v)}, enumerable: true, configurable: true},
СубконтоКтНУ3: {get: function(){return this._getter('СубконтоКтНУ3')}, set: function(v){this._setter('СубконтоКтНУ3',v)}, enumerable: true, configurable: true},
ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true}});
function DocDebt_adjustmentСуммыДолгаRow(owner){DocDebt_adjustmentСуммыДолгаRow.superclass.constructor.call(this, owner)};
DocDebt_adjustmentСуммыДолгаRow._extend($p.TabularSectionRow);
$p.DocDebt_adjustmentСуммыДолгаRow = DocDebt_adjustmentСуммыДолгаRow;
DocDebt_adjustmentСуммыДолгаRow.prototype.__define({contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетов: {get: function(){return this._getter('СчетУчетаРасчетов')}, set: function(v){this._setter('СчетУчетаРасчетов',v)}, enumerable: true, configurable: true},
СчетУчетаАвансов: {get: function(){return this._getter('СчетУчетаАвансов')}, set: function(v){this._setter('СчетУчетаАвансов',v)}, enumerable: true, configurable: true},
ВидЗадолженности: {get: function(){return this._getter('ВидЗадолженности')}, set: function(v){this._setter('ВидЗадолженности',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СуммаРегл: {get: function(){return this._getter('СуммаРегл')}, set: function(v){this._setter('СуммаРегл',v)}, enumerable: true, configurable: true},
СуммаНУ: {get: function(){return this._getter('СуммаНУ')}, set: function(v){this._setter('СуммаНУ',v)}, enumerable: true, configurable: true}});
DocDebt_adjustment.prototype.__define('СуммыДолга', {get: function(){return this._getter_ts('СуммыДолга')}, set: function(v){this._setter_ts('СуммыДолга',v)}, enumerable: true, configurable: true});
$p.doc.debt_adjustment = new $p.DocManager('doc.debt_adjustment');

/**
* ### Документ ПлатежноеПоручениеВходящее
* Платежное поручение входящее
* @class DocDebit_bank_order
* @extends DocObj
* @constructor 
*/
function DocDebit_bank_order(attr, manager){DocDebit_bank_order.superclass.constructor.call(this, attr, manager)}
DocDebit_bank_order._extend($p.DocObj);
$p.DocDebit_bank_order = DocDebit_bank_order;
DocDebit_bank_order.prototype.__define({doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
partner: {get: function(){return this._getter('partner')}, set: function(v){this._setter('partner',v)}, enumerable: true, configurable: true},
НомерВходящегоДокумента: {get: function(){return this._getter('НомерВходящегоДокумента')}, set: function(v){this._setter('НомерВходящегоДокумента',v)}, enumerable: true, configurable: true},
ДатаВходящегоДокумента: {get: function(){return this._getter('ДатаВходящегоДокумента')}, set: function(v){this._setter('ДатаВходящегоДокумента',v)}, enumerable: true, configurable: true},
Оплачено: {get: function(){return this._getter('Оплачено')}, set: function(v){this._setter('Оплачено',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
ОтраженоВОперУчете: {get: function(){return this._getter('ОтраженоВОперУчете')}, set: function(v){this._setter('ОтраженоВОперУчете',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
ДатаОплаты: {get: function(){return this._getter('ДатаОплаты')}, set: function(v){this._setter('ДатаОплаты',v)}, enumerable: true, configurable: true},
ЧастичнаяОплата: {get: function(){return this._getter('ЧастичнаяОплата')}, set: function(v){this._setter('ЧастичнаяОплата',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СубконтоКт1: {get: function(){return this._getter('СубконтоКт1')}, set: function(v){this._setter('СубконтоКт1',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
СубконтоКт2: {get: function(){return this._getter('СубконтоКт2')}, set: function(v){this._setter('СубконтоКт2',v)}, enumerable: true, configurable: true},
СубконтоКт3: {get: function(){return this._getter('СубконтоКт3')}, set: function(v){this._setter('СубконтоКт3',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
СчетКонтрагента: {get: function(){return this._getter('СчетКонтрагента')}, set: function(v){this._setter('СчетКонтрагента',v)}, enumerable: true, configurable: true},
СчетОрганизации: {get: function(){return this._getter('СчетОрганизации')}, set: function(v){this._setter('СчетОрганизации',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
Содержание_УСН: {get: function(){return this._getter('Содержание_УСН')}, set: function(v){this._setter('Содержание_УСН',v)}, enumerable: true, configurable: true},
Графа4_УСН: {get: function(){return this._getter('Графа4_УСН')}, set: function(v){this._setter('Графа4_УСН',v)}, enumerable: true, configurable: true},
Графа5_УСН: {get: function(){return this._getter('Графа5_УСН')}, set: function(v){this._setter('Графа5_УСН',v)}, enumerable: true, configurable: true},
Графа6_УСН: {get: function(){return this._getter('Графа6_УСН')}, set: function(v){this._setter('Графа6_УСН',v)}, enumerable: true, configurable: true},
Графа7_УСН: {get: function(){return this._getter('Графа7_УСН')}, set: function(v){this._setter('Графа7_УСН',v)}, enumerable: true, configurable: true},
ДоходыЕНВД_УСН: {get: function(){return this._getter('ДоходыЕНВД_УСН')}, set: function(v){this._setter('ДоходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
РасходыЕНВД_УСН: {get: function(){return this._getter('РасходыЕНВД_УСН')}, set: function(v){this._setter('РасходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
НДС_УСН: {get: function(){return this._getter('НДС_УСН')}, set: function(v){this._setter('НДС_УСН',v)}, enumerable: true, configurable: true},
РучнаяНастройка_УСН: {get: function(){return this._getter('РучнаяНастройка_УСН')}, set: function(v){this._setter('РучнаяНастройка_УСН',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
НазначениеПлатежа: {get: function(){return this._getter('НазначениеПлатежа')}, set: function(v){this._setter('НазначениеПлатежа',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентомНУ: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентомНУ')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентомНУ',v)}, enumerable: true, configurable: true},
СубконтоНУКт1: {get: function(){return this._getter('СубконтоНУКт1')}, set: function(v){this._setter('СубконтоНУКт1',v)}, enumerable: true, configurable: true},
СубконтоНУКт2: {get: function(){return this._getter('СубконтоНУКт2')}, set: function(v){this._setter('СубконтоНУКт2',v)}, enumerable: true, configurable: true},
СубконтоНУКт3: {get: function(){return this._getter('СубконтоНУКт3')}, set: function(v){this._setter('СубконтоНУКт3',v)}, enumerable: true, configurable: true},
cost_item: {get: function(){return this._getter('cost_item')}, set: function(v){this._setter('cost_item',v)}, enumerable: true, configurable: true},
nom_group: {get: function(){return this._getter('nom_group')}, set: function(v){this._setter('nom_group',v)}, enumerable: true, configurable: true},
ПодразделениеЗатраты: {get: function(){return this._getter('ПодразделениеЗатраты')}, set: function(v){this._setter('ПодразделениеЗатраты',v)}, enumerable: true, configurable: true},
ПодразделениеОрганизацииЗатраты: {get: function(){return this._getter('ПодразделениеОрганизацииЗатраты')}, set: function(v){this._setter('ПодразделениеОрганизацииЗатраты',v)}, enumerable: true, configurable: true},
СуммаУслуг: {get: function(){return this._getter('СуммаУслуг')}, set: function(v){this._setter('СуммаУслуг',v)}, enumerable: true, configurable: true}});
function DocDebit_bank_orderРасшифровкаПлатежаRow(owner){DocDebit_bank_orderРасшифровкаПлатежаRow.superclass.constructor.call(this, owner)};
DocDebit_bank_orderРасшифровкаПлатежаRow._extend($p.TabularSectionRow);
$p.DocDebit_bank_orderРасшифровкаПлатежаRow = DocDebit_bank_orderРасшифровкаПлатежаRow;
DocDebit_bank_orderРасшифровкаПлатежаRow.prototype.__define({contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true}});
DocDebit_bank_order.prototype.__define('РасшифровкаПлатежа', {get: function(){return this._getter_ts('РасшифровкаПлатежа')}, set: function(v){this._setter_ts('РасшифровкаПлатежа',v)}, enumerable: true, configurable: true});
function DocDebit_bank_orderРеквизитыКонтрагентаRow(owner){DocDebit_bank_orderРеквизитыКонтрагентаRow.superclass.constructor.call(this, owner)};
DocDebit_bank_orderРеквизитыКонтрагентаRow._extend($p.TabularSectionRow);
$p.DocDebit_bank_orderРеквизитыКонтрагентаRow = DocDebit_bank_orderРеквизитыКонтрагентаRow;
DocDebit_bank_orderРеквизитыКонтрагентаRow.prototype.__define({contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
ТипКонтрагента: {get: function(){return this._getter('ТипКонтрагента')}, set: function(v){this._setter('ТипКонтрагента',v)}, enumerable: true, configurable: true}});
DocDebit_bank_order.prototype.__define('РеквизитыКонтрагента', {get: function(){return this._getter_ts('РеквизитыКонтрагента')}, set: function(v){this._setter_ts('РеквизитыКонтрагента',v)}, enumerable: true, configurable: true});
$p.doc.debit_bank_order = new $p.DocManager('doc.debit_bank_order');

/**
* ### Документ ПлатежноеПоручениеИсходящее
* Платежное поручение исходящее
* @class DocCredit_bank_order
* @extends DocObj
* @constructor 
*/
function DocCredit_bank_order(attr, manager){DocCredit_bank_order.superclass.constructor.call(this, attr, manager)}
DocCredit_bank_order._extend($p.DocObj);
$p.DocCredit_bank_order = DocCredit_bank_order;
DocCredit_bank_order.prototype.__define({ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true},
organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
СчетОрганизации: {get: function(){return this._getter('СчетОрганизации')}, set: function(v){this._setter('СчетОрганизации',v)}, enumerable: true, configurable: true},
partner: {get: function(){return this._getter('partner')}, set: function(v){this._setter('partner',v)}, enumerable: true, configurable: true},
ДатаОплаты: {get: function(){return this._getter('ДатаОплаты')}, set: function(v){this._setter('ДатаОплаты',v)}, enumerable: true, configurable: true},
СчетКонтрагента: {get: function(){return this._getter('СчетКонтрагента')}, set: function(v){this._setter('СчетКонтрагента',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ВидПлатежа: {get: function(){return this._getter('ВидПлатежа')}, set: function(v){this._setter('ВидПлатежа',v)}, enumerable: true, configurable: true},
ОчередностьПлатежа: {get: function(){return this._getter('ОчередностьПлатежа')}, set: function(v){this._setter('ОчередностьПлатежа',v)}, enumerable: true, configurable: true},
НазначениеПлатежа: {get: function(){return this._getter('НазначениеПлатежа')}, set: function(v){this._setter('НазначениеПлатежа',v)}, enumerable: true, configurable: true},
ТекстПлательщика: {get: function(){return this._getter('ТекстПлательщика')}, set: function(v){this._setter('ТекстПлательщика',v)}, enumerable: true, configurable: true},
doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
ТекстПолучателя: {get: function(){return this._getter('ТекстПолучателя')}, set: function(v){this._setter('ТекстПолучателя',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
Оплачено: {get: function(){return this._getter('Оплачено')}, set: function(v){this._setter('Оплачено',v)}, enumerable: true, configurable: true},
ИННПлательщика: {get: function(){return this._getter('ИННПлательщика')}, set: function(v){this._setter('ИННПлательщика',v)}, enumerable: true, configurable: true},
КПППлательщика: {get: function(){return this._getter('КПППлательщика')}, set: function(v){this._setter('КПППлательщика',v)}, enumerable: true, configurable: true},
ИННПолучателя: {get: function(){return this._getter('ИННПолучателя')}, set: function(v){this._setter('ИННПолучателя',v)}, enumerable: true, configurable: true},
КПППолучателя: {get: function(){return this._getter('КПППолучателя')}, set: function(v){this._setter('КПППолучателя',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
КодБК: {get: function(){return this._getter('КодБК')}, set: function(v){this._setter('КодБК',v)}, enumerable: true, configurable: true},
ОтраженоВОперУчете: {get: function(){return this._getter('ОтраженоВОперУчете')}, set: function(v){this._setter('ОтраженоВОперУчете',v)}, enumerable: true, configurable: true},
КодОКАТО: {get: function(){return this._getter('КодОКАТО')}, set: function(v){this._setter('КодОКАТО',v)}, enumerable: true, configurable: true},
ПоказательДаты: {get: function(){return this._getter('ПоказательДаты')}, set: function(v){this._setter('ПоказательДаты',v)}, enumerable: true, configurable: true},
ПоказательНомера: {get: function(){return this._getter('ПоказательНомера')}, set: function(v){this._setter('ПоказательНомера',v)}, enumerable: true, configurable: true},
ПоказательОснования: {get: function(){return this._getter('ПоказательОснования')}, set: function(v){this._setter('ПоказательОснования',v)}, enumerable: true, configurable: true},
ПоказательПериода: {get: function(){return this._getter('ПоказательПериода')}, set: function(v){this._setter('ПоказательПериода',v)}, enumerable: true, configurable: true},
ПоказательТипа: {get: function(){return this._getter('ПоказательТипа')}, set: function(v){this._setter('ПоказательТипа',v)}, enumerable: true, configurable: true},
СтатусСоставителя: {get: function(){return this._getter('СтатусСоставителя')}, set: function(v){this._setter('СтатусСоставителя',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СубконтоДт1: {get: function(){return this._getter('СубконтоДт1')}, set: function(v){this._setter('СубконтоДт1',v)}, enumerable: true, configurable: true},
СубконтоДт2: {get: function(){return this._getter('СубконтоДт2')}, set: function(v){this._setter('СубконтоДт2',v)}, enumerable: true, configurable: true},
СубконтоДт3: {get: function(){return this._getter('СубконтоДт3')}, set: function(v){this._setter('СубконтоДт3',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
ФизЛицо: {get: function(){return this._getter('ФизЛицо')}, set: function(v){this._setter('ФизЛицо',v)}, enumerable: true, configurable: true},
ДоговорЗайма: {get: function(){return this._getter('ДоговорЗайма')}, set: function(v){this._setter('ДоговорЗайма',v)}, enumerable: true, configurable: true},
ВалютаВзаиморасчетовРаботника: {get: function(){return this._getter('ВалютаВзаиморасчетовРаботника')}, set: function(v){this._setter('ВалютаВзаиморасчетовРаботника',v)}, enumerable: true, configurable: true},
ЧастичнаяОплата: {get: function(){return this._getter('ЧастичнаяОплата')}, set: function(v){this._setter('ЧастичнаяОплата',v)}, enumerable: true, configurable: true},
Содержание_УСН: {get: function(){return this._getter('Содержание_УСН')}, set: function(v){this._setter('Содержание_УСН',v)}, enumerable: true, configurable: true},
Графа4_УСН: {get: function(){return this._getter('Графа4_УСН')}, set: function(v){this._setter('Графа4_УСН',v)}, enumerable: true, configurable: true},
Графа5_УСН: {get: function(){return this._getter('Графа5_УСН')}, set: function(v){this._setter('Графа5_УСН',v)}, enumerable: true, configurable: true},
Графа6_УСН: {get: function(){return this._getter('Графа6_УСН')}, set: function(v){this._setter('Графа6_УСН',v)}, enumerable: true, configurable: true},
Графа7_УСН: {get: function(){return this._getter('Графа7_УСН')}, set: function(v){this._setter('Графа7_УСН',v)}, enumerable: true, configurable: true},
ДоходыЕНВД_УСН: {get: function(){return this._getter('ДоходыЕНВД_УСН')}, set: function(v){this._setter('ДоходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
РасходыЕНВД_УСН: {get: function(){return this._getter('РасходыЕНВД_УСН')}, set: function(v){this._setter('РасходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
НДС_УСН: {get: function(){return this._getter('НДС_УСН')}, set: function(v){this._setter('НДС_УСН',v)}, enumerable: true, configurable: true},
РучнаяНастройка_УСН: {get: function(){return this._getter('РучнаяНастройка_УСН')}, set: function(v){this._setter('РучнаяНастройка_УСН',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентомНУ: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентомНУ')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентомНУ',v)}, enumerable: true, configurable: true},
СубконтоНУДт1: {get: function(){return this._getter('СубконтоНУДт1')}, set: function(v){this._setter('СубконтоНУДт1',v)}, enumerable: true, configurable: true},
СубконтоНУДт2: {get: function(){return this._getter('СубконтоНУДт2')}, set: function(v){this._setter('СубконтоНУДт2',v)}, enumerable: true, configurable: true},
СубконтоНУДт3: {get: function(){return this._getter('СубконтоНУДт3')}, set: function(v){this._setter('СубконтоНУДт3',v)}, enumerable: true, configurable: true},
ДатаПогашенияАванса: {get: function(){return this._getter('ДатаПогашенияАванса')}, set: function(v){this._setter('ДатаПогашенияАванса',v)}, enumerable: true, configurable: true},
РасчетныйДокументРаботника: {get: function(){return this._getter('РасчетныйДокументРаботника')}, set: function(v){this._setter('РасчетныйДокументРаботника',v)}, enumerable: true, configurable: true},
ПеречислениеВБюджет: {get: function(){return this._getter('ПеречислениеВБюджет')}, set: function(v){this._setter('ПеречислениеВБюджет',v)}, enumerable: true, configurable: true},
ВидПеречисленияВБюджет: {get: function(){return this._getter('ВидПеречисленияВБюджет')}, set: function(v){this._setter('ВидПеречисленияВБюджет',v)}, enumerable: true, configurable: true},
ИдентификаторПлатежа: {get: function(){return this._getter('ИдентификаторПлатежа')}, set: function(v){this._setter('ИдентификаторПлатежа',v)}, enumerable: true, configurable: true}});
function DocCredit_bank_orderПеречислениеЗаработнойПлатыRow(owner){DocCredit_bank_orderПеречислениеЗаработнойПлатыRow.superclass.constructor.call(this, owner)};
DocCredit_bank_orderПеречислениеЗаработнойПлатыRow._extend($p.TabularSectionRow);
$p.DocCredit_bank_orderПеречислениеЗаработнойПлатыRow = DocCredit_bank_orderПеречислениеЗаработнойПлатыRow;
DocCredit_bank_orderПеречислениеЗаработнойПлатыRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true}});
DocCredit_bank_order.prototype.__define('ПеречислениеЗаработнойПлаты', {get: function(){return this._getter_ts('ПеречислениеЗаработнойПлаты')}, set: function(v){this._setter_ts('ПеречислениеЗаработнойПлаты',v)}, enumerable: true, configurable: true});
function DocCredit_bank_orderРасшифровкаПлатежаRow(owner){DocCredit_bank_orderРасшифровкаПлатежаRow.superclass.constructor.call(this, owner)};
DocCredit_bank_orderРасшифровкаПлатежаRow._extend($p.TabularSectionRow);
$p.DocCredit_bank_orderРасшифровкаПлатежаRow = DocCredit_bank_orderРасшифровкаПлатежаRow;
DocCredit_bank_orderРасшифровкаПлатежаRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true}});
DocCredit_bank_order.prototype.__define('РасшифровкаПлатежа', {get: function(){return this._getter_ts('РасшифровкаПлатежа')}, set: function(v){this._setter_ts('РасшифровкаПлатежа',v)}, enumerable: true, configurable: true});
function DocCredit_bank_orderРеквизитыКонтрагентаRow(owner){DocCredit_bank_orderРеквизитыКонтрагентаRow.superclass.constructor.call(this, owner)};
DocCredit_bank_orderРеквизитыКонтрагентаRow._extend($p.TabularSectionRow);
$p.DocCredit_bank_orderРеквизитыКонтрагентаRow = DocCredit_bank_orderРеквизитыКонтрагентаRow;
DocCredit_bank_orderРеквизитыКонтрагентаRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
ТипКонтрагента: {get: function(){return this._getter('ТипКонтрагента')}, set: function(v){this._setter('ТипКонтрагента',v)}, enumerable: true, configurable: true}});
DocCredit_bank_order.prototype.__define('РеквизитыКонтрагента', {get: function(){return this._getter_ts('РеквизитыКонтрагента')}, set: function(v){this._setter_ts('РеквизитыКонтрагента',v)}, enumerable: true, configurable: true});
function DocCredit_bank_orderРаботникиRow(owner){DocCredit_bank_orderРаботникиRow.superclass.constructor.call(this, owner)};
DocCredit_bank_orderРаботникиRow._extend($p.TabularSectionRow);
$p.DocCredit_bank_orderРаботникиRow = DocCredit_bank_orderРаботникиRow;
DocCredit_bank_orderРаботникиRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
ТипКонтрагента: {get: function(){return this._getter('ТипКонтрагента')}, set: function(v){this._setter('ТипКонтрагента',v)}, enumerable: true, configurable: true},
Физлицо: {get: function(){return this._getter('Физлицо')}, set: function(v){this._setter('Физлицо',v)}, enumerable: true, configurable: true},
amount: {get: function(){return this._getter('amount')}, set: function(v){this._setter('amount',v)}, enumerable: true, configurable: true}});
DocCredit_bank_order.prototype.__define('Работники', {get: function(){return this._getter_ts('Работники')}, set: function(v){this._setter_ts('Работники',v)}, enumerable: true, configurable: true});
$p.doc.credit_bank_order = new $p.DocManager('doc.credit_bank_order');

/**
* ### Документ ПриходныйКассовыйОрдер
* Приходный кассовый ордер
* @class DocDebit_cash_order
* @extends DocObj
* @constructor 
*/
function DocDebit_cash_order(attr, manager){DocDebit_cash_order.superclass.constructor.call(this, attr, manager)}
DocDebit_cash_order._extend($p.DocObj);
$p.DocDebit_cash_order = DocDebit_cash_order;
DocDebit_cash_order.prototype.__define({organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
Касса: {get: function(){return this._getter('Касса')}, set: function(v){this._setter('Касса',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
partner: {get: function(){return this._getter('partner')}, set: function(v){this._setter('partner',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ВалютаВзаиморасчетовПодотчетника: {get: function(){return this._getter('ВалютаВзаиморасчетовПодотчетника')}, set: function(v){this._setter('ВалютаВзаиморасчетовПодотчетника',v)}, enumerable: true, configurable: true},
doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
ПринятоОт: {get: function(){return this._getter('ПринятоОт')}, set: function(v){this._setter('ПринятоОт',v)}, enumerable: true, configurable: true},
Основание: {get: function(){return this._getter('Основание')}, set: function(v){this._setter('Основание',v)}, enumerable: true, configurable: true},
Приложение: {get: function(){return this._getter('Приложение')}, set: function(v){this._setter('Приложение',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
ОтраженоВОперУчете: {get: function(){return this._getter('ОтраженоВОперУчете')}, set: function(v){this._setter('ОтраженоВОперУчете',v)}, enumerable: true, configurable: true},
Оплачено: {get: function(){return this._getter('Оплачено')}, set: function(v){this._setter('Оплачено',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ОтражатьВУправленческомУчете: {get: function(){return this._getter('ОтражатьВУправленческомУчете')}, set: function(v){this._setter('ОтражатьВУправленческомУчете',v)}, enumerable: true, configurable: true},
ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
РасчетныйДокумент: {get: function(){return this._getter('РасчетныйДокумент')}, set: function(v){this._setter('РасчетныйДокумент',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СубконтоКт1: {get: function(){return this._getter('СубконтоКт1')}, set: function(v){this._setter('СубконтоКт1',v)}, enumerable: true, configurable: true},
СубконтоКт2: {get: function(){return this._getter('СубконтоКт2')}, set: function(v){this._setter('СубконтоКт2',v)}, enumerable: true, configurable: true},
СубконтоКт3: {get: function(){return this._getter('СубконтоКт3')}, set: function(v){this._setter('СубконтоКт3',v)}, enumerable: true, configurable: true},
СчетОрганизации: {get: function(){return this._getter('СчетОрганизации')}, set: function(v){this._setter('СчетОрганизации',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
Содержание_УСН: {get: function(){return this._getter('Содержание_УСН')}, set: function(v){this._setter('Содержание_УСН',v)}, enumerable: true, configurable: true},
Графа4_УСН: {get: function(){return this._getter('Графа4_УСН')}, set: function(v){this._setter('Графа4_УСН',v)}, enumerable: true, configurable: true},
Графа5_УСН: {get: function(){return this._getter('Графа5_УСН')}, set: function(v){this._setter('Графа5_УСН',v)}, enumerable: true, configurable: true},
Графа6_УСН: {get: function(){return this._getter('Графа6_УСН')}, set: function(v){this._setter('Графа6_УСН',v)}, enumerable: true, configurable: true},
Графа7_УСН: {get: function(){return this._getter('Графа7_УСН')}, set: function(v){this._setter('Графа7_УСН',v)}, enumerable: true, configurable: true},
ДоходыЕНВД_УСН: {get: function(){return this._getter('ДоходыЕНВД_УСН')}, set: function(v){this._setter('ДоходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
РасходыЕНВД_УСН: {get: function(){return this._getter('РасходыЕНВД_УСН')}, set: function(v){this._setter('РасходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
НДС_УСН: {get: function(){return this._getter('НДС_УСН')}, set: function(v){this._setter('НДС_УСН',v)}, enumerable: true, configurable: true},
РучнаяНастройка_УСН: {get: function(){return this._getter('РучнаяНастройка_УСН')}, set: function(v){this._setter('РучнаяНастройка_УСН',v)}, enumerable: true, configurable: true},
ВыручкаСНТТ: {get: function(){return this._getter('ВыручкаСНТТ')}, set: function(v){this._setter('ВыручкаСНТТ',v)}, enumerable: true, configurable: true},
НомерЧекаККМ: {get: function(){return this._getter('НомерЧекаККМ')}, set: function(v){this._setter('НомерЧекаККМ',v)}, enumerable: true, configurable: true},
ВидПриемаРозничнойВыручки: {get: function(){return this._getter('ВидПриемаРозничнойВыручки')}, set: function(v){this._setter('ВидПриемаРозничнойВыручки',v)}, enumerable: true, configurable: true},
ДенежныйЧек: {get: function(){return this._getter('ДенежныйЧек')}, set: function(v){this._setter('ДенежныйЧек',v)}, enumerable: true, configurable: true}});
function DocDebit_cash_orderРасшифровкаПлатежаRow(owner){DocDebit_cash_orderРасшифровкаПлатежаRow.superclass.constructor.call(this, owner)};
DocDebit_cash_orderРасшифровкаПлатежаRow._extend($p.TabularSectionRow);
$p.DocDebit_cash_orderРасшифровкаПлатежаRow = DocDebit_cash_orderРасшифровкаПлатежаRow;
DocDebit_cash_orderРасшифровкаПлатежаRow.prototype.__define({contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true}});
DocDebit_cash_order.prototype.__define('РасшифровкаПлатежа', {get: function(){return this._getter_ts('РасшифровкаПлатежа')}, set: function(v){this._setter_ts('РасшифровкаПлатежа',v)}, enumerable: true, configurable: true});
$p.doc.debit_cash_order = new $p.DocManager('doc.debit_cash_order');

/**
* ### Документ РасходныйКассовыйОрдер
* Расходный кассовый ордер
* @class DocCredit_cash_order
* @extends DocObj
* @constructor 
*/
function DocCredit_cash_order(attr, manager){DocCredit_cash_order.superclass.constructor.call(this, attr, manager)}
DocCredit_cash_order._extend($p.DocObj);
$p.DocCredit_cash_order = DocCredit_cash_order;
DocCredit_cash_order.prototype.__define({organization: {get: function(){return this._getter('organization')}, set: function(v){this._setter('organization',v)}, enumerable: true, configurable: true},
Касса: {get: function(){return this._getter('Касса')}, set: function(v){this._setter('Касса',v)}, enumerable: true, configurable: true},
department: {get: function(){return this._getter('department')}, set: function(v){this._setter('department',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
Выдать: {get: function(){return this._getter('Выдать')}, set: function(v){this._setter('Выдать',v)}, enumerable: true, configurable: true},
Основание: {get: function(){return this._getter('Основание')}, set: function(v){this._setter('Основание',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
ВалютаВзаиморасчетовРаботника: {get: function(){return this._getter('ВалютаВзаиморасчетовРаботника')}, set: function(v){this._setter('ВалютаВзаиморасчетовРаботника',v)}, enumerable: true, configurable: true},
doc_currency: {get: function(){return this._getter('doc_currency')}, set: function(v){this._setter('doc_currency',v)}, enumerable: true, configurable: true},
Приложение: {get: function(){return this._getter('Приложение')}, set: function(v){this._setter('Приложение',v)}, enumerable: true, configurable: true},
ДатаПогашенияАванса: {get: function(){return this._getter('ДатаПогашенияАванса')}, set: function(v){this._setter('ДатаПогашенияАванса',v)}, enumerable: true, configurable: true},
РасчетныйДокумент: {get: function(){return this._getter('РасчетныйДокумент')}, set: function(v){this._setter('РасчетныйДокумент',v)}, enumerable: true, configurable: true},
ПоДокументу: {get: function(){return this._getter('ПоДокументу')}, set: function(v){this._setter('ПоДокументу',v)}, enumerable: true, configurable: true},
ОтражатьВУправленческомУчете: {get: function(){return this._getter('ОтражатьВУправленческомУчете')}, set: function(v){this._setter('ОтражатьВУправленческомУчете',v)}, enumerable: true, configurable: true},
accounting_reflect: {get: function(){return this._getter('accounting_reflect')}, set: function(v){this._setter('accounting_reflect',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ОтраженоВОперУчете: {get: function(){return this._getter('ОтраженоВОперУчете')}, set: function(v){this._setter('ОтраженоВОперУчете',v)}, enumerable: true, configurable: true},
Оплачено: {get: function(){return this._getter('Оплачено')}, set: function(v){this._setter('Оплачено',v)}, enumerable: true, configurable: true},
partner: {get: function(){return this._getter('partner')}, set: function(v){this._setter('partner',v)}, enumerable: true, configurable: true},
ВидОперации: {get: function(){return this._getter('ВидОперации')}, set: function(v){this._setter('ВидОперации',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
ДокументОснование: {get: function(){return this._getter('ДокументОснование')}, set: function(v){this._setter('ДокументОснование',v)}, enumerable: true, configurable: true},
tax_accounting_reflect: {get: function(){return this._getter('tax_accounting_reflect')}, set: function(v){this._setter('tax_accounting_reflect',v)}, enumerable: true, configurable: true},
СубконтоДт1: {get: function(){return this._getter('СубконтоДт1')}, set: function(v){this._setter('СубконтоДт1',v)}, enumerable: true, configurable: true},
СубконтоДт2: {get: function(){return this._getter('СубконтоДт2')}, set: function(v){this._setter('СубконтоДт2',v)}, enumerable: true, configurable: true},
СубконтоДт3: {get: function(){return this._getter('СубконтоДт3')}, set: function(v){this._setter('СубконтоДт3',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетОрганизации: {get: function(){return this._getter('СчетОрганизации')}, set: function(v){this._setter('СчетОрганизации',v)}, enumerable: true, configurable: true},
Содержание_УСН: {get: function(){return this._getter('Содержание_УСН')}, set: function(v){this._setter('Содержание_УСН',v)}, enumerable: true, configurable: true},
Графа4_УСН: {get: function(){return this._getter('Графа4_УСН')}, set: function(v){this._setter('Графа4_УСН',v)}, enumerable: true, configurable: true},
Графа5_УСН: {get: function(){return this._getter('Графа5_УСН')}, set: function(v){this._setter('Графа5_УСН',v)}, enumerable: true, configurable: true},
Графа6_УСН: {get: function(){return this._getter('Графа6_УСН')}, set: function(v){this._setter('Графа6_УСН',v)}, enumerable: true, configurable: true},
Графа7_УСН: {get: function(){return this._getter('Графа7_УСН')}, set: function(v){this._setter('Графа7_УСН',v)}, enumerable: true, configurable: true},
ДоходыЕНВД_УСН: {get: function(){return this._getter('ДоходыЕНВД_УСН')}, set: function(v){this._setter('ДоходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
РасходыЕНВД_УСН: {get: function(){return this._getter('РасходыЕНВД_УСН')}, set: function(v){this._setter('РасходыЕНВД_УСН',v)}, enumerable: true, configurable: true},
НДС_УСН: {get: function(){return this._getter('НДС_УСН')}, set: function(v){this._setter('НДС_УСН',v)}, enumerable: true, configurable: true},
РучнаяНастройка_УСН: {get: function(){return this._getter('РучнаяНастройка_УСН')}, set: function(v){this._setter('РучнаяНастройка_УСН',v)}, enumerable: true, configurable: true},
ВидВыдачиДенежныхСредств: {get: function(){return this._getter('ВидВыдачиДенежныхСредств')}, set: function(v){this._setter('ВидВыдачиДенежныхСредств',v)}, enumerable: true, configurable: true},
ОбъявлениеНаВзносНаличными: {get: function(){return this._getter('ОбъявлениеНаВзносНаличными')}, set: function(v){this._setter('ОбъявлениеНаВзносНаличными',v)}, enumerable: true, configurable: true},
НомерЧекаККМ: {get: function(){return this._getter('НомерЧекаККМ')}, set: function(v){this._setter('НомерЧекаККМ',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентомНУ: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентомНУ')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентомНУ',v)}, enumerable: true, configurable: true},
СубконтоНУДт1: {get: function(){return this._getter('СубконтоНУДт1')}, set: function(v){this._setter('СубконтоНУДт1',v)}, enumerable: true, configurable: true},
СубконтоНУДт2: {get: function(){return this._getter('СубконтоНУДт2')}, set: function(v){this._setter('СубконтоНУДт2',v)}, enumerable: true, configurable: true},
СубконтоНУДт3: {get: function(){return this._getter('СубконтоНУДт3')}, set: function(v){this._setter('СубконтоНУДт3',v)}, enumerable: true, configurable: true}});
function DocCredit_cash_orderВыплатаЗаработнойПлатыRow(owner){DocCredit_cash_orderВыплатаЗаработнойПлатыRow.superclass.constructor.call(this, owner)};
DocCredit_cash_orderВыплатаЗаработнойПлатыRow._extend($p.TabularSectionRow);
$p.DocCredit_cash_orderВыплатаЗаработнойПлатыRow = DocCredit_cash_orderВыплатаЗаработнойПлатыRow;
DocCredit_cash_orderВыплатаЗаработнойПлатыRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true}});
DocCredit_cash_order.prototype.__define('ВыплатаЗаработнойПлаты', {get: function(){return this._getter_ts('ВыплатаЗаработнойПлаты')}, set: function(v){this._setter_ts('ВыплатаЗаработнойПлаты',v)}, enumerable: true, configurable: true});
function DocCredit_cash_orderРасшифровкаПлатежаRow(owner){DocCredit_cash_orderРасшифровкаПлатежаRow.superclass.constructor.call(this, owner)};
DocCredit_cash_orderРасшифровкаПлатежаRow._extend($p.TabularSectionRow);
$p.DocCredit_cash_orderРасшифровкаПлатежаRow = DocCredit_cash_orderРасшифровкаПлатежаRow;
DocCredit_cash_orderРасшифровкаПлатежаRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true}});
DocCredit_cash_order.prototype.__define('РасшифровкаПлатежа', {get: function(){return this._getter_ts('РасшифровкаПлатежа')}, set: function(v){this._setter_ts('РасшифровкаПлатежа',v)}, enumerable: true, configurable: true});
function DocCredit_cash_orderВыплатаДепонентовRow(owner){DocCredit_cash_orderВыплатаДепонентовRow.superclass.constructor.call(this, owner)};
DocCredit_cash_orderВыплатаДепонентовRow._extend($p.TabularSectionRow);
$p.DocCredit_cash_orderВыплатаДепонентовRow = DocCredit_cash_orderВыплатаДепонентовRow;
DocCredit_cash_orderВыплатаДепонентовRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
ФизЛицо: {get: function(){return this._getter('ФизЛицо')}, set: function(v){this._setter('ФизЛицо',v)}, enumerable: true, configurable: true},
Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаКВыплате: {get: function(){return this._getter('СуммаКВыплате')}, set: function(v){this._setter('СуммаКВыплате',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true}});
DocCredit_cash_order.prototype.__define('ВыплатаДепонентов', {get: function(){return this._getter_ts('ВыплатаДепонентов')}, set: function(v){this._setter_ts('ВыплатаДепонентов',v)}, enumerable: true, configurable: true});
function DocCredit_cash_orderIndividualsRow(owner){DocCredit_cash_orderIndividualsRow.superclass.constructor.call(this, owner)};
DocCredit_cash_orderIndividualsRow._extend($p.TabularSectionRow);
$p.DocCredit_cash_orderIndividualsRow = DocCredit_cash_orderIndividualsRow;
DocCredit_cash_orderIndividualsRow.prototype.__define({Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
contract: {get: function(){return this._getter('contract')}, set: function(v){this._setter('contract',v)}, enumerable: true, configurable: true},
settlements_course: {get: function(){return this._getter('settlements_course')}, set: function(v){this._setter('settlements_course',v)}, enumerable: true, configurable: true},
СуммаПлатежа: {get: function(){return this._getter('СуммаПлатежа')}, set: function(v){this._setter('СуммаПлатежа',v)}, enumerable: true, configurable: true},
settlements_multiplicity: {get: function(){return this._getter('settlements_multiplicity')}, set: function(v){this._setter('settlements_multiplicity',v)}, enumerable: true, configurable: true},
amount_mutual: {get: function(){return this._getter('amount_mutual')}, set: function(v){this._setter('amount_mutual',v)}, enumerable: true, configurable: true},
vat_rate: {get: function(){return this._getter('vat_rate')}, set: function(v){this._setter('vat_rate',v)}, enumerable: true, configurable: true},
vat_amount: {get: function(){return this._getter('vat_amount')}, set: function(v){this._setter('vat_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовСКонтрагентом: {get: function(){return this._getter('СчетУчетаРасчетовСКонтрагентом')}, set: function(v){this._setter('СчетУчетаРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
СчетУчетаРасчетовПоАвансам: {get: function(){return this._getter('СчетУчетаРасчетовПоАвансам')}, set: function(v){this._setter('СчетУчетаРасчетовПоАвансам',v)}, enumerable: true, configurable: true},
trans: {get: function(){return this._getter('trans')}, set: function(v){this._setter('trans',v)}, enumerable: true, configurable: true},
ДокументПланированияПлатежа: {get: function(){return this._getter('ДокументПланированияПлатежа')}, set: function(v){this._setter('ДокументПланированияПлатежа',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
КурсВзаиморасчетовПлан: {get: function(){return this._getter('КурсВзаиморасчетовПлан')}, set: function(v){this._setter('КурсВзаиморасчетовПлан',v)}, enumerable: true, configurable: true},
СуммаПлатежаПлан: {get: function(){return this._getter('СуммаПлатежаПлан')}, set: function(v){this._setter('СуммаПлатежаПлан',v)}, enumerable: true, configurable: true},
ДокументРасчетовСКонтрагентом: {get: function(){return this._getter('ДокументРасчетовСКонтрагентом')}, set: function(v){this._setter('ДокументРасчетовСКонтрагентом',v)}, enumerable: true, configurable: true},
ФизЛицо: {get: function(){return this._getter('ФизЛицо')}, set: function(v){this._setter('ФизЛицо',v)}, enumerable: true, configurable: true},
Ведомость: {get: function(){return this._getter('Ведомость')}, set: function(v){this._setter('Ведомость',v)}, enumerable: true, configurable: true},
СуммаКВыплате: {get: function(){return this._getter('СуммаКВыплате')}, set: function(v){this._setter('СуммаКВыплате',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
project: {get: function(){return this._getter('project')}, set: function(v){this._setter('project',v)}, enumerable: true, configurable: true},
ФизическоеЛицо: {get: function(){return this._getter('ФизическоеЛицо')}, set: function(v){this._setter('ФизическоеЛицо',v)}, enumerable: true, configurable: true}});
DocCredit_cash_order.prototype.__define('individuals', {get: function(){return this._getter_ts('individuals')}, set: function(v){this._setter_ts('individuals',v)}, enumerable: true, configurable: true});
$p.doc.credit_cash_order = new $p.DocManager('doc.credit_cash_order');

/**
* ### Документ УстановкаЦенНоменклатуры
* Установка цен номенклатуры
* @class DocNom_prices_setup
* @extends DocObj
* @constructor 
*/
function DocNom_prices_setup(attr, manager){DocNom_prices_setup.superclass.constructor.call(this, attr, manager)}
DocNom_prices_setup._extend($p.DocObj);
$p.DocNom_prices_setup = DocNom_prices_setup;
DocNom_prices_setup.prototype.__define({note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
НеПроводитьНулевыеЗначения: {get: function(){return this._getter('НеПроводитьНулевыеЗначения')}, set: function(v){this._setter('НеПроводитьНулевыеЗначения',v)}, enumerable: true, configurable: true},
Информация: {get: function(){return this._getter('Информация')}, set: function(v){this._setter('Информация',v)}, enumerable: true, configurable: true}});
function DocNom_prices_setupGoodsRow(owner){DocNom_prices_setupGoodsRow.superclass.constructor.call(this, owner)};
DocNom_prices_setupGoodsRow._extend($p.TabularSectionRow);
$p.DocNom_prices_setupGoodsRow = DocNom_prices_setupGoodsRow;
DocNom_prices_setupGoodsRow.prototype.__define({nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
currency: {get: function(){return this._getter('currency')}, set: function(v){this._setter('currency',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
price_type: {get: function(){return this._getter('price_type')}, set: function(v){this._setter('price_type',v)}, enumerable: true, configurable: true},
ИндексСтрокиТаблицыЦен: {get: function(){return this._getter('ИндексСтрокиТаблицыЦен')}, set: function(v){this._setter('ИндексСтрокиТаблицыЦен',v)}, enumerable: true, configurable: true},
СпособРасчетаЦены: {get: function(){return this._getter('СпособРасчетаЦены')}, set: function(v){this._setter('СпособРасчетаЦены',v)}, enumerable: true, configurable: true}});
DocNom_prices_setup.prototype.__define('goods', {get: function(){return this._getter_ts('goods')}, set: function(v){this._setter_ts('goods',v)}, enumerable: true, configurable: true});
function DocNom_prices_setupТипыЦенRow(owner){DocNom_prices_setupТипыЦенRow.superclass.constructor.call(this, owner)};
DocNom_prices_setupТипыЦенRow._extend($p.TabularSectionRow);
$p.DocNom_prices_setupТипыЦенRow = DocNom_prices_setupТипыЦенRow;
DocNom_prices_setupТипыЦенRow.prototype.__define({nom: {get: function(){return this._getter('nom')}, set: function(v){this._setter('nom',v)}, enumerable: true, configurable: true},
nom_characteristic: {get: function(){return this._getter('nom_characteristic')}, set: function(v){this._setter('nom_characteristic',v)}, enumerable: true, configurable: true},
price: {get: function(){return this._getter('price')}, set: function(v){this._setter('price',v)}, enumerable: true, configurable: true},
currency: {get: function(){return this._getter('currency')}, set: function(v){this._setter('currency',v)}, enumerable: true, configurable: true},
unit: {get: function(){return this._getter('unit')}, set: function(v){this._setter('unit',v)}, enumerable: true, configurable: true},
discount_percent: {get: function(){return this._getter('discount_percent')}, set: function(v){this._setter('discount_percent',v)}, enumerable: true, configurable: true},
price_type: {get: function(){return this._getter('price_type')}, set: function(v){this._setter('price_type',v)}, enumerable: true, configurable: true},
ИндексСтрокиТаблицыЦен: {get: function(){return this._getter('ИндексСтрокиТаблицыЦен')}, set: function(v){this._setter('ИндексСтрокиТаблицыЦен',v)}, enumerable: true, configurable: true},
СпособРасчетаЦены: {get: function(){return this._getter('СпособРасчетаЦены')}, set: function(v){this._setter('СпособРасчетаЦены',v)}, enumerable: true, configurable: true},
price_type: {get: function(){return this._getter('price_type')}, set: function(v){this._setter('price_type',v)}, enumerable: true, configurable: true}});
DocNom_prices_setup.prototype.__define('ТипыЦен', {get: function(){return this._getter_ts('ТипыЦен')}, set: function(v){this._setter_ts('ТипыЦен',v)}, enumerable: true, configurable: true});
$p.doc.nom_prices_setup = new $p.DocManager('doc.nom_prices_setup');

/**
* ### Регистр сведений $log
* Журнал событий
* @class Ireg$log
* @extends RegisterRow
* @constructor 
*/
function Ireg$log(attr, manager){Ireg$log.superclass.constructor.call(this, attr, manager)}
Ireg$log._extend($p.RegisterRow);
$p.Ireg$log = Ireg$log;
Ireg$log.prototype.__define({date: {get: function(){return this._getter('date')}, set: function(v){this._setter('date',v)}, enumerable: true, configurable: true},
sequence: {get: function(){return this._getter('sequence')}, set: function(v){this._setter('sequence',v)}, enumerable: true, configurable: true},
class: {get: function(){return this._getter('class')}, set: function(v){this._setter('class',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
obj: {get: function(){return this._getter('obj')}, set: function(v){this._setter('obj',v)}, enumerable: true, configurable: true}});
$p.ireg.$log = new $p.LogManager('ireg.$log');
};


$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"}],"mutual_contract_settlements":[{"order":0,"name":"ПоДоговоруВЦелом","synonym":"По договору в целом"},{"order":1,"name":"ПоЗаказам","synonym":"По заказам"},{"order":2,"name":"ПоСчетам","synonym":"По счетам"}],"contract_kinds":[{"order":0,"name":"СПоставщиком","synonym":"С поставщиком"},{"order":1,"name":"СПокупателем","synonym":"С покупателем"},{"order":2,"name":"СКомитентом","synonym":"С комитентом"},{"order":3,"name":"СКомиссионером","synonym":"С комиссионером"},{"order":4,"name":"Прочее","synonym":"Прочее"}],"costs_kinds":[{"order":0,"name":"Материальные","synonym":"Материальные"},{"order":1,"name":"ОплатаТруда","synonym":"Оплата труда"},{"order":2,"name":"Амортизация","synonym":"Амортизация"},{"order":3,"name":"Прочие","synonym":"Прочие"}],"stores_kinds":[{"order":0,"name":"Оптовый","synonym":"Оптовый"},{"order":1,"name":"Розничный","synonym":"Розничный"},{"order":2,"name":"НТТ","synonym":"НТТ"}],"obj_delivery_states":[{"order":0,"name":"Черновик","synonym":"Черновик"},{"order":1,"name":"Отправлен","synonym":"Отправлен"},{"order":2,"name":"Подтвержден","synonym":"Подтвержден"},{"order":3,"name":"Отклонен","synonym":"Отклонен"},{"order":4,"name":"Отозван","synonym":"Отозван"},{"order":5,"name":"Архив","synonym":"Перенесён в архив"},{"order":6,"name":"Шаблон","synonym":"Шаблон"}],"vat_rates":[{"order":0,"name":"НДС18","synonym":"18%"},{"order":1,"name":"НДС18_118","synonym":"18% / 118%"},{"order":2,"name":"НДС10","synonym":"10%"},{"order":3,"name":"НДС10_110","synonym":"10% / 110%"},{"order":4,"name":"НДС0","synonym":"0%"},{"order":5,"name":"БезНДС","synonym":"Без НДС"},{"order":6,"name":"НДС20","synonym":"20%"},{"order":7,"name":"НДС20_120","synonym":"20% / 120%"}],"contact_information_types":[{"order":0,"name":"Адрес","synonym":"Адрес"},{"order":1,"name":"Телефон","synonym":"Телефон"},{"order":2,"name":"АдресЭлектроннойПочты","synonym":"E-Mail"},{"order":3,"name":"ВебСтраница","synonym":"Веб-страница"},{"order":4,"name":"Другое","synonym":"Другое"}],"nom_types":[{"order":0,"name":"Товар","synonym":"Товар"},{"order":1,"name":"Услуга","synonym":"Услуга"},{"order":2,"name":"Набор","synonym":"Набор-пакет"},{"order":3,"name":"Комплект","synonym":"Набор-комплект"}],"users_types":[{"order":0,"name":"ВнешнийПользователь","synonym":"Внешний пользователь"},{"order":1,"name":"ПользовательЛокальногоРешения","synonym":"Пользователь локального решения"},{"order":2,"name":"ПользовательОбластиДанных","synonym":"Пользователь области данных"}],"individual_legal":[{"order":0,"name":"ЮрЛицо","synonym":"Юрлицо"},{"order":1,"name":"ФизЛицо","synonym":"Физлицо"}]},"cat":{"banks_qualifier":{"name":"Банки","splitted":false,"synonym":"Банки","illustration":"","obj_presentation":"Банк","list_presentation":"Банки","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"КоррСчет":{"synonym":"Корр. счет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20,"str_fix":true}},"Город":{"synonym":"Город","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"address":{"synonym":"Адрес","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Телефоны":{"synonym":"Телефоны","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"parent":{"synonym":"Группа банков","multiline_mode":false,"tooltip":"","type":{"types":["cat.banks_qualifier"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"bank_accounts":{"name":"БанковскиеСчета","splitted":false,"synonym":"Банковские счета","illustration":"Банковские счета организаций и контрагентов","obj_presentation":"Банковский счет","list_presentation":"Банковские счета","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"НомерСчета":{"synonym":"Номер счета","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"Банк":{"synonym":"Банк","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"БанкДляРасчетов":{"synonym":"Банк для расчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"ТекстКорреспондента":{"synonym":"Текст корреспондента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ТекстНазначения":{"synonym":"Текст назначения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ВидСчета":{"synonym":"Вид счета","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"funds_currency":{"synonym":"Валюта денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"НомерИДатаРазрешения":{"synonym":"Номер и дата разрешения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"ДатаОткрытия":{"synonym":"Дата открытия","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ДатаЗакрытия":{"synonym":"Дата закрытия","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"МесяцПрописью":{"synonym":"Месяц прописью","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"СуммаБезКопеек":{"synonym":"Сумма без копеек","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ОтдельныйСчетГОЗ":{"synonym":"Отдельный счет ГОЗ","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ГосударственныйКонтракт":{"synonym":"Государственный контракт","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","УполномоченныйБанк"],"path":["Банк"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.ГосударственныеКонтракты"],"is_ref":true}},"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners","cat.organizations"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"currencies":{"name":"Валюты","splitted":false,"synonym":"Валюты","illustration":"","obj_presentation":"Валюта","list_presentation":"Валюты","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ПараметрыПрописиНаРусском":{"synonym":"Параметры прописи на русском","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{},"cachable":"ram"},"contact_information_kinds":{"name":"ВидыКонтактнойИнформации","splitted":false,"synonym":"Виды контактной информации","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"ВидОбъектаКонтактнойИнформации":{"synonym":"Вид объекта контактной информации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОбъектовКонтактнойИнформации"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom_kinds":{"name":"ВидыНоменклатуры","splitted":false,"synonym":"Виды номенклатуры","illustration":"","obj_presentation":"Вид номенклатуры","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"nom_type":{"synonym":"Тип номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.nom_types"],"is_ref":true}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"contracts":{"name":"ДоговорыКонтрагентов","splitted":false,"synonym":"Договоры контрагентов","illustration":"Перечень договоров, заключенных с контрагентами","obj_presentation":"Договор контрагента","list_presentation":"Договоры контрагентов","input_by_string":["name","id"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"settlements_currency":{"synonym":"Валюта взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"mutual_settlements":{"synonym":"Ведение взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.mutual_contract_settlements"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"check_days_without_pay":{"synonym":"Держать резерв без оплаты ограниченное время","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"allowable_debts_amount":{"synonym":"Допустимая сумма дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"allowable_debts_days":{"synonym":"Допустимое число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"check_debts_amount":{"synonym":"Контролировать сумму дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"check_debts_days":{"synonym":"Контролировать число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"prepayment_percent":{"synonym":"Процент предоплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"price_type":{"synonym":"Тип цен","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types_partners","cat.nom_prices_types"],"is_ref":true}},"contract_kind":{"synonym":"Вид договора","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.contract_kinds"],"is_ref":true}},"ЧислоДнейРезерваБезОплаты":{"synonym":"Число дней резерва без оплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"number_doc":{"synonym":"Номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"main_project":{"synonym":"Основной проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"main_cash_flow_article":{"synonym":"Основная статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СрокДействия":{"synonym":"Срок действия договора","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"owner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"parent":{"synonym":"Группа договоров","multiline_mode":false,"tooltip":"","type":{"types":["cat.contracts"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":["is_folder","id","_t_.name as presentation","enm_contract_kinds.synonym as contract_kind","enm_mutual_settlements.synonym as mutual_settlements","cat_organizations.name as organization","cat_partners.name as partner"],"cols":[{"id":"partner","width":"180","type":"ro","align":"left","sort":"server","caption":"Контрагент"},{"id":"organization","width":"180","type":"ro","align":"left","sort":"server","caption":"Организация"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"},{"id":"contract_kind","width":"150","type":"ro","align":"left","sort":"server","caption":"Вид договора"},{"id":"mutual_settlements","width":"150","type":"ro","align":"left","sort":"server","caption":"Ведение расчетов"}]},"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},"parent","name","number_doc","date","validity","owner","organization","contract_kind","mutual_settlements","settlements_currency"],"Дополнительно":["vat_consider","vat_included","price_type","main_project","main_cash_flow_article","check_debts_amount","check_debts_days","check_days_without_pay","prepayment_percent","allowable_debts_amount","allowable_debts_days","note"]}}}},"nom_units":{"name":"ЕдиницыИзмерения","splitted":false,"synonym":"Единицы измерения","illustration":"Перечень единиц измерения номенклатуры и номенклатурных групп","obj_presentation":"Единица измерения","list_presentation":"Единицы измерения","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"qualifier_unit":{"synonym":"Единица по классификатору","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.units"],"is_ref":true}},"Вес":{"synonym":"Вес","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"Объем":{"synonym":"Объем","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":3}},"ПорогОкругления":{"synonym":"Порог округления","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"ПредупреждатьОНецелыхМестах":{"synonym":"При округлении предупреждать о нецелых местах","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom_groups","cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":false,"synonym":"Значения свойств объектов (Классификатор)","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.property_values"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданых","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"ПорядокКоллекции":{"synonym":"Порядок коллекции","multiline_mode":false,"tooltip":"Порядок коллекции объекта метаданных,\nиспользуемый для сортировки в отчетах,\nнапример, коллекция \"Справочники\"\nперед коллекцией \"Документы\"","type":{"types":["number"],"digits":2,"fraction_figits":0}},"Имя":{"synonym":"Имя","multiline_mode":false,"tooltip":"Имя объекта метаданных,\nнапример, \"ОбъектыАдресацииЗадач\"","type":{"types":["string"],"str_len":255}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним объекта метаданных,\nнапример, \"Объекты адресации задач\"","type":{"types":["string"],"str_len":255}},"ПолноеИмя":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных,\nнапример, \"ПланВидовХарактеристик.ОбъектыАдресацииЗадач\"","type":{"types":["string"],"str_len":430}},"ПолныйСиноним":{"synonym":"Полный синоним","multiline_mode":false,"tooltip":"Полный синоним объекта метаданных,\nнапример, \"Планы видов характеристик. Объекты адресации задач\"","type":{"types":["string"],"str_len":430}},"БезДанных":{"synonym":"Без данных","multiline_mode":false,"tooltip":"Объект метаданных не имеет таблиц данных","type":{"types":["boolean"]}},"ЗначениеПустойСсылки":{"synonym":"Значение пустой ссылки","multiline_mode":false,"tooltip":"Для ссылочных типов объектов метаданных \nсодержит пустую ссылку своего типа,\nдля остальных - Неопределено\n(в форме показано представление\nтипа значения пустой ссылки)","choice_groups_elm":"elm","type":{"types":["cat.НастройкиРасчетаСебестоимости","cat.nom_series","cat.banks_qualifier","enm.contact_information_types","enm.individual_legal","cat.nom_groups","cat.charge_discounts_types","cat.regions","cat.price_groups","cat.nom_units","cch.predefined_elmnts","cat.currencies","doc.nom_prices_setup","cat.orders_closing_reasons","enm.stores_kinds","cat.characteristics","cat.projects","cat.contact_persons","cat.individuals","cat.users","doc.debit_bank_order","cch.destinations","cat.formulas","enm.contract_kinds","cat.property_values","doc.debt_adjustment","doc.credit_cash_order","cat.nom_prices_types_partners","cat.obj_categories","cat.gtd_numbers","doc.buyers_order","cat.nom_prices_types","cat.contact_persons_partners","cat.countries","cat.divisions","cat.ФП_ЛекарственныеФормы","enm.nom_types","cat.contact_information_kinds","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.serial_numbers","cat.nom_kinds","cat.organizations","enm.mutual_contract_settlements","cat.units","enm.costs_kinds","cat.sale_conditions","cat.quality","doc.credit_bank_order","cat.cashboxes","cat.nom","enm.obj_delivery_states","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.meta_ids","cat.contracts","cat.stores","cch.properties","cat.users_acl","enm.users_types"],"is_ref":true}},"КлючОбъектаМетаданных":{"synonym":"Ключ объекта метаданных","multiline_mode":false,"tooltip":"Хранилище ключа по которому определяется объект метаданных без использования полного имени","type":{"types":["Хранилище значения"]}},"НоваяСсылка":{"synonym":"Новая ссылка","multiline_mode":false,"tooltip":"Используется при обработке дублей идентификаторов подчиненного узла распределенной информационной базы.","choice_groups_elm":"elm","type":{"types":["cat.meta_ids"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"users_acl":{"name":"ИнтеграцияПраваПользователей","splitted":false,"synonym":"Права внешних пользователей","illustration":"","obj_presentation":"Права внешних пользователей","list_presentation":"Права внешних пользователей","input_by_string":[],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":false,"code_length":0,"fields":{"prefix":{"synonym":"Префикс нумерации документов","multiline_mode":false,"tooltip":"Префикс номеров документов текущего пользователя","type":{"types":["string"],"str_len":2}},"owner":{"synonym":"Пользователь","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.individuals","cat.users","cat.divisions","cat.partners","cat.organizations","cat.cashboxes","cat.meta_ids","cat.stores"],"is_ref":true}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}}},"cachable":"ram"},"cashboxes":{"name":"Кассы","splitted":false,"synonym":"Кассы","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"funds_currency":{"synonym":"Валюта денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"ПодразделениеОрганизации":{"synonym":"Подразделение организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ПодразделенияОрганизаций"],"is_ref":true}},"owner":{"synonym":"Организация","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"parent":{"synonym":"Группа касс","multiline_mode":false,"tooltip":"","type":{"types":["cat.cashboxes"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"obj_categories":{"name":"КатегорииОбъектов","splitted":false,"synonym":"Категории объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"НазначениеКатегории":{"synonym":"Назначение категории","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.destinations"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"quality":{"name":"Качество","splitted":false,"synonym":"Качество","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{},"tabular_sections":{},"cachable":"ram"},"units":{"name":"КлассификаторЕдиницИзмерения","splitted":false,"synonym":"Классификатор единиц измерения","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":4,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"МеждународноеСокращение":{"synonym":"Международное сокращение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":3}}},"tabular_sections":{},"cachable":"ram"},"countries":{"name":"КлассификаторСтранМира","splitted":false,"synonym":"Классификатор стран мира","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"КодАльфа2":{"synonym":"Код Альфа-2","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2}}},"tabular_sections":{},"cachable":"ram"},"contact_persons":{"name":"КонтактныеЛица","splitted":false,"synonym":"Контактные лица","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"Фамилия":{"synonym":"Фамилия","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Имя":{"synonym":"Имя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Отчество":{"synonym":"Отчество","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ДатаРождения":{"synonym":"Дата рождения","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"definition":{"synonym":"Описание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Пол":{"synonym":"Пол","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ПолФизическихЛиц"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"contact_persons_partners":{"name":"КонтактныеЛицаКонтрагентов","splitted":false,"synonym":"Контактные лица контрагентов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"Должность":{"synonym":"Должность","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"КонтактноеЛицо":{"synonym":"Контактное лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contact_persons"],"is_ref":true}},"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"partners":{"name":"Контрагенты","splitted":false,"synonym":"Контрагенты","illustration":"Перечень контрагентов: поставщиков, покупателей, комиссионеров, комитентов и др.","obj_presentation":"Контрагент","list_presentation":"Контрагенты","input_by_string":["name","id","ИНН"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДополнительноеОписание":{"synonym":"Дополнительное описание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ГоловнойКонтрагент":{"synonym":"Головной контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"КодПоОКПО":{"synonym":"Код по ОКПО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"ИНН":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"КПП":{"synonym":"КПП","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"ОсновнойБанковскийСчет":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"main_contract":{"synonym":"Основной договор контрагента","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ДокументУдостоверяющийЛичность":{"synonym":"Документ, удостоверяющий личность","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ОсновнойМенеджерПокупателя":{"synonym":"Основной менеджер покупателя","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"Покупатель":{"synonym":"Покупатель","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Поставщик":{"synonym":"Поставщик","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ОсновноеКонтактноеЛицо":{"synonym":"Основное контактное лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contact_persons_partners"],"is_ref":true}},"Регион":{"synonym":"Регион","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.regions"],"is_ref":true}},"parent":{"synonym":"Группа контрагентов","multiline_mode":false,"tooltip":"","type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom":{"name":"Номенклатура","splitted":false,"synonym":"Номенклатура","illustration":"Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг","obj_presentation":"Номенклатура","list_presentation":"Номенклатура","input_by_string":["name","id","article"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"ВестиОперативныйУчетОстатковНЗП":{"synonym":"Вести оперативный учет остатков НЗП","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВестиУчетПоСериям":{"synonym":"Вести учет по сериям","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВестиУчетПоСериямВНЗП":{"synonym":"Вести учет по сериям в НЗП","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВестиУчетПоХарактеристикам":{"synonym":"Вести учет по характеристикам","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nom_kind":{"synonym":"Вид номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_kinds"],"is_ref":true}},"ЕдиницаДляОтчетов":{"synonym":"Единица для отчетов","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"storage_unit":{"synonym":"Единица хранения остатков","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"base_unit":{"synonym":"Базовая единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.units"],"is_ref":true}},"Набор":{"synonym":"Набор","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Услуга":{"synonym":"Услуга","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nom_group":{"synonym":"Номенклатурная группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_groups"],"is_ref":true}},"СтранаПроисхождения":{"synonym":"Страна происхождения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.countries"],"is_ref":true}},"НомерГТД":{"synonym":"Номер ГТД","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.gtd_numbers"],"is_ref":true}},"ТребуетсяВнешняяСертификация":{"synonym":"Требуется внешняя сертификация","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ТребуетсяВнутренняяСертификация":{"synonym":"Требуется внутренняя сертификация","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"cost_item":{"synonym":"Статья затрат","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cost_items"],"is_ref":true}},"ВестиСерийныеНомера":{"synonym":"Вести серийные номера","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Комплект":{"synonym":"Комплект","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"price_group":{"synonym":"Ценовая группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.price_groups"],"is_ref":true}},"piece_unit":{"synonym":"Единица измерения мест","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"Производитель":{"synonym":"Производитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"Импортер":{"synonym":"Импортер","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"ПроцентСрокаГодности":{"synonym":"Процент срока годности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction_figits":0}},"ВремяПроверкиЗаказа":{"synonym":"Время проверки заказа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction_figits":0}},"МинимальнаяПартияЗакупки":{"synonym":"Минимальная партия закупки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":3}},"ЦиклПоставкиДней":{"synonym":"Цикл поставки дней","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":3,"fraction_figits":0}},"РегистрационныйНомер":{"synonym":"Регистрационный номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"ФормулаОсновногоДействующегоВещества":{"synonym":"Формула основного действующего вещества","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Дозировка":{"synonym":"Дозировка","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"Упаковка":{"synonym":"Упаковка","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"ЛекарственнаяФорма":{"synonym":"Лекарственная форма","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ФП_ЛекарственныеФормы"],"is_ref":true}},"ЖНВЛП":{"synonym":"ЖНВЛП","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Изготовитель":{"synonym":"Изготовитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"НаименованиеМеждународное":{"synonym":"Наименование международное","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":[],"cols":[{"id":"id","width":"120","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"article","width":"150","type":"ro","align":"left","sort":"server","caption":"Артикул"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"},{"id":"nom_unit","width":"70","type":"ro","align":"left","sort":"server","caption":"Ед"}]}}},"nom_groups":{"name":"НоменклатурныеГруппы","splitted":false,"synonym":"Номенклатурные группы","illustration":"Перечень номенклатурных групп для учета затрат и укрупненного планирования продаж, закупок и производства","obj_presentation":"Номенклатурная группа","list_presentation":"Номенклатурные группы","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"storage_unit":{"synonym":"Единица хранения остатков","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"base_unit":{"synonym":"Базовая единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.units"],"is_ref":true}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"parent":{"synonym":"Раздел","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_groups"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"gtd_numbers":{"name":"НомераГТД","splitted":false,"synonym":"Номера ГТД","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":false,"code_length":30,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{},"cachable":"ram"},"organizations":{"name":"Организации","splitted":false,"synonym":"Организации","illustration":"Перечень организаций, входящих в состав предприятия","obj_presentation":"Организация","list_presentation":"Организации","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"prefix":{"synonym":"Префикс","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":3}},"ИНН":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"КПП":{"synonym":"КПП","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"РегистрационныйНомерПФР":{"synonym":"Регистрационный номер ПФР","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"ГоловнаяОрганизация":{"synonym":"Головная организация","multiline_mode":false,"tooltip":"","choice_params":[{"name":"individual_legal","path":{"name":"ЮрЛицо","presentation":"Юрлицо","type":"enm.individual_legal"}},{"name":"ГоловнаяОрганизация","path":{"ref":"00000000-0000-0000-0000-000000000000","presentation":"","type":"cat.organizations"}}],"choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"КодПоОКПО":{"synonym":"Код по ОКПО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"КодПоОКАТО":{"synonym":"Код по ОКАТО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":11}},"КодИМНС":{"synonym":"Код ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"РайонныйКоэффициент":{"synonym":"Районный коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"ТерриториальныеУсловияПФР":{"synonym":"Территориальные условия ПФР","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ТерриториальныеУсловия"],"is_ref":true}},"ОсновнойБанковскийСчет":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"ВидСтавокЕСНиПФР":{"synonym":"Вид ставок ЕСН и ПФР","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыСтавокЕСНиПФР"],"is_ref":true}},"НаименованиеПлательщикаПриПеречисленииНалогов":{"synonym":"Наименование плательщика при перечислении в бюджет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":150}},"ИностраннаяОрганизация":{"synonym":"Иностранная организация","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ДатаРегистрации":{"synonym":"Дата государственной регистрации","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"КодОКОПФ":{"synonym":"Код ОКОПФ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"НаименованиеОКОПФ":{"synonym":"Наименование ОКОПФ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"КодОКФС":{"synonym":"Код ОКФС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2}},"НаименованиеОКФС":{"synonym":"Наименование ОКФС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"СвидетельствоСерияНомер":{"synonym":"Серия и номер свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"СвидетельствоДатаВыдачи":{"synonym":"Дата выдачи свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"СвидетельствоНаименованиеОргана":{"synonym":"Наименование налогового органа, выдавшего свидетельство","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"СвидетельствоКодОргана":{"synonym":"Код налогового органа, выдавшего свидетельство","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"СтранаРегистрации":{"synonym":"Страна регистрации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.countries"],"is_ref":true}},"СтранаПостоянногоМестонахождения":{"synonym":"Страна постоянного местонахождения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.countries"],"is_ref":true}},"КодВСтранеРегистрации":{"synonym":"Код налогоплательщика в стране регистрации","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ОГРН":{"synonym":"ОГРН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"НаименованиеИнострОрганизации":{"synonym":"Полное наименование иностранной организации","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"РегистрационныйНомерФСС":{"synonym":"Регистрационный номер ФСС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"НаименованиеИМНС":{"synonym":"Наименование ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"КодОКВЭД":{"synonym":"Код основного вида деятельности по ОКВЭД","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":8}},"НаименованиеОКВЭД":{"synonym":"Наименование основного вида деятельности по ОКВЭД","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"КодОКОНХ":{"synonym":"Код ОКОНХ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"ИндивидуальныйПредприниматель":{"synonym":"Индивидуальный предприниматель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"ОбменКодАбонента":{"synonym":"Код абонента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":7}},"ОбменКаталогОтправкиДанныхОтчетности":{"synonym":"Каталог выкладки данных отчетности для обмена с ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ОбменКаталогПрограммыЭлектроннойПочты":{"synonym":"Каталог программы электронной почты для обмена с ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"РайонныйКоэффициентРФ":{"synonym":"Районный коэффициент РФ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"ОтражатьВРегламентированномУчете":{"synonym":"Отражать в регламентированном учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"КодИФНСПолучателя":{"synonym":"Код ИФНС - получателя отчетности","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"НаименованиеТерриториальногоОрганаПФР":{"synonym":"Наименование территориального органа ПФР","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"НаименованиеСокращенное":{"synonym":"Наименование сокращенное","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":160}},"ВидОбменаСКонтролирующимиОрганами":{"synonym":"Вид обмена с контролирующими органами","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОбменаСКонтролирующимиОрганами"],"is_ref":true}},"УчетнаяЗаписьОбмена":{"synonym":"Учетная запись обмена","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.УчетныеЗаписиДокументооборота"],"is_ref":true}},"КодОрганаПФР":{"synonym":"Код органа ПФР","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":7}},"КодОрганаФСГС":{"synonym":"Код органа ФСГС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"ДополнительныйКодФСС":{"synonym":"Дополнительный код ФСС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"КодПодчиненностиФСС":{"synonym":"Код подчиненности ФСС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"ЦифровойИндексОбособленногоПодразделения":{"synonym":"Цифровой индекс обособленного подразделения:","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"РегистрационныйНомерТФОМС":{"synonym":"Регистрационный номер ТФОМС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"ИПРегистрационныйНомерПФР":{"synonym":"Регистрационный номер ПФР индивидуального предпринимателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"ИПРегистрационныйНомерФСС":{"synonym":"Регистрационный номер ФСС индивидуального предпринимателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"ИПКодПодчиненностиФСС":{"synonym":"Код подчиненности ФСС индивидуального предпринимателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"ИПРегистрационныйНомерТФОМС":{"synonym":"Регистрационный номер ТФОМС индивидуального предпринимателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"НаименованиеТерриториальногоОрганаФСС":{"synonym":"Наименование территориального органа ФСС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":135}},"КодПоОКТМО":{"synonym":"Код по ОКТМО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":11}},"Регион":{"synonym":"Регион","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.regions"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"divisions":{"name":"Подразделения","splitted":false,"synonym":"Подразделения","illustration":"Перечень подразделений предприятия","obj_presentation":"Подразделение","list_presentation":"Подразделения","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":9,"fields":{"ВидПодразделения":{"synonym":"Вид подразделения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыПодразделений"],"is_ref":true}},"ВидЦФО":{"synonym":"Вид ЦФО","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыЦФО"],"is_ref":true}},"main_project":{"synonym":"Основной проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"sequence":{"synonym":"Порядок","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"parent":{"synonym":"Входит в подразделение","multiline_mode":false,"tooltip":"","type":{"types":["cat.divisions"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"users":{"name":"Пользователи","splitted":false,"synonym":"Пользователи","illustration":"Перечень пользователей информационной базы","obj_presentation":"Пользователь","list_presentation":"Пользователи","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":50,"fields":{"ФизЛицо":{"synonym":"Физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"ИдентификаторПользователяИБ":{"synonym":"Идентификатор пользователя ИБ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"parent":{"synonym":"В группе","multiline_mode":false,"tooltip":"","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"orders_closing_reasons":{"name":"ПричиныЗакрытияЗаказов","splitted":false,"synonym":"Причины закрытия заказов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{},"tabular_sections":{},"cachable":"ram"},"projects":{"name":"Проекты","splitted":false,"synonym":"Проекты","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"ДатаНачала":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ДатаОкончания":{"synonym":"Дата окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"definition":{"synonym":"Описание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.projects"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"regions":{"name":"Регионы","splitted":false,"synonym":"Регионы","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":9,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"КодРегиона":{"synonym":"Код региона","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":5}},"КодАдресногоЭлемента":{"synonym":"Код адресного элемента","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":25,"fraction_figits":0}},"ЖДСтанцияНазначения":{"synonym":"Ж/Д cтанция назначения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.regions"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom_series":{"name":"СерииНоменклатуры","splitted":false,"synonym":"Серии номенклатуры","illustration":"","obj_presentation":"Серия номенклатуры","list_presentation":"Серии номенклатуры","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"СерийныйНомер":{"synonym":"Серийный номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"СрокГодности":{"synonym":"Срок годности","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"НомерГТД":{"synonym":"Номер ГТД","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.gtd_numbers"],"is_ref":true}},"СтранаПроисхождения":{"synonym":"Страна происхождения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.countries"],"is_ref":true}},"ОсновноеИзображение":{"synonym":"Основное изображение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ХранилищеДополнительнойИнформации"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ТехническийНомер":{"synonym":"Технический номер","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ФП_ТехническийНомерСерии"],"is_ref":true}},"ДатаИзготовления":{"synonym":"Дата изготовления","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"ОжидаемоеКоличествоВыпуска":{"synonym":"Ожидаемое количество выпуска","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"ДатаЗапускаСерии":{"synonym":"Дата запуска серии","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"ЕдиницаМест":{"synonym":"Единица мест","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"Изготовитель":{"synonym":"Изготовитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"ДатаИзготовленияСубстанции":{"synonym":"Дата изготовления субстанции","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"МаршрутнаяКарта":{"synonym":"Маршрутная карта","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ФП_МаршрутнаяКарта"],"is_ref":true}},"ПроцентноеСодержание":{"synonym":"% - ное содержание","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{"Спецификации":{"name":"Спецификации","synonym":"Спецификации","tooltip":"","fields":{"ВыходнаяПродукция":{"synonym":"Вых. продукция","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"specification":{"synonym":"Спецификация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.СпецификацииНоменклатуры"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":12,"fraction_figits":3}},"Единица":{"synonym":"Ед. изм.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"ХарактеристикаПродукции":{"synonym":"Характеристика продукции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"ДатаЗапуска":{"synonym":"Дата запуска","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"УдалитьНомерМаршрутнойКарты":{"synonym":"№ маршрутной карты","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ФП_МаршрутныеКарты"],"is_ref":true}},"Объединение":{"synonym":"Объединение","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":3}}}}},"cachable":"ram"},"serial_numbers":{"name":"СерийныеНомера","splitted":false,"synonym":"Серийные номера","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":false,"code_length":20,"fields":{"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"stores":{"name":"Склады","splitted":false,"synonym":"Склады (места хранения)","illustration":"","obj_presentation":"Склад","list_presentation":"Склады","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ТипЦенРозничнойТорговли":{"synonym":"Тип цен розничной торговли","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"ВидСклада":{"synonym":"Вид склада","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.stores_kinds"],"is_ref":true}},"НомерСекции":{"synonym":"Номер секции","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"РасчетРозничныхЦенПоТорговойНаценке":{"synonym":"Расчет розничных цен по торговой наценке","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Карантин":{"synonym":"Карантинный склад","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.stores"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","splitted":false,"synonym":"Статьи движения денежных средств","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"cost_items":{"name":"СтатьиЗатрат","splitted":false,"synonym":"Статьи затрат","illustration":"","obj_presentation":"Статья затрат","list_presentation":"Статьи затрат","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"cost_kind":{"synonym":"Вид затрат","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.costs_kinds"],"is_ref":true}},"parent":{"synonym":"Группа статей затрат","multiline_mode":false,"tooltip":"","type":{"types":["cat.cost_items"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"charge_discounts_types":{"name":"ТипыСкидокНаценок","splitted":false,"synonym":"Типы скидок и наценок","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"ДляВсейНоменклатуры":{"synonym":"Для всей номенклатуры","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"discount_percent":{"synonym":"Процент скидки наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ЗначениеУсловия":{"synonym":"Значение условия","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["number"],"digits":15,"fraction_figits":2,"is_ref":true}},"ОбщееВремяНачала":{"synonym":"Общее время начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"time"}},"ОбщееВремяОкончания":{"synonym":"Общее время окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"time"}},"ОграничениеСкидкиНаценки":{"synonym":"Ограничение скидки наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"condition":{"synonym":"Условие","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.УсловияСкидкиНаценки"],"is_ref":true}},"quality":{"synonym":"Качество","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.quality"],"is_ref":true}},"ДляВсехПолучателей":{"synonym":"Для всех получателей","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ПоДнямНедели":{"synonym":"По дням недели","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВидСкидки":{"synonym":"Вид скидки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыСкидок"],"is_ref":true}}},"tabular_sections":{"ВремяПоДнямНедели":{"name":"ВремяПоДнямНедели","synonym":"Время по дням недели","tooltip":"","fields":{"Выбран":{"synonym":"Выбран","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ДеньНедели":{"synonym":"День недели","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ДниНедели"],"is_ref":true}},"ВремяНачала":{"synonym":"Время начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"time"}},"ВремяОкончания":{"synonym":"Время окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"time"}}}}},"cachable":"ram"},"nom_prices_types":{"name":"ТипыЦенНоменклатуры","splitted":false,"synonym":"Типы цен номенклатуры","illustration":"Перечень типов отпускных цен предприятия","obj_presentation":"Тип цен номенклатуры","list_presentation":"Типы цен номенклатуры","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"price_currency":{"synonym":"Валюта цены по умолчанию","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"БазовыйТипЦен":{"synonym":"Базовый тип цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"Рассчитывается":{"synonym":"Рассчитывается","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"discount_percent":{"synonym":"Процент скидки или наценки по умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"vat_price_included":{"synonym":"Цена включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ПорядокОкругления":{"synonym":"Порядок округления","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ПорядкиОкругления"],"is_ref":true}},"ОкруглятьВБольшуюСторону":{"synonym":"Округлять в большую сторону","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"СпособРасчетаЦены":{"synonym":"Способ расчета цены","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.СпособыРасчетаЦены"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom_prices_types_partners":{"name":"ТипыЦенНоменклатурыКонтрагентов","splitted":false,"synonym":"Типы цен номенклатуры контрагентов","illustration":"Перечень типов цен контрагентов: поставщиков, конкурентов и др.","obj_presentation":"Тип цен номенклатуры контрагентов","list_presentation":"Типы цен номенклатуры контрагентов","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"price_currency":{"synonym":"Валюта цены по умолчанию","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"vat_price_included":{"synonym":"Цена включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nom_prices_type":{"synonym":"Тип цены номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"ОписаниеТипаЦеныНоменклатурыКонтрагента":{"synonym":"Описание типа цены номенклатуры контрагента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"owner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"sale_conditions":{"name":"УсловияПродаж","splitted":false,"synonym":"Условия продаж","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{},"tabular_sections":{},"cachable":"ram"},"individuals":{"name":"ФизическиеЛица","splitted":false,"synonym":"Физические лица","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":10,"fields":{"ДатаРождения":{"synonym":"Дата рождения","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ИНН":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"КодИМНС":{"synonym":"Код ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"СтраховойНомерПФР":{"synonym":"Страховой номер ПФР","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"Пол":{"synonym":"Пол","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ПолФизическихЛиц"],"is_ref":true}},"МестоРождения":{"synonym":"Место рождения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":240}},"ОсновноеИзображение":{"synonym":"Основное изображение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ХранилищеДополнительнойИнформации"],"is_ref":true}},"МестоРожденияКодПоОКАТО":{"synonym":"Место рождения - код по ОКАТО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":11}},"ГруппаДоступаФизическогоЛица":{"synonym":"Группа доступа физического лица","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ГруппыДоступаФизическихЛиц"],"is_ref":true}},"ЛьготаПриНачисленииПособий":{"synonym":"Льгота при начислении пособий","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыЛьготПриНачисленииБольничных"],"is_ref":true}},"ИмеетНаучныеТруды":{"synonym":"Имеет научные труды","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ИмеетИзобретения":{"synonym":"Имеет изобретения","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ПостоянноПроживалВКрыму18Марта2014Года":{"synonym":"Постоянно проживал(а) в Крыму 18 марта 2014 года","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Должность":{"synonym":"Должность","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.Должности"],"is_ref":true}},"Фамилия":{"synonym":"Фамилия","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Имя":{"synonym":"Имя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Отчество":{"synonym":"Отчество","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.individuals"],"is_ref":true}}},"tabular_sections":{"СоставСемьи":{"name":"СоставСемьи","synonym":"Состав семьи физического лица","tooltip":"","fields":{"СтепеньРодства":{"synonym":"Степень родства","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.СтепениРодстваФизЛиц"],"is_ref":true}},"Имя":{"synonym":"Имя родственника","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"УдалитьГодРождения":{"synonym":"Год рождения родственника","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":4,"fraction_figits":0}},"ДатаРождения":{"synonym":"Дата рождения родственника","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}}}},"Образование":{"name":"Образование","synonym":"Образование физического лица","tooltip":"","fields":{"ВидОбразования":{"synonym":"Вид образования","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыОбразованияФизЛиц"],"is_ref":true}},"УчебноеЗаведение":{"synonym":"Учебное заведение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.УчебныеЗаведения"],"is_ref":true}},"Специальность":{"synonym":"Специальность по образованию","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.КлассификаторСпециальностейПоОбразованию","string"],"is_ref":true,"str_len":50}},"Диплом":{"synonym":"Диплом","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ГодОкончания":{"synonym":"Год окончания","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":4,"fraction_figits":0}},"Квалификация":{"synonym":"Квалификация","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}}}},"ТрудоваяДеятельность":{"name":"ТрудоваяДеятельность","synonym":"Трудовая деятельность физического лица","tooltip":"","fields":{"organization":{"synonym":"Предшествующее место работы","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"ДатаНачала":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ДатаОкончания":{"synonym":"Дата окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"Должность":{"synonym":"Должность по предшествующему месту работы","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}}}},"ЗнаниеЯзыков":{"name":"ЗнаниеЯзыков","synonym":"Знание языков физическим лицом","tooltip":"","fields":{"Язык":{"synonym":"Язык","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ЯзыкиНародовМира"],"is_ref":true}},"СтепеньЗнанияЯзыка":{"synonym":"Степень знания языка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.СтепениЗнанияЯзыка"],"is_ref":true}}}},"Профессии":{"name":"Профессии","synonym":"Профессии","tooltip":"","fields":{"Профессия":{"synonym":"Профессия","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ПрофессииРабочих"],"is_ref":true}}}},"Стажи":{"name":"Стажи","synonym":"Стажи","tooltip":"","fields":{"ВидСтажа":{"synonym":"Вид стажа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыСтажа"],"is_ref":true}},"ДатаОтсчета":{"synonym":"Дата отсчета","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"РазмерМесяцев":{"synonym":"Размер месяцев","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":3,"fraction_figits":0}},"РазмерДней":{"synonym":"Размер дней","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction_figits":0}}}},"Награды":{"name":"Награды","synonym":"Награды","tooltip":"","fields":{"Награда":{"synonym":"Награда","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.Награды"],"is_ref":true}},"НомерПриказа":{"synonym":"Номер приказа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"ДатаПриказа":{"synonym":"Дата приказа","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ЧейПриказ":{"synonym":"Чей приказ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}}},"УченыеСтепени":{"name":"УченыеСтепени","synonym":"Ученые степени","tooltip":"","fields":{"УченаяСтепень":{"synonym":"Ученая степень","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.УченыеСтепени"],"is_ref":true}},"ДатаПрисужденияУченойСтепени":{"synonym":"Дата присуждения ученой степени","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ОтрасльНауки":{"synonym":"Отрасль науки","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДиссертационныйСовет":{"synonym":"Диссертационный совет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДипломСерияНомер":{"synonym":"Диплом серия, номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ДипломВыданОрганизация":{"synonym":"Наименование организации, выдавшей диплом","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}}},"УченыеЗвания":{"name":"УченыеЗвания","synonym":"Ученые звания","tooltip":"","fields":{"УченоеЗвание":{"synonym":"Ученое звание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.УченыеЗвания"],"is_ref":true}},"ДатаПрисвоенияУченогоЗвания":{"synonym":"Дата присвоения ученого звания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"АттестатСерия":{"synonym":"Аттестат серия","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"АттестатНомер":{"synonym":"Аттестат номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"АттестатВыданОрганизация":{"synonym":"Наименование организации, выдавшей диплом","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"НаучнаяСпециальность":{"synonym":"Научная специальность","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.КлассификаторСпециальностейПоОбразованию"],"is_ref":true}}}}},"cachable":"ram"},"formulas":{"name":"Формулы","splitted":false,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации","obj_presentation":"Формула","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":{"ref":"00000000-0000-0000-0000-000000000000","presentation":"","type":"cat.formulas"}}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html шаблон отчета","type":{"types":["string"],"str_len":0}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cch.properties"],"str_len":50,"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["param"],"path":["params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["params","param"],"elm":0},"type":{"types":["cat.nom_groups","cat.currencies","cat.projects","cat.contact_persons","cat.individuals","cat.users","cat.property_values","boolean","cat.countries","cat.divisions","cat.partners","string","cat.organizations","date","cat.units","number","cat.nom","cat.stores"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}}}}},"cachable":"doc"},"ФП_ЛекарственныеФормы":{"name":"ФП_ЛекарственныеФормы","splitted":false,"synonym":"Лекарственные формы","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{},"tabular_sections":{},"cachable":"ram"},"characteristics":{"name":"ХарактеристикиНоменклатуры","splitted":false,"synonym":"Характеристики номенклатуры","illustration":"","obj_presentation":"Характеристика номенклатуры","list_presentation":"Характеристики номенклатуры","input_by_string":["name"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"ОКП":{"synonym":"ОКП","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ОбщероссийскийКлассификаторПродукции"],"is_ref":true}},"Активная":{"synonym":"Активная","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"price_groups":{"name":"ЦеновыеГруппы","splitted":false,"synonym":"Ценовые группы","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"sequence":{"synonym":"Порядок","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.price_groups"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"}},"doc":{"buyers_order":{"name":"ЗаказПокупателя","splitted":false,"synonym":"Заказ покупателя","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"shipping_address":{"synonym":"Адрес доставки","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийЗаказПокупателя"],"is_ref":true}},"ВремяНапоминания":{"synonym":"Время напоминания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"ДатаОплаты":{"synonym":"Дата оплаты","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ДатаОтгрузки":{"synonym":"Дата отгрузки","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ИспользоватьПлановуюСебестоимость":{"synonym":"Использовать плановую себестоимость","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ИтогПлановаяСебестоимость":{"synonym":"Итоговая плановая себестоимость в валюте управленческого учета","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"НапомнитьОСобытии":{"synonym":"Напомнить о событии","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"organizational_unit":{"synonym":"Банк/касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts","cat.cashboxes"],"is_ref":true}},"СкладГруппа":{"synonym":"Склад-группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ГруппыДоступностиСкладов","cat.stores"],"is_ref":true}},"vat_included":{"synonym":"Сумма включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"price_type":{"synonym":"Тип цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"vat_consider":{"synonym":"Учитывать НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Грузополучатель":{"synonym":"Грузополучатель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"КонтактноеЛицоКонтрагента":{"synonym":"Контактное лицо контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contact_persons_partners"],"is_ref":true}},"УсловиеПродаж":{"synonym":"Условие продаж","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.sale_conditions"],"is_ref":true}},"ДополнениеКАдресуДоставки":{"synonym":"Дополнение к адресу доставки","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаказПоставщику"],"is_ref":true}},"Грузоотправитель":{"synonym":"Грузоотправитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"НомерПоДаннымПокупателя":{"synonym":"Номер по данным покупателя","multiline_mode":false,"tooltip":"Номер заказа по данным клиента","type":{"types":["string"],"str_len":30}},"ДатаПоДаннымПокупателя":{"synonym":"Дата по данным покупателя","multiline_mode":false,"tooltip":"Номер заказа по данным клиента","type":{"types":["date"],"date_part":"date"}},"УсловияДоставки":{"synonym":"Условия доставки","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДатаПоставки":{"synonym":"Дата поставки","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"obj_delivery_state":{"synonym":"Состояние транспорта","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":[{"name":"Черновик","presentation":"Черновик","type":"enm.obj_delivery_states"},{"name":"Отправлен","presentation":"Отправлен","type":"enm.obj_delivery_states"},{"name":"Подтвержден","presentation":"Подтвержден","type":"enm.obj_delivery_states"},{"name":"Отклонен","presentation":"Отклонен","type":"enm.obj_delivery_states"},{"name":"Отозван","presentation":"Отозван","type":"enm.obj_delivery_states"},{"name":"Архив","presentation":"Перенесён в архив","type":"enm.obj_delivery_states"}]}],"choice_groups_elm":"elm","type":{"types":["enm.obj_delivery_states"],"is_ref":true}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"unit":{"synonym":"Единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"piece_unit":{"synonym":"Ед. мест","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"qty":{"synonym":"Количество мест","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":0}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":3}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"first_cost":{"synonym":"Плановая себестоимость","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"discount_percent":{"synonym":"Процент скидки или наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"specification":{"synonym":"Спецификация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.СпецификацииНоменклатуры"],"is_ref":true}},"placing":{"synonym":"Размещение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаказНаПроизводство","cat.stores"],"is_ref":true}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"СчетУчетаБУ":{"synonym":"Счет учета (БУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаНУ":{"synonym":"Счет учета (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"discount_percent_auto":{"synonym":"Процент автоматических скидок","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"УсловиеАвтоматическойСкидки":{"synonym":"Условие автоматической скидки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.УсловияСкидкиНаценки"],"is_ref":true}},"ЗначениеУсловияАвтоматическойСкидки":{"synonym":"Значение условия автоматической скидки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыДисконтныхКарт","number"],"is_ref":true,"digits":15,"fraction_figits":2}},"КлючСтроки":{"synonym":"Ключ строки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"КлючСвязи":{"synonym":"Ключ связи","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"ПринятыеСчетУчетаБУ":{"synonym":"Принятые счет учета (БУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ПринятыеСчетУчетаНУ":{"synonym":"Принятые счет учета (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"series":{"synonym":"Серия номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_series"],"is_ref":true}}}},"ВозвратнаяТара":{"name":"ВозвратнаяТара","synonym":"Возвратная тара","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"placing":{"synonym":"Размещение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаказПоставщику","cat.stores"],"is_ref":true}},"СчетУчетаБУ":{"synonym":"Счет учета (БУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаНУ":{"synonym":"Счет учета (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}}}},"services":{"name":"Услуги","synonym":"Услуги","tooltip":"","fields":{"Содержание":{"synonym":"Содержание услуги, доп. сведения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"discount_percent":{"synonym":"Процент скидки или наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"discount_percent_auto":{"synonym":"Процент автоматических скидок","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"УсловиеАвтоматическойСкидки":{"synonym":"Условие автоматической скидки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.УсловияСкидкиНаценки"],"is_ref":true}},"ЗначениеУсловияАвтоматическойСкидки":{"synonym":"Значение условия автоматической скидки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыДисконтныхКарт","number"],"is_ref":true,"digits":15,"fraction_figits":2}}}},"materials":{"name":"Материалы","synonym":"Материалы","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"qty":{"synonym":"Количество мест","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"piece_unit":{"synonym":"Ед. мест","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"unit":{"synonym":"Единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}}}},"СоставНабора":{"name":"СоставНабора","synonym":"Состав набора","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}},"unit":{"synonym":"Единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"КлючСтроки":{"synonym":"Ключ строки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ПринятыеСчетУчетаБУ":{"synonym":"Принятые счет учета (БУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ПринятыеСчетУчетаНУ":{"synonym":"Принятые счет учета (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СчетУчетаБУ":{"synonym":"Счет учета (БУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаНУ":{"synonym":"Счет учета (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"series":{"synonym":"Серия номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_series"],"is_ref":true}}}},"ПараметрыВыпускаПродукции":{"name":"ПараметрыВыпускаПродукции","synonym":"Параметры выпуска продукции","tooltip":"","fields":{"ВидПараметра":{"synonym":"Вид параметра","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыПараметровВыпускаПродукции"],"is_ref":true}},"КлючСвязи":{"synonym":"Ключ связи","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":3}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_groups","cat.currencies","cat.projects","cat.contact_persons","cat.individuals","cat.users","cat.property_values","boolean","cat.countries","cat.divisions","cat.partners","string","cat.organizations","date","cat.units","number","cat.nom","cat.stores"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","partner","doc_amount","obj_delivery_state","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"partner","width":"170","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"doc_amount","width":"120","type":"ron","align":"right","sort":"na","caption":"Сумма"},{"id":"obj_delivery_state","width":"120","type":"ro","align":"left","sort":"na","caption":"Статус"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","responsible","note"]},"tabular_sections":{"goods":{"fields":["row","nom","nom_characteristic","quantity","unit","price","discount_percent","discount_percent_auto","amount"],"aligns":"center,left,left,right,left,right,right,right,right","sortings":"na,na,na,na,na,na,na,na","types":"cntr,ref,ref,calck,ref,ro,ro,ro,ro","headers":"№,Номенклатура,Характеристика,Колич.,Ед,Цена,Скидка,Скидка&nbspавт.,Сумма","widths":"40,*,*,70,70,70,70,70,70","min_widths":"30,200,200,70,70,70,70,70,70"}}}}},"debt_adjustment":{"name":"КорректировкаДолга","splitted":false,"synonym":"Корректировка долга","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийКорректировкаДолга"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"КонтрагентДебитор":{"synonym":"Дебитор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"КонтрагентКредитор":{"synonym":"Кредитор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"ОтражатьВУправленческомУчете":{"synonym":"Отражать в управленческом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"КурсДокумента":{"synonym":"Курс документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"КратностьДокумента":{"synonym":"Кратность документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ИспользоватьВспомогательныйСчет":{"synonym":"Использовать вспомогательный счет","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"СчетДт":{"synonym":"Вспомогательный счет дебиторской задолженности","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СубконтоДт1":{"synonym":"Субконто 1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт2":{"synonym":"Субконто 2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт3":{"synonym":"Субконто 3","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СчетКт":{"synonym":"Вспомогательный счет кредиторской задолженности","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СубконтоКт1":{"synonym":"Субконто 1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКт2":{"synonym":"Субконто 1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКт3":{"synonym":"Субконто 3","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СчетДтНУ":{"synonym":"Счет списания дебиторской задолженности (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СубконтоДтНУ1":{"synonym":"Субконто 1 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДтНУ2":{"synonym":"Субконто 2 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДтНУ3":{"synonym":"Субконто 3 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СчетКтНУ":{"synonym":"Счет списания кредиторской задолженности (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СубконтоКтНУ1":{"synonym":"Субконто 1 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКтНУ2":{"synonym":"Субконто 2 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКтНУ3":{"synonym":"Субконто 3 (НУ)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ФП_РасчетПроцентовПоКредитамИЗаймам"],"is_ref":true}}},"tabular_sections":{"СуммыДолга":{"name":"СуммыДолга","synonym":"Суммы долга","tooltip":"","fields":{"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.СчетНаОплатуПоставщика","doc.buyers_order"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"СчетУчетаРасчетов":{"synonym":"Счет учета расчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаАвансов":{"synonym":"Счет учета авансов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ВидЗадолженности":{"synonym":"Вид задолженности","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыЗадолженности"],"is_ref":true}},"ДокументРасчетовСКонтрагентом":{"synonym":"Документ расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}},"СуммаРегл":{"synonym":"Сумма расчетов (по бух. учету)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"СуммаНУ":{"synonym":"Сумма списания задолженности (НУ)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}},"cachable":"doc_remote"},"debit_bank_order":{"name":"ПлатежноеПоручениеВходящее","splitted":false,"synonym":"Платежное поручение входящее","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийПоступлениеБезналичныхДенежныхСредств"],"is_ref":true}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ВозвратТоваровПоставщикуИзНТТ","doc.buyers_order"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"partner":{"synonym":"Плательщик","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"НомерВходящегоДокумента":{"synonym":"Номер входящего документа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"ДатаВходящегоДокумента":{"synonym":"Дата входящего документа","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"Оплачено":{"synonym":"Оплачено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"ОтраженоВОперУчете":{"synonym":"Отражено в опер. учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ДатаОплаты":{"synonym":"Дата оплаты","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ЧастичнаяОплата":{"synonym":"По документу происходит оплата частями","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СубконтоКт1":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"СубконтоКт2":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКт3":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"СчетКонтрагента":{"synonym":"Счет контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"СчетОрганизации":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"Содержание_УСН":{"synonym":"Содержание УСН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}},"Графа4_УСН":{"synonym":"Графа4 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа5_УСН":{"synonym":"Графа5 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа6_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа7_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДоходыЕНВД_УСН":{"synonym":"ДоходыЕНВД","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"РасходыЕНВД_УСН":{"synonym":"Расходы ЕНВД УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"НДС_УСН":{"synonym":"НДС УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"РучнаяНастройка_УСН":{"synonym":"Ручная настройка УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"НазначениеПлатежа":{"synonym":"Назначение платежа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"СчетУчетаРасчетовСКонтрагентомНУ":{"synonym":"Счет учета расчетов с контрагентом НУ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СубконтоНУКт1":{"synonym":"Субконто НУ Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУКт2":{"synonym":"Субконто НУ Кт2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУКт3":{"synonym":"Субконто НУ Кт3","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"cost_item":{"synonym":"Статья затрат","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cost_items"],"is_ref":true}},"nom_group":{"synonym":"Номенклатурная группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_groups"],"is_ref":true}},"ПодразделениеЗатраты":{"synonym":"Подразделение (затраты)","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"ПодразделениеОрганизацииЗатраты":{"synonym":"Подразделение организации затраты","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ПодразделенияОрганизаций"],"is_ref":true}},"СуммаУслуг":{"synonym":"Сумма услуг","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}},"tabular_sections":{"РасшифровкаПлатежа":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.СчетНаОплатуПоставщика","doc.buyers_order"],"is_ref":true}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"amount_mutual":{"synonym":"Сумма взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаРасчетовПоАвансам":{"synonym":"Счет учета расчетов по авансам","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ПланируемоеПоступлениеДенежныхСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"КурсВзаиморасчетовПлан":{"synonym":"Курс взаиморасчетов по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежаПлан":{"synonym":"Сумма платежа по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДокументРасчетовСКонтрагентом":{"synonym":"Документ расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}}}},"РеквизитыКонтрагента":{"name":"РеквизитыКонтрагента","synonym":"Реквизиты контрагента","tooltip":"","fields":{"field":{"synonym":"Реквизит","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"ТипКонтрагента":{"synonym":"Тип контрагента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}}}}},"cachable":"doc_remote"},"credit_bank_order":{"name":"ПлатежноеПоручениеИсходящее","splitted":false,"synonym":"Платежное поручение исходящее","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах"],"is_ref":true}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"СчетОрганизации":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"partner":{"synonym":"Получатель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"ДатаОплаты":{"synonym":"Дата оплаты","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"СчетКонтрагента":{"synonym":"Счет контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ВидПлатежа":{"synonym":"Вид платежа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"ОчередностьПлатежа":{"synonym":"Очередность платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"НазначениеПлатежа":{"synonym":"Назначение платежа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ТекстПлательщика":{"synonym":"Текст плательщика","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"ТекстПолучателя":{"synonym":"Текст получателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Оплачено":{"synonym":"Оплачено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ИННПлательщика":{"synonym":"ИНН плательщика","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"КПППлательщика":{"synonym":"КПП плательщика","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"ИННПолучателя":{"synonym":"ИНН получателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"КПППолучателя":{"synonym":"КПП получателя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"КодБК":{"synonym":"Код БК","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"ОтраженоВОперУчете":{"synonym":"Отражено в опер. учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"КодОКАТО":{"synonym":"Код ОКАТО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":11}},"ПоказательДаты":{"synonym":"Показатель даты","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"ПоказательНомера":{"synonym":"Показатель номера","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":18}},"ПоказательОснования":{"synonym":"Показатель основания","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2}},"ПоказательПериода":{"synonym":"Показатель периода","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"ПоказательТипа":{"synonym":"Показатель типа платежа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2}},"СтатусСоставителя":{"synonym":"Статус составителя платежного документа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2,"str_fix":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийППИсходящее"],"is_ref":true}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СубконтоДт1":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт2":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт3":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ФизЛицо":{"synonym":"Физическое лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"ДоговорЗайма":{"synonym":"Договор займа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ДоговорЗаймаСРаботником"],"is_ref":true}},"ВалютаВзаиморасчетовРаботника":{"synonym":"Валюта взаиморасчетов работника","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"ЧастичнаяОплата":{"synonym":"По документу происходит оплата частями","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Содержание_УСН":{"synonym":"Содержание УСН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}},"Графа4_УСН":{"synonym":"Графа4 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа5_УСН":{"synonym":"Графа5 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа6_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа7_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДоходыЕНВД_УСН":{"synonym":"ДоходыЕНВД","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"РасходыЕНВД_УСН":{"synonym":"Расходы ЕНВД УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"НДС_УСН":{"synonym":"НДС УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"РучнаяНастройка_УСН":{"synonym":"Ручная настройка УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентомНУ":{"synonym":"Счет учета расчетов с контрагентом НУ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СубконтоНУДт1":{"synonym":"Субконто НУ Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУДт2":{"synonym":"Субконто НУ Дт2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУДт3":{"synonym":"Субконто НУ Дт3","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"ДатаПогашенияАванса":{"synonym":"Дата погашения аванса","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"РасчетныйДокументРаботника":{"synonym":"Расчетный документ работника","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.АвансовыйОтчет"],"is_ref":true}},"ПеречислениеВБюджет":{"synonym":"Перечисление в бюджет","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВидПеречисленияВБюджет":{"synonym":"Вид перечисления в бюджет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыПеречисленийВБюджет"],"is_ref":true}},"ИдентификаторПлатежа":{"synonym":"Идентификатор платежа","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}}},"tabular_sections":{"ПеречислениеЗаработнойПлаты":{"name":"ПеречислениеЗаработнойПлаты","synonym":"Перечисление заработной платы","tooltip":"","fields":{"Ведомость":{"synonym":"Ведомость","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗарплатаКВыплатеОрганизаций"],"is_ref":true}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаявкаНаРасходованиеСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}}}},"РасшифровкаПлатежа":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.СчетНаОплатуПоставщика","doc.buyers_order"],"is_ref":true}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"amount_mutual":{"synonym":"Сумма взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаРасчетовПоАвансам":{"synonym":"Счет учета расчетов по авансам","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаявкаНаРасходованиеСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"КурсВзаиморасчетовПлан":{"synonym":"Курс взаиморасчетов по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежаПлан":{"synonym":"Сумма платежа по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДокументРасчетовСКонтрагентом":{"synonym":"Документ расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}}}},"РеквизитыКонтрагента":{"name":"РеквизитыКонтрагента","synonym":"Реквизиты контрагента","tooltip":"","fields":{"field":{"synonym":"Реквизит","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":30}},"ТипКонтрагента":{"synonym":"Тип контрагента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}}}},"Работники":{"name":"Работники","synonym":"Работники","tooltip":"","fields":{"Физлицо":{"synonym":"Физлицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}},"cachable":"doc_remote"},"debit_cash_order":{"name":"ПриходныйКассовыйОрдер","splitted":false,"synonym":"Приходный кассовый ордер","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"Касса":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийПКО"],"is_ref":true}},"partner":{"synonym":"Контрагент, подотчетник, касса ККМ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.КассыККМ","cat.individuals","cat.partners","cat.stores"],"is_ref":true}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ВалютаВзаиморасчетовПодотчетника":{"synonym":"Валюта взаиморасчетов подотчетника","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ПринятоОт":{"synonym":"Принято от","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Основание":{"synonym":"Основание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Приложение":{"synonym":"Приложение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"ОтраженоВОперУчете":{"synonym":"Отражено в опер. учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Оплачено":{"synonym":"Оплачено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ОтражатьВУправленческомУчете":{"synonym":"Отражать в управленческом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.АктОбОказанииПроизводственныхУслуг","doc.credit_cash_order","doc.buyers_order"],"is_ref":true}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"РасчетныйДокумент":{"synonym":"Расчетный документ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ВыдачаДенежныхДокументов","doc.credit_cash_order","doc.credit_bank_order"],"is_ref":true}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СубконтоКт1":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКт2":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоКт3":{"synonym":"Субконто Кт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СчетОрганизации":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"Содержание_УСН":{"synonym":"Содержание УСН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}},"Графа4_УСН":{"synonym":"Графа4 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа5_УСН":{"synonym":"Графа5 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа6_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа7_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДоходыЕНВД_УСН":{"synonym":"ДоходыЕНВД","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"РасходыЕНВД_УСН":{"synonym":"Расходы ЕНВД УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"НДС_УСН":{"synonym":"НДС УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"РучнаяНастройка_УСН":{"synonym":"Ручная настройка УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВыручкаСНТТ":{"synonym":"НТТ","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"НомерЧекаККМ":{"synonym":"Номер чека ККМ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction_figits":0}},"ВидПриемаРозничнойВыручки":{"synonym":"Вид приема розничной выручки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидПриемаРозничнойВыручки"],"is_ref":true}},"ДенежныйЧек":{"synonym":"Денежный чек","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ДенежныйЧек"],"is_ref":true}}},"tabular_sections":{"РасшифровкаПлатежа":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.СчетНаОплатуПоставщика","doc.buyers_order"],"is_ref":true}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"amount_mutual":{"synonym":"Сумма взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаРасчетовПоАвансам":{"synonym":"Счет учета расчетов по авансам","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ПланируемоеПоступлениеДенежныхСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"КурсВзаиморасчетовПлан":{"synonym":"Курс взаиморасчетов по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежаПлан":{"synonym":"Сумма платежа по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДокументРасчетовСКонтрагентом":{"synonym":"Документ расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}}}}},"cachable":"doc_remote"},"credit_cash_order":{"name":"РасходныйКассовыйОрдер","splitted":false,"synonym":"Расходный кассовый ордер","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"Касса":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"Выдать":{"synonym":"Выдать","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"Основание":{"synonym":"Основание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"contract":{"synonym":"договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"ВалютаВзаиморасчетовРаботника":{"synonym":"Валюта взаиморасчетов работника","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"doc_currency":{"synonym":"Валюта документа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"Приложение":{"synonym":"Приложение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ДатаПогашенияАванса":{"synonym":"Дата погашения аванса","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"РасчетныйДокумент":{"synonym":"Расчетный документ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗарплатаКВыплатеОрганизаций"],"is_ref":true}},"ПоДокументу":{"synonym":"По","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ОтражатьВУправленческомУчете":{"synonym":"Отражать в управленческом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"ОтраженоВОперУчете":{"synonym":"Отражено в опер. учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Оплачено":{"synonym":"Оплачено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"partner":{"synonym":"Контрагент, подотчетник, Касса ККМ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.КассыККМ","cat.individuals","cat.partners","cat.stores"],"is_ref":true}},"ВидОперации":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидыОперацийРКО"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДокументОснование":{"synonym":"Документ основание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_cash_order"],"is_ref":true}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"СубконтоДт1":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт2":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоДт3":{"synonym":"Субконто Дт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетОрганизации":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"Содержание_УСН":{"synonym":"Содержание УСН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}},"Графа4_УСН":{"synonym":"Графа4 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа5_УСН":{"synonym":"Графа5 УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа6_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"Графа7_УСН":{"synonym":"Графа5","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДоходыЕНВД_УСН":{"synonym":"ДоходыЕНВД","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"РасходыЕНВД_УСН":{"synonym":"Расходы ЕНВД УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"НДС_УСН":{"synonym":"НДС УСН","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"РучнаяНастройка_УСН":{"synonym":"Ручная настройка УСН","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"ВидВыдачиДенежныхСредств":{"synonym":"Вид выдачи денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.ВидВыдачиДенежныхСредств"],"is_ref":true}},"ОбъявлениеНаВзносНаличными":{"synonym":"Объявление на взнос наличными","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОбъявлениеНаВзносНаличными"],"is_ref":true}},"НомерЧекаККМ":{"synonym":"Номер чека ККМ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction_figits":0}},"СчетУчетаРасчетовСКонтрагентомНУ":{"synonym":"Счет учета расчетов с контрагентом НУ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Налоговый"],"is_ref":true}},"СубконтоНУДт1":{"synonym":"Субконто НУДт1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУДт2":{"synonym":"Субконто НУДт2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}},"СубконтоНУДт3":{"synonym":"Субконто НУДт3","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","cat.partners","doc.debit_cash_order","cat.bank_accounts","cat.organizations","doc.credit_bank_order","cat.nom","cat.cash_flow_articles","enm.vat_rates","cat.cost_items","cat.contracts","cat.stores"],"is_ref":true}}},"tabular_sections":{"ВыплатаЗаработнойПлаты":{"name":"ВыплатаЗаработнойПлаты","synonym":"Выплата заработной платы","tooltip":"","fields":{"Ведомость":{"synonym":"Ведомость","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗарплатаКВыплате"],"is_ref":true}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаявкаНаРасходованиеСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}}}},"РасшифровкаПлатежа":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежа":{"synonym":"Сумма платежа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"amount_mutual":{"synonym":"Сумма взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"СчетУчетаРасчетовСКонтрагентом":{"synonym":"Счет учета расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"СчетУчетаРасчетовПоАвансам":{"synonym":"Счет учета расчетов по авансам","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cacc.Хозрасчетный"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.СчетНаОплатуПоставщика","doc.buyers_order"],"is_ref":true}},"ДокументПланированияПлатежа":{"synonym":"Документ планирования платежа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗаявкаНаРасходованиеСредств"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"КурсВзаиморасчетовПлан":{"synonym":"Курс взаиморасчетов по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":4}},"СуммаПлатежаПлан":{"synonym":"Сумма платежа по документу планирования","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"ДокументРасчетовСКонтрагентом":{"synonym":"Документ расчетов с контрагентом","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ОтчетКомитентуОПродажах","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}}}},"ВыплатаДепонентов":{"name":"ВыплатаДепонентов","synonym":"Выплата депонентов","tooltip":"","fields":{"ФизЛицо":{"synonym":"Физическое лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"Ведомость":{"synonym":"Ведомость","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.ЗарплатаКВыплатеОрганизаций"],"is_ref":true}},"СуммаКВыплате":{"synonym":"Сумма к выплате","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}}}},"individuals":{"name":"ФизическиеЛица","synonym":"Физические лица","tooltip":"","fields":{"ФизическоеЛицо":{"synonym":"Физическое лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}}}}},"cachable":"doc_remote"},"nom_prices_setup":{"name":"УстановкаЦенНоменклатуры","splitted":false,"synonym":"Установка цен номенклатуры","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"НеПроводитьНулевыеЗначения":{"synonym":"Не проводить нулевые значения","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"Информация":{"synonym":"Информация","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"unit":{"synonym":"Единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"discount_percent":{"synonym":"Процент скидки (наценки)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"price_type":{"synonym":"Тип Цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"ИндексСтрокиТаблицыЦен":{"synonym":"Индекс строки таблицы цен","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":0}},"СпособРасчетаЦены":{"synonym":"Способ расчета цены","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.СпособыРасчетаЦены"],"is_ref":true}}}},"ТипыЦен":{"name":"ТипыЦен","synonym":"Типы цен","tooltip":"","fields":{"price_type":{"synonym":"Тип Цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}}}}},"cachable":"doc"}},"ireg":{"$log":{"name":"$log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","multiline_mode":false,"tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}}}}},"areg":{},"dp":{},"rep":{},"cch":{"destinations":{"name":"НазначенияСвойствКатегорийОбъектов","splitted":false,"synonym":"Назначения свойств категорий объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":11,"fields":{"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.destinations"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["doc.ОтчетКомитентуОПродажах","cat.nom_groups","doc.nom_prices_setup","cat.projects","cat.contact_persons","cat.individuals","doc.debit_bank_order","doc.debt_adjustment","doc.credit_cash_order","doc.buyers_order","cat.contact_persons_partners","cat.divisions","cat.partners","doc.debit_cash_order","cat.organizations","doc.credit_bank_order","cat.nom","cat.contracts","cat.stores"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":false,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":[],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.currencies","boolean","doc.buyers_order","cat.nom_prices_types","cat.divisions","string","cat.nom_kinds","date","number","cat.nom","cch.properties"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента","mandatory":true,"type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.currencies","boolean","doc.buyers_order","cat.nom_prices_types","cat.divisions","string","cat.nom_kinds","date","number","cat.nom","cch.properties"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}},"tabular_sections":{"Элементы":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.currencies","boolean","doc.buyers_order","cat.nom_prices_types","cat.divisions","string","cat.nom_kinds","date","number","cat.nom","cch.properties"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["cat.currencies","boolean","doc.buyers_order","cat.nom_prices_types","cat.divisions","string","cat.nom_kinds","date","number","cat.nom","cch.properties"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}}}},"cachable":"doc","form":{"obj":{"head":{" ":[{"id":"name","path":"o.name","synonym":"Наименование","type":"ro"},{"id":"synonym","path":"o.synonym","synonym":"Синоним","type":"ro"},"list","zone","value"]},"tabular_sections":{"elmnts":{"fields":["elm","value"],"headers":"Элемент,Значение","widths":"*,*","min_widths":"150,150","aligns":"","sortings":"na,na","types":"ref,ref"}}}}},"properties":{"name":"СвойстваОбъектов","splitted":false,"synonym":"Свойства объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":11,"fields":{"НазначениеСвойства":{"synonym":"Назначение свойства","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.destinations"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_groups","cat.currencies","cat.projects","cat.contact_persons","cat.individuals","cat.users","cat.property_values","boolean","cat.countries","cat.divisions","cat.partners","string","cat.organizations","date","cat.units","number","cat.nom","cat.stores"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}}},"tabular_sections":{},"cachable":"ram"}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["Адрес","АдресБанка","АдресДоставки","Артикул","БазоваяЕдиницаИзмерения","Банки","БанковскиеСчета","БанковскийСчет","БизнесПроцесс","Булево","Валюта","ВалютаВзаиморасчетов","ВалютаДенежныхСредств","ВалютаДокумента","ВалютаЦены","Валюты","ВводПоСтроке","ВедениеВзаиморасчетов","ВедениеВзаиморасчетовПоДоговорам","ВедущаяЗадача","ВедущаяФормула","ВидДоговора","ВидЗатрат","ВидНоменклатуры","ВидыДоговоровКонтрагентов","ВидыЗатрат","ВидыКонтактнойИнформации","ВидыНоменклатуры","ВидыСкладов","Владелец","ВыборГруппИЭлементов","Выполнена","Дата","Действие","ДержатьРезервБезОплатыОграниченноеВремя","ДлинаКода","ДоговорКонтрагента","ДоговорыКонтрагентов","ДополнительныеРеквизиты","ДополнительныеСведения","ДопустимаяСуммаЗадолженности","ДопустимоеЧислоДнейЗадолженности","ЕдиницаИзмерения","ЕдиницаИзмеренияМест","ЕдиницаПоКлассификатору","ЕдиницаХраненияОстатков","ЕдиницыИзмерения","Завершен","Завершение","ЗаказПокупателя","Значение","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","Идентификатор","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","ИмяПредопределенныхДанных","ИнтеграцияКешСсылок","ИнтеграцияПраваПользователей","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипКеширования","ИнтеграцияТипРегистрации","Кассы","КатегорииОбъектов","Качество","КлассификаторЕдиницИзмерения","КлассификаторСтранМира","Код","Количество","КоличествоМест","Комментарий","КонтактнаяИнформация","КонтактныеЛица","КонтактныеЛицаКонтрагентов","Контрагент","Контрагенты","КонтролироватьСуммуЗадолженности","КонтролироватьЧислоДнейЗадолженности","КорректировкаДолга","Коэффициент","Кратность","КратностьВзаиморасчетов","Курс","КурсВзаиморасчетов","КурсыВалют","Материалы","МногострочныйРежим","НазначенияСвойствКатегорийОбъектов","Наименование","НаименованиеПолное","Номенклатура","НоменклатурнаяГруппа","НоменклатурныеГруппы","Номер","НомераГТД","НомерСтроки","ОбъектДоступа","ОбъектыДоступа","Описание","Организации","Организация","ОсновнаяВалюта","ОсновнаяСтатьяДвиженияДенежныхСредств","ОсновноеПредставлениеИмя","ОсновнойДоговорКонтрагента","ОсновнойПроект","Отбор","Ответственный","ОтражатьВБухгалтерскомУчете","ОтражатьВНалоговомУчете","Параметр","Параметры","ПараметрыВыбора","ПараметрыОтбора","ПлановаяСебестоимость","ПлатежноеПоручениеВходящее","ПлатежноеПоручениеИсходящее","Подразделение","Подразделения","Подсказка","Подчиненый","Пользователи","ПометкаУдаления","Порядок","ПоУмолчанию","Пояснение","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Принудительно","Приоритет","ПриходныйКассовыйОрдер","ПричиныЗакрытияЗаказов","Проведен","Проект","Проекты","ПроцентАвтоматическихСкидок","ПроцентПредоплаты","ПроцентСкидкиНаценки","Размещение","РасходныйКассовыйОрдер","Регионы","Реквизит","Реквизиты","Родитель","СвойстваОбъектов","Свойство","СвязиПараметровВыбора","СвязьПоТипу","Сделка","СерииНоменклатуры","СерийныеНомера","СерияНоменклатуры","Синоним","Склад","Склады","Скрыть","Служебный","Соответствие","СостояниеТранспорта","Спецификация","Список","Ссылка","СтавкаНДС","СтавкиНДС","Стартован","СтатьиДвиженияДенежныхСредств","СтатьиЗатрат","СтатьяДвиженияДенежныхСредств","СтатьяЗатрат","Строка","СтруктурнаяЕдиница","Сумма","СуммаАвтоматическойСкидки","СуммаВзаиморасчетов","СуммаВключаетНДС","СуммаДокумента","СуммаНДС","СуммаУпр","ТабличнаяЧасть","ТабличныеЧасти","ТекстоваяСтрока","Тип","ТипНоменклатуры","ТипСчета","ТипЦен","ТипЦеныНоменклатуры","ТипыКонтактнойИнформации","ТипыНоменклатуры","ТипыПользователей","ТипыСкидокНаценок","ТипыЦенНоменклатуры","ТипыЦенНоменклатурыКонтрагентов","Товары","ТочкаМаршрута","Условие","УсловияПродаж","Услуги","УстановкаЦенНоменклатуры","УчитыватьНДС","ФизическиеЛица","Формула","ФормулаУсловия","Формулы","ХарактеристикаНоменклатуры","ХарактеристикиНоменклатуры","Цена","ЦенаВключаетНДС","ЦеноваяГруппа","ЦеновыеГруппы","Число","Шаблон","Элемент","ЭтоГруппа","ЮрФизЛицо"],"syns_js":["address","bank_address","shipping_address","article","base_unit","banks_qualifier","bank_accounts","bank_account","buisness_process","boolean","currency","settlements_currency","funds_currency","doc_currency","price_currency","currencies","input_by_string","mutual_settlements","mutual_contract_settlements","leading_task","leading_formula","contract_kind","cost_kind","nom_kind","contract_kinds","costs_kinds","contact_information_kinds","nom_kinds","stores_kinds","owner","choice_groups_elm","completed","date","action","check_days_without_pay","code_length","contract","contracts","extra_fields","extra_properties","allowable_debts_amount","allowable_debts_days","unit","piece_unit","qualifier_unit","storage_unit","nom_units","finished","completion","buyers_order","value","values","values_fields","address_fields","property_values","identifier","meta_ids","hierarchical","group_hierarchy","predefined_name","integration_links_cache","users_acl","obj_delivery_states","caching_type","registration_type","cashboxes","obj_categories","quality","units","countries","id","quantity","qty","note","contact_information","contact_persons","contact_persons_partners","partner","partners","check_debts_amount","check_debts_days","debt_adjustment","coefficient","multiplicity","settlements_multiplicity","course","settlements_course","currency_courses","materials","multiline_mode","destinations","name","name_full","nom","nom_group","nom_groups","number_doc","gtd_numbers","row","acl_obj","acl_objs","definition","organizations","organization","main_currency","main_cash_flow_article","main_presentation_name","main_contract","main_project","selection","responsible","accounting_reflect","tax_accounting_reflect","param","params","choice_params","selection_params","first_cost","debit_bank_order","credit_bank_order","department","divisions","tooltip","has_owners","users","deleted","sequence","by_default","illustration","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","forcibly","priority","debit_cash_order","orders_closing_reasons","posted","project","projects","discount_percent_auto","prepayment_percent","discount_percent","placing","credit_cash_order","regions","field","fields","parent","properties","property","choice_links","choice_type","trans","nom_series","serial_numbers","series","synonym","warehouse","stores","hide","ancillary","conformity","obj_delivery_state","specification","list","ref","vat_rate","vat_rates","started","cash_flow_articles","cost_items","cash_flow_article","cost_item","string","organizational_unit","amount","discount_amount_automatic","amount_mutual","vat_included","doc_amount","vat_amount","amount_operation","tabular_section","tabular_sections","txt_row","type","nom_type","account_type","price_type","nom_prices_type","contact_information_types","nom_types","users_types","charge_discounts_types","nom_prices_types","nom_prices_types_partners","goods","buisness_process_point","condition","sale_conditions","services","nom_prices_setup","vat_consider","individuals","formula","condition_formula","formulas","nom_characteristic","characteristics","price","vat_price_included","price_group","price_groups","number","template","elm","is_folder","individual_legal"]});
$p.injected_data._mixin({"view_about.html":"<div class=\"md_column1300\">\r\n    <h1><i class=\"fa fa-info-circle\"></i> Заказы онлайн</h1>\r\n    <p>Заказы онлайн - это веб-приложение на базе фреймворка <a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">Metadata.js</a><br />\r\n        Исходный код и документация доступны на <a href=\"https://github.com/oknosoft/order-online\" target=\"_blank\">GitHub <i class=\"fa fa-github-alt\"></i></a>.<br />\r\n    </p>\r\n\r\n    <h3>Назначение и возможности</h3>\r\n    <ul>\r\n        <li>Создание и редактирование документов <i>Заказ покупателя</i> для типовых конфигураций 1С</li>\r\n        <li>Заказы формируются с тем же набором и типами полей, что и в стандартной 1С<br />(реплицируются справочники <i>Контрагенты, Партнеры, Договоры, Организации, Номенклатура, Характеристики, Серии, Склады</i> и т.д. -<br />все ссылочные типы, задействованные в подсистеме управления продажами)</li>\r\n        <li>Фоновый двусторонний обмен изменений объектов с ИБ 1С</li>\r\n        <li>Гибкая настройка видимости и доступности объектов и реквизитов для групп пользователей</li>\r\n        <li>Формирование печатных форм счетов и заказов</li>\r\n        <li>Формирование отчетов об оплате и отгрузке по заказам</li>\r\n        <li>Поддержка автономной работы при отсутствии доступа в Интернет и прозрачного обмена с сервером при возобновлении соединения</li>\r\n        <li>Синхронизация заказов не только базой поставщика, но так же и с учетными системами клиентов и дилеров</li>\r\n    </ul>\r\n\r\n    <h3>Использованы следующие библиотеки и инструменты:</h3>\r\n    <h4>Серверная часть</h4>\r\n    <ul>\r\n        <li><a href=\"http://couchdb.apache.org/\" target=\"_blank\">couchDB</a>, NoSQL база данных с поддержкой master-master репликации</li>\r\n        <li><a href=\"http://nginx.org/ru/\" target=\"_blank\">nginx</a>, высокопроизводительный HTTP-сервер</li>\r\n        <li><a href=\"http://1c-dn.com/1c_enterprise/\" target=\"_blank\">1c_enterprise</a>, ORM сервер 1С:Предприятие</li>\r\n    </ul>\r\n\r\n    <h4>Управление данными в памяти браузера</h4>\r\n    <ul>\r\n        <li><a href=\"https://pouchdb.com/\" target=\"_blank\">pouchDB</a>, клиентская NoSQL база данных с поддержкой автономной работы и репликации с CouchDB</li>\r\n        <li><a href=\"https://github.com/agershun/alasql\" target=\"_blank\">alaSQL</a>, база данных SQL для браузера и Node.js с поддержкой как традиционных реляционных таблиц, так и вложенных JSON данных (NoSQL)</li>\r\n    </ul>\r\n\r\n    <h4>UI библиотеки и компоненты интерфейса</h4>\r\n    <ul>\r\n        <li><a href=\"http://dhtmlx.com/\" target=\"_blank\">dhtmlx</a>, кроссбраузерная библиотека javascript для построения современных веб и мобильных приложений</li>\r\n        <li><a href=\"https://handsontable.com/\" target=\"_blank\">handsontable</a>, компонент для отображения и редактирования табличных данных</li>\r\n        <li><a href=\"https://github.com/eligrey/FileSaver.js\" target=\"_blank\">filesaver.js</a>, HTML5 реализация метода saveAs</li>\r\n        <li><a href=\"http://momentjs.com/\" target=\"_blank\">moment.js</a>, библиотека форматирования интервалов и дат</li>\r\n        <li><a href=\"https://github.com/SheetJS/js-xlsx\" target=\"_blank\">xlsx</a>, библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS в браузере</li>\r\n    </ul>\r\n\r\n    <h4>Графика</h4>\r\n    <ul>\r\n        <li><a href=\"https://fortawesome.github.io/Font-Awesome/\" target=\"_blank\">fontawesome</a>, набор шрифтовых иконок</li>\r\n    </ul>\r\n\r\n    <h3>Лицензия</h3>\r\n    <p>Для некоммерческих Open Source проектов, разрешено использование и распространение исходного кода приложения\r\n        <a href=\"https://github.com/oknosoft/order-online\" target=\"_blank\">Заказы онлайн</a> и библиотеки\r\n        <a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">Metadata.js</a><br />на условиях\r\n        <a href=\"http://www.gnu.org/licenses/agpl.html\" target=\"_blank\">GNU Affero General Public License v.3</a>.<br />\r\n        Коммерческая <a href=\"http://www.oknosoft.ru/programmi-oknosoft/metadata.html\" target=\"_blank\">лицензия на разработчика</a> позволяет использовать и распространять ПО в любом количестве неконкурирующих продуктов, без ограничений на количество копий\r\n    </p>\r\n\r\n    <h3><i class=\"fa fa-question-circle\"></i> Вопросы</h3>\r\n    <p>Если обнаружили ошибку, пожалуйста,\r\n        <a href=\"https://github.com/oknosoft/order-online/issues/new\" target=\"_blank\">зарегистрируйте вопрос в GitHub</a> или\r\n        <a href=\"http://www.oknosoft.ru/metadata/#page-118\" target=\"_blank\">свяжитесь с разработчиком</a> напрямую<br /></p>\r\n    <p>&nbsp;</p>\r\n\r\n</div>","view_settings.html":"<div class=\"md_column1300\">\r\n\r\n    <div class=\"md_column320\" name=\"form1\" style=\"max-width: 400px;\"><div></div></div>\r\n\r\n    <div class=\"md_column320\" name=\"form2\" style=\"max-width: 400px;\"><div></div></div>\r\n\r\n</div>","toolbar_buyers_order_obj.xml":"<?xml version=\"1.0\" encoding='utf-8'?>\r\n<toolbar>\r\n    <item id=\"sep0\" type=\"separator\"/>\r\n    <item type=\"button\" id=\"btn_save_close\" text=\"&lt;i class='fa fa-caret-square-o-down fa-fw'&gt;&lt;/i&gt;\" title=\"Записать и закрыть\"/>\r\n    <item type=\"button\" id=\"btn_save\" text=\"&lt;i class='fa fa-floppy-o fa-fw'&gt;&lt;/i&gt;\" title=\"Записать\"/>\r\n    <item type=\"button\" id=\"btn_sent\" text=\"&lt;i class='fa fa-paper-plane-o fa-fw'&gt;&lt;/i&gt;\" title=\"Отправить заказ\" />\r\n\r\n    <item type=\"button\" id=\"btn_post\" enabled=\"false\" text=\"&lt;i class='fa fa-check-square-o fa-fw'&gt;&lt;/i&gt;\" title=\"Провести документ\" />\r\n    <item type=\"button\" id=\"btn_unpost\" enabled=\"false\" text=\"&lt;i class='fa fa-square-o fa-fw'&gt;&lt;/i&gt;\" title=\"Отмена проведения\" />\r\n\r\n    <item type=\"button\" id=\"btn_files\" text=\"&lt;i class='fa fa-paperclip fa-fw'&gt;&lt;/i&gt;\" title=\"Присоединенные файлы\"/>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_print\" text=\"&lt;i class='fa fa-print fa-fw'&gt;&lt;/i&gt;\" title=\"Печать\" openAll=\"true\">\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_create_by_virtue\" text=\"&lt;i class='fa fa-bolt fa-fw'&gt;&lt;/i&gt;\" title=\"Создать на основании\" openAll=\"true\" >\r\n        <item type=\"button\" id=\"btn_message\" enabled=\"false\" text=\"Сообщение\" />\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_go_to\" text=\"&lt;i class='fa fa-external-link fa-fw'&gt;&lt;/i&gt;\" title=\"Перейти\" openAll=\"true\" >\r\n        <item type=\"button\" id=\"btn_go_connection\" enabled=\"false\" text=\"Связи\" />\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\"   id=\"bs_more\"  text=\"&lt;i class='fa fa-th-large fa-fw'&gt;&lt;/i&gt;\"  title=\"Дополнительно\" openAll=\"true\">\r\n        <item type=\"button\"     id=\"btn_retrieve\"    text=\"&lt;i class='fa fa-undo fa-fw'&gt;&lt;/i&gt; Отозвать\" title=\"Отозвать заказ\" />\r\n        <item type=\"separator\"  id=\"sep_export\" />\r\n        <item type=\"button\" id=\"btn_import\" text=\"&lt;i class='fa fa-upload fa-fw'&gt;&lt;/i&gt; Загрузить из файла\" />\r\n        <item type=\"button\" id=\"btn_export\" text=\"&lt;i class='fa fa-download fa-fw'&gt;&lt;/i&gt; Выгрузить в файл\" />\r\n    </item>\r\n\r\n    <item id=\"sep_close_1\" type=\"separator\"/>\r\n    <item type=\"button\" id=\"btn_close\" text=\"&lt;i class='fa fa-times fa-fw'&gt;&lt;/i&gt;\" title=\"Закрыть форму\"/>\r\n    <item id=\"sep_close_2\" type=\"separator\"/>\r\n\r\n</toolbar>","tree_filteres.xml":"<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<tree id=\"0\">\r\n    <item id=\"draft\" text=\"&lt;i class='fa fa-pencil fa-fw'&gt;&lt;/i&gt; Черновики\" select=\"1\" tooltip=\"Предварительные расчеты\"/>\r\n    <item id=\"sent\" text=\"&lt;i class='fa fa-paper-plane-o fa-fw'&gt;&lt;/i&gt; Отправлено\" tooltip=\"Отправленные, но еще не принятые в работу. Могут быть отозваны (переведены в 'черновики')\" />\r\n    <item id=\"confirmed\" text=\"&lt;i class='fa fa-thumbs-o-up fa-fw'&gt;&lt;/i&gt; Согласовано\" tooltip=\"Включены в план производства. Могут быть изменены менеджером. Недоступны для изменения дилером\" />\r\n    <item id=\"declined\" text=\"&lt;i class='fa fa-thumbs-o-down fa-fw'&gt;&lt;/i&gt; Отклонено\" tooltip=\"Не приняты в работу по техническим причинам. Требуется изменение конструктива или комплектации\" />\r\n    <item id=\"execution\" text=\"&lt;i class='fa fa-money fa-fw'&gt;&lt;/i&gt; Долги\" tooltip=\"Оплата, отгрузка\" />\r\n    <item id=\"zarchive\" text=\"&lt;i class='fa fa-archive fa-fw'&gt;&lt;/i&gt; Архив\" tooltip=\"Старые заказы\" />\r\n    <item id=\"all\" text=\"&lt;i class='fa fa-expand fa-fw'&gt;&lt;/i&gt; Все\" tooltip=\"Отключить фильтрацию\" />\r\n</tree>\r\n"});
/**
 * ### Дополнительные методы справочника _Договоры контрагентов_
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * 
 * @module cat_contracts
 */

(function($p){

	var _mgr = $p.cat.contracts;

	/**
	 * ### Запрос для формы списка
	 *
	 * @method sql_selection_list_flds
	 * @override
	 * @param initial_value
	 * @returns {string}
	 */
	_mgr.sql_selection_list_flds = function(initial_value){
		return "SELECT _t_.ref, _t_.`_deleted`, _t_.is_folder, _t_.id, _t_.name as presentation, _k_.synonym as contract_kind, _m_.synonym as mutual_settlements, _o_.name as organization, _p_.name as partner," +
			" case when _t_.ref = '" + initial_value + "' then 0 else 1 end as is_initial_value FROM cat_contracts AS _t_" +
			" left outer join cat_organizations as _o_ on _o_.ref = _t_.organization" +
			" left outer join cat_partners as _p_ on _p_.ref = _t_.owner" +
			" left outer join enm_mutual_contract_settlements as _m_ on _m_.ref = _t_.mutual_settlements" +
			" left outer join enm_contract_kinds as _k_ on _k_.ref = _t_.contract_kind %3 %4 LIMIT 300";
	};

	/**
	 * ### Ищет договор по контрагенту и организации
	 *
	 * @param partner
	 * @param organization
	 * @param contract_kind
	 * @returns {DataObj}
	 */
	_mgr.by_partner_and_org = function (partner, organization, contract_kind) {
		if(!contract_kind)
			contract_kind = $p.enm.contract_kinds.СПокупателем;
		var res = _mgr.find_rows({owner: partner, organization: organization, contract_kind: contract_kind});
		res.sort(function (a, b) {
			return a.date > b.date;
		});
		return res.length ? res[0] : _mgr.get();
	};

})($p);
/**
 * Дополнительные методы справочника Номенклатура
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 *
 * @module cat_nom
 */

(function($p){

	var _mgr = $p.cat.nom;

	// модификаторы
	_mgr.sql_selection_list_flds = function(initial_value){
		return "SELECT _t_.ref, _t_.`_deleted`, _t_.is_folder, _t_.id, _t_.article, _t_.name as presentation, _u_.name as nom_unit, _k_.name as nom_kind," +
			" case when _t_.ref = '" + initial_value + "' then 0 else 1 end as is_initial_value FROM cat_nom AS _t_" +
			" left outer join cat_units as _u_ on _u_.ref = _t_.base_unit" +
			" left outer join cat_nom_kinds as _k_ on _k_.ref = _t_.nom_kind %3 %4 LIMIT 300";
	};

	_mgr.sql_selection_where_flds = function(filter){
		return " OR _t_.article LIKE '" + filter + "' OR _t_.id LIKE '" + filter + "' OR _t_.name LIKE '" + filter + "'";
	};


	// публичные методы объекта

})($p);

/**
 * ### Дополнительные методы справочника _Контрагенты_
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module cat_partners
 */

(function($p){

	var _mgr = $p.cat.partners;

	/**
	 * ### Запрос поиска по строке
	 *
	 * @method sql_selection_where_flds
	 * @override
	 * @param filter
	 * @returns {string}
	 */
	_mgr.sql_selection_where_flds = function(filter){
		return " OR inn LIKE '" + filter + "' OR name_full LIKE '" + filter + "' OR name LIKE '" + filter + "'";
	};


	$p.CatPartners.prototype.__define({

		/**
		 * ### Адрес контрагента
		 * Вспомогательное свойство, например, для печатных форм. Ищет адрес в табчасти контактной информации
		 * TODO: в старых конфигурациях 1С, у контрагентов и организаций нет табчасти _КонтактнаяИнформация_ в обработчике перед выгрузкой объекта нужно сформировать виртуальную табличную часть из регистра сведений _КонтактнаяИнформация_
		 */
		addr: {
			get: function () {

				return this.contact_information._obj.reduce(function (val, row) {

					if(row.kind == $p.cat.contact_information_kinds.predefined("ЮрАдресКонтрагента") && row.presentation)
						return row.presentation;

					else if(val)
						return val;

					else if(row.presentation && (
							row.kind == $p.cat.contact_information_kinds.predefined("ФактАдресКонтрагента") ||
							row.kind == $p.cat.contact_information_kinds.predefined("ПочтовыйАдресКонтрагента")
						))
						return row.presentation;

				}, "")

			}
		},

		/**
		 * ### Телефон контрагента
		 * Вспомогательное свойство, например, для печатных форм. Ищет телефон в табчасти контактной информации
		 * TODO: в старых конфигурациях 1С, у контрагентов и организаций нет табчасти _КонтактнаяИнформация_ в обработчике перед выгрузкой объекта нужно сформировать виртуальную табличную часть из регистра сведений _КонтактнаяИнформация_
		 */
		phone: {
			get: function () {

				return this.contact_information._obj.reduce(function (val, row) {

					if(row.kind == $p.cat.contact_information_kinds.predefined("ТелефонКонтрагента") && row.presentation)
						return row.presentation;

					else if(val)
						return val;

					else if(row.kind == $p.cat.contact_information_kinds.predefined("ТелефонКонтрагентаМобильный") && row.presentation)
						return row.presentation;

				}, "")
			}
		},

		/**
		 * ### полное наименование
		 * с телефоном, адресом и банковским счетом
		 */
		long_presentation: {
			get: function () {
				var res = this.name_full || this.name,
					addr = this.addr,
					phone = this.phone;

				if(this.inn)
					res+= ", ИНН" + this.inn;

				if(this.kpp)
					res+= ", КПП" + this.kpp;

				if(addr)
					res+= ", " + addr;

				if(phone)
					res+= ", " + phone;

				return res;
			}
		}
	});

})($p);
/**
 * ### Дополнительные методы справочника _Права внешних пользователей_
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module cat_users_acl
 */

(function($p){

	$p.cat.users_acl.__define({

		/**
		 * ### Морозит элементы справочника при загрузке
		 * чтобы права нелзя было поменять внешним скриптом
		 *
		 * @method load_array
		 */
		load_array: {
			value: function(aattr, forse){

				var ref, obj, res = [], acl;

				for(var i in aattr){

					ref = $p.utils.fix_guid(aattr[i]);

					acl = aattr[i].acl;
					if(acl)
						delete aattr[i].acl;

					if(!(obj = this.by_ref[ref])){
						obj = new $p.CatUsers_acl(aattr[i], this);
						if(forse)
							obj._set_loaded();

					}else if(obj.is_new() || forse){
						obj._mixin(aattr[i]);
						obj._set_loaded();
					}

					if(acl && !obj._acl){
						var _acl = {};
						for(var i in acl){
							_acl.__define(i, {
								value: {},
								writable: false
							});
							for(var j in acl[i]){
								_acl[i].__define(j, {
									value: acl[i][j],
									writable: false
								});
							}
						}
						obj.__define({
							_acl: {
								value: _acl,
								writable: false
							}
						});
					}

					res.push(obj);
				}

				return res;
			}
		}
	});

	$p.CatUsers_acl.prototype.__define({

		/**
		 * ### Роль доступна
		 *
		 * @method role_available
		 * @param name {String}
		 * @returns {Boolean}
		 */
		role_available: {
			value: function (name) {
				return this.acl_objs._obj.some(function (row) {
					return row.type == name;
				});
			}
		},

		/**
		 * ### Идентификаторы доступных контрагентов
		 * Для пользователей с ограниченным доступом
		 *
		 * @property partners_uids
		 * @type {Array}
		 */
		partners_uids: {
			get: function () {
				var res = [];
				this.acl_objs.each(function (row) {
					if(row.acl_obj instanceof $p.CatPartners)
						res.push(row.acl_obj.ref)
				});
				return res;
			}
		}
	});

})($p);



/**
 * ### Дополнительные методы ПВХ Предопределенные элементы
 * Предопределенные элементы - аналог констант для хранения ссылочных и списочных настроек приложения
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module cch_predefined_elmnts
 */

(function($p){

	// Подписываемся на событие окончания загрузки локальных данных
	$p.on({
		pouch_load_data_loaded: function pouch_load_data_loaded() {

			$p.off(pouch_load_data_loaded);

			// читаем элементы из pouchdb и создаём свойства
			$p.cch.predefined_elmnts.pouch_find_rows({ _raw: true, _top: 500, _skip: 0 })
				.then(function (rows) {

					var parents = {};

					rows.forEach(function (row) {
						if(row.is_folder && row.synonym){
							var ref = row._id.split("|")[1];
							parents[ref] = row.synonym;
							$p.job_prm.__define(row.synonym, { value: {} });
						}
					});

					rows.forEach(function (row) {

						if(!row.is_folder && row.synonym && parents[row.parent] && !$p.job_prm[parents[row.parent]][row.synonym]){

							var _mgr, tnames;

							if(row.type.is_ref){
								tnames = row.type.types[0].split(".");
								_mgr = $p[tnames[0]][tnames[1]]
							}

							if(row.list == -1){

								$p.job_prm[parents[row.parent]].__define(row.synonym, {
									value: function () {
										var res = {};
										row.elmnts.forEach(function (row) {
											res[row.elm] = _mgr ? _mgr.get(row.value, false) : row.value;
										});
										return res;
									}()
								});

							}else if(row.list){

								$p.job_prm[parents[row.parent]].__define(row.synonym, {
									value: row.elmnts.map(function (row) {
										return _mgr ? _mgr.get(row.value, false) : row.value;
									})
								});

							}else{

								if($p.job_prm[parents[row.parent]].hasOwnProperty(row.synonym))
									delete $p.job_prm[parents[row.parent]][row.synonym];

								$p.job_prm[parents[row.parent]].__define(row.synonym, {
									value: _mgr ? _mgr.get(row.value, false) : row.value,
									configurable: true
								});
							}

						}
					});
				})
				.then(function () {

					// даём возможность завершиться другим обработчикам, подписанным на _pouch_load_data_loaded_
					setTimeout(function () {
						$p.eve.callEvent("predefined_elmnts_inited");
					}, 100);

				});

		}
	});

	var _mgr = $p.cch.predefined_elmnts;

	/**
	 * Переопределяем геттер значения
	 *
	 * @property value
	 * @override
	 * @type {*}
	 */
	delete $p.CchPredefined_elmnts.prototype.value;
	$p.CchPredefined_elmnts.prototype.__define({

		value: {
			get: function () {

				var mf = this.type,
					res = this._obj ? this._obj.value : "",
					mgr, ref;

				if(this._obj.is_folder)
					return "";

				if(typeof res == "object")
					return res;

				else if(mf.is_ref){
					if(mf.digits && typeof res === "number")
						return res;

					if(mf.hasOwnProperty("str_len") && !$p.utils.is_guid(res))
						return res;

					if(mgr = $p.md.value_mgr(this._obj, "value", mf)){
						if($p.utils.is_data_mgr(mgr))
							return mgr.get(res, false);
						else
							return $p.utils.fetch_type(res, mgr);
					}

					if(res){
						console.log(["value", mf, this._obj]);
						return null;
					}

				}else if(mf.date_part)
					return $p.utils.fix_date(this._obj.value, true);

				else if(mf.digits)
					return $p.utils.fix_number(this._obj.value, !mf.hasOwnProperty("str_len"));

				else if(mf.types[0]=="boolean")
					return $p.utils.fix_boolean(this._obj.value);

				else
					return this._obj.value || "";

				return this.characteristic.clr;
			},

			set: function (v) {

				if(this._obj.value === v)
					return;

				Object.getNotifier(this).notify({
					type: 'update',
					name: 'value',
					oldValue: this._obj.value
				});
				this._obj.value = $p.utils.is_data_obj(v) ? v.ref : v;
				this._data._modified = true;
			}
		}
	});

	/**
	 * ### Форма элемента
	 *
	 * @method form_obj
	 * @override
	 * @param pwnd
	 * @param attr
	 * @returns {*}
	 */
	_mgr.form_obj = function(pwnd, attr){

		var o, wnd;

		return this.constructor.prototype.form_obj.call(this, pwnd, attr)
			.then(function (res) {
				if(res){
					o = res.o;
					wnd = res.wnd;
					return res;
				}
			});
	}

})($p);
/**
 * ### Дополнительные методы плана видов характеристик _Свойства объектов_
 * Для поддержки дополнительных реквизитов и сведений - аналог подсистемы _Свойства_ БСП
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module cch_properties
 */

(function($p){

	var _mgr = $p.cch.properties;

	/**
	 * ### Проверяет заполненность обязательных полей
	 *
	 * @method check_mandatory
	 * @override
	 * @param prms {Array}
	 * @param title {String}
	 * @return {boolean}
	 */
	_mgr.check_mandatory = function(prms, title){

		var t, row;

		// проверяем заполненность полей
		for(t in prms){
			row = prms[t];
			if(row.param.mandatory && (!row.value || row.value.empty())){
				$p.msg.show_msg({
					type: "alert-error",
					text: $p.msg.bld_empty_param + row.param.presentation,
					title: title || $p.msg.bld_title});
				return true;
			}
		}

	};

	/**
	 * ### Возвращает массив доступных для данного свойства значений
	 *
	 * @method slist
	 * @override
	 * @param prop {CatObj} - планвидовхарактеристик ссылка или объект
	 * @param ret_mgr {Object} - установить в этом объекте указатель на менеджера объекта
	 * @return {Array}
	 */
	_mgr.slist = function(prop, ret_mgr){

		var res = [], rt, at, pmgr, op = this.get(prop);

		if(op && op.type.is_ref){
			// параметры получаем из локального кеша
			for(rt in op.type.types)
				if(op.type.types[rt].indexOf(".") > -1){
					at = op.type.types[rt].split(".");
					pmgr = $p[at[0]][at[1]];
					if(pmgr){

						if(ret_mgr)
							ret_mgr.mgr = pmgr;

						if(pmgr.class_name=="enm.open_directions")
							pmgr.get_option_list().forEach(function(v){
								if(v.value && v.value!=$p.enm.tso.folding)
									res.push(v);
							});

						else if(pmgr.class_name.indexOf("enm.")!=-1 || !pmgr.metadata().has_owners)
							res = pmgr.get_option_list();

						else
							pmgr.find_rows({owner: prop}, function(v){
								res.push({value: v.ref, text: v.presentation});
							});

					}
				}
		}
		return res;
	};

})($p);

/**
 * ### Модуль Ценообразование
 * Содержит методы для работы с ценами номенклатуры
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

(function($p){

	// экспортируем класс Pricing (модуль ценообразования)
	$p.pricing = new Pricing($p);

	// методы ценообразования в прототип номенклатуры
	$p.CatNom.prototype.__define({

		/**
		 * ### Возвращает цену номенклатуры указанного типа
		 * - на дату
		 * - с подбором характеристики по цвету
		 * - с пересчетом из валюты в валюту
		 *
		 * @method _price
		 * @for $p.cat.nom
		 *
		 * @example
		 *     // установим цену в строке документа
		 *     row.price = row.nom._price({
			 *			price_type: this.doc_price_type,
			 *			characteristic: row.characteristic,
			 *			date: this.date,
			 *			currency: this.doc_currency
			 *		});
		 */
		_price: {
			value: function (attr) {

				if(!attr)
					attr = {};

				if(!attr.price_type)
					attr.price_type = $p.job_prm.pricing.price_type_sale;
				else if($p.utils.is_data_obj(attr.price_type))
					attr.price_type = attr.price_type.ref;

				if(!attr.characteristic)
					attr.characteristic = $p.utils.blank.guid;
				else if($p.utils.is_data_obj(attr.characteristic))
					attr.characteristic = attr.characteristic.ref;

				if(!attr.date)
					attr.date = new Date();

				var price = 0, currency, date = $p.utils.blank.date;

				if(this._data._price){
					if(this._data._price[attr.characteristic]){
						if(this._data._price[attr.characteristic][attr.price_type]){
							this._data._price[attr.characteristic][attr.price_type].forEach(function (row) {
								if(row.date > date && row.date <= attr.date){
									price = row.price;
									currency = row.currency;
								}
							})
						}
					}else if(attr.characteristic != $p.utils.blank.guid && this._data._price[$p.utils.blank.guid]){
						// если нет цены с характеристикой, возвращаем цену без характеристики
						if(this._data._price[$p.utils.blank.guid][attr.price_type]){
							this._data._price[$p.utils.blank.guid][attr.price_type].forEach(function (row) {
								if(row.date > date && row.date <= attr.date){
									price = row.price;
									currency = row.currency;
								}
							})
						}
					}
				}

				// Пересчитать из валюты в валюту
				return $p.pricing.from_currency_to_currency(price, attr.date, currency, attr.currency);

			}
		}
	});


	function Pricing($p){

		/**
		 * ### Пересчитывает сумму из валюты в валюту
		 *
		 * @method from_currency_to_currency
		 * @param amount {Number} - сумма к пересчету
		 * @param date {Date} - дата курса
		 * @param from - исходная валюта
		 * @param [to] - конечная валюта
		 * @return {Number}
		 */
		this.from_currency_to_currency = function (amount, date, from, to) {

			if(!to || to.empty())
				to = $p.job_prm.pricing.main_currency;

			if(!from || from == to)
				return amount;

			if(!date)
				date = new Date();

			if(!this.cource_sql)
				this.cource_sql = $p.wsql.alasql.compile("select top 1 * from `ireg_currency_courses` where `currency` = ? and `period` <= ? order by `date` desc");

			var cfrom = {course: 1, multiplicity: 1},
				cto = {course: 1, multiplicity: 1},
				tmp;
			if(from != $p.job_prm.pricing.main_currency){
				tmp = this.cource_sql([from.ref, date]);
				if(tmp.length)
					cfrom = tmp[0];
			}
			if(to != $p.job_prm.pricing.main_currency){
				tmp = this.cource_sql([to.ref, date]);
				if(tmp.length)
					cto = tmp[0];
			}

			return (amount * cfrom.course / cfrom.multiplicity) * cto.multiplicity / cto.course;
		};


		// виртуальный срез последних
		function build_cache() {

			return $p.doc.nom_prices_setup.pouch_db.query("doc/doc_nom_prices_setup_slice_last",
				{
					limit : 1000,
					include_docs: false,
					startkey: [''],
					endkey: ['\uffff']
					// ,reduce: function(keys, values, rereduce) {
					// 	return values.length;
					// }
				})
				.then(function (res) {
					res.rows.forEach(function (row) {

						var onom = $p.cat.nom.get(row.key[0], false, true);

						if(!onom || !onom._data)
							return;

						if(!onom._data._price)
							onom._data._price = {};

						if(!onom._data._price[row.key[1]])
							onom._data._price[row.key[1]] = {};

						if(!onom._data._price[row.key[1]][row.key[2]])
							onom._data._price[row.key[1]][row.key[2]] = [];

						onom._data._price[row.key[1]][row.key[2]].push({
							date: new Date(row.value.date),
							price: row.value.price,
							currency: $p.cat.currencies.get(row.value.currency)
						});

					});
				});
		}

		$p.on({

			// подписываемся на событие после загрузки из pouchdb-ram и готовности предопределенных
			predefined_elmnts_inited: function predefined_elmnts_inited() {
				$p.off(predefined_elmnts_inited);
				build_cache();
			},

			// следим за изменениями документа установки цен, чтобы при необходимости обновить кеш
			pouch_change: function (dbid, change) {
				if (dbid != $p.doc.nom_prices_setup.cachable)
					return;

				// формируем новый
			}

		});

	}

})($p);

/**
 * ### Модуль менеджера и документа _Заказ покупателя_
 * Обрботчики событий after_create, after_load, before_save, after_save, value_change
 * Методы выполняются в контексте текущего объекта this = DocObj
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 *
 * @module doc_buyers_order
 */

(function($p){

	var _mgr = $p.doc.buyers_order;

	// после создания надо заполнить реквизиты по умолчанию: контрагент, организация, договор
	_mgr.on("after_create", function (attr) {

		var acl = $p.current_acl.acl_objs,
			obj = this;

		//Организация
		acl.find_rows({
			by_default: true,
			type: $p.cat.organizations.metadata().obj_presentation || $p.cat.organizations.metadata().name}, function (row) {
			obj.organization = row.acl_obj;
			return false;
		});

		//Подразделение
		acl.find_rows({
			by_default: true,
			type: $p.cat.divisions.metadata().obj_presentation || $p.cat.divisions.metadata().name}, function (row) {
			obj.department = row.acl_obj;
			return false;
		});

		//Контрагент
		acl.find_rows({
			by_default: true,
			type: $p.cat.partners.metadata().obj_presentation || $p.cat.partners.metadata().name}, function (row) {
			obj.partner = row.acl_obj;
			return false;
		});

		//Договор
		obj.contract = $p.cat.contracts.by_partner_and_org(obj.partner, obj.organization);

		//Менеджер
		obj.manager = $p.current_user;

		//СостояниеТранспорта
		obj.obj_delivery_state = $p.enm.obj_delivery_states.Черновик;

		// Валюта
		this.doc_currency = this.currency;

		//Номер документа
		return obj.new_number_doc();

	});

	// перед записью надо присвоить номер для нового и рассчитать итоги
	_mgr.on("before_save", function (attr) {

		// если установлен признак проведения, проверим состояние транспорта
		if(this.posted){
			if (this.obj_delivery_state == $p.enm.obj_delivery_states.Отклонен ||
				this.obj_delivery_state == $p.enm.obj_delivery_states.Отозван ||
				this.obj_delivery_state == $p.enm.obj_delivery_states.Шаблон){

				$p.msg.show_msg({
					type: "alert-warning",
					text: "Нельзя провести заказ со статусом<br/>'Отклонён', 'Отозван' или 'Шаблон'",
					title: this.presentation
				});

				return false;

			}else if(this.obj_delivery_state != $p.enm.obj_delivery_states.Подтвержден){
				this.obj_delivery_state = $p.enm.obj_delivery_states.Подтвержден;

			}
		}else if(this.obj_delivery_state == $p.enm.obj_delivery_states.Подтвержден){
			this.obj_delivery_state = $p.enm.obj_delivery_states.Отправлен;
		}

		// сумма документа
		this.doc_amount = this.goods.aggregate([], ["amount"]).round(2) + this.services.aggregate([], ["amount"]).round(2);

		// имя контрагента для поиска по строке
		// if(this.note.indexOf(this.partner.name) == -1)
		// 	this.note += this.partner.name;
	});

	// при изменении реквизита
	_mgr.on("value_change", function (attr) {

		var calc_amount = function () {

			// TODO: учесть валюту документа, которая может отличаться от валюты упр. учета

			// TODO: учесть ставку НДС и рассчитать сумму НДС

			attr.row.amount = (attr.row.price * ((100 - (attr.row.discount_percent + attr.row.discount_percent_auto))/100) * attr.row.quantity).round(2);

			this.doc_amount = this.goods.aggregate([], ["amount"]).round(2) + this.services.aggregate([], ["amount"]).round(2);

		}.bind(this);

		// реквизиты шапки
		if(attr.field == "organization" && this.contract.organization != attr.value){
			this.contract = $p.cat.contracts.by_partner_and_org(this.partner, attr.value);
			this.doc_currency = this.contract.settlements_currency;

		}else if(attr.field == "partner" && this.contract.owner != attr.value){
			this.contract = $p.cat.contracts.by_partner_and_org(attr.value, this.organization);
			this.doc_currency = this.contract.settlements_currency;

			// табчасть товаров
		}else if(attr.tabular_section == "goods"){

			attr.row[attr.field] = attr.value;

			if(attr.field == "nom" || attr.field == "nom_characteristic"){

				// проверим связь по владельцу характеристики
				if(attr.field == "nom"){
					if(!attr.row.nom_characteristic.empty() && attr.row.nom_characteristic.owner != attr.value)
						attr.row.nom_characteristic = "";
					attr.row.unit = attr.row.nom.storage_unit;
					attr.row.coefficient = attr.row.unit.coefficient;
				}

				// рассчитаем цену при изменении номенклатуры или характеристики
				attr.row.price = attr.row.nom._price({
					price_type: this.doc_price_type,
					characteristic: attr.row.nom_characteristic,
					date: this.date,
					currency: this.currency
				});

				// рассчитаем итоги
				calc_amount();


			}else if(attr.field == "price" || attr.field == "quantity" ||
				attr.field == "discount_percent" || attr.field == "discount_percent_internal"){
				calc_amount();
			}

		}
	});

	// свойства и методы объекта
	$p.DocBuyers_order.prototype.__define({


		/**
		 * ### Валюта документа
		 * получаем из договора или из констант
		 * @property currency
		 */
		currency: {
			get: function () {
				var currency = this.doc_currency.empty() ? this.contract.settlements_currency : this.doc_currency;
				return currency.empty() ? $p.job_prm.pricing.main_currency : currency;
			}
		},

		/**
		 * ### Тип цен документа
		 * получаем из поля документа или из договора или из констант
		 * @property doc_price_type
		 */
		doc_price_type: {
			get: function () {
				var price_type = this.price_type.empty() ? this.contract.price_type : this.price_type;
				if(price_type._manager === $p.cat.nom_prices_types_partners)
					price_type = price_type.nom_prices_type;
				return price_type.empty() ? $p.job_prm.pricing.price_type_sale : price_type;
			}
		},

		/**
		 * ### Данные печати
		 * возвращает структуру для построения печатной формы
		 * @property print_data
		 */
		print_data: {
			get: function () {
				var our_bank_account = this.organizational_unit && !this.organizational_unit.empty() && this.organizational_unit._manager == cat.organization_bank_accounts ?
						this.organizational_unit : this.organization.main_bank_account,
					get_imgs = [];

				// заполняем res теми данными, которые доступны синхронно
				var res = {
					АдресДоставки: this.shipping_address,
					ВалютаДокумента: this.currency.presentation,
					ДатаЗаказаФорматD: $p.moment(this.date).format("L"),
					ДатаЗаказаФорматDD: $p.moment(this.date).format("LL"),
					ДатаТекущаяФорматD: $p.moment().format("L"),
					ДатаТекущаяФорматDD: $p.moment().format("LL"),
					ДоговорДатаФорматD: $p.moment(this.contract.date.valueOf() == $p.utils.blank.date.valueOf() ? this.date : this.contract.date).format("L"),
					ДоговорДатаФорматDD: $p.moment(this.contract.date.valueOf() == $p.utils.blank.date.valueOf() ? this.date : this.contract.date).format("LL"),
					ДоговорНомер: this.contract.number_doc ? this.contract.number_doc : this.number_doc,
					ДоговорСрокДействия: $p.moment(this.contract.validity).format("L"),
					ЗаказНомер: this.number_doc,
					Контрагент: this.partner.presentation,
					КонтрагентОписание: this.partner.long_presentation,
					КонтрагентДокумент: "",
					КонтрагентКЛДолжность: "",
					КонтрагентКЛДолжностьРП: "",
					КонтрагентКЛИмя: "",
					КонтрагентКЛИмяРП: "",
					КонтрагентКЛК: "",
					КонтрагентКЛОснованиеРП: "",
					КонтрагентКЛОтчество: "",
					КонтрагентКЛОтчествоРП: "",
					КонтрагентКЛФамилия: "",
					КонтрагентКЛФамилияРП: "",
					КонтрагентЮрФизЛицо: "",
					КратностьВзаиморасчетов: this.settlements_multiplicity,
					КурсВзаиморасчетов: this.settlements_course,
					ЛистКомплектацииГруппы: "",
					ЛистКомплектацииСтроки: "",
					Организация: this.organization.presentation,
					ОрганизацияГород: this.organization.contact_information._obj.reduce(function (val, row) { return val || row.city }, "") || "Москва",
					ОрганизацияАдрес: this.organization.contact_information._obj.reduce(function (val, row) {

						if(row.kind == $p.cat.contact_information_kinds.predefined("ЮрАдресОрганизации") && row.presentation)
							return row.presentation;

						else if(val)
							return val;

						else if(row.presentation && (
								row.kind == $p.cat.contact_information_kinds.predefined("ФактАдресОрганизации") ||
								row.kind == $p.cat.contact_information_kinds.predefined("ПочтовыйАдресОрганизации")
							))
							return row.presentation;

					}, ""),
					ОрганизацияТелефон: this.organization.contact_information._obj.reduce(function (val, row) {

						if(row.kind == $p.cat.contact_information_kinds.predefined("ТелефонОрганизации") && row.presentation)
							return row.presentation;

						else if(val)
							return val;

						else if(row.kind == $p.cat.contact_information_kinds.predefined("ФаксОрганизации") && row.presentation)
							return row.presentation;

					}, ""),
					ОрганизацияБанкБИК: our_bank_account.bank.id,
					ОрганизацияБанкГород: our_bank_account.bank.city,
					ОрганизацияБанкКоррСчет: our_bank_account.bank.correspondent_account,
					ОрганизацияБанкНаименование: our_bank_account.bank.name,
					ОрганизацияБанкНомерСчета: our_bank_account.account_number,
					ОрганизацияИндивидуальныйПредприниматель: this.organization.individual_entrepreneur.presentation,
					ОрганизацияИНН: this.organization.inn,
					ОрганизацияКПП: this.organization.kpp,
					ОрганизацияСвидетельствоДатаВыдачи: this.organization.certificate_date_issue,
					ОрганизацияСвидетельствоКодОргана: this.organization.certificate_authority_code,
					ОрганизацияСвидетельствоНаименованиеОргана: this.organization.certificate_authority_name,
					ОрганизацияСвидетельствоСерияНомер: this.organization.certificate_series_number,
					ОрганизацияЮрФизЛицо: this.organization.individual_legal.presentation,
					ПродукцияЭскизы: {},
					Проект: this.project.presentation,
					СистемыПрофилей: this.sys_profile,
					СистемыФурнитуры: this.sys_furn,
					Сотрудник: this.manager.presentation,
					СотрудникДолжность: this.manager.individual_person.Должность || "менеджер",
					СотрудникДолжностьРП: this.manager.individual_person.ДолжностьРП,
					СотрудникИмя: this.manager.individual_person.Имя,
					СотрудникИмяРП: this.manager.individual_person.ИмяРП,
					СотрудникОснованиеРП: this.manager.individual_person.ОснованиеРП,
					СотрудникОтчество: this.manager.individual_person.Отчество,
					СотрудникОтчествоРП: this.manager.individual_person.ОтчествоРП,
					СотрудникФамилия: this.manager.individual_person.Фамилия,
					СотрудникФамилияРП: this.manager.individual_person.ФамилияРП,
					СотрудникФИО: this.manager.individual_person.Фамилия +
					(this.manager.individual_person.Имя ? " " + this.manager.individual_person.Имя[1].toUpperCase() + "." : "" )+
					(this.manager.individual_person.Отчество ? " " + this.manager.individual_person.Отчество[1].toUpperCase() + "." : ""),
					СотрудникФИОРП: this.manager.individual_person.ФамилияРП + " " + this.manager.individual_person.ИмяРП + " " + this.manager.individual_person.ОтчествоРП,
					СуммаДокумента: this.doc_amount.toFixed(2),
					СуммаДокументаПрописью: this.doc_amount.in_words(),
					СуммаДокументаБезСкидки: this.goods._obj.reduce(function (val, row){
						return val + row.quantity * row.price;
					}, 0).toFixed(2) + this.service._obj.reduce(function (val, row){
						return val + row.quantity * row.price;
					}, 0).toFixed(2),
					СуммаСкидки: this.goods._obj.reduce(function (val, row){
						return val + row.discount;
					}, 0).toFixed(2) + this.servise._obj.reduce(function (val, row){
						return val + row.discount;
					}, 0).toFixed(2),
					СуммаНДС: this.goods._obj.reduce(function (val, row){
						return val + row.vat_amount;
					}, 0).toFixed(2) + this.servise._obj.reduce(function (val, row){
						return val + row.vat_amount;
					}, 0).toFixed(2),
					ТекстНДС: this.vat_consider ? (this.vat_included ? "В том числе НДС 18%" : "НДС 18% (сверху)") : "Без НДС",
					ТелефонПоАдресуДоставки: this.phone,
					СуммаВключаетНДС: this.contract.vat_included,
					УчитыватьНДС: this.contract.vat_consider,
					ВсегоНаименований: this.goods.count() + this.service.count(),
					ВсегоИзделий: 0,
					ВсегоПлощадьИзделий: 0
				};

				// дополняем значениями свойств
				this.extra_fields.forEach(function (row) {
					res["Свойство" + row.property.name.replace(/\s/g,"")] = row.value.presentation || row.value;
				});

				// TODO: дополнить датами доставки и монтажа
				if(!this.shipping_address)
					res.МонтажДоставкаСамовывоз = "Самовывоз";
				else
					res.МонтажДоставкаСамовывоз = "Монтаж по адресу: " + this.shipping_address;

				// получаем логотип организации
				for(var key in this.organization._attachments){
					if(key.indexOf("logo") != -1){
						get_imgs.push(this.organization.get_attachment(key)
							.then(function (blob) {
								return $p.utils.blob_as_text(blob, blob.type.indexOf("svg") == -1 ? "data_url" : "")
							})
							.then(function (data_url) {
								res.ОрганизацияЛоготип = data_url;
							})
							.catch($p.record_log));
						break;
					}
				}

				return (get_imgs.length ? Promise.all(get_imgs) : Promise.resolve([]))
					.then(function () {

						if(!window.QRCode)
							return new Promise(function(resolve, reject){
								$p.load_script("lib/qrcodejs/qrcode.js", "script", resolve);
							});

					})
					.then(function () {

						var svg = document.createElement("SVG");
						svg.innerHTML = "<g />";
						var qrcode = new QRCode(svg, {
							text: "http://www.oknosoft.ru/zd/",
							width: 100,
							height: 100,
							colorDark : "#000000",
							colorLight : "#ffffff",
							correctLevel : QRCode.CorrectLevel.H,
							useSVG: true
						});
						res.qrcode = svg.innerHTML;

						return res;
					});
			}
		},

		/**
		 * Возвращает струклуру с описанием строки продукции для печати
		 */
		row_description: {
			value: function (row) {

				var product = row.nom_characteristic,
					res = {
						НомерСтроки: row.row,
						Количество: row.quantity,
						Ед: row.unit.name || "шт",
						Цвет: product.clr.name,
						Размеры: row.len + "x" + row.width + ", " + row.s + "м²",
						Номенклатура: row.nom.name_full || row.nom.name,
						Характеристика: product.name,
						Заполнения: "",
						Цена: row.price,
						ЦенаВнутр: row.price_internal,
						СкидкаПроцент: row.discount_percent,
						СкидкаПроцентВнутр: row.discount_percent_internal,
						Скидка: row.discount,
						Сумма: row.amount,
						СуммаВнутр: row.amount_internal
					};

				product.glasses.forEach(function (row) {
					if(res.Заполнения.indexOf(row.nom.name) == -1){
						if(res.Заполнения)
							res.Заполнения += ", ";
						res.Заполнения += row.nom.name;
					}
				});

				return res;
			}
		}


	});

})($p);
/**
 * ### Форма списка документов _Заказ покупателя_
 * 
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * 
 * @module doc_buyers_order_form_list
 */

(function($p){

	var _mgr = $p.doc.buyers_order;

	_mgr.form_list = function(pwnd, attr){

		if(!attr)
			attr = {
				hide_header: true,
				date_from: new Date((new Date()).getFullYear().toFixed() + "-01-01"),
				date_till: new Date((new Date()).getFullYear().toFixed() + "-12-31"),
				on_new: function (o) {
					$p.iface.set_hash(_mgr.class_name, o.ref);
				},
				on_edit: function (_mgr, rId) {
					$p.iface.set_hash(_mgr.class_name, rId);
				}
			};

		// разбивка на 2 колонки - дерево и карусель
		var layout = pwnd.attachLayout({
				pattern: "2U",
				cells: [{
					id: "a",
					text: "Фильтр",
					collapsed_text: "Фильтр",
					width: 180
				}, {
					id: "b",
					text: "Заказы",
					header: false
				}],
				offsets: { top: 0, right: 0, bottom: 0, left: 0}
			}),

			tree = layout.cells("a").attachTree(),

			carousel = layout.cells("b").attachCarousel({
				keys:           false,
				touch_scroll:   false,
				offset_left:    0,
				offset_top:     0,
				offset_item:    0
			});

		// страницы карусели
		carousel.hideControls();
		carousel.addCell("list");
		carousel.addCell("report");
		carousel.conf.anim_step = 200;
		carousel.conf.anim_slide = "left 0.1s";

		var wnd = _mgr.form_selection(carousel.cells("list"), attr),

			report,

			filter_view = {},

			filter_key = {};

		// настраиваем фильтр для списка заказов
		filter_view.__define({
			value: {
				get: function () {
					switch(tree.getSelectedItemId()) {

						case 'draft':
						case 'sent':
						case 'declined':
						case 'confirmed':
						case 'zarchive':
							return 'doc/doc_buyers_order_date';

						case 'execution':
						case 'all':
							return '';
					}
				}
			}
		});
		filter_key.__define({
			value: {
				get: function () {
					var key, id;

					switch(id = tree.getSelectedItemId()) {

						case 'draft':
						case 'sent':
						case 'declined':
						case 'confirmed':
						case 'zarchive':
							key = id;
							break;

						case 'execution':
						case 'all':
							return '';
					}

					var filter = wnd.elmnts.filter.get_filter(true);
					return {
						startkey: [key, filter.date_from.getFullYear(), filter.date_from.getMonth()+1, filter.date_from.getDate()],
						endkey: [key, filter.date_till.getFullYear(), filter.date_till.getMonth()+1, filter.date_till.getDate()],
						_drop_date: true,
						_order_by: true,
						_search: filter.filter.toLowerCase()
					};
				}
			}
		});
		wnd.elmnts.filter.custom_selection._view = filter_view;
		wnd.elmnts.filter.custom_selection._key = filter_key;


		// настраиваем дерево
		tree.enableTreeImages(false);
		tree.parse($p.injected_data["tree_filteres.xml"]);
		tree.attachEvent("onSelect", function (rid) {

			// переключаем страницу карусели
			switch(rid) {

				case 'draft':
				case 'sent':
				case 'declined':
				case 'confirmed':
				case 'zarchive':
				case 'all':
					carousel.cells("list").setActive();
					wnd.elmnts.filter.call_event();
					return;
			}

			build_report(rid);

		});

		function build_report(rid) {

			carousel.cells("report").setActive();

			function show_report() {

				switch(rid) {

					case 'execution':
						$p.doc.buyers_order.rep_invoice_execution(report);
						break;

					case 'plan':
					case 'underway':
					case 'manufactured':
					case 'executed':

						$p.doc.buyers_order.rep_planing(report, rid);
						break;
				}

			}

			if(!report){

				report = new $p.HandsontableDocument(carousel.cells("report"), {})

					.then(function (rep) {

						if(!rep._online)
							return report = null;

						show_report();


					});

			}else if(report._online){

				show_report();
			}


		}

		return wnd;
	};

})($p);


/**
 * ### Форма документа _Заказ покупателя_
 * 
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * 
 * @module doc_buyers_order_form_obj
 */

(function($p){

	var _mgr = $p.doc.buyers_order;


	_mgr.form_obj = function(pwnd, attr){

		var o, wnd, evts = [], attr_on_close = attr.on_close;

		attr.draw_pg_header = function (o, wnd) {

			function layout_resize_finish() {
				setTimeout(function () {
					if(wnd.elmnts.layout_header.setSizes){
						wnd.elmnts.layout_header.setSizes();
						wnd.elmnts.pg_left.objBox.style.width = "100%";
						wnd.elmnts.pg_right.objBox.style.width = "100%";
					}
				}, 200);
			}

			// в зависимости от статуса
			setTimeout(set_editable, 50);

			/**
			 *	закладка шапка
			 */
			wnd.elmnts.layout_header = wnd.elmnts.tabs.tab_header.attachLayout('3U');

			wnd.elmnts.layout_header.attachEvent("onResizeFinish", layout_resize_finish);

			wnd.elmnts.layout_header.attachEvent("onPanelResizeFinish", layout_resize_finish);

			/**
			 *	левая колонка шапки документа
			 */
			wnd.elmnts.cell_left = wnd.elmnts.layout_header.cells('a');
			wnd.elmnts.cell_left.hideHeader();
			wnd.elmnts.pg_left = wnd.elmnts.cell_left.attachHeadFields({
				obj: o,
				pwnd: wnd,
				read_only: wnd.elmnts.ro,
				oxml: {
					" ": [{id: "number_doc", path: "o.number_doc", synonym: "Номер", type: "ro", txt: o.number_doc},
						{id: "date", path: "o.date", synonym: "Дата", type: "ro", txt: $p.moment(o.date).format($p.moment._masks.date_time)}
					],
					"Контактная информация": ["partner",
						{id: "shipping_address", path: "o.shipping_address", synonym: "Адрес доставки", type: "txt", txt: o["shipping_address"]}
					],
					"Дополнительные реквизиты": [
						{id: "obj_delivery_state", path: "o.obj_delivery_state", synonym: "Состояние транспорта", type: "ro", txt: o["obj_delivery_state"].presentation}
					]
				}
			});

			/**
			 *	правая колонка шапки документа
			 * TODO: задействовать либо удалить choice_links
			 * var choice_links = {contract: [
				 * {name: ["selection", "owner"], path: ["partner"]},
				 * {name: ["selection", "organization"], path: ["organization"]}
				 * ]};
			 */

			wnd.elmnts.cell_right = wnd.elmnts.layout_header.cells('b');
			wnd.elmnts.cell_right.hideHeader();
			wnd.elmnts.pg_right = wnd.elmnts.cell_right.attachHeadFields({
				obj: o,
				pwnd: wnd,
				read_only: wnd.elmnts.ro,
				oxml: {
					"Налоги": ["vat_consider", "vat_included"],
					"Аналитика": ["project",
						{id: "organization", path: "o.organization", synonym: "Организация", type: "refc", txt: o["organization"].presentation},
						"contract", "organizational_unit", "department"],
					"Итоги": [
						{id: "doc_currency", path: "o.doc_currency", synonym: "Валюта документа", type: "ro", txt: o["doc_currency"].presentation},
						{id: "doc_amount", path: "o.doc_amount", synonym: "Сумма", type: "ron", txt: o["doc_amount"]}
					]
				}
			});

			/**
			 *	редактор комментариев
			 */
			wnd.elmnts.cell_note = wnd.elmnts.layout_header.cells('c');
			wnd.elmnts.cell_note.hideHeader();
			wnd.elmnts.cell_note.setHeight(100);
			wnd.elmnts.cell_note.attachHTMLString("<textarea class='textarea_editor'>" + o.note + "</textarea>");

		};

		attr.toolbar_struct = $p.injected_data["toolbar_buyers_order_obj.xml"];

		attr.toolbar_click = toolbar_click;

		attr.on_close = frm_close;

		return this.constructor.prototype.form_obj.call(this, pwnd, attr)
			.then(function (res) {
				if(res){
					o = res.o;
					wnd = res.wnd;
					return res;
				}
			});


		/**
		 * обработчик нажатия кнопок командных панелей
		 */
		function toolbar_click(btn_id){

			switch(btn_id) {

				case 'btn_sent':
					save("sent");
					break;

				case 'btn_save':
					save("save");
					break;

				case 'btn_save_close':
					save("close");
					break;

				case 'btn_retrieve':
					save("retrieve");
					break;

				case 'btn_post':
					save("post");
					break;

				case 'btn_unpost':
					save("unpost");
					break;


				case 'btn_close':
					wnd.close();
					break;

				case 'btn_add_builder':
					open_builder(true);
					break;

				case 'btn_add_product':
					$p.dp.buyers_order.form_product_list(wnd, process_add_product);
					break;

				case 'btn_add_material':
					add_material();
					break;

				case 'btn_edit':
					open_builder();
					break;

				case 'btn_spec':
					open_spec();
					break;

				case 'btn_discount':

					break;


				case 'btn_go_connection':
					go_connection();
					break;
			}

			if(btn_id.substr(0,4)=="prn_")
				_mgr.print(o, btn_id, wnd);
		}


		/**
		 * показывает список связанных документов
		 */
		function go_connection(){
			$p.msg.show_not_implemented();
		}

		/**
		 * обработчик выбора значения в таблице продукции (ссылочные типы)
		 */
		function production_on_value_select(v){
			this.row[this.col] = v;
			this.cell.setValue(v.presentation);
			production_on_value_change();
		}

		/**
		 * РассчитатьСпецификациюСтроки() + ПродукцияПриОкончанииРедактирования()
		 * при изменении строки табчасти продукции
		 */
		function production_on_value_change(rId){

			wnd.progressOn();
			// TODO: _mgr.save
			//_mgr.save({
			//	ref: o.ref,
			//	row: rId!=undefined ? rId : production_get_sel_index(),
			//	o: o._obj,
			//	action: "calc",
			//	specify: "production"
			//}).then(function(res){
			//	if(!$p.msg.check_soap_result(res))
			//		wnd.reflect_characteristic_change(res); // - перезаполнить шапку и табчасть
			//	wnd.progressOff();
			//});
		}

		/**
		 * обработчик активизации строки продукции
		 */
		function production_on_row_activate(rId, cInd){
			var row = o["production"].get(rId-1),
				sfields = this.getUserData("", "source").fields,
				rofields = "nom,characteristic,qty,len,width,s,quantity,unit",
				pval;


			if($p.utils.is_data_obj(row.ordn) && !row.ordn.empty()){
				for(var i in sfields)
					if(rofields.indexOf(sfields[i])!=-1){
						pval = this.cells(rId, Number(i)).getValue();
						this.setCellExcellType(rId, Number(i), "ro");
						if($p.utils.is_data_obj(pval))
							this.cells(rId, Number(i)).setValue(pval.presentation);
					}
			}
		}

		/**
		 * обработчик изменения значения в таблице продукции (примитивные типы)
		 */
		function production_on_edit(stage, rId, cInd, nValue, oValue){
			if(stage != 2 || nValue == oValue) return true;
			var fName = this.getUserData("", "source").fields[cInd], ret_code;
			if(fName == "note"){
				ret_code = true;
				o["production"].get(rId-1)[fName] = nValue;
			} else if (!isNaN(Number(nValue))){
				ret_code = true;
				o["production"].get(rId-1)[fName] = Number(nValue);
			}
			if(ret_code){
				setTimeout(function(){ production_on_value_change(rId-1); } , 0);
				return ret_code;
			}
		}


		/**
		 * вспомогательные функции
		 */

		function save(action){

			function do_save(post){

				if(!wnd.elmnts.ro){
					o.note = wnd.elmnts.cell_note.cell.querySelector("textarea").value.replace(/&nbsp;/g, " ").replace(/<.*?>/g, "").replace(/&.{2,6};/g, "");
					wnd.elmnts.pg_left.selectRow(0);
				}

				o.save(post)
					.then(function(){

						if(action == "sent" || action == "close")
							wnd.close();
						else{
							wnd.set_text();
							set_editable();
						}

					})
					.catch(function(err){
						$p.record_log(err);
					});
			}

			if(action == "sent"){
				// показать диалог и обработать возврат
				dhtmlx.confirm({
					title: $p.msg.order_sent_title,
					text: $p.msg.order_sent_message,
					cancel: $p.msg.cancel,
					callback: function(btn) {
						if(btn){
							// установить транспорт в "отправлено" и записать
							o.obj_delivery_state = $p.enm.obj_delivery_states.Отправлен;
							do_save();
						}
					}
				});

			} else if(action == "retrieve"){
				// установить транспорт в "отозвано" и записать
				o.obj_delivery_state =  $p.enm.obj_delivery_states.Отозван;
				do_save();

			} else if(action == "save" || action == "close"){
				do_save();

			}else if(action == "post"){
				do_save(true);

			}else if(action == "unpost"){
				do_save(false);
			}
		}

		function frm_close(){

			// выгружаем из памяти всплывающие окна скидки и связанных файлов
			["vault", "vault_pop", "discount", "discount_pop"].forEach(function (elm) {
				if (wnd && wnd.elmnts && wnd.elmnts[elm] && wnd.elmnts[elm].unload)
					wnd.elmnts[elm].unload();
			});

			evts.forEach(function (id) {
				$p.eve.detachEvent(id);
			});

			if(typeof attr_on_close == "function")
				attr_on_close();

			return true;
		}

		function set_editable(){

			// статусы
			var st_draft = $p.enm.obj_delivery_states.Черновик,
				st_retrieve = $p.enm.obj_delivery_states.Отозван,
				retrieve_enabed, detales_toolbar;

			wnd.elmnts.pg_right.cells("vat_consider", 1).setDisabled(true);
			wnd.elmnts.pg_right.cells("vat_included", 1).setDisabled(true);

			wnd.elmnts.ro = false;

			// технолог может изменять шаблоны
			if(o.obj_delivery_state == $p.enm.obj_delivery_states.Шаблон){
				wnd.elmnts.ro = !$p.current_acl.role_available("МенеджерПоПродажам");

				// ведущий менеджер может изменять проведенные
			}else if(o.posted || o._deleted){
				wnd.elmnts.ro = !$p.current_acl.role_available("МенеджерПоПродажам");

			}else if(!wnd.elmnts.ro && !o.obj_delivery_state.empty())
				wnd.elmnts.ro = o.obj_delivery_state != st_draft && o.obj_delivery_state != st_retrieve;

			retrieve_enabed = !o._deleted &&
				(o.obj_delivery_state == $p.enm.obj_delivery_states.Отправлен || o.obj_delivery_state == $p.enm.obj_delivery_states.Отклонен);

			wnd.elmnts.grids.goods.setEditable(!wnd.elmnts.ro);
			wnd.elmnts.pg_left.setEditable(!wnd.elmnts.ro);
			wnd.elmnts.pg_right.setEditable(!wnd.elmnts.ro);

			// гасим кнопки проведения, если недоступна роль
			if(!$p.current_acl.role_available("МенеджерПоПродажам")){
				wnd.elmnts.frm_toolbar.hideItem("btn_post");
				wnd.elmnts.frm_toolbar.hideItem("btn_unpost");
			}

			// кнопки записи и отправки гасим в зависимости от статуса
			if(wnd.elmnts.ro){
				wnd.elmnts.frm_toolbar.disableItem("btn_sent");
				wnd.elmnts.frm_toolbar.disableItem("btn_save");

				detales_toolbar = wnd.elmnts.tabs.tab_goods.getAttachedToolbar();
				detales_toolbar.forEachItem(function(itemId){
					detales_toolbar.disableItem(itemId);
				});

			}else{
				// шаблоны никогда не надо отправлять
				if(o.obj_delivery_state == $p.enm.obj_delivery_states.Шаблон)
					wnd.elmnts.frm_toolbar.disableItem("btn_sent");
				else
					wnd.elmnts.frm_toolbar.enableItem("btn_sent");

				wnd.elmnts.frm_toolbar.enableItem("btn_save");

				detales_toolbar = wnd.elmnts.tabs.tab_goods.getAttachedToolbar();
				detales_toolbar.forEachItem(function(itemId){
					detales_toolbar.enableItem(itemId);
				});
			}
			if(retrieve_enabed)
				wnd.elmnts.frm_toolbar.enableListOption("bs_more", "btn_retrieve");
			else
				wnd.elmnts.frm_toolbar.disableListOption("bs_more", "btn_retrieve");
		}


	}

})($p);

/**
 * ### Отчеты по документу _Заказ покупателя_
 * 
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * 
 * @module doc_buyers_order_reports
 * 
 */

(function($p){

	$p.doc.buyers_order.rep_invoice_execution = function (rep) {

		var query_options = {
				reduce: true,
				limit: 10000,
				group: true,
				group_level: 3
			},
			res = {
				data: [],
				readOnly: true,
				colWidths: [180, 180, 200, 100, 100, 100, 100, 100],
				colHeaders: ['Контрагент', 'Организация', 'Заказ', 'Сумма', 'Оплачено', 'Долг', 'Отгружено', 'Отгрузить'],
				columns: [
					{type: 'text'},
					{type: 'text'},
					{type: 'text'},
					{type: 'numeric', format: '0 0.00'},
					{type: 'numeric', format: '0 0.00'},
					{type: 'numeric', format: '0 0.00'},
					{type: 'numeric', format: '0 0.00'},
					{type: 'numeric', format: '0 0.00'}
				],
				wordWrap: false
				//minSpareRows: 1
			};

		if(!$p.current_acl.role_available("СогласованиеРасчетовЗаказов")){
			//query_options.group_level = 3;
			query_options.startkey = [$p.current_acl.partners_uids[0],""];
			query_options.endkey = [$p.current_acl.partners_uids[0],"\uffff"];
		}

		return $p.wsql.pouch.remote.doc.query("server/invoice_execution", query_options)

			.then(function (data) {

				var total = {
					invoice: 0,
					pay: 0,
					total_pay: 0,
					shipment:0,
					total_shipment:0
				};

				if(data.rows){

					data.rows.forEach(function (row) {

						if(!row.value.total_pay && !row.value.total_shipment)
							return;

						res.data.push([
							$p.cat.partners.get(row.key[0]).presentation,
							$p.cat.organizations.get(row.key[1]).presentation,
							row.key[2],
							row.value.invoice,
							row.value.pay,
							row.value.total_pay,
							row.value.shipment,
							row.value.total_shipment]);

						total.invoice+= row.value.invoice;
						total.pay+=row.value.pay;
						total.total_pay+=row.value.total_pay;
						total.shipment+=row.value.shipment;
						total.total_shipment+=row.value.total_shipment;
					});

					res.data.push([
						"Итого:",
						"",
						"",
						total.invoice,
						total.pay,
						total.total_pay,
						total.shipment,
						total.total_shipment]);

					res.mergeCells= [
						{row: res.data.length-1, col: 0, rowspan: 1, colspan: 3}
					]
				}

				rep.requery(res);

				return res;
			});
	};

})($p);

/**
 * Главное окно интерфейса
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

// Назначим обработчики событий
$p.on({

	/**
	 * ### При установке параметров сеанса
	 * Процедура устанавливает параметры работы программы, специфичные для текущей сборки
	 *
	 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
	 * @param modifiers {Array} - сюда можно добавить обработчики, переопределяющие функциональность объектов данных
	 */
	settings: function (prm, modifiers) {

		prm.__define({

			// разделитель для localStorage
			local_storage_prefix: {
				value: "oo_"
			},

			// скин по умолчанию
			skin: {
				value: "dhx_terrace"
			},

			// фильтр для репликации с CouchDB
			pouch_filter: {
				value: (function () {
					var filter = {};
					filter.__define({
						doc: {
							value: "auth/by_partner",
							writable: false
						}
					});
					return filter;
				})(),
				writable: false
			},

			// гостевые пользователи для демо-режима
			guests: {
				value: [{
					username: "Алгоритм",
					password: "hQI7OhIGlVeOWi8="
				}]
			},

			// если понадобится обратиться к 1С, будем использовать irest
			irest_enabled: {
				value: true
			},

			// расположение rest-сервиса 1c по умолчанию
			rest_path: {
				value: "/a/zd/%1/odata/standard.odata/"
			},

			// не шевелить hash url при открытии подчиненных форм
			keep_hash: {
				value: true
			},

			// логин гостевого пользователя couchdb
			guest_name: {
				value: "guest"
			},

			// пароль гостевого пользователя couchdb
			guest_pwd: {
				value: "meta"
			}

		});

		// по умолчанию, обращаемся к зоне 1
		prm.zone = 0;

		// объявляем номер демо-зоны
		prm.zone_demo = 0;

		// расположение couchdb
		prm.couch_path = "/couchdb/oo_";
		//prm.couchdb = "http://i980:5984/oo_";

		// разрешаем сохранение пароля
		prm.enable_save_pwd = true;

	},

	/**
	 * ### При инициализации интерфейса
	 * Вызывается после готовности DOM и установки параметров сеанса
	 *
	 */
	iface_init: function() {

		// разделы интерфейса
		$p.iface.sidebar_items = [
			{id: "orders", text: "Заказы", icon: "projects_48.png"},
			{id: "settings", text: "Настройки", icon: "settings_48.png"},
			{id: "about", text: "О программе", icon: "about_48.png"}
		];

		// наблюдатель за событиями авторизации и синхронизации
		$p.iface.btn_auth_sync = new $p.iface.OBtnAuthSync();

		// кнопки навигации справа сверху
		$p.iface.btns_nav = function (wrapper) {
			return $p.iface.btn_auth_sync.bind(new $p.iface.OTooolBar({
				wrapper: wrapper,
				class_name: 'md_otbnav',
				width: '260px', height: '28px', top: '3px', right: '3px', name: 'right',
				buttons: [
					{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', tooltip: 'О программе', float: 'right'},
					{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', tooltip: 'Настройки', float: 'right'},
					{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', tooltip: 'Заказы', float: 'right'},
					{name: 'sep_0', text: '', float: 'right'},
					{name: 'sync', text: '', float: 'right'},
					{name: 'auth', text: '', width: '80px', float: 'right'}

				], onclick: function (name) {
					$p.iface.main.cells(name).setActive(true);
					return false;
				}
			}))
		};

		// основной сайдбар
		$p.iface.main = new dhtmlXSideBar({
			parent: document.body,
			icons_path: "dist/imgs/",
			width: 180,
			header: true,
			template: "tiles",
			autohide: true,
			items: $p.iface.sidebar_items,
			offsets: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		});

		// подписываемся на событие навигации по сайдбару
		$p.iface.main.attachEvent("onSelect", function(id){

			var hprm = $p.job_prm.parse_url();
			if(hprm.view != id)
				$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, id);

			$p.iface["view_" + id]($p.iface.main.cells(id));

		});

		// включаем индикатор загрузки
		$p.iface.main.progressOn();

		// активируем страницу
		hprm = $p.job_prm.parse_url();
		if(!hprm.view || $p.iface.main.getAllItems().indexOf(hprm.view) == -1){
			$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, "orders");
		} else
			setTimeout($p.iface.hash_route);

	},

	/**
	 * ### Обработчик маршрутизации
	 */
	hash_route: function (hprm) {

		// view отвечает за переключение закладки в SideBar
		if(hprm.view && $p.iface.main.getActiveItem() != hprm.view){
			$p.iface.main.getAllItems().forEach(function(item){
				if(item == hprm.view)
					$p.iface.main.cells(item).setActive(true);
			});
		}

		return false;
	},

	/**
	 * ### При окончании загрузки локальных данных
	 */
	predefined_elmnts_inited: function predefined_elmnts_inited() {

		$p.iface.main.progressOff();
		$p.off(predefined_elmnts_inited);

		// если разрешено сохранение пароля - сразу пытаемся залогиниться
		if(!$p.wsql.pouch.authorized && navigator.onLine &&
			$p.wsql.get_user_param("enable_save_pwd") &&
			$p.wsql.get_user_param("user_name") &&
			$p.wsql.get_user_param("user_pwd")){

			setTimeout(function () {
				$p.iface.frm_auth({
					modal_dialog: true,
					try_auto: true
				});
			}, 100);
		}

	},

	/**
	 * ### Обработчик ошибки загрузки локальных данных
	 * @param err
	 */
	pouch_load_data_error: function pouch_load_data_error(err) {

		// если это первый запуск, показываем диалог авторизации
		if(err.db_name && err.hasOwnProperty("doc_count") && err.doc_count < 10 && navigator.onLine){

			$p.wsql.set_user_param("enable_save_pwd", true);

			// если это демо (zone === zone_demo), устанавливаем логин и пароль
			if($p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && !$p.wsql.get_user_param("user_name")){
				$p.wsql.set_user_param("user_name", $p.job_prm.guests[0].username);
			}

			$p.iface.frm_auth({
				modal_dialog: true,
				try_auto: $p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && $p.wsql.get_user_param("enable_save_pwd")
			});

		}

		$p.iface.main.progressOff();
		$p.off(pouch_load_data_error);

	}
});

/**
 * ### Раздел интерфейса _О программе_
 * Информация о приложении и используемых библиотеках
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_about = function (cell) {

	function OViewAbout(){

		cell.attachHTMLString($p.injected_data['view_about.html']);
		cell.cell.querySelector(".dhx_cell_cont_sidebar").style.overflow = "auto";

		this.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));
	}

	return $p.iface._about || ($p.iface._about = new OViewAbout());

};

/**
 * ### Раздел интерфейса _Заказы_
 * Содержит карусель с двумя страницами: list и doc
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_orders = function (cell) {

	function OViewOrders(){

		var t = this;

		// показывает форму списка
		function show_list(){
			
			t.carousel.cells("list").setActive();
			cell.setText({text: "Заказы"});

			if(!t.list){
				t.carousel.cells("list").detachObject(true);
				t.list = $p.doc.buyers_order.form_list(t.carousel.cells("list"));
			}

		}

		// показывает форму заказа
		function show_doc(ref){

			var _cell = t.carousel.cells("doc");

			_cell.setActive();

			if(!_cell.ref || _cell.ref != ref)

				$p.doc.buyers_order.form_obj(_cell, {
						ref: ref,
						bind_pwnd: true,
						on_close: function () {
							setTimeout(function () {
								$p.iface.set_hash(undefined, "", "list");
							});
						},
						set_text: function (text) {
							if(t.carousel.getActiveCell() == _cell)
								cell.setText({text: "<b>" + text + "</b>"});
						}
					})
					.then(function (wnd) {
						t.doc = wnd;
						setTimeout(t.doc.wnd.set_text.bind(t.doc.wnd, true), 200);
					});

			else if(t.doc && t.doc.wnd){
				setTimeout(t.doc.wnd.set_text.bind(t.doc.wnd, true), 200);
			}

		}

		// обработчик маршрутизации url
		function hash_route(hprm) {

			if(hprm.view == "orders"){

				if(hprm.obj == "doc.buyers_order" && !$p.utils.is_empty_guid(hprm.ref)){

					if(hprm.frm != "doc")
						setTimeout(function () {
							$p.iface.set_hash(undefined, undefined, "doc");
						});
					else
						show_doc(hprm.ref);


				} else{

					if(hprm.obj != "doc.buyers_order")
						setTimeout(function () {
							$p.iface.set_hash("doc.buyers_order", "", "list");
						});
					else
						show_list();
				}

				return false;
			}

			return true;

		}

		// cюда попадаем после всех приготовлений - можно рисовать форму заказов
		function go_go(){

			$p.off(go_go);

			setTimeout(function () {
				$p.iface.set_hash($p.job_prm.parse_url().obj || "doc.buyers_order");
			});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));

		// Создаём страницы карусели
		t.carousel = cell.attachCarousel({
			keys:           false,
			touch_scroll:   false,
			offset_left:    0,
			offset_top:     0,
			offset_item:    0
		});
		t.carousel.hideControls();
		t.carousel.addCell("list");
		t.carousel.addCell("doc");


		// Дожидаемся инициализации констант
		if($p.job_prm.properties)
			setTimeout(go_go);
		else
			$p.on({ predefined_elmnts_inited: go_go });


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.on("hash_route", hash_route);

	}

	return $p.iface._orders || ($p.iface._orders = new OViewOrders());

};

/**
 * ### Раздел интерфейса _Настройки_
 * Закладки основных и дополнительных настроек
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_settings = function (cell) {

	function OViewSettings(){

		var t = this;
		
		t.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));

		// разделы настроек
		t.tabs = cell.attachTabbar({
			arrows_mode:    "auto",
			tabs: [
				{id: "const", text: '<i class="fa fa-key"></i> Общее', active: true}
			]
		});

		// обработчик при смене закладки
		t.tabs.attachEvent("onSelect", function(id){
			if(t[id] && t[id].tree && t[id].tree.getSelectedItemId()){
				t[id].tree.callEvent("onSelect", [t[id].tree.getSelectedItemId()]);
			}
			return true;
		});

		// закладка основных настроек
		t.tabs.cells("const").attachHTMLString($p.injected_data['view_settings.html']);
		t.const = t.tabs.cells("const").cell.querySelector(".dhx_cell_cont_tabbar");
		t.const.style.overflow = "auto";

		// первая колонка настроек
		(function (cont) {


			t.form1 = new dhtmlXForm(cont, [

					{ type:"settings", labelWidth:80, position:"label-left"  },

					{type: "label", labelWidth:320, label: "Адрес CouchDB", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"couch_path", label:"Путь:", validate:"NotEmpty"},
					{type:"template", label:"",value:"",
						note: {text: "Можно указать как относительный, так и абсолютный URL публикации CouchDB", width: 320}},

					{type: "label", labelWidth:320, label: "Значение разделителя данных", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"zone", label:"Зона:", numberFormat: ["0", "", ""], validate:"NotEmpty,ValidInteger"},
					{type:"template", label:"",value:"", note: {text: "Для неразделенной публикации, зона = 0", width: 320}},

					{type: "label", labelWidth:320, label: "Суффикс базы пользователя", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"couch_suffix", label:"Суффикс:"},
					{type:"template", label:"",value:"",
						note: {text: "Назначается дилеру при регистрации", width: 320}},

					{type: "label", labelWidth:320, label: "Сохранять пароль пользователя", className: "label_options"},
					{type:"checkbox", name:"enable_save_pwd", label:"Разрешить:", checked: $p.wsql.get_user_param("enable_save_pwd", "boolean")},
					{type:"template", label:"",value:"", note: {text: "Не рекомендуется, если к компьютеру имеют доступ посторонние лица", width: 320}},
					{type:"template", label:"",value:"", note: {text: "", width: 320}},

					{ type:"block", blockOffset: 0, name:"block_buttons", list:[
						{type: "button", name: "save", value: "<i class='fa fa-floppy-o fa-lg'></i>", tooltip: "Применить настройки и перезагрузить программу"},
						{type:"newcolumn"},
						{type: "button", offsetLeft: 20, name: "reset", value: "<i class='fa fa-refresh fa-lg'></i>", tooltip: "Стереть справочники и перезаполнить данными сервера"}
					]  }

				]
			);
			t.form1.cont.style.fontSize = "100%";

			// инициализация свойств
			["zone", "couch_path", "couch_suffix"].forEach(function (prm) {
				if(prm == "zone")
					t.form1.setItemValue(prm, $p.wsql.get_user_param(prm));
				else
					t.form1.setItemValue(prm, $p.wsql.get_user_param(prm) || $p.job_prm[prm]);
			});

			t.form1.attachEvent("onChange", function (name, value, state){
				$p.wsql.set_user_param(name, name == "enable_save_pwd" ? state || "" : value);
			});

			t.form1.attachEvent("onButtonClick", function(name){

				if(name == "save"){

					// завершаем синхронизацию
					$p.wsql.pouch.log_out();

					// перезагружаем страницу
					setTimeout(function () {
						$p.eve.redirect = true;
						location.reload(true);
					}, 1000);

				} else if(name == "reset"){

					dhtmlx.confirm({
						title: "Сброс данных",
						text: "Стереть справочники и перезаполнить данными сервера?",
						cancel: $p.msg.cancel,
						callback: function(btn) {
							if(btn)
								$p.wsql.pouch.reset_local_data();
						}
					});
				}
			});

		})(t.const.querySelector("[name=form1]").firstChild);

		// вторая колонка настроек
		(function (cont) {
			t.form2 = new dhtmlXForm(cont, [
				{ type:"settings", labelWidth:320, position:"label-left"  },

				{type: "label", label: "Тип устройства", className: "label_options"},
				{ type:"block", blockOffset: 0, name:"block_device_type", list:[
					{ type:"settings", labelAlign:"left", position:"label-right"  },
					{ type:"radio" , name:"device_type", labelWidth:120, label:'<i class="fa fa-desktop"></i> Компьютер', value:"desktop"},
					{ type:"newcolumn"   },
					{ type:"radio" , name:"device_type", labelWidth:150, label:'<i class="fa fa-mobile fa-lg"></i> Телефон, планшет', value:"phone"}
				]  },
				{type:"template", label:"",value:"", note: {text: "Класс устройства определяется автоматически, но пользователь может задать его явно", width: 320}},

				//{type: "label", labelWidth:320, label: "Адрес http сервиса 1С", className: "label_options"},
				//{type:"input" , inputWidth: 220, name:"rest_path", label:"Путь", validate:"NotEmpty"},
				//{type:"template", label:"",value:"",
				//	note: {text: "Можно указать как относительный, так и абсолютный URL публикации 1С OData. " +
				//	"О настройке кроссдоменных запросов к 1С <a href='#'>см. здесь</a>", width: 320}},

				{type: "label", label: "Подключаемые модули", className: "label_options"},
				{type:"input" , position:"label-top", inputWidth: 320, name:"modifiers", label:"Модификаторы:", value: $p.wsql.get_user_param("modifiers"), rows: 3, style:"height:80px;"},
				{type:"template", label:"",value:"", note: {text: "Список дополнительных модулей", width: 320}}

			]);

			t.form2.cont.style.fontSize = "100%";

			// инициализация свойств
			t.form2.checkItem("device_type", $p.job_prm.device_type);

			t.form2.disableItem("modifiers");

			// подключаем обработчик изменения значений в форме
			t.form2.attachEvent("onChange", function (name, value, state){
				$p.wsql.set_user_param(name, value);

			});

			t.form2.getInput("modifiers").onchange = function () {
				$p.wsql.set_user_param("modifiers", this.value);
			};

		})(t.const.querySelector("[name=form2]").firstChild);

	}

	return $p.iface._settings || ($p.iface._settings = new OViewSettings());

};

return undefined;
}));
