import { Accordion, AccordionControlProps, ActionIcon, Box, Chip, ColorSchemeProvider, createStyles, Table, Title } from '@mantine/core';
import { IconDots } from '@tabler/icons';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <IconDots size={16} />
      </ActionIcon>
    </Box>
  );
}
function PricingAndPackages() {
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

  function getPuppyPackage(){
    return (

      <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor:'#FD7E14' ,//'#FD7E14', //,
          border: '1px solid #ededed',

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#5C5F66',//#ccc',
          },
          color: '#ccc',
        },
       
        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
       <Accordion.Item value="item-1">
        <AccordionControl><Title order={2}>Puppy Package Prices</Title></AccordionControl>
        <Accordion.Panel>
        <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Treatment</th>
            <th>Price</th>
            
            
          </tr>
        </thead>
        <tbody>{puppyPackageRows}</tbody>
      </Table>
        

        </Accordion.Panel>
      </Accordion.Item>
      
     
    </Accordion>

    )
  }

  function getDefaultPackage(){
    return (

      <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor:'#D9480F' ,//'#FD7E14', //,
          border: '1px solid #ededed',

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#5C5F66',//#ccc',
          },
          color: '#ccc',
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
       <Accordion.Item value="item-1">
        <AccordionControl><Title order={2}>Cat Package Prices</Title></AccordionControl>
        <Accordion.Panel>
        <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Treatment</th>
            <th>Price</th>
            
            
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
        

        </Accordion.Panel>
      </Accordion.Item>
      
     
    </Accordion>

    )
  }
  function getCatPackage(){
    return (

      <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor:'#D9480F' ,//'#FD7E14', //,
          border: '1px solid #ededed',

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#5C5F66',//#ccc',
          },
          color: '#ccc',
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
       <Accordion.Item value="item-1">
        <AccordionControl><Title order={2}>Cat Package Prices</Title></AccordionControl>
        <Accordion.Panel>
        <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Treatment</th>
            <th>Price</th>
            
            
          </tr>
        </thead>
        <tbody>{catPackageRows}</tbody>
      </Table>
        

        </Accordion.Panel>
      </Accordion.Item>
      
     
    </Accordion>

    )
  }

  return (
    <div className="App">
        <Box sx={{ maxWidth: 1000,paddingTop:200}} mx="auto">
          {/* //backgroundColor:'#D9480F' */}
         

          <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor:'#E8590C' ,//'#FD7E14', //,
          border: '1px solid #ededed',

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#5C5F66',//#ccc',
          },
          color: '#ccc',
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
       <Accordion.Item value="item-1">
        <AccordionControl><Title order={2}> Primary Care Prices</Title></AccordionControl>
        <Accordion.Panel>
   
        

        </Accordion.Panel>
      </Accordion.Item>
      
     
    </Accordion>
        <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Visit Category</th>
          <th>Price</th>
         
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>

    
   {getPuppyPackage()}

   {getCatPackage()}
        </Box>
    </div>
  );
}

export default PricingAndPackages;

