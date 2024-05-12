import { createSignal } from "solid-js";
import SplitChild1 from "./SplitChild1";

function SplitProps1() {
  const [age, setAge] = createSignal(10);
  const [name, setName] = createSignal("brano");
  const [address, setAddress] = createSignal("usa");
  return (
    <>
      <h1> SplitProps </h1>
      <SplitChild1 age={age()} name={name()} address={address()} />
    </>
  );
}
export default SplitProps1;
