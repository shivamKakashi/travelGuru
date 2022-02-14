import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import data from "./in.json"

import { getPlacesData } from "../../api";

import { Toolbar, AppBar, Typography ,TextField} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Style"
import useStyles from './style'

function Header({ setCoordinates, setBounds }) {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] =useState(null);
  

  const onPlaceChanged =(_event,newCity) =>{
    // console.log(_event)
    setAutocomplete(newCity)

    settingLocation(newCity)
  }

  const settingLocation=(newCity)=>{

    if(newCity!=null){
      const lat = Number(newCity?.lat);
      const lng = Number(newCity?.lng);
      // console.log("lat",lat,"lng",lng)
      
      setCoordinates({lat,lng})
      
      // const newNElat = lat+(13.118948196258401-13.082499999999982)
      // const newNElng = lng+(80.33920135498045-80.27499999999998)

      // const newSWlat = lat-(13.082499999999982-13.04604641481373)
      // const newSWlng = lng-(80.27499999999998-80.21079864501951)

      
      }
      else if(newCity==null) {
        console.log("it's empty")
      }else{
        console.log("its another thing")
      }
  }
// useEffect(()=>{
//     console.log("coordinates",coordinates,"bounds",bounds )

//     getPlacesData(bounds.ne,bounds.sw)
//       .then((data)=>{
//         console.log("data", data)
//         setPlaces(data)
//       })
// },[coordinates, bounds])


  // console.log("autocomplete", autocomplete)
  return (
   <AppBar position="static">
     <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.title}>
        Travel Advisor
      </Typography>
      <Typography variant="h6" className={classes.title}>
        Explore New Places
      </Typography>
      <Autocomplete
      className={classes.search}
      id="cities"
      options={data}
      renderInput={params => (
        <TextField {...params} label="Cities" variant="outlined" />)}
      getOptionLabel={option => option.city}
      value={autocomplete}
      onChange={onPlaceChanged}

      // inputValue={autocomplete}
      // onInputChange={onPlaceChanged}
    >
      <SearchIcon/>
    </Autocomplete>
     </Toolbar>
   </AppBar>
  );
}

export default Header;
