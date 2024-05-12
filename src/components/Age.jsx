import { createSignal } from "solid-js";

function Age() {
  const [age, setAge] = createSignal(10);

  const [multi, setMulti] = createSignal(2);
  const doubleAge = () => age() * multi();
  return (
    <>
      <p>Age : {age()} </p>
      <p>multi : {multi()} </p>  
      <p>doubleAge : {doubleAge()} </p>
      <button onclick={()=>setAge(age() + 1)}>setAge</button>
      <button onclick={()=>setMulti(multi() + 1)}>setMulti</button>
    </>
  );
}
export default Age;
