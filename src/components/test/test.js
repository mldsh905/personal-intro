import React from 'react';
import classes from './test.module.css';
import { useInView } from 'react-intersection-observer';


const Test = () => {
    const {ref:myref, inView:state} = useInView();
    const {ref:myref1, inView:state1} = useInView();
    // if (state) {
    //     console.log(1);
    // }else{
    //     console.log(0);
    // }

    return (
        <div>
            <div className={classes.test0}>
                {`test2 ${state}`}
            </div>
            <div ref={myref1} className={classes.test0}>
                {'test' + state1}
            </div>
            <div ref={myref} className={state?classes.test0:classes.test1}>
                {`test2 ${state}`}
            </div>
        </div>
    );
};

export default Test;