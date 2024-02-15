import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {MoneyIcon} from "../UI/svg/MoneyIcon";
import {UserIcon} from "../UI/svg/UserIcon";
import authSlice from "../store/reducers/auth/AuthSlice";
import {logout} from '../store/reducers/auth/AuthSlice'
import {RouteNames} from "../routes/routes";
import {useNavigate} from "react-router-dom";


const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const logoutHandler = (event: React.MouseEvent) => {
        event.stopPropagation()
        dispatch(logout())
    }
    return (
        <div className='flex flex-row w-full justify-between pl-10 max-md:pl-5 border-b border-gray-500'>
            <div className='flex flex-row gap-3 items-center'>
                <MoneyIcon/>
                <div className='flex flex-col justify-center'>
                    <h1 className='  my-2 text-3xl max-md:text-xl font-bold text-black mt-0 mb-0 '>
                        INVESTICO
                    </h1>
                    <p className=' text-xl max-md:text-sm font-semibold text-gray-400 my-0'>
                        Investment Platform
                    </p>
                </div>
            </div>

            {isAuth ?
                <div className='flex flex-cl gap-4 items-center pr-10 max-md:pr-5 max-md:gap-2'>
                    <h2 className='my-2 text-3xl font-bold text-black max-md:text-xl'>
                        {localStorage.getItem('username')}
                    </h2>
                    <UserIcon className='h-20 w-12 max-md:h-10 max-md:w-10'/>
                    <button onClick={logoutHandler}
                            className='text-3xl font-bold text-blue-400 p-2 hover:underline underline-offset-4 max-md:text-xl'>
                        Log out
                    </button>
                </div>
                :
                <div className='flex items-center mr-10 max-md:mr-5 gap-4 max-md:gap-2'>
                    <button onClick={() => navigate(RouteNames.LOGIN)}
                       className=' max-md:text-xl text-3xl font-bold text-blue-400 p-2 hover:underline underline-offset-4'>
                        Log In

                    </button>
                    <UserIcon className='h-20 w-12 max-md:h-10 max-md:w-10'/>
                </div>
            }
        </div>


    );
};

export default Navbar;