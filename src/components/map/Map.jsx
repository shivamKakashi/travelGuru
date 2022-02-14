import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

import useStyles from './style'

const Map =({ setCoordinates,setBounds,coordinates,places }) => {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  // const coordinates = {lat: 26.84, lng: 80.94};

  // useEffect(()=>{
  //   if(bounds){
  //   console.log("coordinates",coordinates)
  //   console.log("bounds",bounds)
  //   getPlacesData(bounds.ne,bounds.sw)
  //     .then((data)=>{
  //       console.log("data:",data)
  //       setPlaces(data)
  //     })
  //   }
  //   },[coordinates, bounds])

  return (
    <div className= { classes.mapContainer}>
  <GoogleMapReact
  bootstrapURLKeys={{ key:'AIzaSyAr0uzbbGInR8TaRh2GkQrmL6Oi0AZGL8g'}}
  defaultCenter={{lat: 26.8470, lng: 80.9470}}
  center = {coordinates}
  defaultZoom ={14}
  margin = {[50, 50, 50, 50]}
  options = {''}
  onChange = {(e) => {
    console.log("e.marginBounds.ne:",e.marginBounds.ne,"e.marginBounds.sw:",e.marginBounds.sw)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
  onChildClick ={(e)=>null}
  >
  {places?.map((place, i)=>(
    <div
        className={classes.markerContainer}
        lat = {Number(place.latitude)}
        lng = {Number(place.longitude)}
        key={i}
        >
          {
            !isDesktop?(
              <LocationOnOutlined color="primary" fontSize="large"/>
            ):(
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={place.photo?place.photo.images.large.url : 'https://cdn.dribbble.com/users/6268398/screenshots/14575411/restaurant-logo-mockup-1_4x.png'}
                  alt={place.name}>

                </img>
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )
          }

        </div>
  ))}

  </GoogleMapReact>

  </div>)
  
}

export default Map;
