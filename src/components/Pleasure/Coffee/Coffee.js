import {Fragment} from "react";
import coffee from "../../../images/thirdCoffee.jpg";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 900px;
  margin: 60px auto 30px;
  grid-template-columns: repeat(auto-fit, 220px);
  grid-column-gap: 70px;
  grid-template-rows: minmax(260px, auto);
  grid-auto-rows: minmax(260px, auto);
  grid-row-gap: 60px;
  .item{
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    padding: 37px 27px 22px 26px;
    background: #FFFFFF;
    border-radius: 8px;
    cursor: pointer;
    transition: filter .3s;
    :hover{
      filter: drop-shadow(5px 5px 35px rgba(0, 0, 0, 0.25));
    }
  }
  .name{
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #000000;
    margin-top: 14px;
  }
  .country{
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #000000;
    margin-top: 14px;
  }
  .price{
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #000000;
    margin-top: 14px;
  }
`


const Coffee = () => {
    const data = [
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: '6.99$',
            id: 1
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            price: '6.99$',
            id: 2
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            price: '6.99$',
            id: 3
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: '6.99$',
            id: 4
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: '6.99$',
            id: 5
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: '6.99$',
            id: 6
        }
    ]
    return (
        <Fragment>
            <Wrapper>
                {data.map(obj => {
                    return (
                        <div className='item' key={obj.id}>
                            <img src={coffee} alt="coffee"/>
                            <div className="name">{obj.name}</div>
                            <div className="country">{obj.country}</div>
                            <div className="price">{obj.price}</div>
                        </div>
                    )
                })}
            </Wrapper>
        </Fragment>
    )
}

export default Coffee