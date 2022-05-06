import { combineReducers } from 'redux'

const modalReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return { show: true }
    case 'MODAL_CLOSE':
      return { show: false }
    default:
      return state
  }
}

const modalReducerTask = (state = { showTask: false }, action) => {
  switch (action.type) {
    case 'MODAL_OPEN_TASK':
      return { showTask: true }
    case 'MODAL_CLOSE_TASK':
      return { showTask: false }
    default:
      return state
  }
}

const modalReducerEdit = (state = { showEdit: false }, action) => {
  switch (action.type) {
    case 'MODAL_OPEN_EDIT':
      return { showEdit: action.payload }
    case 'MODAL_CLOSE_EDIT':
      return { showEdit: false }
    default:
      return state
  }
}

const editTaskRedux = (
  state = JSON.parse(localStorage.getItem('task')) || [],
  action,
) => {
  switch (action.type) {
    case 'EDIT_TASK':
      const editedTasks = state.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      )
      localStorage.setItem('task', JSON.stringify(editedTasks))
      return editedTasks

    case 'DELETE_TASK':
      const deleteTasks = state.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('task', JSON.stringify(deleteTasks))
      return deleteTasks

    case 'ADD_TASK':
      const addTasks = state.concat(action.payload)
      localStorage.setItem('task', JSON.stringify(addTasks))
      return addTasks

    case 'DELETE_TASK_IN_SECTION':
      const deleteTasksInSection = state.filter(
        (x) => x.sectionId !== action.payload.id,
      )
      localStorage.setItem('task', JSON.stringify(deleteTasksInSection))
      return deleteTasksInSection

    default:
      return state
  }
}

export default combineReducers({
  modalReducer,
  modalReducerTask,
  modalReducerEdit,
  editTaskRedux,
})
