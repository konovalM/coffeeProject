import styled from 'styled-components'
import coffee from '../../../images/thirdCoffee.jpg'

const FilterTag = styled.section`
  padding: 60px 0 30px;
  .container{
    max-width: 1180px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .filters{
    max-width: 700px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  .lookFor{
    display: flex;
    align-items: center;
    .lookText{
      margin-right: 19px;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
    .input{
      background: #FFFFFF;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      font-size: 12px;
      width: 180px;
      height: 30px;
      border: none;
    }
    .input::placeholder{
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);

    }
  }
  .filter{
    display: flex;
    align-items: center;
    .filterText{
      margin-right: 35px;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
    button{
      width: 75px;
      height: 30px;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #000000;
      border: none;
      background: #FFFFFF;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px 0px 0px 4px;
      margin-right: 5px;
      :last-child{
        margin: 0;
      }
    }
  }
  .gridWrapper{
    display: grid;
    justify-content: center;
    max-width: 900px;
    margin: 60px auto 0;
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
  }
`

const Filter = () => {
    return (
        <FilterTag>
            <div className="container">
                <div className="filters">
                    <div className="lookFor">
                        <div className="lookText">
                            Looking for
                        </div>
                        <input type="text" className='input' placeholder='start typing here...'/>
                    </div>
                    <div className="filter">
                        <div className="filterText">
                            Or filter
                        </div>
                        <button>Brazil</button>
                        <button>Kenya</button>
                        <button>Columbia</button>
                    </div>
                </div>
                <div className="gridWrapper">
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Brazil</div>
                        <div className="price">6.99$</div>
                    </div>
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Kenya</div>
                        <div className="price">6.99$</div>
                    </div>
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Columbia</div>
                        <div className="price">6.99$</div>
                    </div>
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Brazil</div>
                        <div className="price">6.99$</div>
                    </div>
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Brazil</div>
                        <div className="price">6.99$</div>
                    </div>
                    <div className="item">
                        <img src={coffee} alt="coffee"/>
                        <div className="name">AROMISTICO Coffee 1 kg</div>
                        <div className="country">Brazil</div>
                        <div className="price">6.99$</div>
                    </div>
                </div>
            </div>
        </FilterTag>
    )
}

export default Filter;