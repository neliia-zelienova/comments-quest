import React, { useState } from "react";
import services from "../../utils/ApiServices";

const Form = () => {
  const [name, setName] = useState("");
  const handelName = (e) => {
    setName(e.target.value);
  };

  const [text, setText] = useState("");
  const handelText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await services.postComment(name, text);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input type="text" name="" id="" value={name} onChange={handelName} />
      </label>
      <label htmlFor="">
        Text
        <input type="text" name="" id="" value={text} onChange={handelText} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
