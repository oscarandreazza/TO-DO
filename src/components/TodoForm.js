import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function add(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input onChange={handleChange} value={text} type="text"></input>
      <button onClick={add}>Add</button>
    </form>
  );
}

export default TodoForm;
