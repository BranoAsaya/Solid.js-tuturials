import { createSignal, Show } from "solid-js";

function Marked() {
  const [marked, setMarked] = createSignal(false);
  return (
    <>
      {/* <p>{show() ? "Marked" : "Not Marked"}</p> */}
      <Show when={marked()} fallback={<p>Not Marked</p>}>
        <p>Marked</p>
      </Show>
      <button onclick={() => setMarked(true)}>Click mark</button>
    </>
  );
}
export default Marked;
