import * as React from 'react';

const {cat, jobPrm} = $p;
export const key = 'cat.currencies.form.obj';
export const mgr = cat.currencies;
export const setting = jobPrm.get(key, 'object') || {};
if(!Object.keys(setting).length) {
  setting.tabs = [
  ];
  setting.tab = 0;
}
setting.iconMap = {
};

