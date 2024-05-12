import { createSignal } from "solid-js";

function Count() {
  const [count, setCount] = createSignal(0);
  setInterval(() => {
    setCount(() => count() + 1);
  }, 3000);
  return (
    <>
      <h1>count :{count()}</h1>
    </>
  );
}
export default Count;
