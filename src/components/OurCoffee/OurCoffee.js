import {Fragment} from "react";
import OurCoffeeMain from "./OurCoffeeMain/OurCoffeeMain";
import OurBeans from "./OurBeans/OurBeans";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import bg from '../../images/ourCoffee.jpg'
import photo from '../../images/photo.jpg'

const OurCoffee = () => {
    return (
        <Fragment>
            <OurCoffeeMain bg={bg} title={'Our Coffee'}/>
            <OurBeans photo={photo} title={'About our beans'} topText={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'} bottomText={'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'}/>
            <Filter/>
            <Footer/>
        </Fragment>
    )
}

export default OurCoffee