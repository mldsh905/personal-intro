import React from 'react';
import classes from './project.module.css';
import {useInView} from "react-intersection-observer";

const Projects = () => {
    const {ref:title, inView: titleState} = useInView();
    const {ref:content, inView: contentState} = useInView();

    return (
        <div id='projects'>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <span ref={title} className={titleState?`${classes.title} ${classes.titleAnime}`:classes.title}>Projects</span>
                    <ul ref={content} className={contentState?`${classes.list} ${classes.listAnime}`:classes.list}>
                        <li className={classes.listItem}>
                            <span>Ethan-book</span>
                            {/*<video autoPlay loop muted src="/videos/book.mov"/>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/book.mov"/>
                            <span>This project is a website clone of Facebook.com. It is built by MERN stack. The website has social media functions like post, comment, search, follow...</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://ethan-book-client.onrender.com">Demo</a>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/Ethan-Book">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Ethan-booking</span>
                            {/*<video autoPlay loop muted src="/videos/booking.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/booking.mov"></video>
                            <span>The project clones the website Booking.com and built by MERN stack. It has RESTful APIs with JWT authentication. And it can search hotels in various methods.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://ethan-booking-client.onrender.com">Demo</a>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/Ethan-booking">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Shopping cart</span>
                            {/*<video autoPlay loop muted src="/videos/shopping-cart.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/shopping-cart.mov"></video>
                            <span>A shopping website built by React to practice hooks and routers.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://shopping-cart-client.onrender.com">Demo</a>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/Shopping-cart">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>CV generator</span>
                            {/*<video autoPlay loop muted src="/videos/cv.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/cv.mov"></video>
                            <span>By adding information to generate personal CV.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://cv-generator-client.onrender.com">Demo</a>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/CV-generator">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>To-do list</span>
                            {/*<video autoPlay loop muted src="/videos/to-do.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/to-do.mov"></video>
                            <span>Functions with editing, deleting, categorizing, adding tasks.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/to-do-list">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Memory Card</span>
                            {/*<video autoPlay loop muted src="/videos/memory card.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/memory card.mov"></video>
                            <span>A classical game, try to find different cards.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://memory-card-client.onrender.com">Demo</a>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/Memory-card">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Weather</span>
                            {/*<video autoPlay loop muted src="/videos/weather.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/weather.mov"></video>
                            <span>Use API to fetch data of certain cities.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/weather-app">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Battleship</span>
                            {/*<video autoPlay loop muted src="/videos/battleship.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/battleship.mov"></video>
                            <span>A classical game to play with computer.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/battleship">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Tic-Tac-Toe</span>
                            {/*<video autoPlay loop muted src="/videos/tic-tac-toe.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/tic-tac-toe.mov"></video>
                            <span>A classical game to play with another player.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/tic-tac-toe">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Drawing</span>
                            {/*<video autoPlay loop muted src="/videos/drawing.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/drawing.mov"></video>
                            <span>A canvas to draw with different colours.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/drawing">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Rock-Paper-Scissor</span>
                            {/*<video autoPlay loop muted src="/videos/rock-paper-scissor.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/rock-paper-scissor.mov"></video>
                            <span>A classical strategic game.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/rock-paper-scissor">Code</a>
                            </div>
                        </li>
                        <li className={classes.listItem}>
                            <span>Calculator</span>
                            {/*<video autoPlay loop muted src="/videos/calculator.mov"></video>*/}
                            <video autoPlay loop muted src="https://personal-intro.s3.ap-southeast-2.amazonaws.com/calculator.mov"></video>
                            <span>A classic calculate tool.</span>
                            <div className={classes.link}>
                                <a rel='noreferrer' target="_blank" href="https://github.com/mldsh905/calculator">Code</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;