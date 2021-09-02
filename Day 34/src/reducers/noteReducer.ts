import { actionType } from "../actions";
const noteReducer = (state: string[] = [], action: actionType): string[] => {
  switch (action.type) {
    case "ADD_NOTE":
      const payload = action.payload.toString();
      return [...state, payload];
    case "DELETE_NOTE":
      return state.filter(
        (_: string, index: number) => index !== action.payload
      );
    default:
      return state;
  }
};

export default noteReducer;
