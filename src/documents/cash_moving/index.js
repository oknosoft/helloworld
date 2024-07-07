
export {meta} from './meta';

export const exclude = ['doc.cashMoving'];

export function classes({doc, classes, symbols}, exclude)  {
  const {DocObj} = classes;
  const {get, set} = symbols;

  class DocCashMoving extends DocObj{
    /**
     * @summary Курс валюты на дату
     * @desc пример расширения свойств документа
     * @param date
     * @return {number}
     */
    course(date) {
      return 1;
    }
  }
  classes.DocCashMoving = DocCashMoving;

  doc.create('cashMoving');
}
