
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const PreventiveCareImages= [ 
    "/images/vaccine1.PNG", 
    "/images/vaccine1.PNG", 
    "/images/vaccine1.PNG"]
function PreventiveCareComp() {
    const router = useRouter();
  return (
    <div className="App">
        <Grid justify="Center">
            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={PreventiveCareImages[0]}
                        height={300}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Package1 - $20</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        Basic consultation
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/Radiography')}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>
            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src={PreventiveCareImages[0]}
                                height={300}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}> Emergency Visit</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                Emergency Visit - $45
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/')}>
                            
                                Hoem
                            </Button>
                           
                        </Card>
            </Grid.Col>
           
        </Grid>
     
    </div>
  );
} 

export default PreventiveCareComp;
