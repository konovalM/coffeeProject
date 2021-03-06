import styled from 'styled-components'
import Between from "../../Main/Between/Between";

const OurBeansSection = styled.section`
  padding: 70px 0 0;
  div.conrainer{
    max-width: 1180px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .gridWrapper{
    display: grid;
    justify-content: center;
    grid-template-columns: 272px minmax(300px, 346px);
    grid-template-rows: 355px;
    grid-auto-rows: auto;
    grid-gap: 80px;
  }
  .left{
    filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
    img{
      object-fit: contain;
    }
  }
  h3{
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-top: 10px;
    text-align: center;
  }
  .descr{
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin-top: 25px;
    color: #000000;
  }
  .line{
    width: 240px;
    height: 1px;
    background-color: #000;
    margin: 60px auto 0;
  }
`


const OurBeans = ({photo, title, topText, bottomText}) => {
    return (
        <OurBeansSection>
            <div className="container">
                <div className="gridWrapper">
                    <div className="left">
                        <img src={photo} alt="girl with coffee"/>
                    </div>
                    <div className="right">
                        <h3>{title}</h3>
                        <Between margin='20'/>
                        <div className="descr">
                            {topText}
                            <br/>
                            <br/>
                            {bottomText}
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </OurBeansSection>
    )
}

export default OurBeans;