import React from 'react';
import {useInView} from "react-intersection-observer";
import classes from './about.module.css';

const About = () => {
    const {ref: title, inView: titleState} = useInView();
    const {ref: intro, inView: introState} = useInView();

    return (
        <div id='about' className={classes.wrapper}>
            <div className={classes.container}>
                <div ref={title} className={titleState ? `${classes.title} ${classes.titleAnime}` : classes.title}>
                    <img src="/images/luffy.png" alt=""/>
                    <span>About me</span>
                </div>
                <div ref={intro} className={introState ? `${classes.intro} ${classes.introAnime}` : classes.intro}>
                    <div className={classes.introContent}>I am a self-taught full stack developer. I built several
                        full-stack projects, including TikTok-clone, Facebook-clone, Booking-clone, and etc. I use MEAN
                        stack, TypeScript, Nextjs, AWS, and etc. And I also got AWS Certified
                        Solutions Architect – Associate Certification.
                        I am happy to finish relevant trainings and courses in relation to full stack developer.
                    </div>
                    <div className={classes.introContent}>
                        This website is a portfolio to demonstrate my projects and introduce myself. I am a fast learner
                        with a
                        can-do attitude. I learnt MERN stack in two months and afterwards completed several projects to
                        sharpen my skills.
                    </div>
                    <div className={classes.introContent}>
                        At the moment, I enrol in Bachelor of IT part-time. I am also learning algorithm and practising on
                        LeetCode. And in the
                        future, I hope I can have a more comprehensive understanding towards the whole
                        industry by learning and working.
                    </div>
                    <div className={classes.introContent}>
                        On my spare time, I like swimming, running, watching anime like One Piece, playing piano. Good
                        to see you~ And wish all the best~
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;