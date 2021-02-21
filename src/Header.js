import React from 'react';
import './Header.css'
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTimeIcon"


function Header() {
    return <div className="header">
        <div className="header_left">
            <Avatar
                className="header_avatar"
                alt={user?.displayName}
                src={user?.photoURL}
            />
            <AccessTimeIcon/>
            {/*Avatars for logged in user*/}
        </div>
        <div className="header_search">
            {/*Search icon*/}
            {/*input*/}
        </div>
        <div className="header_right">
            {/*help icon*/}
        </div>
    </div>

}

export default Header;
