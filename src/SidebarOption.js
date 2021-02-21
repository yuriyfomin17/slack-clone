import React from 'react';
import "./SidebarOption.css"

function SidebarOption({Icon, title}) {
    return <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption_icon"/>}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <h3>
                <span className="sidebarOption_hash">#{title}</span>
            </h3>)}
    </div>

}

export default SidebarOption;
