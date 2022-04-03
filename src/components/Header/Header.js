import s from "../Main/Presentation/Presentation.module.css";
import styled from 'styled-components'
import beans from '../../images/coffee-beans.svg'

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
                <a href="#">
                    Coffee house
                </a>
                <a href="#">
                    Our coffee
                </a>
                <a href="#">
                    For your pleasure
                </a>
            </Nav>
        </header>
    )
}

export default Header