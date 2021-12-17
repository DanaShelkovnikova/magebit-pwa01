import React from 'react';
import classes from './helloWorld.scss';

/**
* @param props = {
        *     userName?: string
            * }
    * @returns {JSX.Element}
*/
export const HelloWorld = (props) => {
    const { userName } = props;
    return (
        <div className={classes.helloWorld}>
            {!userName && <span>Hello World! {HELLO_WORLD}</span>}
            {userName && <span>Hello, {userName}!</span>}
        </div>
    )
}
