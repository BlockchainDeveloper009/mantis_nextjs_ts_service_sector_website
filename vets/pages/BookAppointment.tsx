import { Box, Button, Select, Textarea, TextInput, Title } from "@mantine/core";
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Calendar, TimeInput, TimeRangeInput } from '@mantine/dates';
//import { GitHubLogoIcon } from '@modulz/radix-icons';

function BookAppointment() {

  
    
    const [assetId, setAssetId] = useState('');
    const [willStartDate, setWillStartDate] = useState('');
    const [willEndDate, setWillEndDate] = useState('');
    const [benefitorAddr, setbenefitorAddr] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    
  
    const [submittedValues, setSubmittedValues] = useState('');
    let assets = [
        'General Visit','Vaccine','Emergency Care', 'Others'
         ];
  
    const assetIds = async () => {
      console.log(assetIds)
    }
    const form = useForm({
      initialValues: {
        petOwnerLastName: '',
        petOwnerFirstName: '',
        petName: '',
        petBreed: '',
        email: '',
        contactNumber:'',
        ReasonForVisit: '',

        // AssetId: [
        //   { name: 'Banana', available: true },
        //   { name: 'Orange', available: false },
        // ],
      },
  
      transformValues: (values) => ({
        petOwnerLastName: `${values.petOwnerLastName}`,
        petOwnerFirstName: `${values.petOwnerFirstName}`,
        petName: `${values.petName}`,
        petBreed: `${values.petBreed}`,
        email: `${values.email}`,
        contactNumber: `${values.contactNumber}`,
        ReasonForVisit: `${values.ReasonForVisit}`,
      }),
    });
  
    
    const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
    const [time, setTIme] = useState<any>(new Date());
    const thisPageHeader = "Appointment Form";
    return (
      <Box sx={{ maxWidth: 400,paddingTop:200}} mx="auto" >
        
      
          <form
          onSubmit={form.onSubmit((values) => {
            setSubmittedValues(JSON.stringify(values, null, 2))
            
            // setWillStartDate(values.willStartDate)
            // setWillEndDate(values.willEndDate)
            // setbenefitorAddr(values.Benefitor)
           
  
          })}
        >
          <Title order={1} > {thisPageHeader}</Title>
          
          <TextInput
            
            label="Pet Owner's First Name/Nombre"
            placeholder="Will"
            mt="md"
            withAsterisk
            {...form.getInputProps('petOwnerFirstName')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
          <TextInput
            
            label="Last Name/Nombre"
            placeholder="Smith"
            mt="md"
            withAsterisk
            {...form.getInputProps('petOwnerLastName')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
              <TextInput
            
            label="Pet Name/Nombre"
            placeholder="Meow"
            mt="md"
            withAsterisk
            {...form.getInputProps('petName')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
                <Select 
            label="Pet Type/Dog"
            placeholder="Dog/ Cat"
            value={assetId}
            onChange={()=>setAssetId}
            data = {assets}
            //{[{value:'testData'}]}
            //assets.length>=0 ? assets : [{value:'testData'}]   
            
          />
          <TextInput
            
            label="Breed"
            placeholder="German Sheperd"
            mt="md"
            withAsterisk
            {...form.getInputProps('petBreed')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
            <TextInput
            
            label="Email"
            placeholder="johndoe@gmail.com"
            mt="md"
            withAsterisk
            {...form.getInputProps('email')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
            <TextInput
            
            label="Contact Number/Numero De Telefono"
            placeholder="555-55-5555"
            mt="md"
            withAsterisk
            {...form.getInputProps('contactNumber')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
          <Select 
            label="Reason For Visit/Rason De La Visita"
            placeholder="Vaccine"
            value={assetId}
            onChange={()=>setAssetId}
            data = {assets}
            //{[{value:'testData'}]}
            //assets.length>=0 ? assets : [{value:'testData'}]   
            
          />
         
  
          <TextInput
            label="Appointment Date"
            placeholder="MM-DD-YYYY"
            withAsterisk
            {...form.getInputProps('AppointmentDate')}
          />
          <TextInput
            label="Appointment Time"
            placeholder="HH:mm"
            withAsterisk
            {...form.getInputProps('AppointmentTime')}
          />

<TimeInput styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7]
          },
          filledVariant: {
            backgroundColor: theme.colors.blue[5]
          }
      })
    }
        format="12" label="Time " description="Central Timezone" value={time} withAsterisk>
           </TimeInput>   

           <Textarea
            
            label="Special Instructions To Doctor"
            placeholder="My dog is sensitive to bright lights | My pet likes to be pet before touching it"
            mt="md"
            withAsterisk
            {...form.getInputProps('SpecialInstructions')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />  
          <Button type="submit" mt="md">
            Submit
          </Button>

        </form>
       
      </Box>
    );
  
  }
  
  export default BookAppointment;