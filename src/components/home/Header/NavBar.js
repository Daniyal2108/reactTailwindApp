import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { navMenu } from "../../../store/reducers/NavMenuSlice";
import Section from "../../Container & Section/Section";
import Container from "../../Container & Section/Container";
import HeaderLogo from './HeaderLogo';
import DropDownMenu from "./DropDownMenu";
import NavigationMenus from "./NavigationMenus";
import { FaAlignLeft } from "react-icons/fa";

const NavBar = () => {

    const { about, youth, efik } = useSelector(state => state.navMenu);
    const dispatch = useDispatch();
    

    const dropDownMenus = {
        about: ["Profile Page", "Projects Page", "Community Outreach", "Medical Mission", "501C Donate"],
        youth: ["Blog Page", "Language Exchange", "ATA NSO IYAK", "EFIK AEIOUC", "LLWAJE"],
        efiks: ["EFIK Brasil", "EFIK Diaspora", "EFIK USA", "Cuban Page"],
    } 
    
    const openMenu = () => {
        dispatch(navMenu());
    }


    const dropDown = {
        About: about && <DropDownMenu className="animate-dropdown" >
                    <ul className="block">
                        {dropDownMenus.about.map( menu => <li key={menu} className="my-1 hover:text-white hover:font-bold px-2 hover:bg-cyan-700 hover:bg-opacity-70 hover:rounded-lg hover:drop-shadow-2xl  lg:text-left text-center cursor-pointer">{menu}</li> )}
                    </ul>    
                </DropDownMenu>,
        Youth: youth && <DropDownMenu className="animate-dropdown">
                    <ul className="block">
                        {dropDownMenus.youth.map( menu => <li key={menu} className="my-1 hover:text-white hover:font-bold px-2 hover:bg-cyan-700 hover:bg-opacity-70 hover:rounded-lg hover:drop-shadow-2xl lg:text-left text-center cursor-pointer">{menu}</li> )}
                    </ul>    
                </DropDownMenu>,
        Efik: efik && <DropDownMenu className="animate-dropdown">
                    <ul className="block">
                        {dropDownMenus.efiks.map( menu => <li key={menu} className="my-1 hover:text-white hover:font-bold px-2 hover:bg-cyan-700 hover:bg-opacity-70 hover:rounded-lg hover:drop-shadow-2xl lg:text-left text-center cursor-pointer">{menu}</li> )}
                    </ul>    
                </DropDownMenu>
    }

    return <Section className="py-3 text-gray-500 text-lg border-b shadow-xl" style={{fontFamily: "'Montserrat', sans-serif"}}>
        <Container className="lg:p-0 px-4" >
            <div className="grid lg:grid-cols-4 grid-cols-3 lg:overflow-visible overflow-x-hidden">
            <div className="m-auto lg:col-span-1 col-start-1 col-end-2 ">
               <HeaderLogo />
            </div>
         
            <div className="col-start-3 col-end-4 lg:hidden inline mt-4 ml-auto hover:cursor-pointer" onClick={openMenu}><FaAlignLeft className="text-xl" /></div>
            
            <NavigationMenus dropDown={dropDown}    />
         
            </div>
            
            
        </Container>

    </Section>
}

export default NavBar;