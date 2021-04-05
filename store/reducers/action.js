import * as actionTypes from './constants';
export function ChangeCount(val) {
  return { type: actionTypes.CHANGECOUNT, total_count1: val };
}
