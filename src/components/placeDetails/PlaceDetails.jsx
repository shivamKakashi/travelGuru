import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import  LocationOnIcon  from "@material-ui/icons/LocationOn";
import  PhoneIcon  from "@material-ui/icons/Phone";

import useStyles from "./style";

function PlaceDetails({ place }) {

  const classes = useStyles();
  // console.log("place", place.ranking)
  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 350 }} 
                  image ={place.photo?place.photo.images.large.url : 'https://cdn.dribbble.com/users/6268398/screenshots/14575411/restaurant-logo-mockup-1_4x.png'}
                  title ={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1' >Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1' >Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award)=>(
          <Box key={award.display_name} my={1} display='flex' justifyContent='space-between' alignItems='centre'>
            <img src={award.images.small} alt={award.display_name}/>
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name })=>(
            <Chip key={name} size='small' label={name} className={classes.chip}/>
        ))}
        {place?.address &&(
          <Typography key={place.location_id} gutterBottom variant="subtitle2" color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon/>{place.address}
          </Typography> 
        )}
        {place?.phone &&(
          <Typography key={place.phone} gutterBottom variant="subtitle2" color='textSecondary' className={classes.spacing}>
            <PhoneIcon/>{place.phone}
          </Typography> 
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>window.open(place.web_url, '_blank')}>Trip Advisor</Button>
        <Button size="small" color="primary" onClick={()=>window.open(place.website, '_blank')}>Website</Button>
      </CardActions>

    </Card>
  );
}

export default PlaceDetails;