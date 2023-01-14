import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import PrimaryCareComp from '../components/PrimaryCareComp';
const PageHeader="Primary Care";
function PrimaryCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <h1>{PageHeader}</h1>
      <h1>{PageHeader}</h1>
      <Title order={1}>   --------  ------            {PageHeader}</Title>
      <h1>{PageHeader}</h1>
       <PrimaryCareComp />
    </div>
  );
}

export default PrimaryCare;

