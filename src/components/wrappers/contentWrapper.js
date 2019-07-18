import React from 'react'
import { LargeContainer } from '../styled/container';
import LeftContent from '../content/leftContent';
import RightContent from '../content/rightContent';

export default function ContentWrapper() {
    return (
        <LargeContainer 
            contentContainer
            wrap
            className="flex-grow">
            <LeftContent  />
            <RightContent  />
        </LargeContainer>
    
    )
}