import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import PreventiveCareComp from '../components/PreventiveCareComp';
const thisPageHeader= 'Preventive Care & other Packages';
function PreventiveCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
    <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, 
    paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      
      <Title order={1}> {thisPageHeader}</Title>
      <div>
      <PreventiveCareComp/>
      </div>
      </Box>  
    </div>
  );
}

export default PreventiveCare;

