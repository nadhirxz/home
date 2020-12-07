import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default class NotFound404 extends Component {
    render() {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                <h1>OOPS! Nothing here ..</h1>
                <Link to="/"><button className="btn">Home</button></Link>
            </motion.div>
        )
    }
}
