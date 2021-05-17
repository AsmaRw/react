import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'image/1tem.png'
        }
    }
    render() {
        console.log('CARD props', this.props);
        return (
            <>
                <button onClick={this.props.onClickB(this.props.productName, this.props.price)}> 
                <img src={this.state.image}/> 
                </button>
            </>
        );
    }
}

export default Card;
