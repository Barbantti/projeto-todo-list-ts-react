// CSS
import styles from "./TaskForm.module.css";

// Hooks
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// Interface
import { ITask } from "../Interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Title:</label>
        <input
          typeof='text'
          name='title'
          placeholder='Insert a task'
          onChange={handleChange}
          value={title}
        ></input>
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Difficulty:</label>
        <input
          typeof='text'
          name='difficulty'
          placeholder='Insert task difficulty'
          onChange={handleChange}
          value={difficulty}
        ></input>
      </div>
      <input type='submit' value={btnText} />
    </form>
  );
};

export default TaskForm;
