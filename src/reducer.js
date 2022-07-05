// add code snippets from README
let state;

const reducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'counter/increment' :
            return {count: state.count + 1};
        default:
            return state;
    }
}
const render =()=>{
    const container = document.getElementById('container');
    container.textContent = state.count;
}

const dispatch = (action) => {
    state = reducer(state, action);
    render();
}

const button = document.getElementById('button');
button.addEventListener('click', () => {
    dispatch({type: 'counter/increment'});
} );

dispatch({ type: "@@INIT" });