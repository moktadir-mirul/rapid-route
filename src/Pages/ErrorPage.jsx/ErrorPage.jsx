import React from 'react';
import ErrorImg from "../../assets/error.png";
import NavBar from '../../Components/Navbar/NavBar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='flex justify-center '>
                <img className='w-[50vw]' src={ErrorImg} alt="" />
            </div>
            <h1 className='text-2xl font-bold text-center py-5'>Error 404: Page Not Found</h1>
            <Link to={"/"}>
            <div className='flex justify-center items-center'>
                <button className='btn bg-lime-300 hover:bg-lime-500 duration-200 text-xl'>Return Home</button>
            </div>
            </Link>
        </div>
    );
};

export default ErrorPage;