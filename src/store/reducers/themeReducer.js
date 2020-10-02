let initState = {
    color: "#ffffff"
};

export default function themeReducer(state = initState, action){
    switch(action.type){
        case 'CHANGE_THEME':
            return Object.assign({}, state, {
                color: action.payload.color
            });
        default:
            return initState;
    }
}