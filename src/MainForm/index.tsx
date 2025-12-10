import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../components/DefaultInput";
import styles from "./styles.module.css";
import { DefaultButton } from "../components/DefaultButton/DefaultButton";
import { Cycles } from "../components/Cycles";
import { useState } from "react";


export function MainForm() {

  function handleNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('enviado: ' + taskName)
  }

  const [taskName, setTaskName] = useState('')
 
  return (
    <form onSubmit={ handleNewTask} className={styles.form}>
     
      <div className={styles.formRow}>
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="Task"
          placeholder="Digite algo"
          value={taskName}
          onChange={(e)=> setTaskName(e.target.value)}
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
        
      </div>
    </form>
  );
}
