import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const initialState = Map({
    header: Map({
        visible: true,
    })
});

// Action type
const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY';

// Action creator
export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);

// Reducer
export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload),
}, initialState);



