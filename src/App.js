import { useState } from "react";

import Student from "./Student";

function App() {
  const [data, setData] = useState(0);
  const [name, newName] = useState("Rahul");
  function updateData() {
    setData(data + 1 * 5);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <h2</button onClick{updateData}>>{data}</h2>  */}
      <button onClick={updateData}>Rahul</button>

      <Student name={name} />
      {/* <Student email="rahulpaswansdr@gmail.com" /> */}
      <button
        onClick={() => {
          newName("Anuradha");
        }}
      >
        click
      </button>
    </div>
  );
}
export default App;
