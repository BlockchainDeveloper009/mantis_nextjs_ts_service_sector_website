import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import PreventiveCareComp from '../components/PreventiveCareComp';
const thisPageHeader= ' Preventive Care';
function CardsPage() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <a>testing address .........</a>
      <div> <h1>KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</h1></div>
      <div> <h1>      ooooooooooooo      {thisPageHeader}</h1></div>
      <Title order={1}>   --------  ------            {thisPageHeader}</Title>
      <div>
      <PreventiveCareComp/>
      </div>
       
    </div>
  );
}

export default CardsPage;

