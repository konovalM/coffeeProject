import s from './Presentation.module.css'
import beans2 from '../../../images/coffee-beans(2).svg'
import Header from "../../Header/Header";

const Presentation = () => {
    return(
        <section className={s.presentation}>
            <div className={s.container}>
                <Header/>
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
        </section>
    )
}

export default Presentation