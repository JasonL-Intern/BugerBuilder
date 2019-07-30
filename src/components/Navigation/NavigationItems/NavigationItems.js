import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        {props.justForTest ? <NavigationItem link="/">Checkout</NavigationItem> : <div>123</div>}
    </ul>
);

export default navigationItems;