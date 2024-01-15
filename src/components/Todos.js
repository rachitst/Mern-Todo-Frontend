import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ALL_TASKS , ACTIVE_TASKS, DONE_TASKS } from "../redux/actions/type";
/*Components*/
import Todo from "./Todo";
import Tabs from './Tabs';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const currentTab = useSelector(state => state.currentTab)
  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line
  }, [todos]);

  const getTodos = () =>{
    if (currentTab === ALL_TASKS) {
        return todos;
    } else if (currentTab === ACTIVE_TASKS) {
        return todos.filter((todo)=> !todo.done );
    } else if ( currentTab === DONE_TASKS){
        return todos.filter((todo)=> todo.done );
    }
  }

  const removeDoneTodos = () =>{
    todos.forEach(({done,_id}) =>{
        if(done){
            dispatch(deleteTodo(_id))
        }

    })
  }
  return (
    <article>
        <div className="">
            <Tabs currentTab={currentTab}/>
            {
                todos.some(todo => todo.done) ?(
                    <button onClick={removeDoneTodos} className="button clear">
                        Remove Marked
                    </button>
                ):null
            }
        </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};
export default Todos;
