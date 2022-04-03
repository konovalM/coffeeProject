import s from './Footer.module.css'
import Between from "../Main/Between/Between";


const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <ul className={s.list}>
                    <li className={s.listItem}>
                        <a href="#" className={s.firstLink}>Coffee house</a>
                    </li>
                    <li className={s.listItem}>
                        <a href="#" className="">Our coffee</a>
                    </li>
                    <li className={s.listItem}>
                        <a href="#" className="">For your pleasure</a>
                    </li>
                </ul>
                <Between margin='30'/>
            </div>
        </footer>
    )
}

export default Footer