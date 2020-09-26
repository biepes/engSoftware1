import { TYPE } from '../actions';

export default () => {
    const initialState = {
        isAuthenticated: false,
    };

    return (state = initialState, action) => {
        switch (action.type) {
            case TYPE.SET_IS_AUTHENTICATED:
                return { ...state, isAuthenticated: action.text };
            default:
                return state;
        }
    };
};
