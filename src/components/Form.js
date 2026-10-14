import React, { useState } from "react";

function Form() {
  const [inputList, setInputList] = useState([{ name: "", age: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { name: "", age: "" }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputList);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Dynamic Fields</h1>
      <form onSubmit={handleSubmit}>
        {inputList.map((item, i) => (
          <div className="field-row" key={i}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={item.age}
              onChange={(e) => handleInputChange(e, i)}
            />
            {inputList.length > 0 && (
              <button
                type="button"
                className="btn remove-btn"
                onClick={() => handleRemoveClick(i)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="btn-group">
          <button type="button" className="btn add-btn" onClick={handleAddClick}>
            Add More
          </button>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
