import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const LIST_SIZE = 20000;
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    const datalist = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      datalist.push(value);
    }
    setLists(datalist);
  };

  return (
    <div>
      <input type="text" values={name} onChange={handleChange} key="input" />
      {lists.map((list, index) => {
        return <div key={index}>{list}</div>;
      })}
    </div>
  );
}

export default App;
