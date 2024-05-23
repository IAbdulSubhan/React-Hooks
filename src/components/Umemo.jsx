import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const Umemo = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("API has been called");
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("API response received");
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was computed");
    return longestName;
  };

  const longestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <h2>{longestName}</h2>
      <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default Umemo;
