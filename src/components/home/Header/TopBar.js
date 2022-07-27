import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaSignInAlt, FaQuestion } from "react-icons/fa";
import Button from '../../Button/Button';
import Section from '../../Container & Section/Section';
import Container from '../../Container & Section/Container';


const TopBar = () => {

    const loginBtn = () => {
        console.log("login button");
    }

    const supportBtn = () => {
        console.log("support button");
    }

    return <Section className='py-1.5 bg-cyan-700 shadow-xl shadow-current ' style={{ fontFamily: "'Montserrat', sans-serif"}}>
        
            <Container className='grid lg:grid-cols-4 text-base text-white'>
                <div className='m-auto w-max justify-center items-center flex'>
                    <FaPhoneAlt className='mx-2 ' /> 
                    <p>770 374 1460</p>
                    </div>
                <div className='m-auto w-max justify-center lg:items-center items-baseline  flex'>
                    <FaMapMarkerAlt className='lg:mx-2 sm:mx-2 ml-2 mr-0 ' />
                    <p>9755 South Kirkwood Rd, Ste D, Houston</p>
                    </div>
                <div className='lg:ml-auto m-auto w-max my-1'>
                    <Button onClick={loginBtn} className='bg-gray-500 transition ease-in-out delay-75 hover:scale-110 duration-500 shadow-xl border px-4 py-px mx-auto rounded-md justify-center items-center flex' name="Login account" icon={<FaSignInAlt className='mr-2' />} />
                </div>
                <div className='lg:m-auto m-auto w-max my-1'>
                    <Button onClick={supportBtn} className='bg-gray-500 transition ease-in-out delay-75 hover:scale-110 duration-500 px-4 shadow-xl border py-px mx-auto rounded-md justify-center items-center flex' name="Support" icon={<FaQuestion className='mr-2' />} />
                </div>
            </Container>        
    </Section>
}

export default TopBar;