import React from 'react';
import './SideNav.css';

const NavItems = ["All", "Media", "Web", "Social", "Open-Source", "Tools", "Productivity", "System"];

const SideNav = (props) => {
    return (
        <div className="SideNav">
            <h5 className="SideNav-header">Trending Topics</h5>
            <ul className="SideNav-nav">
                {
                    NavItems.map((item, index) => <li key={index} onClick={(item) => props.filterByTag(item)} className="SideNav-nav-item">{item}</li> )
                }
            </ul>
        </div>
    )
}

export default SideNav;