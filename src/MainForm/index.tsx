import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultInput } from "../components/DefaultInput";
import styles from "./styles.module.css";
import { DefaultButton } from "../components/DefaultButton/DefaultButton";
import { Cycles } from "../components/Cycles";

export function MainForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="Task"
          placeholder="Digite algo"
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
        <DefaultButton icon={<StopCircleIcon />} color="red" />
      </div>
    </form>
  );
}
