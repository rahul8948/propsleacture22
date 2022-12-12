import {useState} from "react";


function App() {
  const [data, setData] = useState(0)
  function updateData(){
    setData(data+1*5)
  }
  return (
    <div className= "App">
      <h1>{data}</h1>
      {/* <h2</button onClick{updateData}>>{data}</h2> */}
      <button onClick= {updateData}>Rahul</button>
    </div>
  );
}
export default App;
