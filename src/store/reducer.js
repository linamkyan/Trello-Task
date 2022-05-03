import { combineReducers } from "redux";

export const ShowModal = payload => {
  return {
    type: "MODAL_OPEN",
    payload
  };
};

export const CloseModal = payload => {
  return {
    type: "MODAL_CLOSE",
    payload
  };
};

const modalReducer = (state = { show: false }, action) => {
  switch (action.type) {
   
    case "MODAL_OPEN":
      return { show: true };
    case "MODAL_CLOSE":
      return { show: false };
    default:
      return state;
  }
};



export const ShowModalTask = payload => {
  return {
    type: "MODAL_OPEN_TASK",
    payload
  };
};

export const CloseModalTask = payload => {
  return {
    type: "MODAL_CLOSE_TASK",
    payload
  };
};

const modalReducerTask = (state = { showTask: false }, action) => {
  switch (action.type) {
   
    case "MODAL_OPEN_TASK":
      return { showTask: true };
    case "MODAL_CLOSE_TASK":
      return { showTask: false };
    default:
      return state;
  }
};



export const ShowModalEdit = payload => {
  return {
    type: "MODAL_OPEN_EDIT",
    payload
  };
};

export const CloseModalEdit  = payload => {
  return {
    type: "MODAL_CLOSE_EDIT",
    payload
  };
};

const modalReducerEdit = (state = { showEdit: false }, action) => {
  switch (action.type) {
   
    case "MODAL_OPEN_EDIT":
      return { showEdit: action.payload };
    case "MODAL_CLOSE_EDIT":
      return { showEdit: false };
    default:
      return state;
  }
};



export default combineReducers({
  modalReducer, 
  modalReducerTask,
  modalReducerEdit
});
