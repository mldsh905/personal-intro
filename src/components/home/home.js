import {Link} from 'react-scroll';
import "@fontsource/montserrat";
import classes from './home.module.css';
import {KeyboardDoubleArrowDown} from '@mui/icons-material';
import {useInView} from "react-intersection-observer";

const Home = () => {
    const {ref: span, inView: spanState} = useInView();
    const {ref: intro, inView: introState} = useInView();
    const {ref: link, inView: linkState} = useInView();

    return (
        <div id='home' className={classes.wrapper}>
            <div className={classes.container}>
                <div ref={span} className={spanState?`${classes.span} ${classes.spanAnime}`:classes.span}>
                    <span>Hi, I am a full stack developer</span>
                </div>
                <div ref={intro} className={introState?`${classes.intro} ${classes.introAnime}`:classes.intro}>
                    Welcome to my personal portfolio~
                </div>
                <div ref={link} className={linkState?`${classes.link} ${classes.linkAnime}`:classes.link}>
                    <Link className={classes.linkScroll} to="about" spy={true} smooth={true} offset={-50}
                          duration={500}>About me</Link>
                    <Link className={classes.linkScroll} to="projects" spy={true} smooth={true} offset={-50}
                          duration={500}>Projects</Link>
                </div>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className={linkState?`${classes.arrow} ${classes.arrowAnime}`:classes.arrow}>
                    <KeyboardDoubleArrowDown className={classes.arrowIcon}/>
                </Link>
            </div>
        </div>
    );
};

export default Home;