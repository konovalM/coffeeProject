import {Fragment} from "react";
import About from "./About/About";
import Best from "./Best/Best";
import Footer from "../Footer/Footer";
import Presentation from "./Presentation/Presentation";

const Main = () => {
    return (
        <Fragment>
            <Presentation/>
            <About />
            <Best/>
            <Footer/>
        </Fragment>
    )
}

export default Main