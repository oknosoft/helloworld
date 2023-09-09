
import {meta as cat, classes as catClasses, exclude as catExclude} from './cat/meta';

export const meta = {
  enm: {
    plan_detailing: [
      {
        "order": 0,
        name: "order",
        synonym: "Заказ"
      },
      {
        "order": 1,
        name: "product",
        synonym: "Изделие"
      },
      {
        "order": 2,
        name: "layer",
        synonym: "Контур"
      },
      {
        "order": 3,
        name: "elm",
        synonym: "Элемент"
      },
      {
        "order": 4,
        name: "region",
        synonym: "Ряд элемента"
      },
      {
        "order": 5,
        name: "nearest",
        synonym: "Соседний элем или слой"
      },
      {
        "order": 6,
        name: "parent",
        synonym: "Родительский элемент или слой"
      },
      {
        "order": 7,
        name: "sub_elm",
        synonym: "Вложенный элемент"
      },
      {
        "order": 8,
        name: "algorithm",
        synonym: "Алгоритм"
      },
      {
        "order": 9,
        name: "layer_active",
        synonym: "Активн. створка"
      },
      {
        "order": 10,
        name: "layer_passive",
        synonym: "Пассивн. створка"
      },
      {
        "tag": "Детализация планирования"
      }
    ],
  },
  cat: {
    ...cat,
    workCenterKinds: {
      name: "ВидыРабочихЦентров",
      synonym: "Этапы производства (Виды РЦ)",
      illustration: "",
      objPresentation: "Вид рабочего центра",
      listPresentation: "",
      inputBy: ["name"],
      hierarchical: false,
      groupHierarchy: true,
      mainPresentation: "name",
      codeLength: 0,
      fields: {
        applying: {
          synonym: "Детализация",
          multiline: false,
          tooltip: "Детализация планирования (до элемента, продукции, заказа...)",
          choiceParams: [
            {
              name: "ref",
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
          choiceGrp: "elm",
          type: {
            types: [
              "enm.plan_detailing"
            ],
            "is_ref": true
          }
        },
        available: {
          synonym: "Всегда доступен",
          multiline: false,
          tooltip: "Не учитывать остатки мощностей",
          type: {
            types: [
              "boolean"
            ]
          }
        },
        predefined_name: {
          synonym: "",
          multiline: false,
          tooltip: "",
          type: {
            types: [
              "string"
            ],
            "str_len": 256
          }
        }
      },
      tabulars: {},
      cachable: "ram",
      id: "sg",
      common: true,
      aliases: ['work_center_kinds'],
    },
    workCenters: {
      name: "РабочиеЦентры",
      synonym: "Рабочие центры",
      illustration: "",
      objPresentation: "",
      listPresentation: "",
      inputBy: ["name", "id"],
      hierarchical: true,
      groupHierarchy: true,
      mainPresentation: "name",
      codeLength: 9,
      fields: {
        department: {
          synonym: "Подразделение",
          multiline: false,
          tooltip: "",
          choiceGrp: "elm",
          mandatory: true,
          type: {
            types: [
              "cat.divisions"
            ]
          }
        },
        "parent": {
          synonym: "",
          multiline: false,
          tooltip: "",
          type: {
            types: [
              "cat.work_centers"
            ]
          }
        }
      },
      tabulars: {
        work_center_kinds: {
          name: "ВидыРабочихЦентров",
          synonym: "Виды рабочих центров",
          tooltip: "",
          fields: {
            kind: {
              synonym: "Вид РЦ",
              multiline: false,
              tooltip: "",
              choiceGrp: "elm",
              mandatory: true,
              type: {
                types: [
                  "cat.work_center_kinds"
                ]
              }
            }
          }
        }
      },
      cachable: "ram",
      id: "",
      common: true,
      aliases: ['work_centers'],
    },
  }
}

export const classes = [...catClasses];

export const exclude = [...catExclude];
