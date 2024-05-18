import React from 'react'
import header from '../../modules/header.module.scss'
import { ImExit } from "react-icons/im";
import { CartIcon, FavoriteIcon } from '../../construction/Links';
import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/reducers/userSlice';
import { ICONS_EXIT } from '../../common/constants';
import userImage from '../../image/user.png'
import { useCustomCurrentUser } from '../../hooks/untils';


const Client = () => {
    //-------------------------------
    const dispatch = useDispatch()

    const currentUser = useCustomCurrentUser()

    //-------------------------------

    return (
        <>
            <ul className={header.userDataList}>
                <li className={header.userDataImage}>
                    <img src={userImage} alt="user_image" />
                </li>
                <li className={header.userDataName}>{currentUser.name}</li>
                <li className={header.userDataEmail}>{currentUser.surname}</li>
                <li className={header.userDataEmail}>{currentUser.email}</li>
                <li className={header.userDataItem}><CartIcon text={'cart'} /> </li>
                <li className={header.userDataItem}> <FavoriteIcon text={'favorite'} /></li>
            </ul>
            <div className={header.buttonsBox}>

                <button className={header.exit} onClick={() => dispatch(removeUser())} > <ImExit className={header.iconExit} />{ICONS_EXIT}</button>
            </div>
        </>

    )
}

export default Client;