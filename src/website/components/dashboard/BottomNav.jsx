import React from 'react'
import userIcon from '../../../assets/images/user.png'
import homeIcon from '../../../assets/images/home.png'
import usersIcon from '../../../assets/images/users.png'
import messageIcon from '../../../assets/images/message-circle.png'
function BottomNav() {
    return (
        <div className='bottom-nav grid grid-cols-4 w-full place-items-center items-center'>
            <img src={userIcon} alt="user icon" className=''/>
            <img src={homeIcon} alt="home icon" />
            <img src={usersIcon} alt="users icon" />
            <img src={messageIcon} alt="message icon" />
        </div>
    )
}

export default BottomNav
