import React, { Component } from 'react';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        let fentity = this.props.fentities[this.props.match.params.fentities].find((f)=> { return f.name === this.props.match.params.name})
        console.log( this.props.fentities[this.props.match.params.fentities])
        return (
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
