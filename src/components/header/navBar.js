import React, { useState } from 'react'
import { SmallContainer } from '../styled/container';
import { motion } from "framer-motion"

export default function NavBar() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <SmallContainer
            className="w-20"
            black
            end
            transition={{ ease: "easeIn", duration: .8 }}
            onClick={() => setIsClicked(!isClicked)}
            animate={isClicked ? "open" : "closed"}
        >
            <div className="flex flex-wrap flex-col w-full h-full justify-around items-end p-2">
                <motion.span
                     
                    className="w-4/5 h-1 bg-white "
                    whileHover={{ scale: 1.2 }}/>
                <motion.span 
                    className="w-3/5 h-1 bg-white "
                    whileHover={{ scale: 1.2 }}/>
                <motion.span 
                    className="w-2/5 h-1 bg-white "
                    whileHover={{ scale: 1.2 }}/>
                    {console.log(isClicked)}
            </div>
        </SmallContainer>
    )
}