
function Name(props) {
  const { setName, name } = props;
  const updateName = (e) => {
    setName(e.currentTarget.value);
  };
  return (
    <>
      <h1>Name: {name} </h1>

      <input type="text" value={name()} oninput={updateName} />
      <button onclick={() => setName("brano" + Math.random().toString())}>
        Click
      </button>
    </>
  );
}
export default Name;
