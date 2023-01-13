import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Button,
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
//import ChipsExample from './ChipsExample';

// import { 
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Routes 
// } from "react-router-dom";
import Link from "next/link";
import ChipsExample from './ChipsExample';
import ApplicationContainer from '../pages/ApplicationContainer';
import { useRouter } from 'next/navigation';
import GeneralFooter from './GeneralFooter';

// import Cards from './Cards';

// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import WagmiWillsFormEdit from './WillsFormEdit';
// import WillsFormEdit from './WillsFormEdit';

const Applicationfooter = "2022 all copyright resverved to Inherit Blocks"
function AppShellLinkExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  return (
    
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg:200 }}>
          <Text>Application navbar</Text>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
            <div style={{display: "flex", flexDirection: "column"}}>
                 
                    <Link href="/">
                      ApplicationContainer0
                    </Link>
                    
               
                    <Link href="/ChipsExamplePage">
                    ChipsExamplePage
                    </Link>
                    <Link href="/ChipsExample">
                    ChipsExample
                    </Link>
                    <Link href="/CardsPage">
                    Cards
                    </Link>
                    <Link href="/AdvancedCare">
                      Advanced Care
                    </Link>
                    <Link href="/ApplicationContainer">
                      Canine and Feline Diabetes
                    </Link>
                    <Link href="/ApplicationContainer">
                      Pet Boarding
                    </Link>
                    <Link href="/PetCounseling">
                      Pet Counseling
                    </Link>
                    <Link href="/PreventiveCare">
                      Preventive Care
                    </Link>
                     <Link href="/PreventiveCareClinic">
                      Preventive Care Clinic
                    </Link>
                    <Link href="/PrimaryCare">
                      Primary Care
                    </Link>
                    <Link href="/EverydayCare">
                    Everyday Care
                    </Link>
                   
                   
              </div>

          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 150 }}>
            <Text>Application sidebar</Text>
            
           
           <Link href="/Helpfullinks">
             Helpful Links
           </Link>
           <Link href="/Faq">
             FAQ
           </Link>
           <Link href="/ClinicPolicy">
           CLINIC POLICY
           </Link>
           
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Text>Contact</Text>
          <Text>Location</Text>
          <Text>Hours & Info</Text>
          <GeneralFooter/>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Amigos Vets</Text>
            
            <Text><Link href="/AboutUs" target={'_blank'}>AboutUs</Link></Text>
            <Text><Link href="/Team" target={'_blank'}>Our Team</Link></Text>
            
            <Text><Link href="/ContactUs" target={'_blank'}>ContactUs</Link></Text>
             <Text><Link href="https://goo.gl/maps/z4JxxUxyLbo43riG8" target={'_blank'}>Get Directions</Link></Text>
            <Button styles = {(theme) => ({
        root: {
            border: 0,
            height: 50,
            paddingRight: 60,
            '&:hover': {
                paddingLeft:100 
            }
        }
      })} variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={()=> router.push('/BookAppointment')}>Book Appointment</Button>
          </div>
        </Header>
      }
    >
   
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
   
    
  );
  
}

export default AppShellLinkExample;
