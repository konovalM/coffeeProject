import s from './Footer.module.css'
import Between from "../Main/Between/Between";
import {Link} from "react-router-dom";



const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <ul className={s.list}>
                    <li className={s.listItem}>
                        <Link to="/" className={s.firstLink}>Coffee house</Link>
                    </li>
                    <li className={s.listItem}>
                        <Link to="/coffee" className="">Our coffee</Link>
                    </li>
                    <li className={s.listItem}>
                        <Link to="/pleasure" className="">For your pleasure</Link>
                    </li>
                </ul>
                <Between margin='30'/>
            </div>
        </footer>
    )
}

export default Footer