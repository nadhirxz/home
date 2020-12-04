import React, { Component } from 'react'

export default class Dot extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.color
        }
    }
    render() {
        return (
            <div className="dot" style={this.getStyle()}></div>
        )
    }
}
