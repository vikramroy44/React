import TodoItem from "./TodoItem";

const Items = ({Items,onDeleteClick}) =>{
    return (
        <>
        <div className='item-container'>
        {Items.map((item) =>(
            <TodoItem key={item.todoName} todoName ={item.todoName}  todoDate = {item.todoDate} onDeleteClick={onDeleteClick}></TodoItem>
        ))}
        </div>
        </>
    );
};

export default Items;