import React from "react";
import { Link } from "react-router-dom";
import { dropDowns, navMenu } from "../../../store/reducers/NavMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronCircleDown, FaRegWindowClose } from "react-icons/fa";

const NavigationMenus = (props) => {

    const toggle = useSelector(state => state.navMenu.menuToggle);
    const dispatch = useDispatch();

    const {About, Youth, Efik} = props.dropDown;

    const openDropDown = (e) => {
        dispatch(dropDowns(e.target.text))
    }

    const closeMenu = () => {
        dispatch(navMenu());
    }

    return  <div className={`lg:col-span-3 lg:block ${!toggle ? "navMenuResponsiveClose "  : "navMenuResponsiveOpen"} lg:translate-x-0 lg:static lg:h-auto lg:p-0 absolute top-0 h-full w-full lg:bg-transparent bg-white z-20 pt-8 col-start-1 col-end-4 lg:m-auto`}>
                <div className="lg:hidden absolute top-1 right-1 " onClick={closeMenu}>
                    <FaRegWindowClose className="text-2xl" />
                </div>
                <ul className="list-none grid lg:grid-cols-8">
                    <li className="lg:col-span-1 col-start-1 col-end-9  text-center">
                        <Link className="hover:text-cyan-700 hover:font-bold " to="/">Home</Link>    
                    </li>
                    <li className="lg:col-span-1 col-start-1 col-end-9 text-center " onClick={openDropDown}>
                        <Link className="hover:text-cyan-700 hover:font-bold cursor-pointer flex justify-center items-center"  to={""}>About <FaChevronCircleDown className="ml-2" /> </Link>
                        {About}    
                    </li>
                    <li className="lg:col-span-1 col-start-1 col-end-9 text-center " onClick={openDropDown}>
                        <Link className="hover:text-cyan-700 hover:font-bold flex justify-center items-center" to={""} /* onClick={openYouthDropDown} */>Youth <FaChevronCircleDown className="ml-2" /></Link>
                        {Youth}
                    </li>
                    <li className="lg:col-span-2 col-start-1 col-end-9 text-center ">
                        <Link className="hover:text-cyan-700 hover:font-bold" to="/VFP">Vintage Family Portraits</Link>
                    </li>
                    <li className="lg:ml-7 lg:col-span-1 col-start-1 col-end-9 text-center " onClick={openDropDown}>
                        <Link className="hover:text-cyan-700 hover:font-bold flex justify-center items-center" to={""} /* onClick={openEfiksDropDown} */>EFIKS <FaChevronCircleDown className="ml-2" /></Link>
                        {Efik}
                    </li>
                    <li className="lg:col-span-1 col-start-1 col-end-9 text-center ">
                        <Link className="hover:text-cyan-700 hover:font-bold" to="/shop">Shop</Link>
                    </li>
                    <li className="lg:col-span-1 col-start-1 col-end-9 text-center ">
                        <Link className="hover:text-cyan-700 hover:font-bold" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
}

export default NavigationMenus;