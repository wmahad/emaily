import { FETCH_USER } from '../shared/constants';

export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        // case FETCH_USER:
        //     return { ...state };
        default:
            return state;
    }
}
