import { Box, Text, Button, Chip, createStyles, Spoiler, Stack, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
function ConfirmAppointment() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
     

      
      {/* Content here */}

    <Box sx={{ maxWidth: 400,paddingTop:200}} mx="auto">


    
 
       <Title order={1}>Appointment Confirmed</Title>
      
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 100 })}>
      <Text c="red">You Appointment has been scheduled successfully, you should receive an confirmation email from us. if not call us to confirm.</Text>

    </Stack>

 
      
    </Box>
       
    </div>
  );
}

export default ConfirmAppointment;

