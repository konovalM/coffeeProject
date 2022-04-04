import styled from 'styled-components'
import coffee from '../../../images/thirdCoffee.jpg'
import {Component} from "react";

const FilterTag = styled.section`
  padding: 60px 0 30px;

  .container {
    max-width: 1180px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .filters {
    max-width: 700px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  .lookFor {
    display: flex;
    align-items: center;

    .lookText {
      margin-right: 19px;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }

    .input {
      background: #FFFFFF;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      font-size: 12px;
      width: 180px;
      height: 30px;
      border: none;
      padding: 0 10px;
    }

    .input::placeholder {
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);

    }
  }

  .filter {
    display: flex;
    align-items: center;

    .filterText {
      margin-right: 35px;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }

    button {
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
      cursor: pointer;
      transition: background-color .3s;

      :last-child {
        margin: 0;
      }
    }

    .active {
      background-color: #eeb400;
    }
  }

  .gridWrapper {
    display: grid;
    justify-content: center;
    max-width: 900px;
    margin: 60px auto 0;
    grid-template-columns: repeat(auto-fit, 220px);
    grid-column-gap: 70px;
    grid-template-rows: minmax(260px, auto);
    grid-auto-rows: minmax(260px, auto);
    grid-row-gap: 60px;

    .item {
      filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
      padding: 37px 27px 22px 26px;
      background: #FFFFFF;
      border-radius: 8px;
      cursor: pointer;
      transition: filter .3s;

      :hover {
        filter: drop-shadow(5px 5px 35px rgba(0, 0, 0, 0.25));
      }
    }

    .name {
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      color: #000000;
      margin-top: 14px;
    }

    .country {
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      color: #000000;
      margin-top: 14px;
    }

    .price {
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      color: #000000;
      margin-top: 14px;
    }
  }


`

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99$',
                    id: 1
                },
                {
                    name: 'Americano Coffee 1 kg',
                    country: 'Kenya',
                    price: '6.99$',
                    id: 2
                },
                {
                    name: 'Espresso Coffee 1 kg',
                    country: 'Columbia',
                    price: '6.99$',
                    id: 3
                },
                {
                    name: 'Irish Coffee 1 kg',
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
                    name: 'Lungo Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99$',
                    id: 6
                }
            ],
            value: '',
            activeBtn: ''
        }
    }

    searchData = (value, data) => {
        if (value === ''){
            return data
        }
        return data.filter(obj => (obj.name.toLowerCase().indexOf(value.toLowerCase()) > -1))
    }

    filterData = (value, data) => {
        switch (value){
            case 'Brazil': return data.filter(obj => obj.country === value);
            case 'Columbia': return data.filter(obj => obj.country === value);
            case 'Kenya': return data.filter(obj => obj.country === value);
            default: return data;
        }

    }

    changeValue = (e) => {
        this.setState({value: e.target.value})
    }

    changeButton = (e) => {
        console.log(e.target.innerHTML, this.state.activeBtn)
        if (e.target.innerHTML === this.state.activeBtn){
            this.setState({activeBtn: ''})
            return;
        }
        this.setState({activeBtn: e.target.innerHTML})
    }

    render() {
        const {value, data, activeBtn} = this.state
        let visibleData = this.searchData(value, data)
        let lastData = this.filterData(activeBtn, visibleData)

        return (
            <FilterTag>
                <div className="container">
                    <div className="filters">
                        <div className="lookFor">
                            <div className="lookText">
                                Looking for
                            </div>
                            <input type="text" className='input' placeholder='start typing here...' onChange={(e) => this.changeValue(e)}/>
                        </div>
                        <div className="filter">
                            <div className="filterText">
                                Or filter
                            </div>
                            <button className={activeBtn === 'Brazil' ? 'active' : ''} onClick={(e) => this.changeButton(e)}>Brazil</button>
                            <button className={activeBtn === 'Kenya' ? 'active' : ''} onClick={(e) => this.changeButton(e)}>Kenya</button>
                            <button className={activeBtn === 'Columbia' ? 'active' : ''} onClick={(e) => this.changeButton(e)}>Columbia</button>
                        </div>
                    </div>
                    <div className="gridWrapper">
                        {lastData.map(obj => {
                            return (
                                <div className='item' key={obj.id}>
                                    <img src={coffee} alt="coffee"/>
                                    <div className="name">{obj.name}</div>
                                    <div className="country">{obj.country}</div>
                                    <div className="price">{obj.price}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </FilterTag>
        )
    }


}

export default Filter;