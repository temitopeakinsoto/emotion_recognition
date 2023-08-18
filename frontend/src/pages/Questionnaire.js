import React, { useState } from 'react';
import axios from 'axios';
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
  Select,
  Heading
} from '@chakra-ui/react';

const Questionnaire = () => {

  const handleSubmit = async (values) => {
    console.log('FORM DATA AT THIS POINT IS:   =====', values);
  
    try {
      const response = await axios.post('http://localhost:5000/submit_form', values);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container className="consent-form">
      <Box p={4} bg="gray.100" borderRadius="md">
        <Box  textAlign='left'>
          <img src={logo} width='300'/>
        </Box>
        <Formik
          initialValues={{
            participantEthnicity: '',
            participantgender:'',
            participantEducation:'',
            learningFrequency:'',
            overallexperience: 0,
            timelyfeedback:'',
            accuracylevel: '',
            comfortabilitylevel:0,
            accuracylevel:0,
            technicalissues: '',
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
              <Spacer />
              <Stack spacing={15}>
                <Heading>Questionnaire
                </Heading>
                <FormControl mb={4}>
              
              <Text mt={10} textAlign='justify'>
              Thank you for your interest in participating in this survey for our research project titled 'Web-based Emotion Recognition System for E-Learning Audience Management.' 
              Your valuable insights will contribute to enhancing the usability and effectiveness of our prototype application.
              <br/>
              This questionnaire aims to gather your feedback and opinions on your experience with the emotion recognition app during e-learning activities. Your honest responses will enable us to make informed improvements to the system. 
              Please take a few moments to share your thoughts and experiences by answering the following questions. Your input is greatly appreciated and will have a significant impact on the future development of our application.
              <br/><br/>
              Please provide an anonymity code using your initials and today’s date and current time. 
              (for example, if your name is John Doe and today’s date is 06th August and the current time is 13:30 PM your code would be JD06081330  </Text>
                
              </FormControl>

              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                Please provide your anonymity Code
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
                </Text>
              </FormControl>
              <FormControl mb={4}>
              <Text mt={10} textAlign='justify'>
                Please tell us your age
                <Input
                  type="number"
                  name="participantage"
                  value={values.participantage}
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
                  What is your gender
                  <select
                    name="participantgender"
                    value={values.participantgender}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} 
                  >
                    <option value="">Select</option>
                    <option value="Black">Male</option>
                    <option value="White">Female</option>
                    <option value="White">Non-Binary</option>
                    <option value="White">Prefer not to say</option>
                    <option value="Asian">Other</option>
                  </select>
                </Text>
              </FormControl>
              {/* <FormControl mb={4}>
              <Text mt={10} textAlign='justify'>
                Please provide your anonymity Code
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
                </Text>
              </FormControl> */}
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                  What is your ethnicity/Race
                  <select
                    name="participantEthnicity"
                    value={values.participantEthnicity}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} 
                  >
                    <option value="">Select</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Asian">Asian</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                Tell us your highest level of education:
                  <select
                    name="participantEducation"
                    value={values.participantEducation}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} 
                  >
                    <option value="">Select</option>
                    <option value="High School or Below">High School or Below</option>
                    <option value="Some College/Associate Degree">Some College/Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                How often do you engage in e-learning activities via online platforms?                   <select
                    name="learningFrequency"
                    value={values.learningFrequency}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} 
                  >
                    <option value="">Select</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Rarely">Rarely</option>
                    <option value="Never">Never</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                On a scale of 1 - 10 (10 Being the highest), how would you rate your overall experience with using the emotion recognition app? -----------
                  <select
                    name="overallexperience"
                    value={values.overallexperience}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                On a scale of 1 - 10 (10 Being the highest), How comfortable were you using the emotion recognition system during the session? -----------
                  <select
                    name="comfortabilitylevel"
                    value={values.comfortabilitylevel}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
                	On a scale of 1-10 (10 Being the highest), How accurately did the system detect your emotional state/facial expressions?                  <select
                    name="accuracylevel"
                    value={values.accuracylevel}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </Text>
              </FormControl>
              <FormControl mb={4}>
                <Text mt={10} textAlign='justify'>
              Were there any technical issues or challenges while using the emotion recognition app? If yes, please specify
              <Input
                  type="text"
                  name="technicalissues"
                  value={values.technicalissues}
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
                Did the system provide timely and relevant feedback to your emotional state based on your facial expression during the session?
              <select
                    name="timelyfeedback"
                    value={values.timelyfeedback}
                    onChange={handleChange}
                    style={{width: '200px', marginLeft: "40px",border:"none",
                    borderBottom:"1px dotted",
                    borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none"
                  }} 
                  >
                    <option value="">Select</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </Text>
              </FormControl>
              <Text mt={10}>
              Thank you for taking the time to complete this questionnaire. 
              Your feedback is invaluable for improving our emotion recognition app for e-learning purposes.
              </Text>
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

export default Questionnaire;
