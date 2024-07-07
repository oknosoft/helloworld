
import {classes as cashMovingClasses, meta as cashMoving, exclude as cashMovingExclude} from './cash_moving';

export const meta = {
  cashMoving,
};

export const exclude = [...cashMovingExclude];

export const classes = [
  cashMovingClasses,
];
