function getData() {
  return (dispatch) => {
    dispatch({ type: "ADD_DATA", payload: "Confidential Maal" });
  };
}

export default getData;
