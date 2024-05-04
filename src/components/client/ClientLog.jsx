import React from 'react'
import header from '../../modules/header.module.scss'
import { ICONS_LOG_IN } from '../../common/constants'
import { GrLogin } from "react-icons/gr";


const ClientLog = ({ handleCloseWindow }) => {
    return (
        <div>
            <button className={header.login}
                onClick={() => handleCloseWindow()}>
                <GrLogin className={header.iconLogIn} /> {ICONS_LOG_IN}
            </button>
        </div>
    )
}

export default ClientLog;
