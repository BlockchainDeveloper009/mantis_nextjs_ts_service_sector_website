import { Box, Chip, Container, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import ChipsExample from '../components/ChipsExample';
function Faq() {


//
  return (
    <div className="App">
      <Box sx={{  color:'orange', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>

<Container>
  <Title order={4}>Q: Can i get return the medicine ordered online?</Title>
      A: No, we cannot take medicines back due to Covid threat
  <br></br>
  <br></br>
  <Title order={4}>Q: Can i pay by Cash?</Title>
      A: Yes, you can pay by Cash, Credit card or Debit card. 
  <br></br>
  <br></br>


  <Title order={4}>Q: Can i schedule Appointment online / over phone?</Title>
      A: Yes, you can book appointment on our website or call us to scheudle an appointment. 
  <br></br>
  <br></br>

  <Title order={4}>Q: Can i provide special instructions for my pet?</Title>
      A: Yes, we do appreciate our clients provide special instructions to serve our clients better. We  accomodate most special requests which are in our control. for eg: My pet is sensitive to bright lights, can you provide a room with dim light? 
  <br></br>
  <br></br>


  <Title order={4}>Q: Can i request for a doctor who speaks spanish?</Title>
      A: Yes, you can request. However, its subject to Doctors availability(who can speak spanish)

  <br></br>
  <br></br>

  <Title order={4}>Q:You got more questions?</Title>
      A: Please call our clinic @832-991-8811
      
  <br></br>
  <br></br>
</Container>
      </Box>
    </div>
  );
}

export default Faq;

