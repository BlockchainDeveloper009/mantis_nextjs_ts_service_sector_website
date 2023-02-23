import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";


import HospitalityServicesComp1 from '../components/HospitalityServicesComp1';
const thisPageHeader= 'Hospitality Services';
function HospitalityServices() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:300, paddingLeft:200, paddingRight:200,}}>
{/* // <Box sx={{ maxWidth: 1000,paddingTop:200}} mx="auto"> */}
<Title order={1} > {thisPageHeader}</Title>
<Box sx={{ maxWidth: 1000,paddingTop:200}} mx="auto">


        
        {/* <DiagnosticServicesSimpleGrid/> */}
        <HospitalityServicesComp1/>
</Box>
     
       
        
        </Box>
    </div>
  );
}

export default HospitalityServices;

