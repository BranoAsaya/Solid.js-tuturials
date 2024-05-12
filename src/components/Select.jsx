import { createSignal, Switch, Match } from "solid-js";

function Select() {
  const [select, setSelect] = createSignal("");
  return (
    <>
    <select name="" id="" value={select()} onchange={(e)=>setSelect(e.target.value)}>
        <option value="">null</option>
        <option value="Milk">Milk</option>
        <option value="Chocolate">Chocolate</option>
    </select>
      <Switch fallback={<p>Not selected</p>}>
        <Match when={select() === "Milk"}>
          <p>Milk</p>
        </Match>
        <Match when={select() === "Chocolate"}>
          <p>Chocolate</p>
        </Match>
      </Switch>
    </>
  );
}
export default Select;
