
export const meta = {
  cashboxes: {
    name: "Кассы",
    splitted: false,
    synonym: "Кассы, подотчетники, контрагенты",
    illustration: "Список мест фактического хранения и движения наличных денежных средств.",
    objPresentation: "Касса",
    listPresentation: "Кассы, подотчетники, контрагенты",
    inputBy: [
      "name",
      "id"
    ],
    hierarchical: false,
    hasOwners: false,
    groupHierarchy: true,
    mainPresentation: "name",
    codeLength: 9,
    id: "cb",
    fields: {
      funds_currency: {
        synonym: "Валюта",
        multiline: false,
        tooltip: "Валюта учета денежных средств",
        choiceGrp: "elm",
        mandatory: true,
        type: {
          types: [
            "cat.currencies"
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
          "strLen": 256
        }
      }
    },
    tabulars: {
      extra_fields: {
        name: "ДополнительныеРеквизиты",
        synonym: "Дополнительные реквизиты",
        tooltip: "Набор реквизитов, состав которого определяется компанией.",
        fields: {
          property: {
            synonym: "Свойство",
            multiline: false,
            tooltip: "Дополнительный реквизит",
            choiceGrp: "elm",
            type: {
              types: [
                "cch.properties"
              ]
            }
          },
          value: {
            synonym: "Значение",
            multiline: false,
            tooltip: "Значение дополнительного реквизита",
            choiceLinks: [
              {
                name: [
                  "selection",
                  "owner"
                ],
                path: [
                  "extra_fields",
                  "property"
                ]
              }
            ],
            choiceGrp: "elm",
            choiceType: {
              path: [
                "extra_fields",
                "property"
              ],
              "elm": 0
            },
            type: {
              types: [
                "boolean",
                "string",
                "date",
                "number",
                "cat.users"
              ],
              "strLen": 1024,
              "datePart": "date_time",
              "digits": 15,
              "fraction": 3
            }
          },
          txt_row: {
            synonym: "Текстовая строка",
            multiline: false,
            tooltip: "Полный текст строкового дополнительного реквизита",
            type: {
              types: [
                "string"
              ],
              "strLen": 0
            },
            "hide": true
          }
        }
      }
    },
    cachable: "ram"
  },
  cashFlowArticles: {
    name: "СтатьиДвиженияДенежныхСредств",
    splitted: false,
    synonym: "Статьи движения денежных средств",
    illustration: "Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. ",
    objPresentation: "Статья движения денежных средств",
    listPresentation: "Статьи движения денежных средств",
    inputBy: [
      "name",
      "id"
    ],
    hierarchical: true,
    hasOwners: false,
    groupHierarchy: true,
    mainPresentation: "name",
    codeLength: 9,
    aliases: ['cash_flow_articles'],
    fields: {
      definition: {
        synonym: "Описание",
        multiline: true,
        tooltip: "Рекомендации по выбору статьи движения денежных средств в документах",
        type: {
          types: [
            "string"
          ],
          "strLen": 1024
        }
      },
      sorting_field: {
        synonym: "Порядок",
        multiline: false,
        tooltip: "Определяет порядок вывода вариантов анализа в мониторе целевых показателей при группировке по категориям целей.",
        type: {
          types: [
            "number"
          ],
          "digits": 5,
          "fraction": 0
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
          "strLen": 256
        }
      },
      parent: {
        synonym: "В группе статей",
        multiline: false,
        tooltip: "Группа статей движения денежных средств",
        type: {
          types: [
            "cat.cash_flow_articles"
          ]
        }
      }
    },
    tabulars: {},
    id: "mpt",
    cachable: "ram"
  },
};
