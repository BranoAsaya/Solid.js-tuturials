import { createSignal } from "solid-js";
import { effect } from "solid-js/web";

function Effect() {
  const [age, setAge] = createSignal(10);
  effect(() => {
    console.log("my age has changed", age());
  });
  return (
    <>
      <p>Age :{age()} </p>
      <button onclick={() => setAge(age() + 1)}>Change Age</button>
    </>
  );
}
export default Effect;
