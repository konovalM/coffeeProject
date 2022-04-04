import s from "../Main/Presentation/Presentation.module.css";
import styled from 'styled-components'
import beans from '../../images/coffee-beans.svg'
import {Link} from "react-router-dom";

const Nav = styled.nav`
  a{
    font-size: 12px;
    line-height: 17px;
    color: #FFFFFF;
    margin-left: 40px;
    :first-child{
      margin: 0;
      padding-left: 31px;
      position: relative;
      ::before{
        content: '';
        background: url(${beans});
        position: absolute;
        left: 0;
        top: -22px;
        width: 35px;
        height: 35px;
        
      }
    }
  }
`


const Header = () => {
    return(
        <header>
            <Nav>
                <Link to="/">
                    Coffee house
                </Link>
                <Link to="/coffee">
                    Our coffee
                </Link>
                <Link to="/pleasure">
                    For your pleasure
                </Link>
            </Nav>
        </header>
    )
}

export default Header