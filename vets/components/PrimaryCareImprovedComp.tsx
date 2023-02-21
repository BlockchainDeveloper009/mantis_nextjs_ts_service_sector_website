
import { Box, Button, Loader, MantineProvider, Paper, ScrollArea, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import  {gridData}  from '../hooks/gridData';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= [
    'Dentistry',
    'Parasite Control (Fleas, Ticks & Heartworms)',
    'Microchipping', 
    'Wellness & Preventive Care']
const GridDesc= [
    'Annual dental exams and cleanings are recommended to protect your pet from many health problems and help them maintain a healthy and clean mouth.',
    'Parasites such as fleas and ticks can be very damaging to your pet’s health. Preventive measures should be taken year-round to inhibit potential outbreaks.',
'Microchip identification is the most reliable way to reunite lost pets with their owners.',
'Annual wellness exams evaluate your pets overall health, detect problems before they become serious, and keep them on track to live a long, healthy life.',
''
]

const GridPreventiveCareImages= [ 
    "/images/Dentistry1.PNG", 
    "/images/Fleas1.PNG", 
    "/images/1.PNG"]

function PrimaryCareImprovedComp() {

    const router = useRouter();
const gotoDentistry = ()=> {router.push('/Dentistry')}
const gotoHome = ()=> {router.push('/')}
const gotoHome3 = ()=> {router.push('/3')}
const gotoHome4 = ()=> {router.push('/4')}
const gotoHome5 = ()=> {router.push('/5')}
const grid = [
    new gridData(GridDesc[0],GridHeaders[0],"/images/Dentistry1.PNG",gotoDentistry),
    new gridData(GridDesc[1],GridHeaders[1],"/images/Fleas1.PNG",gotoHome),
    new gridData(GridDesc[2],GridHeaders[2],"/images/1.PNG",gotoHome3),
    new gridData(GridDesc[1],GridHeaders[1],"/images/Fleas1.PNG",gotoHome4),
    new gridData(GridDesc[1],GridHeaders[1],"/images/Fleas1.PNG",gotoHome5),
]
    const viewport = useRef<HTMLDivElement>(null);
    // const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });
    let np="";
const features = grid.map((m) => {
    return (
        <>
            <Grid.Col span={4} styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={m.imageurl}
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{m.header}</Text>
                       
                    </Group>

                    <Text size="sm" color="dimmed">
                        {m.desc1}
                    </Text>
                    { np =  m.nextPage}
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                    onClick={m.co}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>  
        </>
    )
})
  return (
    <div className="App">
        
        <Grid justify="Center">
        {/* <ScrollArea style={{ width: 5000, height: 5000 }} viewportRef={viewport}> */}
        {/* ... content */}
      
           


           

            {features}
            {/* </ScrollArea> */}
        </Grid>
        
    </div>      
  );
} 

export default PrimaryCareImprovedComp;
