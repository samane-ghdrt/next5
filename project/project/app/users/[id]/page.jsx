
import { getData } from '@/utils/getData';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

export default async function page({params}) {
const usersData = await getData(`https://dummyjson.com/users/${params.id}`);
 
   return (
    
     <Grid container spacing={2}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          width="70"
          image={usersData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {usersData.name}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {usersData.body}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Grid>
      )
    }