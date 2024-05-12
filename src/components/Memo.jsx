import { Index, createMemo, createSignal } from "solid-js";

function incrementByValue(input) {
  return input + 1;
}
function Memo() {
  const [count, setCount] = createSignal(0);
  const [arr, _] = createSignal([1, 2, 3, 4, 5]);

  const memoValue = createMemo(() => {
    console.log("with Memo");
    return incrementByValue(count());
  });
  return (
    <>
      <h1>Count: {count()} </h1>
      <Index each={arr()}>
        {(value) => {
          return (
            <p>
              {value()} , {memoValue()}{" "}
            </p>
          );
        }}
      </Index>
      <button onClick={() => setCount(count() + 1)}>Update count</button>
    </>
  );
}
export default Memo;
