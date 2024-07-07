
export const meta= {
  name: "Валюты",
  splitted: false,
  synonym: "Валюты",
  illustration: "Валюты, используемые при расчетах",
  objPresentation: "Валюта",
  listPresentation: "",
  inputBy: ["name", "id"],
  hierarchical: false,
  hasOwners: false,
  groupHierarchy: true,
  mainPresentation: "name",
  codeLength: 3,
  id: "cr",
  fields: {
    name_full: {
      synonym: "Наименование валюты",
      multiline: false,
      tooltip: "Полное наименование валюты",
      mandatory: true,
      type: {
        types: [
          "string"
        ],
        strLen: 50
      }
    },
    extra_charge: {
      synonym: "Наценка",
      multiline: false,
      tooltip: "Коэффициент, который применяется к курсу основной валюты для вычисления курса текущей валюты.",
      type: {
        types: [
          "number"
        ],
        digits: 10,
        fraction: 2
      }
    },
    main_currency: {
      synonym: "Основная валюта",
      multiline: false,
      tooltip: "Валюта, на основании курса которой рассчитывается курс текущей валюты",
      choiceGrp: "elm",
      mandatory: true,
      type: {
        types: [
          "cat.currencies"
        ]
      }
    },
    parameters_russian_recipe: {
      synonym: "Параметры прописи на русском",
      multiline: false,
      tooltip: "Параметры прописи валюты на русском языке",
      type: {
        types: [
          "string"
        ],
        strLen: 200
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
        strLen: 256
      }
    }
  },
  tabulars: {},
  cachable: "ram"
};



