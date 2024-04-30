import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import TODOApp from './components/ToDoApp'
import TodoItem from './components/TodoItem'
import "./App.css";
import Items from './components/Items'
import WelcomeMsg from './components/WelcomeMsg'


function App() {
  const tempItems =[{
    todoName:"Take Milk Again",
    todoDate:"23/12/24",
  },
  {
    todoName:"Take Milk for Cheeck",
    todoDate:"23/12/24",
  }
  ];
    
const [todoItem, settodoItem] = useState([]);

const handleNewItem = (itemName, itemDate) =>{
  console.log(`New Item Added ${itemName} Date: ${itemDate}`);
  const newTodoItem =[...todoItem, 
    {todoName:itemName , todoDate: itemDate },
  ];
  settodoItem(newTodoItem);
};

const handleDeleteBtn = (itemName) =>{
  console.log(`Delete Item is : ${itemName}`);
  const updatedTodoItem = todoItem.filter((item) => item.todoName !=itemName);
  settodoItem(updatedTodoItem);
}
  return(
    <center className='todo-container'>
      
    <AppName/>
    <TODOApp onNewItem ={handleNewItem}></TODOApp>
    <Items Items={todoItem} onDeleteClick ={handleDeleteBtn}></Items>
    {todoItem.length ===0 && <WelcomeMsg></WelcomeMsg>}
    </center>
  )
        

};

export default App