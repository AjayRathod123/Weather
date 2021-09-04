import React, { useEffect, useState } from "react";
import "./App.css";

const Todo = () => {
  const getAllData = () => {
    const lists = localStorage.getItem("mytodoList");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

  const [addItems, setAddItems] = useState("");
  const [items, setItems] = useState([getAllData()]);

  useEffect(() => {
    localStorage.setItem("mytodoList", JSON.stringify(items));
  }, [items]);

  const AddItem = () => {
    if (!addItems) {
      alert("plz add any item");
    } else {
      const newUpdateData = {
        id: new Date().getTime().toString(),
        name: addItems,
      };
      setItems([...items, newUpdateData]);
      setAddItems("");
    }
  };

  const deleteItems = (index) => {
    const upDatedList = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(upDatedList);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="main">
      <div className="header">
        <p>Add Your List Here</p>
      </div>
      <div className="input">
        <input
          style={{ marginTop: "20px" }}
          type="text"
          placeholder="Add Item"
          value={addItems}
          onChange={(event) => setAddItems(event.target.value)}
        />
        <i className="fas fa-plus" onClick={AddItem}></i>
      </div>
      <div className="addlist" style={{ marginTop: "10px" }}>
        {items.map((curElem, index) => {
          return (
            <div className="items" key={index}>
              <p style={{ marginTop: "10px" }}>{curElem.name}</p>
              <div>
                <i
                  className="fas fa-edit"
                  style={{
                    marginTop: "15px",
                    marginLeft: "20px",
                    padding: "10px",
                  }}
                ></i>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => deleteItems(curElem.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <button style={{ marginTop: "20px" }} onClick={removeAll}>
        Remove All
      </button>
    </div>
  );
};

export default Todo;
