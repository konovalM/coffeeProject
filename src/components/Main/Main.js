import {Fragment} from "react";
import Header from "../Header/Header";
import About from "./About/About";
import Best from "./Best/Best";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <Fragment>
            <Header/>
            <About />
            <Best/>
            <Footer/>
        </Fragment>
    )
}

export default Main