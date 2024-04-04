function UseRefHook({
  inputRef,
  inputListener,
  buttonRef,
  buttonListener,
  checkboxRef,
  checkboxListener,
}) {
  return (
    <div className="UseRefHook">
      <input ref={inputRef} type="text" onClick={inputListener}></input>

      <button ref={buttonRef} onClick={buttonListener}>
        Make Me Teal!
      </button>

      <input
        type="checkbox"
        ref={checkboxRef}
        onClick={checkboxListener}
      ></input>
    </div>
  );
}

export default UseRefHook;
