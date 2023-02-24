import { Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
function Rating() {
    // const [value, setValue] = useState(['react']);
    const [value, setValue] = useState(0);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })
    

  return (
    <div className="App">
     <Rating value={value} onChange={setValue} />;
    <Chip.Group position="center" multiple defaultValue={['react']}>
      ggggggggggggggg
      {/* <Chip classNames={classes} value="react">React</Chip>
      <Chip classNames={classes} value="ng">Angular</Chip>
      <Chip classNames={classes} value="vue">Vue</Chip>
      <Chip classNames={classes} value="svelte">Svelte</Chip> */}
    </Chip.Group>

    </div>
  );
}

export default Rating;

