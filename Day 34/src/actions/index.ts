export interface addNoteAction {
  type: string;
  payload: string;
}
export interface deleteNoteAction {
  type: string;
  payload: number;
}

export type actionType = addNoteAction | deleteNoteAction;
const addNote = (name: string): actionType => {
  return {
    type: "ADD_NOTE",
    payload: name,
  };
};

const deleteNote = (id: number): actionType => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

export { addNote, deleteNote };
