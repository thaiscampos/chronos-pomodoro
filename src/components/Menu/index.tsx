import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  console.log(styles);
  //const {children} = props;
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="http://">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="http://">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="http://">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="http://">
        <SunIcon />
      </a>
    </nav>
  );
}
