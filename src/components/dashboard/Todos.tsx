import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { db, auth } from '../../utils/firebase';

interface Props {}

interface Todo {
  todo: string;
  createdAt: object;
  color: string;
  id: string;
}

const Todos = (props: Props) => {
  const [todos, setTodos] = useState<any>([]);
  const [loadingTodos, setLoadingTodos] = useState(true);

  const todosRef = db
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('todos');

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('todos')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const myTodos: Todo[] = [];
          snapshot.forEach((doc) => {
            const { color, createdAt, todo } = doc.data();
            const id = doc.id;
            const finaltodo = { color, createdAt, todo, id };
            myTodos.push(finaltodo);
          });
          setTodos(myTodos);
          setLoadingTodos(false);
        } else {
          setTodos([]);
          setLoadingTodos(false);
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteTodo = (todoId: string) => {
    todosRef.doc(todoId).delete();
  };

  return (
    <>
      
      <div className="jumbotron m-2 mt-3 col-11 text-center">
        {loadingTodos ? (
          <Loader type="Oval" color="#00BFFF" />
        ) : (
          <>
            {todos.length ? (
              <div className="row justify-content-start">
                {todos.map((todo: Todo) => (
                  <div className=" my-2 col-12 col-md-4 px-2">
                    <div
                      key={todo.id}
                      className={`card text-white px-2 pb-3 bg-${
                        todo.color ? todo.color : 'primary'
                      }`}
                    >
                      <div className="ml-auto mt-2">
                        <button
                          className="close"
                          onClick={() => deleteTodo(todo.id)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="card-body py-5">
                        <h4 className="card-title cursor-pointer">
                          {todo.todo}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h1 className="d-none d-md-block">
                  Click "New to-do" to add to-dos!
                </h1>
                <h4 className="d-md-none">Click "New to-do" to add to-dos!</h4>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Todos;
