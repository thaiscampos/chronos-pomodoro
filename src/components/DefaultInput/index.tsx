import styles from "./styles.module.css";

type DefaultInput = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInput) {
  return (
    <>
      {/*labelText && <label htmlFor={id}>{labelText}</label>*/
      /*labelText ? <label htmlFor={id}>{labelText}</label> : ""*/}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} type={type} name="" id={id} {...rest} />
    </>
  );
}
