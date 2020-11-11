import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Panel from "./Panel";
import {useState} from "react";

const statuses = ['todo', 'progress', 'review', 'done'];

const initialTasks = [
    {
        name: 'Task 1',
        status: statuses[0],
        priority: 2,
        id: 1,
    }
]

function App() {

    const [tasks, setTasks] = useState(initialTasks);

    const prevStatus = (currentStatus) => {
        return statuses[statuses.indexOf(currentStatus) - 1];
    };

    const left = (taskId) => {
        const updatedTasks = tasks.map(el => el.id === taskId ? {...el, status: prevStatus(el.status)} : el)
        setTasks(updatedTasks);
    };

    const nextStatus = (currentStatus) => {
        return statuses[statuses.indexOf(currentStatus) + 1];
    }

    const right = (taskId) => {
        const updatedTasks = tasks.map(el => el.id === taskId ? {...el, status: nextStatus(el.status)} : el);
        setTasks(updatedTasks);
    };


    return (
        <div className="container">

            <h1>Kanban</h1>

            <div className="row align-items-start">

                {statuses.map(status => (
                    <div key={status} className="col">
                        <Panel
                            status={status}
                            tasks={tasks}
                            left={left}
                            right={right}
                        />
                    </div>)
                )}


            </div>
        </div>
    );
}

export default App;
