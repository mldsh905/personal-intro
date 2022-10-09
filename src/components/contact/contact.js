import React from 'react';
import classes from './contact.module.css';

const Contact = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.foot}>
                    <span>Designed by Yi Zhang</span>
                    <span>Email: yzcha28@gmail.com</span>
                    <span>GitHub: https://github.com/mldsh905</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;