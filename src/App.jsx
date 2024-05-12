import { ErrorBoundary, createSignal } from "solid-js";
import Count from "./components/Count";
import Name from "./components/Name";
import Marked from "./components/Marked";
import List from "./components/List";
import Select from "./components/Select";
import Login from "./components/Login";
import Register from "./components/Register";
import Age from "./components/Age";
import Effect from "./components/Effect";
import Total from "./components/Total";
import OnCallback1 from "./components/OnCallback1";
import Memo from "./components/Memo";
import Child from "./components/Child";
import SplitProps1 from "./components/SplitProps/SplitProps1";

function App() {
  // const [name, setName] = createSignal("brano");
const [age, setAge] = createSignal(10);
  return (
    <>
      {/* <Count />
      <Marked /> */}
      {/* <Name name={name} setName={setName} /> */}
      {/* <List /> */}
      {/* <Select /> */}
      {/* <ErrorBoundary fallback={(e) => <p>{e.message}</p>}>
        <Login />
      </ErrorBoundary>
      <ErrorBoundary fallback={(e) => <p>{e.message}</p>}>
        <Register />
      </ErrorBoundary> */}
      {/* <Age /> */}
      {/* <Effect /> */}
      {/* <Total /> */}
      {/* <OnCallback1/> */}
      {/* <Memo/> */}
      {/* <Child age={age()}/>
      <button onClick={()=> setAge(age()+1)}>update </button> */}
      {/* <SplitProps1  /> */}
      
    </>
  );
}

export default App;
