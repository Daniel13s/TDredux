import TaskActionTypes from "./action-types";

const initialState = {
  tasks: localStorage.getItem("tasks")  || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActionTypes.CREATE:
      const listafull = localStorage.getItem('tasks') || []
      const newTask = action.payload;
      const lista = [...listafull, newTask];
      localStorage.setItem("tasks", JSON.stringify(lista));
      return { ...state, tasks: lista };

    case TaskActionTypes.DELETE:
      const taskDelete = action.payload;
      const tasksFilter = state.tasks.filter((task) => task !== taskDelete);
      localStorage.setItem("tasks", JSON.stringify(tasksFilter));
      return { ...state, tasks: [...tasksFilter] };

    case TaskActionTypes.UPDATE:
        const taskUpdate = action.payload;
        taskUpdate.isComplete = !taskUpdate.isComplete
        const listUpdate = [...state.tasks]
        localStorage.setItem('tasks', JSON.stringify(listUpdate))
        return {...state, tasks: listUpdate}

    case TaskActionTypes.FILTERCHECK:
      const filterCheck = action.payload
      return {...state, tasks: filterCheck}

    case TaskActionTypes.FILTERPEN:
      const filterPen = action.payload
      return {...state, tasks: filterPen}

    case TaskActionTypes.ALLTASKS:
      const allTasks = action.payload
      return {...state, tasks: allTasks}

    default:
        return state
  }
};

export default taskReducer;
