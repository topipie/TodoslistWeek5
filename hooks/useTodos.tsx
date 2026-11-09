import {useReducer} from "react";

interface Task {
    id: string;
    name: string;
    done: boolean;
}

type TodoAction =
    | { type: "ADD_TASK"; payload: Task }
    | { type: "TOGGLE_TASK"; payload: string }
    | { type: "DELETE_TASK"; payload: string };

const initialState: Task[] = [];

const todoReducer = (state: Task[], action: TodoAction): Task[] => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        case "TOGGLE_TASK":
            return state.map((task) =>
                task.id === action.payload ? { ...task, done: !task.done } : task 
            );
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload);
            default:
            return state;
    }
};

export default function useTodos() {
    const [tasks, dispatch] = useReducer(todoReducer, initialState);

    const addTask = (name: string) => {
        const newTask: Task = {
            id: Date.now().toString(),
            name: name,
            done: false,
        };
        dispatch({ type: "ADD_TASK", payload: newTask,
    });
    };

    const toggleTask = (id: string) => {
        dispatch({ type: "TOGGLE_TASK", payload: id,
    });
    };

    const deleteTask = (id: string) => {
        dispatch({ type: "DELETE_TASK", payload: id,
    });
    };

    return {
        tasks,
        addTask,
        toggleTask,
        deleteTask,
    };
}