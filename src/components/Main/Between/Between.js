import s from './Between.module.css'
import beans from "../../../images/beansBlack.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.margin}px;
`

const ImgWrapper = styled.div`
  position: relative;
  ::before, ::after{
    content: '';
    width: 60px;
    height: 1px;
    background-color: #000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ::before{
    left: -85px;
  }
  ::after{
    right: -85px;
  }
  
`

const Between = ({margin}) => {
    console.log(margin)
    return(
        <Wrapper margin={margin}>
            <ImgWrapper>
                <img src={beans} alt="beans"/>
            </ImgWrapper>
        </Wrapper>
    )
}

export default Between