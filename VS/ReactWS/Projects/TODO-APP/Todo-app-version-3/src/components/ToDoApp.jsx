import { useState } from "react";
import TodoItem from "./TodoItem";
function TODOApp({onNewItem}){

  const [todoName, settodoName] = useState();
  const [todoDate, settodoDate] = useState();
  const handleName = (event) =>{
    settodoName(event.target.value);
  }

  const handleDate = (event) =>{
    settodoDate(event.target.value);
   }

   const handleAddBtnClicked = () =>{
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");

   }

return (
  <>
    <div className="row ">
    <div className="col-4">
      <input type='text' placeholder='Enter To Do Item'value={todoName} onChange={handleName}></input>
    </div>
    <div className="col-4">
      <input type='date' value={todoDate} onChange={handleDate}></input>
    </div>
    <div className="col-2 pe-5">
    <button className="btn btn-success mybtn" type="submit" onClick={handleAddBtnClicked}>Add</button>
    </div>
  </div> 
  </>
  
);
}

export default TODOApp;