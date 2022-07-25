import React, {useState} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoField from '../CreateTodoField/CreateTodoField';

const data = [
    {
        _id: 'sdvgaebre',
        title: 'Create new project',
        isCompleted: false,
    },
    {
        _id: 'lhjg',
        title: 'Read a book',
        isCompleted: false,
    },
    {
        _id: 'atrigu',
        title: 'Pet a cat',
        isCompleted: false,
    },
    {
        _id: 'pokoij',
        title: 'Chill with friends',
        isCompleted: false,
    },
    {
        _id: 'lknhhue',
        title: 'Water a plant',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo list</h1>
            <CreateTodoField setTodos={setTodos} />
            {
                todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo._id}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
                ))
            }
        </div>
    );
};

export default Home;