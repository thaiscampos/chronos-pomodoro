import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  
  //const {children} = props;
  const [theme, setTheme] = useState<AvailableThemes>(()=>{
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

    return storageTheme
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    console.log('clicado')
    event.preventDefault(); //nao segue o link
    setTheme(prevTheme =>{
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme',theme)
  },[theme]) //Executa apenas quando o valor de theme muda


  const nextThemeIcon ={
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }
  return (
    <nav className={styles.menu}>
      
      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Ir para a Home"
        title="Inicio"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Ver historico"
        title="Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Configuraçoes"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
