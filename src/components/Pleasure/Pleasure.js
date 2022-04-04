import {Fragment} from "react";
import bg from "../../images/pleasureBg.jpg";
import OurCoffeeMain from "../OurCoffee/OurCoffeeMain/OurCoffeeMain";
import OurBeans from "../OurCoffee/OurBeans/OurBeans";
import coffeeGoods from '../../images/coffeeGoods.jpg'
import Coffee from "./Coffee/Coffee";
import Footer from "../Footer/Footer";


const Pleasure = () => {
    return (
        <Fragment>
            <OurCoffeeMain bg={bg} title={'For your pleasure'}/>
            <OurBeans topText={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'} bottomText={'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'} photo={coffeeGoods} title={'About our goods'}/>
            <Coffee/>
            <Footer/>
        </Fragment>
    )
}

export default Pleasure