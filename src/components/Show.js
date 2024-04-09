import React from 'react'
import DetailsCard from './DetailsCard'
import store from '../Store/store'
import { addCountry } from '../Store/CountrySlice'
import {useSelector} from 'react-redux'

function Show() {
    const countryData = useSelector(state => state.countrydata);

    const detailsCards = [];

    // Loop through countryData and create DetailsCard components
    for (let i = 0; i < countryData.length; i++) {
        const name = countryData[i].name.common;
        const capital =countryData[i].capital;
        const region = countryData[i].region
        detailsCards.push(<DetailsCard  name={name} capital={capital} region={region}/>);
    }
  return (
    
    <div className='flex-wrap'>

       {
        detailsCards
       }

    </div>
  )
}

export default Show