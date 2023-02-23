import { Box, Text, Button, Chip, createStyles, Spoiler, Stack, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
function ContactUs() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <a>testing address .........</a>

      
      {/* Content here */}

      <article>
      Timings:
        Mon-Fri : 8am - 6pm 
        Sat : 8am - 5pm 
        Sun: Holiday
        </article>
       
        <article>
            Phone Number: +18329918811

            Customer Feedback:
            Address: 4215 Spencer Hwy, Pasadena, TX 77504
        </article>
   

        <Box sx={{ maxWidth: 400,paddingTop:200}} mx="auto">


    
 
<Title order={1} >Contact Us</Title>

 <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>

<Button variant="outline">Email : amigopets@gmail.com</Button>
<Button variant="outline">Mobile : 832-991-8811 </Button>
<Button variant="outline"> <a href='https://goo.gl/maps/8QJQLefRw1aWbfAR9'>4215 Spencer Hwy, Pasadena, TX 77504</a></Button>
</Stack>



</Box>
       
    </div>
  );
}

export default ContactUs;

