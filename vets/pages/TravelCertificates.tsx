import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import DiagnosticCompR1 from '../components/DiagnosticCompR1';
import DiagnosticCompR2 from '../components/DiagnosticCompR2';
import DiagnosticServicesSimpleGrid from '../components/DiagnosticServicesSimpleGrid';
import TravelCertificatesCompR1 from '../components/TravelCertificatesCompR1';
let pageHeader = 'Travel Certificates'
function TravelCertificates() {
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
      <Title order={1}>   --------  ------            {pageHeader}</Title>
        <h1>filllers</h1>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <TravelCertificatesCompR1/>
       
        
        {/* <Cards></Cards> */}
    </div>
  );
}

export default TravelCertificates;

