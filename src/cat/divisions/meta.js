
export const meta= {
  name: "Подразделения",
  splitted: false,
  synonym: "Подразделения",
  illustration: "Перечень подразделений предприятия",
  objPresentation: "Подразделение",
  listPresentation: "Подразделения",
  inputBy: ["name", "id"],
  hierarchical: true,
  hasOwners: false,
  groupHierarchy: false,
  mainPresentation: "name",
  codeLength: 9,
  id: "",
  fields: {
    parent: {
      synonym: "Входит в подразделение",
      multiline: false,
      tooltip: "",
      type: {
        "types": [
          "cat.divisions"
        ],
      }
    }
  },
  cachable: "ram"
};

export function classes({cat, classes, symbols}, exclude)  {
  const {CatObj} = classes;
  const {get, set} = symbols;

  class CatDivisions extends CatObj{
    get parent(){return this[get]('parent')}
    set parent(v){this[set]('parent',v)}
  }
  classes.CatDivisions = CatDivisions;

  // оставляем возможность дополнить-переопределить
  // если пользователь попросил не спешить с созданием менеджера - не спешим
  if(!exclude.includes('cat.divisions')) {
    cat.create('divisions');
  }
}

