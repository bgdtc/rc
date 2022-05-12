// IMPORTS MODULES
import '../weather/SearchBar.css'
import { MdGpsFixed, MdLocationCity } from 'react-icons/md'
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherShower } from 'react-icons/ti'
import { FaTemperatureLow } from 'react-icons/fa'
import { BsCloudFog } from 'react-icons/bs'
import { SiWindicss } from 'react-icons/si'
import { RiCloudOffLine } from 'react-icons/ri'
import React, { useState } from 'react'
// IMPORTS STORE
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../store'
import { getPrevisions } from '../../store/actions/PrevisionsActions'

// STORE DISPATCH
store.dispatch(getPrevisions())

// SearchBar MAIN FUNC
const SearchBar = () => {
    // STATES
    const [result, setResult] = useState()
    const [temp, setTemp] = useState()
    const [tempIcon, setTempIcon] = useState()
    const [wind, setWind] = useState()
    const [windIcon, setWindIcon] = useState()
    const [icon, setIcon] = useState()
    const [cityIcon, setCityIcon] = useState()

    // STORE VAR DISPATCH POUR L'UTILISER APRÈS
    const dispatch = useDispatch()
    // VARIABLE STATE
    const listPrevisions = useSelector(state => state.previsions.data)

    // FONCTION DE RECHERCHE
    const search = (query) => {
        // SI L'INPUT A < DE 3 CHARACTERES ALORS
        if (query.length < 3) {
            console.log("esquive api")
        } else {
        // SINON
            console.log("fonction test lancée")
            // UTILISATION DE GETPREVISIONS AVEC UNE QUERY
            dispatch(getPrevisions(query))
            console.log("POST DISPATCH", listPrevisions)

            // VARIABLES REPONSE
            let res = listPrevisions.current.condition.text
            let degres = listPrevisions.current.temp_c
            let vent = listPrevisions.current.gust_kph
            let clair = "Clair"
            let soleil = "Ensoleillé"
            let pluie = "Pluie légère"
            let pluie2 = "Pluie éparse à proximité"
            let brume = "Brume"
            let nuageux = "nuageux"
            let deminuageux = "Partiellement nuageux"
            let couvert = "Couvert"
            let peunuageux = "peu nuageux"
            let resIcon = <></>

            // COUVERT
            if (res === couvert) {
                resIcon = <TiWeatherCloudy color='grey' className='ResIcon' size={30} />
            }
            // DEMINUAGEUX
            else if (res === deminuageux) {
                resIcon = <TiWeatherCloudy color='grey' className='ResIcon' size={30} />
            }
            // SOLEIL
            else if (res === soleil) {
                resIcon = <TiWeatherSunny className='ResIcon' color='yellow' size={30} />
            }
            // CLAIR
            else if (res === clair) {
                resIcon = <RiCloudOffLine className='ResIcon' color='#21cdda' size={30} />
            }
            // PLUIE
            else if (res === pluie) {
                resIcon = <TiWeatherShower color='blue' className='ResIcon' size={30} />
            }
            // NUAGEUX
            else if (res === nuageux) {
                resIcon = <TiWeatherCloudy color='grey' className='ResIcon' size={30} />
            }
            // PEUNUAGEUX
            else if (res === peunuageux) {
                resIcon = <TiWeatherPartlySunny className='ResIcon' size={40} />
            }
            // BRUMEUX
            else if (res === brume) {
                resIcon = <BsCloudFog className='ResIcon' color='white' size={30} />
            }
            // PLUIE DEUX
            else if (res === pluie2) {
                resIcon = <TiWeatherShower color='blue' className='ResIcon' size={30} />
            }

            // APPLY CHANGES
            setResult(listPrevisions.location.name + ":   " + res)
            setTemp("température:  " + degres)
            setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
            setWind("vent: " + vent + " Km/h")
            setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)
            setIcon(resIcon)
            setCityIcon(<MdLocationCity size={20} />)
        }
    }

    // GET DATA USER LOCATION
    const GetUserLocationWeather = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
                    // let res = response.data.weather[0].description
                    // let degres = response.data.main.temp
                    // let vent = response.data.wind.speed
                    // setResult("Pays: " + response.data.sys.country + " latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude + res)
                    // setTemp(degres)
                    // setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
                    // setWind(vent)
                    // setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)

        })
    
    }

    // ON KEY DOWN RESET DATA
    function resetData() {
        setResult();
        setTemp();
        setTempIcon();
        setWind();
        setWindIcon();
        setIcon();
        setCityIcon();
    }
    // COMPOSANT HTML
    return (
        <div className='t'>
            <div className='iconDiv'>
                <input id='searchBar' onKeyUp={() => search(document.getElementById('searchBar').value)} onKeyDown={() => resetData()} type="text" placeholder='Ville...'/>
                <MdGpsFixed onClick={() => GetUserLocationWeather()} className='icon' color='white' size={40} />
            </div>
            <div className='result'>
                <h3>{cityIcon}{result}{icon}</h3>
                <h4>{temp} {tempIcon}</h4>
                <h4>{wind} {windIcon} </h4>
            </div>
        </div>
    )

}

export default SearchBar;