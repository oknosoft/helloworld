
export const meta = {
  name: "ДвижениеДенег",
  splitted: false,
  synonym: "Перемещение денег",
  illustration: "",
  objPresentation: "",
  listPresentation: "",
  inputBy: ["number_doc"],
  mainPresentation: "name",
  codeLength: 11,
  fields: {
    sender: {
      synonym: "Отправитель",
      multiline: false,
      tooltip: "",
      choiceGrp: "elm",
      type: {
        types: ["cat.cashboxes"]
      }
    },
    recipient: {
      synonym: "Получатель",
      multiline: false,
      tooltip: "",
      choiceGrp: "elm",
      type: {
        types: ["cat.cashboxes"]
      }
    },
    doc_amount: {
      synonym: "Сумма документа",
      multiline: false,
      tooltip: "",
      "mandatory": true,
      type: {
        types: ["number"],
        digits: 15,
        fraction: 2
      }
    },
    cash_flow_article: {
      synonym: "Статья ДДС",
      multiline: false,
      tooltip: "",
      choiceGrp: "elm",
      type: {
        types: ["cat.cash_flow_articles"]
      }
    },
    responsible: {
      synonym: "Ответственный",
      multiline: false,
      tooltip: "Пользователь, ответственный за  документ.",
      choiceGrp: "elm",
      type: {
        types: ["cat.users"]
      }
    },
    note: {
      synonym: "Комментарий",
      multiline: false,
      tooltip: "",
      type: {
        types: ["string"],
        "strLen": 0
      }
    }
  },
  tabulars: {},
  id: "mm",
  cachable: "doc",
  aliases: ['cash_moving'],
};

