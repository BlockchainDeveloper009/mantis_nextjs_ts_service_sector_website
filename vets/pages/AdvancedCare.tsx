import { Box, Chip, createStyles, Table, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
function AdvancedCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })
    const elements = [
      { position: 'Visitng Consultation / Pet Exam / Consulta', mass: 12.011, price: '$20' },
      { position: 'Vaccination Visit (Existing Clients)', mass: 14.007, price: '$10', name: 'Nitrogen' },
      { position: 'Emergency Visit', mass: 88.906, price: '$45', name: 'Yttrium' },
      { position: 'Same Day Appointment', mass: 137.33, price: '$30', name: 'Barium' },
     
    ];

    const puppyPackagePricing = [
      { position: 'PUPPY PACK 1', Treatment: 'DHPP', Price: '$32' },
      { position: 'PUPPY PACK 2', Treatment: 'DHPP + LEPTO', Price: '$45' },
      { position: 'PUPPY PACK 3', Treatment: 'DHPP + BORDETELLA', Price: '$37' },
      { position: 'PUPPY PACK 4', Treatment: 'DHLPP + RABIES + BORDATELLA', Price: '$62' },
      { position: 'ADULT ANNUAL PACK', Treatment: 'DHLPP + RABIES + BORDATELLA + HEARTWORM TEST', Price: '$89' },
     
    ];
    const catPackagePricing = [
      { position: 'CHIP', Treatment: 'MICROCHIP + REGISTRATION', Price: '$39' },
      { position: 'CAT PACK 2', Treatment: 'RABIES\n FELINE LEUKEMIA RHINOTRACHEITIS CALICIVIRUS \n PANLEUKOPENA CHLAMYDOPHILA ', Price: '$45' },
      { position: ' ANNUAL CAT PACK 3', Treatment: 'DHPP + BORDETELLA', Price: '$75' },
      { position: 'PUPPY PACK 4', Treatment: 'xray', Price: '$99' },
      { position: 'Others', Treatment: 'X-RAY STARTS AT $99', Price: '$99' },
      { position: 'Others', Treatment: 'BLOOD WORK STARTS ', Price: '$99' },
      { position: 'Others', Treatment: 'THYROID TEST', Price: '$55' },
      { position: 'Others', Treatment: 'PREGNANCY TEST', Price: '$60' },
     
    ];
    const rows = elements.map((element) => (
      <tr key={element.name}>
        <td>{element.position}</td>
        
        <td>{element.price}</td>
       
      </tr>
    ));

    const puppyPackageRows = puppyPackagePricing.map((element) => (
      <tr key={element.position}>
        <td>{element.position}</td>
        <td>{element.Treatment}</td>
        <td>{element.Price}</td>
        
      </tr>


    ));

    const catPackageRows = catPackagePricing.map((element) => (
      <tr key={element.position}>
        <td>{element.position}</td>
        <td>{element.Treatment}</td>
        <td>{element.Price}</td>
        
      </tr>

      
    ));
  return (
    <div className="App">
        <Box sx={{ maxWidth: 1000,paddingTop:200}} mx="auto">
          <Title order={2}>Visiting Category</Title>
        <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Visit Category</th>
          <th>Price</th>
         
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>

    <Title order={2}>Puppy Package Prices</Title>
    <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Package Name</th>
          <th>Treatment</th>
          <th>Price</th>
          
          
        </tr>
      </thead>
      <tbody>{packageRows}</tbody>
    </Table>

    <Title order={2}>Cat Package Prices</Title>
    <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Package Name</th>
          <th>Treatment</th>
          <th>Price</th>
          
          
        </tr>
      </thead>
      <tbody>{packageRows}</tbody>
    </Table>
        </Box>
    </div>
  );
}

export default AdvancedCare;

