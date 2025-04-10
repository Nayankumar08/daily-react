import React, { useTransition } from "react";

function App() {
  const [name, setName] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE = 20000;
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const datalist = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        datalist.push(value);
      }
      setLists(datalist);
    });
  };

  return (
    <div>
      <input type="text" values={name} onChange={handleChange} key="input" />
      {isPending ? (
        <div>Loading</div>
      ) : (
        lists.map((list, index) => {
          return <div key={index}>{list}</div>;
        })
      )}
    </div>
  );
}

export default App;
