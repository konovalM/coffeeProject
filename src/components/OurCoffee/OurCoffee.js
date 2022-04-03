import {Fragment} from "react";
import OurCoffeeMain from "./OurCoffeeMain/OurCoffeeMain";
import OurBeans from "./OurBeans/OurBeans";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";


const OurCoffee = () => {
    return (
        <Fragment>
            <OurCoffeeMain/>
            <OurBeans/>
            <Filter/>
            <Footer/>
        </Fragment>
    )
}

export default OurCoffee