
import {meta as enm} from './enums/meta';
import {meta as cat, classes as catClasses, exclude as catExclude} from './catalogs/meta';
import {meta as doc, classes as docClasses, exclude as docExclude} from './documents/meta';

export const meta = {enm, cat, doc};

export const classes = [...catClasses, ...docClasses];

export const exclude = [...catExclude, ...docExclude];
