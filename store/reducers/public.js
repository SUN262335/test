
import * as actionTypes from './constants';
export const initialState = {
    total_count: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGECOUNT:
            return {
                ...state,
                total_count: action.total_count1,
            }
            break;
        default:
            return state
    }
}