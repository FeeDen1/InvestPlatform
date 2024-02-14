import React, {FC} from 'react';
import {useAppSelector} from "../hooks/redux";
import {MoneyIcon} from "../UI/svg/MoneyIcon";
import {UserIcon} from "../UI/svg/UserIcon";


const Navbar: FC = () => {
    const {isAuth, user} = useAppSelector(state => state.authSlice)
    return (
        <div className='flex flex-row w-full justify-between bg-emerald-500 pl-10 max-md:pl-5 '>
            <div className='flex flex-row gap-3 items-center'>
                <MoneyIcon/>
                <div className='flex flex-col gap-1'>
                    <h1 className='  my-2 text-3xl max-md:text-xl font-bold text-white my-0'>
                        INVESTICO
                    </h1>
                    <p className=' text-xl max-md:text-sm font-semibold text-gray-700 my-0'>
                        Investment Platform
                    </p>
                </div>
            </div>

            {isAuth ?
                <div className='flex flex-cl gap-4 items-center pr-10 max-md:pr-5 max-md:gap-2'>
                    <h2 className='my-2 text-3xl font-bold text-white'>
                        {localStorage.getItem('user')}
                    </h2>
                    <UserIcon/>
                    <button className='text-3xl font-bold text-white p-2 hover:underline underline-offset-4'>Log out</button>
                </div>
                :
                <div className='flex flex-cl gap-4 items-center pr-10 max-md:pr-5 max-md:gap-2'>
                    <button className='max-md:text-xl text-3xl font-bold text-white p-2 hover:underline underline-offset-4'>Log In</button>
                    <UserIcon/>
                </div>}

        </div>

    );
};

export default Navbar;