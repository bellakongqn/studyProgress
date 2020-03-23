1. interfaces
TodoItem-TodoList-TodoForm

Todo: id, text, isCompleted

TodoForm：Todo list(todo列表), handleTodoCreate(新增todo 方法)

TodoList：handleTodoUpdate(更新单个todo), handleTodoRemove(删除单个todo), handleTodoComplete(完成单个todo) 
        handleTodoBlur(移除焦点) Todo list(todo列表)

TodoItem: handleTodoUpdate(更新), handleTodoRemove(删除), handleTodoComplete(完成), handleTodoBlur(移除焦点),
        todo(单个todo)

// Todo interface
export interface TodoInterface {
    id: string,
    text:string,
    isCompleted: boolean,
}

// Todo item interface
export interface TodoItemInterface {
    todo: TodoInterface,
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string)=> void,
    handleTodoRemove: (id: string)=> void,
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[]
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}
