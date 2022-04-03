import styled from 'styled-components'
import Header from "../../Header/Header";
import bg from '../../../images/ourCoffee.jpg'

const CoffeeMain = styled.section`
  padding: 52px 0 84px;
  background: url(${bg})center center/cover no-repeat;
  div.container{
    max-width: 1180px;
    padding: 0 20px;
    margin: 0 auto;
  }
  h2{
    font-size: 40px;
    line-height: 58px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 60px;
  }
`

const OurCoffeeMain = () => {
    return (
        <CoffeeMain>
            <div className="container">
                <Header/>
                <h2>Our Coffee</h2>
            </div>
        </CoffeeMain>
    )
}

export default OurCoffeeMain