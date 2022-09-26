import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react'
import CardContent from '@mui/material/CardContent';
import { Box,Button,CardActionArea, CardActions, Modal } from '@mui/material';
import style from "./flag.module.css"

const FlagCard=({mainmodel}) => {
    const [open, setOpen]=useState(false);
    const mybtn=()=>setOpen(true);
    const mainclose=()=>setOpen(false);
   console.log(mainmodel)
  return (
    <div><Card sx={{ maxWidth: 250, height: 420 }} columns={{xs:1,sm:3,md:4}}> <CardActionArea >
          <CardMedia component="img" height="180" width="100%" image={mainmodel.flags.png } alt="country-flag" />
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div" height="100">
              {mainmodel.altSpellings[1] || mainmodel.altSpellings[2] || mainmodel.altSpellings[0]}
            </Typography>
            <Typography variant="bod2" component="div"> Population: {mainmodel.population}</Typography>
            <Typography variant="body2"  component="div">  Region: {mainmodel.region}</Typography>
            <Typography variant="body2" component="div"> Capital: {mainmodel.capital}</Typography>
          </CardContent>
          <CardActions><Button style={{backgroundColor:'navy', color:'white' }} onClick={mybtn}>More Info</Button></CardActions>
        </CardActionArea>
        </Card>
      <Modal open={open} onClose={mainclose}  background-color="white">
        <Box>
          <Typography  className={style.subbox} id="subbox" sx={{ mt:29, ml:75}}>
- Sub Region:{mainmodel.region}
- Native name: 
- Currency Name:
- Language Names:
- Border Countries:
          </Typography>
        </Box>
     
      </Modal>
     
     

    </div>
  )
}

export default FlagCard