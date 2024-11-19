import ACTION from "./ReducerAction.mjs";

export default function reducer(state, action) {
    switch (action.type) {
        case ACTION.ADD:
          return {
            ...state,
            todo: [...state.todo, action.payload],
            // form: { id: state.todo.length + 1, desc: "", complete: false },
          }
        case ACTION.COMPLETE:
          return {
            ...state,
            todo: state.todo.map((todo) =>
              todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo
            ),
          }
        case ACTION.EDIT:
          return {
            ...state,
            todo: state.todo.map((todo) => todo.id !== action.payload.id ? { ...todo, desc: action.payload.desc } : todo),
          }
        case ACTION.DELETE:
          return {
            ...state,
            todo: state.todo.filter((todo) => todo.id !== action.payload.id),
          };
        default:
          return state;
    }
  }
  
