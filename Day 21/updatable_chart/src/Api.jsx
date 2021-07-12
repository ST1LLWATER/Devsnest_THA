import axios from "axios";
import React, { useEffect, useState } from "react";

function Api_data() {
  useEffect(async () => {
    const response = await axios.get(
      "https://60eaa1265dd7ff0017b397e5.mockapi.io/students"
    );
    const data = response.data;
    console.log(data);
    setState(data);
  }, []);
  const mapper = (e) => {
    return (
      <>
        <img src={e.avatar} />
        <h3>{e.name}</h3>
      </>
    );
  };

  const [state, setState] = useState([]);
  return <>{state.map(mapper)}</>;
}

export default Api_data;
