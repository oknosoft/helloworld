
export {meta} from './meta';

export const exclude = ['cat.currencies'];

export function classes({cat, classes, symbols}, exclude)  {
  const {CatObj} = classes;
  const {get, set} = symbols;

  class CatCurrencies extends CatObj{
    /**
     * @summary Курс валюты на дату
     * @desc пример расширения свойств элемента справочника
     * @param date
     * @return {number}
     */
    course(date) {
      return 1;
    }
  }
  classes.CatCurrencies = CatCurrencies;

  cat.create('currencies');
}
