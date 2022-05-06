export const ShowModal = (payload) => {
  return {
    type: 'MODAL_OPEN',
    payload,
  }
}

export const CloseModal = (payload) => {
  return {
    type: 'MODAL_CLOSE',
    payload,
  }
}

export const ShowModalTask = (payload) => {
  return {
    type: 'MODAL_OPEN_TASK',
    payload,
  }
}

export const ShowModalEdit = (payload) => {
  return {
    type: 'MODAL_OPEN_EDIT',
    payload,
  }
}

export const CloseModalEdit = (payload) => {
  return {
    type: 'MODAL_CLOSE_EDIT',
    payload,
  }
}

export const editTaskAction = (val) => {
  return {
    type: 'EDIT_TASK',
    payload: val,
  }
}

export const deleteTaskAction = (val) => {
  return {
    type: 'DELETE_TASK',
    payload: val,
  }
}

export const addTaskAction = (val) => {
  return {
    type: 'ADD_TASK',
    payload: val,
  }
}

export const deleteTaskInSectionAction = (val) => {
  return {
    type: 'DELETE_TASK_IN_SECTION',
    payload: val,
  }
}

export const CloseModalTask = (payload) => {
  return {
    type: 'MODAL_CLOSE_TASK',
    payload,
  }
}
