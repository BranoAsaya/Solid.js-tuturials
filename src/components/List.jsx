import { createSignal, For ,Index} from "solid-js";

function List() {
  const [list, setList] = createSignal(["king", "kong", "new"]);
  return (
    <>
      {/* {list().map((name) => {
        return <p>{name} </p>;
      })} */}

      <For each={list()}>
        {(item ,i) => {
          return <p>{item} -{i}</p>;
        }}
      </For>
      <Index each={list()}>
         {
            (name,i)=>{
                return <p>{name} .{i} </p>
            }
         }
      </Index>
    </>
  );
}
export default List;
