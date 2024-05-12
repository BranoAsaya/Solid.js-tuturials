import { createEffect, createSignal, untrack, on } from "solid-js";

function OnCallback1() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);
  //   createEffect(()=>{
  //     console.log("Age", age());
  //     console.log("Count", untrack(age) );
  //   })

  createEffect(
    on(age, (newAge, oldAge) => {
      console.log(newAge);
      console.log(oldAge);
      console.log("count", count());
    },{defer:true})
  );
  return (
    <>
      <p>Age:{age()} </p>
      <p>Count:{count()} </p>
      <button onclick={() => setAge(age() + 1)}>update Age</button>
      <button onclick={() => setCount(count() + 1)}>update count</button>
    </>
  );
}
export default OnCallback1;
