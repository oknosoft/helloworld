
import {meta as cat, classes as catClasses} from './cat/meta';

export const meta = {
  enm: {
    plan_detailing: [
      {
        "order": 0,
        "name": "order",
        "synonym": "Заказ"
      },
      {
        "order": 1,
        "name": "product",
        "synonym": "Изделие"
      },
      {
        "order": 2,
        "name": "layer",
        "synonym": "Контур"
      },
      {
        "order": 3,
        "name": "elm",
        "synonym": "Элемент"
      },
      {
        "order": 4,
        "name": "region",
        "synonym": "Ряд элемента"
      },
      {
        "order": 5,
        "name": "nearest",
        "synonym": "Соседний элем или слой"
      },
      {
        "order": 6,
        "name": "parent",
        "synonym": "Родительский элемент или слой"
      },
      {
        "order": 7,
        "name": "sub_elm",
        "synonym": "Вложенный элемент"
      },
      {
        "order": 8,
        "name": "algorithm",
        "synonym": "Алгоритм"
      },
      {
        "order": 9,
        "name": "layer_active",
        "synonym": "Активн. створка"
      },
      {
        "order": 10,
        "name": "layer_passive",
        "synonym": "Пассивн. створка"
      },
      {
        "tag": "Детализация планирования"
      }
    ],
  },
  cat: {
    ...cat,
    work_center_kinds: {
      "name": "ВидыРабочихЦентров",
      "splitted": false,
      "synonym": "Этапы производства (Виды РЦ)",
      "illustration": "",
      "obj_presentation": "Вид рабочего центра",
      "list_presentation": "",
      "input_by_string": [
        "name"
      ],
      "hierarchical": false,
      "has_owners": false,
      "group_hierarchy": true,
      "main_presentation_name": true,
      "code_length": 0,
      "id": "sg",
      "fields": {
        "applying": {
          "synonym": "Детализация",
          "multiline_mode": false,
          "tooltip": "Детализация планирования (до элемента, продукции, заказа...)",
          "choice_params": [
            {
              "name": "ref",
              "path": [
                "product",
                "layer",
                "parent",
                "elm",
                "order",
                "region"
              ]
            }
          ],
          "choice_groups_elm": "elm",
          "type": {
            "types": [
              "enm.plan_detailing"
            ],
            "is_ref": true
          }
        },
        "available": {
          "synonym": "Всегда доступен",
          "multiline_mode": false,
          "tooltip": "Не учитывать остатки мощностей",
          "type": {
            "types": [
              "boolean"
            ]
          }
        },
        "predefined_name": {
          "synonym": "",
          "multiline_mode": false,
          "tooltip": "",
          "type": {
            "types": [
              "string"
            ],
            "str_len": 256
          }
        }
      },
      "tabular_sections": {},
      "cachable": "ram"
    },
    work_centers: {
      "name": "РабочиеЦентры",
      "splitted": false,
      "synonym": "Рабочие центры",
      "illustration": "",
      "obj_presentation": "",
      "list_presentation": "",
      "input_by_string": [
        "name",
        "id"
      ],
      "hierarchical": true,
      "has_owners": false,
      "group_hierarchy": true,
      "main_presentation_name": true,
      "code_length": 9,
      "id": "",
      "fields": {
        "department": {
          "synonym": "Подразделение",
          "multiline_mode": false,
          "tooltip": "",
          "choice_groups_elm": "elm",
          "mandatory": true,
          "type": {
            "types": [
              "cat.divisions"
            ],
            "is_ref": true
          }
        },
        "parent": {
          "synonym": "",
          "multiline_mode": false,
          "tooltip": "",
          "type": {
            "types": [
              "cat.work_centers"
            ],
            "is_ref": true
          }
        }
      },
      "tabular_sections": {
        "work_center_kinds": {
          "name": "ВидыРабочихЦентров",
          "synonym": "Виды рабочих центров",
          "tooltip": "",
          "fields": {
            "kind": {
              "synonym": "Вид РЦ",
              "multiline_mode": false,
              "tooltip": "",
              "choice_groups_elm": "elm",
              "mandatory": true,
              "type": {
                "types": [
                  "cat.work_center_kinds"
                ],
                "is_ref": true
              }
            }
          }
        }
      },
      "cachable": "ram",
      "common": true
    },
  }
}

export const classes = [...catClasses];
