import { Chip, Rating, Title, createStyles, Group, Stack, Box, Container } from '@mantine/core';
import { useEffect, useState } from "react";
function FeedbackRating() {
    // const [value, setValue] = useState(['react']);
    const [valuedata, setValue] = useState(0);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(valuedata)
    })
    

  return (
    <div className="App">
    <Box sx={{  color:'orange', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
    
    <Container>
    <Title >How did we do??</Title>
    <br></br>
<Stack>
<div>Overall Rating</div>
<Rating value={valuedata} onChange={setValue}>Rate us</Rating>

      <Group>
        <div>Clinic Friendly</div>
        <Rating fractions={2} defaultValue={4.5} />
      </Group>
      <Group>
        <div>Provider Support</div>
        <Rating fractions={3} defaultValue={4.33333333} />
      </Group>
      <Group>
        <div>Cleaniness</div>
        <Rating fractions={4} defaultValue={4} />
      </Group>
  </Stack>
    </Container>
    <br></br>
    </Box>
   {/* <Chip.Group position="center" multiple defaultValue={['react']}>
      ggggggggggggggg
       <Chip classNames={classes} value="react">React</Chip>
      <Chip classNames={classes} value="ng">Angular</Chip>
      <Chip classNames={classes} value="vue">Vue</Chip>
      <Chip classNames={classes} value="svelte">Svelte</Chip> 
    </Chip.Group>*/}

    </div>
  );
}

export default FeedbackRating;

