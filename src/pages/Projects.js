import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { printingChars, printLetterByLetter, titleInterval } from '../functions.js';

const title = 'My Projects';

export default class Projects extends Component {
    componentDidMount() {
        printLetterByLetter(document.getElementById('title'), title, titleInterval);
        printingChars();
    }
    render() {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                {/* eslint-disable-next-line */}
                <h1 id='title'></h1>
                <p className='print-chars'>Such empty. I'll add them later ..</p>
                <Link to={this.props.mainPath}><button className="btn back-btn">Back</button></Link>
            </motion.div>
        )
    }
}