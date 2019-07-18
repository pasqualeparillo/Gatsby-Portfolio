import React from 'react'
import { SmallContainer } from '../styled/container';
import SocialLinks from '../footer/socialLinks';


export default function FooterWrapper() {
    return (
        <div className="flex w-full justify-between">
            <SmallContainer 
                className="lg:w-1/4 w-1/2"
                black
                start
                initial={{ y:' 90px' }}
                animate={{ y: "0px" }}
                transition={{ ease: "easeIn", duration: .6 }}>
                <div className="flex justify-around w-full p-4">
                <SocialLinks />
                </div>
            </SmallContainer>
        </div>
    )
}