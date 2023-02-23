
import { Box, Chip, createStyles, Textarea, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import TravelCertificates from './TravelCertificates';
function PetBoarding() {
    const [value, setValue] = useState(['react']);
    const thisPageHeader= 'OrthopedicSurgery';
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
      <Textarea>
      Canine vaccines required include:
                    Distemper

                    Hepatitis

                    Parvovirus

                    Leptospirosis

                    Rabies

                    Bordetella

                    Parainfluenza
      </Textarea>
      </div>
      </Box> 

    </div>
  );
}

export default PetBoarding;

