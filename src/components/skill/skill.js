import React from 'react';
import classes from './skill.module.css';
import {KeyboardDoubleArrowDown} from "@mui/icons-material";
import {useInView} from "react-intersection-observer";
import {Link} from 'react-scroll';

const Skill = () => {
    const {ref:title, inView: titleState} = useInView();
    const {ref:content, inView: contentState} = useInView();

    return (
        <div id='skills' className={classes.wrapper}>
            <div className={classes.container}>
                <div ref={title} className={titleState?`${classes.title} ${classes.titleAnime}`:classes.title}>
                    Skills
                </div>
                <div ref={content} className={contentState?`${classes.content} ${classes.contentAnime}`:classes.content}>
                    <ul className={classes.item}>
                        <li>
                            <span>HTML</span>
                            <img src="/images/html.png" alt=""/>
                        </li>
                        <li>
                            <span>CSS</span>
                            <img src="/images/css.png" alt=""/>
                        </li>
                        <li>
                            <span>Tailwind CSS</span>
                            <img src="/images/tailwind.png" alt=""/>
                        </li>
                        <li>
                            <span>JavaScript</span>
                            <img src="/images/js.png" alt=""/>
                        </li>
                        <li>
                            <span>TypeScript</span>
                            <img src="/images/ts.png" alt=""/>
                        </li>
                        <li>
                            <span>React</span>
                            <img src="/images/react.png" alt=""/>
                        </li>
                        <li>
                            <span>Nextjs</span>
                            <img src="/images/nextjs.png" alt=""/>
                        </li>
                        <li>
                            <span>Redux</span>
                            <img src="/images/redux.svg" alt=""/>
                        </li>
                        <li>
                            <span>NodeJS</span>
                            <img src="/images/node.png" alt=""/>
                        </li>
                        <li>
                            <span>Express</span>
                            <img src="/images/express.png" alt=""/>
                        </li>
                        <li>
                            <span>MongoDB</span>
                            <img src="/images/mongodb.png" alt=""/>
                        </li>
                        <li>
                            <span>Mongoose</span>
                            <img src="/images/mongoose.png" alt=""/>
                        </li>
                        <li>
                            <span>Jest</span>
                            <img src="/images/jest.png" alt=""/>
                        </li>
                        <li>
                            <span>Git</span>
                            <img src="/images/git.png" alt=""/>
                        </li>
                        <li>
                            <span>Webpack</span>
                            <img src="/images/webpack.png" alt=""/>
                        </li>
                        <li>
                            <span>Render</span>
                            <img src="/images/render.png" alt=""/>
                        </li>
                        <li>
                            <span>Vercel</span>
                            <img src="/images/vercel.png" alt=""/>
                        </li>
                        <li>
                            <span>Sanity</span>
                            <img src="/images/sanity.png" alt=""/>
                        </li>
                        <li>
                            <span>NPM</span>
                            <img src="/images/npm.png" alt=""/>
                        </li>
                        <li>
                            <span>Material-UI</span>
                            <img src="/images/mui.png" alt=""/>
                        </li>
                        <li>
                            <span>Ant-Design</span>
                            <img src="/images/antd.png" alt=""/>
                        </li>
                        <li>
                            <span>Photoshop</span>
                            <img src="/images/ps.png" alt=""/>
                        </li>
                        <li>
                            <span>Illustrator</span>
                            <img src="/images/ai.png" alt=""/>
                        </li>
                        <li>
                            <span>AWS</span>
                            <img src="/images/aws.png" alt=""/>
                        </li>
                        <li>
                            <span>PostgreSQL</span>
                            <img src="/images/postgresql.png" alt=""/>
                        </li>
                        <li>
                            <span>GraphQL</span>
                            <img src="/images/graphql.png" alt=""/>
                        </li>
                    </ul>
                </div>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className={contentState?`${classes.arrow} ${classes.arrowAnime}`:classes.arrow}>
                    <KeyboardDoubleArrowDown className={classes.arrowIcon}/>
                </Link>
            </div>
        </div>
    );
};

export default Skill;