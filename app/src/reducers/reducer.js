export const MARK = "MARK";
export const SUBMIT = "SUBMIT";
export const CHANGE_INPUT = "CHANGE_INPUT"; 
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export default function reducer(state, action) {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: state.addItem, completed: false, id: Date.now() }
        ],
        addItem: ""
      };
    case MARK:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (action.payload.id === item.id) {
            return {
              id:item.id,
              item:item.item,
              completed: action.payload.isComplete
            }

          }
          return item;
        })
      };
    case CHANGE_INPUT:
      return {
        ...state,
        addItem: action.payload,
      }
      case CLEAR_COMPLETED:
        return {
          ...state,
          todos: state.todos.filter(item => {
          // return !item.completed
          // if(!item.completed){
          //   return true
          // }
          // return false
         return item.completed ? false : true
          })

        }
    default:
      return state;
  }
}

export const initialState = {
  todos: [{ item: "Learn about reducers", completed: false, id: 3892987589 }],
  addItem: ""
};
