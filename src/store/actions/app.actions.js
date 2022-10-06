import { 
    UPDATE_CURRENT_LENGTH_OF_WL 
} from "./action.types";

export const updteCurrentLenOfWL  = (_len) => dispatch =>
{
    dispatch({
        type: UPDATE_CURRENT_LENGTH_OF_WL,
        payload: _len
    })
}

