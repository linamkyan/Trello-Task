const selectModalData = (state) => ({
  show: state.modalReducer.show,
})

const selectModalDataTask = (state) => ({
  showTask: state.modalReducerTask.showTask,
})

const selectModalDataEdit = (state) => ({
  showEdit: state.modalReducerEdit.showEdit,
})
export { selectModalData, selectModalDataTask, selectModalDataEdit }
