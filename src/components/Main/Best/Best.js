import s from './Best.module.css'
import first from '../../../images/firstCoffee.jpg'
import second from '../../../images/secondCoffee.jpg'
import third from '../../../images/thirdCoffee.jpg'


const Best = () => {
    return (
        <section className={s.best}>
            <div className={s.container}>
                <h3 className={s.title}>Our best</h3>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <img src={first} alt="First Coffee"/>
                        <div className={s.itemDescr}>
                            Solimo Coffee Beans 2 kg
                        </div>
                        <div className={s.price}>
                            10.73$
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={second} alt="Second Coffee"/>
                        <div className={s.itemDescr}>
                            Presto Coffee Beans 1 kg
                        </div>
                        <div className={s.price}>
                            15.99$
                        </div>
                    </div>
                    <div className={s.item + ' ' + s.third}>
                        <img src={third} alt="Third Coffee"/>
                        <div className={s.itemDescr}>
                            AROMISTICO Coffee 1 kg
                        </div>
                        <div className={s.price}>
                            6.99$
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Best;