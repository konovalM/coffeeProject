import s from './Header.module.css'
import beans2 from '../../images/coffee-beans(2).svg'


const Header = () => {
    return(
        <header className={s.header}>
            <div className={s.container}>
                <nav className={s.nav}>
                    <a href="#" className={s.link}>
                        Coffee house
                    </a>
                    <a href="#" className={s.link}>
                        Our coffee
                    </a>
                    <a href="#" className={s.link}>
                        For your pleasure
                    </a>
                </nav>
                <h1 className={s.title}>
                    Everything You Love About Coffee
                </h1>
                <div className={s.between}>
                    <div className={s.imgWrapper}>
                        <img src={beans2} alt="beans" className={s.beans}/>
                    </div>
                </div>
                <div className={s.descr}>
                    We makes every day full of energy and taste
                </div>
                <div className={s.secondDescr}>
                    Want to try our beans?
                </div>
                <div className={s.moreLink}>
                    <a href="#" className={s.more}>More</a>
                </div>
            </div>
        </header>
    )
}

export default Header