import s from './Between.module.css'
import beans from "../../../images/beansBlack.svg";

const Between = ({margin}) => {
    return(
        <div className={s.between} style={{marginTop: Number(margin)}}>
            <div className={s.imgWrapper}>
                <img src={beans} alt="beans" className={s.beans}/>
            </div>
        </div>
    )
}

export default Between