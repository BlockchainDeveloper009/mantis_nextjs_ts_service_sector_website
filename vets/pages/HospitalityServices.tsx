import { Chip, createStyles, Title } from '@mantine/core';
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
      <a>testing address .........</a>
      <h1>filllers</h1>
      <h1>filllers</h1>
      <Title order={1}> ----------------- {thisPageHeader}</Title>
        <h1>filllers</h1>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <HospitalityServicesComp1/>
       
        
        {/* <Cards></Cards> */}
    </div>
  );
}

export default HospitalityServices;

