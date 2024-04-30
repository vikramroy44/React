function TodoItem({todoName,todoDate, onDeleteClick}){
    return (
 <div className="container">
<    div className="row">
    <div className="col-4">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-4 mb-2 ps-5">
    <button className="btn btn-danger mybtn" type="submit" onClick={() => onDeleteClick(todoName)}>Delete</button>
    </div>
  </div>
  </div>

    );
}

export default TodoItem;