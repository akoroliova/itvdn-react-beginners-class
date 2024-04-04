function UseStateHook({
  val,
  valueSetter,
  arr,
  arraySetter,
  anotherArraySetter,
}) {
  return (
    <div className="UseStateHook">
      <h3>{val}</h3>
      <input type="range" onChange={valueSetter} value={val}></input>

      <h3>{arr}</h3>
      <button onClick={arraySetter}>PUSH to array</button>
      <button onClick={anotherArraySetter}>PUSH to array another way</button>

      <ul>
        {arr.map((a, idx) => (
          <li key={idx}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateHook;
