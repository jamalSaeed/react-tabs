import React, { useContext, useState } from 'react';
import { TextField, Grid, IconButton, Button, Box, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faStar, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import DataContext from '../dataContext';


const theme = createTheme();
export const faIcons = [faCoffee, faHeart, faStar, faSun, faUser];


const Form = () => {
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const { data, addItem, deleteItem } = useContext(DataContext);
  


  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleAddTab = () =>{
    const newItem = {
      name: name,
      icon: selectedIcon,
      id: data.length + 1,
    };
    addItem(newItem);
    console.log("data is ", data)
  }

  return (
    <ThemeProvider theme={theme}>
      <form >
        <Grid  style={{display:"flex", justifyContent:"center"}} container spacing={2} alignItems="center">
          <Grid style={{display:"flex", justifyContent:"center"}} item xs={12}>
            <TextField
              label="Name of Tab"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
         

            <Grid style={{display:"flex", justifyContent:"center"}} container spacing={1}>
              {faIcons?.map((icon, index) => (
                <Grid item key={index}>
                  <IconButton
                    onClick={() => handleIconClick(index)}
                    color={selectedIcon === index ? 'primary' : 'default'}
                  >
                    <FontAwesomeIcon icon={icon} /> {/* Use FontAwesomeIcon to render the icon */}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Box style={{display:"flex", justifyContent:"center", width:"10%"}}>

          <Button onClick={handleAddTab} style={{textTransform:"capitalize", backgroundColor:"blueviolet", color:"white"}}>
            Create Tab
          </Button>
          </Box>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default Form;
