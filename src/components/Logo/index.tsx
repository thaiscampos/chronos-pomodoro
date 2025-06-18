
import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Logo(){
    console.log(styles)
    //const {children} = props;
    return <div className={styles.logo}>
        <a className={styles.logoLink} href="http://">
            <TimerIcon  />
            <span>Chronos</span>
        </a>
        
    </div>
}