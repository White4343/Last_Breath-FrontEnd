import React from 'react';
import s from "./UserDrawer.module.scss";
import logo from "../../assets/logo.svg";
import userDefaultLogo from "../../assets/userDefaultLogo.svg";
import help from "../../assets/help.svg";
import cart from "../../assets/cart.svg";
import account from "../../assets/account.svg";
import exit from "../../assets/exit.svg";
import closeBtn from "../../assets/closeBtn.svg";
import history from "../../assets/history.svg";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux";
import {RootState} from "../../store";
import {logout} from "../../store/authentication/authentication.actions";


interface UserDrawerProps {
    isUserDrawerOpened: boolean
    onClickCloseUserDrawer: () => void
}


const UserDrawer: React.FC<UserDrawerProps> = ({isUserDrawerOpened, onClickCloseUserDrawer}) => {

    const {email, username} = useAppSelector((state: RootState) => state.user);

    const dispatch = useAppDispatch()

    const onClickLogoutHandler = () => {
        onClickCloseUserDrawer()
        dispatch(logout())
    }

    return (
        <div className={`${s.overlay} ${isUserDrawerOpened ? s.overlayOut : ""}`}>
            <div className={s.drawer}>
                <div className={s.top}>
                    <img src={logo} alt="logo"/>
                    <div className={s.blockUser}>
                        <img src={userDefaultLogo} alt="userDefaultLogo"/>
                        <div className={s.info}>
                            <p className={s.name}>{username}</p>
                            <p className={s.email}>{email}</p>
                        </div>
                    </div>
                    <div className={s.menu}>
                        <ul>
                            <NavLink to='/cart'>
                                <li>
                                    <img src={cart} alt="cart"/>
                                    <p>Cart</p>

                                </li>
                            </NavLink>
                            <li>
                                <img src={account} alt="account"/>
                                <p><NavLink to='/profile'>Account</NavLink></p>
                            </li>
                            <NavLink to='/payment-history'>
                                <li>
                                    <img src={history} alt="payment-history" width="41px"/>
                                    <p>Payment history</p>
                                </li>
                            </NavLink>
                            <li>
                                <img src={help} alt="help" width="41px"/>
                                <p>Help</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.bottom}>
                    <img src={exit} alt="help"/>
                    <p onClick={onClickLogoutHandler}>Exit</p>
                </div>
                <div className={s.closeBtn} onClick={onClickCloseUserDrawer}>
                    <img src={closeBtn} alt="closeBtn"/>
                </div>
            </div>
        </div>
    );
};

export default UserDrawer;