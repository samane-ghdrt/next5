"use client"
import * as React from 'react';
import {List,ListItem,ListItemButton,ListItemText,IconButton} from '@mui/material';
import CommentIcon from "@mui/icons-material/Comment";
export default function ListI({items}){
   if (!items || items.length === 0) {
    return <p>No users found</p>;
  }
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value.firstName);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemText id={labelId} primary={`Line item ${value.id + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}