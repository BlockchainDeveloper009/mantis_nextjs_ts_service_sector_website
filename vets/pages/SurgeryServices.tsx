import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import DiagnosticCompR1 from '../components/DiagnosticCompR1';
import DiagnosticCompR2 from '../components/DiagnosticCompR2';
import DiagnosticServicesSimpleGrid from '../components/DiagnosticServicesSimpleGrid';
import SurgeryServicesCompR1 from '../components/SurgeryServicesCompR1';
import SurgeryServicesCompR2 from '../components/SurgeryServicesCompR2';
function SurgeryServices() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <a>testing address .........</a>
      <h1>filllers</h1>
      <h1>        Surgery Services          </h1>
      <Title order={1}>   ---------------            Surgery Services</Title>
        <h1>filllers</h1>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <SurgeryServicesCompR1/>
        <SurgeryServicesCompR2/>
       
        
        {/* <Cards></Cards> */}
    </div>
  );
}

export default SurgeryServices;

