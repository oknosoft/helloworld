
import {meta as enm} from './enums/meta';
import {meta as cat, classes as catClasses, exclude as catExclude} from './catalogs/meta';
import {meta as doc, classes as docClasses, exclude as docExclude} from './documents/meta';
import {utils} from './aggregate/utils';

export const meta = {enm, cat, doc};

export const classes = [utils, ...catClasses, ...docClasses];

export const exclude = [...catExclude, ...docExclude];
