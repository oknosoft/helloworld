/**
 * ### Отчет _Движение денег_
 *
 * @module rep_cash_moving
 *
 * Created 07.11.2016
 */

import React from 'react';

export default function ($p) {

	const {characteristics, nom, nom_kinds, clrs} = $p.cat

	// свойства объекта отчета _Потребность по материалам_
	Object.defineProperties($p.RepCash_moving.prototype, {

		resources: {
			value: ['debit','credit','initial_balance','final_balance']
		},

		calculate: {
			value: function (_columns) {

				const {data, resources} = this;

				// чистим таблицу результата
				data.clear();
				if(!data._rows){
					data._rows = []
				}else{
					data._rows.length = 0;
				}

				return Promise.all([])

				// получаем массив объектов заказов и вложенных характеристик
					.then(function (ares) {

						let resrow = data.add()

						return Promise.all([])

					})

					.then(function () {

						// сворачиваем результат и сохраняем его в data._rows

						const dims = [], ress = [];
						_columns.forEach(fld => {
							const {key} = fld
							if(resources.indexOf(key) != -1){
								ress.push(key)
							}else{
								dims.push(key)
							}
						})
						data.group_by(dims, ress);
						data.forEach(function (row) {

							// округление
							row.initial_balance = 1;
							row.debit = 2;
							row.credit = 3;
							row.final_balance = 4;

							data._rows.push(row);
						})

					})
			}
		},

	})

}


