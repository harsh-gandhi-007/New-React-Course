function TodoItem1() {
  let todoName = 'Buy Milk';
  let todoDate = '04/10/2023';

  return (
    <div className="container">
      <div className="row hg-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2 text-end">
          <button type="button" className="btn btn-danger hg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;