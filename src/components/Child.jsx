import { mergeProps } from "solid-js";

function Child(props) {
    console.log(props);
    const {age} =props
    const updateProps = mergeProps({name:'brano'},props)
  return (

    <>
      <h1>Age : {age()} </h1>
      <h1>Name - {updateProps.name} </h1>
    </>
  );
}
export default Child;
