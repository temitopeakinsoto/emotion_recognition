import React from 'react';
import WebcamVideo from '../components/WebcamVideo';

import { Flex } from '@chakra-ui/react'

function Home(){
    return(
        <Flex align='center' justify='center' rowGap={50}>
            <div style={{border: '1px solid red'}}> 
                <WebcamVideo />
            </div>
             <div> 
                <iframe
                    width="560px" 
                    height="500"
                    title='naruto'
                    src='https://www.youtube.com/embed/QhBnZ6NPOY0?autoplay=1&cc_load_policy=1&mute=1'
                    allow='autoplay'
                />
            </div>
        </Flex>
    )
}

export default Home;


