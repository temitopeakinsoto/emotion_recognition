import React from 'react';
import { Formik, Form } from 'formik';
import '../../src/App.css';
import logo from '../../src/images/logo.png'
import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  Input,
  Text,
  Spacer,
  Image,
  Heading
} from '@chakra-ui/react';

const ConsentForm = () => {

  const handleSubmit = (values) => {
    // You can perform any actions with the form values here
    console.log('Form values:', values);
  };

  return (
    <Container className="consent-form">
      <Box p={4} bg="gray.100" borderRadius="md">
        <Box  textAlign='left'>
          <img src={logo} width='300'/>
        </Box>
        <Formik
          initialValues={{
            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            signatureParticipant: '',
            dateParticipant: '',
            signatureInvestigator: '',
            dateInvestigator: ''
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <br/>
              <Heading mb={4}>UNIVERSITY OF HERTFORDSHIRE
                ETHICS COMMITTEE FOR STUDIES INVOLVING THE USE OF HUMAN PARTICIPANTS
                (‘ETHICS COMMITTEE’)
              </Heading>
              <Heading mb={4}> TITLE: WEB-BASED EMOTION RECOGNITION SYSTEM FOR <br/>
                E-LEARNING ENGAGEMENT MANAGEMENT
              </Heading>
              <Heading mb={4}> PARTICIPANT'S CONSENT FORM
              </Heading>
              <Spacer />
              <Stack spacing={15}>
                FORM EC3
                CONSENT FORM FOR STUDIES INVOLVING HUMAN PARTICIPANTS

                <FormControl mb={4}>
              
<Text mt={10} textAlign='justify'>
  1  I confirm that I have been given a Participant Information Sheet (a copy of which is attached to this form) giving particulars of the study, including its aim(s), methods and design, the names and contact details of key people and, as appropriate, the risks and potential benefits, how the information collected will be stored and for how long, and any plans for follow-up studies that might involve further approaches to participants.  I have also been informed of how my personal information on this form will be stored and for how long.  I have been given details of my involvement in the study.  I have been told that in the event of any significant change to the aim(s) or design of the study I will be informed, and asked to renew my consent to participate in it. 
</Text>
  
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
  2  I have been assured that I may withdraw from the study at any time without disadvantage or having to give a reason.
</Text>
    
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
    3  In giving my consent to participate in this study, I understand that voice, video or photo-recording will take place and I have been informed of how/whether this recording will be transmitted/displayed.
  </Text>
  
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
  4  I have been given information about the risks of my suffering harm or adverse effects and I agree to complete any required health screening questionnaire in advance of the study.   I have been told about the aftercare and support that will be offered to me in the event of this happening, and I have been assured that all such aftercare or support would be provided at no cost to myself.  In signing this consent form I accept that medical attention might be sought for me, should circumstances require this.
</Text>
  
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
  5  I have been told how information relating to me (data obtained in the course of  the study, and data provided by me about myself) will be handled: how it will be kept secure, who will have access to it, and how it will or may be used, including the possibility of anonymised data being deposited in a repository with open access (freely available).  
  </Text>
  
  
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
  6  I understand that my participation in this study may reveal findings that could indicate that I may require medical advice.  In that event, I will be informed and advised to consult my GP and I acknowledge that, following discussion, I may be required by the University to withdraw from the study.  If, during the study, evidence comes to light that I may have a pre-existing medical condition that may put others at risk, I understand that the University will refer me to the appropriate authorities and that I will not be allowed to take any further part in the study.
  </Text>
  
  
</FormControl>

<FormControl mb={4}>
<Text mt={10} textAlign='justify'>
  7  I understand that if there is any revelation of unlawful activity or any indication of non-medical circumstances that would or has put others at risk, the University may refer the matter to the appropriate authorities.
  </Text>
  
  
</FormControl>

<FormControl mb={4}>
  <Text mt={10} textAlign='justify'>
    8  I have been told that I may at some time in the future be contacted again in connection with this or another study.
  </Text>
</FormControl>
                
                <FormControl mb={4}>
                  <Text mt={10} textAlign='justify'>
                    <b>Signature of participant</b>

                    <Input
                      type="text"
                      name="signatureParticipant"
                      value={values.signatureParticipant}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                    <b>Date</b>
                    <Input
                      type="text"
                      name="dateParticipant"
                      value={values.dateParticipant}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                  </Text>
                </FormControl>

                <FormControl mb={4}>
                  <Text mt={10} textAlign='justify'>
                    <b>Signature of (principal) investigator</b>

                    <Input
                      type="text"
                      name="signatureInvestigator"
                      value={values.signatureInvestigator}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                    <b>Date</b>
                    <Input
                      type="text"
                      name="dateInvestigator"
                      value={values.dateInvestigator}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                  </Text>
                </FormControl>
              </Stack>
              
              <Text>
                Name of (principal) investigator: <b> TEMITOPE SAMSON AKINSOTO</b>
              </Text>

              <Button type='submit' colorScheme='teal' size='xs'>
                Button
              </Button>
              
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ConsentForm;
