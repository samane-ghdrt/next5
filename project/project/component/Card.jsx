"use client"
import * as React from 'react';


import { Card,CardContent,CardMedia,Typography,Button,CardActionArea,CardActions, Grid} from '@mui/material';
import { useRouter } from 'next/navigation';


export default function MultiActionAreaCard({members,rout}) {

  const router=useRouter();
  return (
    <Grid container spacing={2}>
    {members.map((member)=>{
      return(
      <Grid item xs={12} sm={6} md={4} key={member.id}>
       <Card sx={{ maxWidth: 345 }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          width="70"
          image={member.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.maidenName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {member.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> router.push(`${rout}/${member.id}`)}>
          Details
        </Button>
      </CardActions>
    
    </Card>
    </Grid>
)})}
 </Grid>
  );
}