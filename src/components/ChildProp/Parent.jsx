import { createSignal } from "solid-js";
import Child from "./child";
 function Parent() {
const [state, setstate] = createSignal("test");
    return (
        <>
        <h1>Perent</h1>
        </>
    );
}
    export default Parent;