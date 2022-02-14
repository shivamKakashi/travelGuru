import React, { useState,useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";
import Map from "./components/map/Map";

const App = () => {

  const [places,setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState({})
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}})=>{
      setCoordinates({lat:latitude, lng: longitude});      
    })
  },[])

  useEffect(()=>{
    if(bounds){
    console.log("coordinates",coordinates)
    console.log("bounds",bounds)
    getPlacesData(bounds.ne,bounds.sw)
      .then((data)=>{
        console.log("data:",data)
        setPlaces(data.filter((place)=>place.name && place.num_reviews> 0))
      })
    }
    },[coordinates, bounds])

  console.log('places:',places)
  return (
    <>
      <CssBaseline />
      <Header coordinates={coordinates} bounds={bounds} setCoordinates={setCoordinates} setPlaces={setPlaces} setBounds={setBounds}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Lists places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds= {setBounds}
            coordinates = {coordinates}
            places = {places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
