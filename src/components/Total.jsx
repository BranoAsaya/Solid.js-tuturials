import { batch, createSignal } from "solid-js";

function Total() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);
  const totalValue = () => {
    console.log("inside derived signal");
    return age() + count();
  };
  const updateAgeAndCount = () => {
    batch(()=>{
       setAge(age() + 1);
    setCount(count() + 1);   
    })
  
  };

  return (
    <>
      <p>Age: {age()} </p>
      <p>Count: {count()} </p>
      <p>TotalValue: {totalValue()} </p>
      <button onclick={() => updateAgeAndCount()}>Update</button>
    </>
  );
}
export default Total;
