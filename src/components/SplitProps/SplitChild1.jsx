import { splitProps } from "solid-js";

function splitChild1(props) {
  const [pInfo, sInfo] = splitProps(props, ["age", "name"]);
  return (
    <>
      <h1>splitChild</h1>
      <p>Age: {pInfo.age} </p>
      <p>Name: {pInfo.name} </p>
      <p>Name: {sInfo.address} </p>
    </>
  );
}
export default splitChild1;
