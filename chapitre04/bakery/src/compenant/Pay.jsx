import React, { Component } from 'react'
import Card from './Card.jsx'

class Pay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }
    handleSelect(name, price) {
        // const objet ={
        //     basket: [
        //         name,
        //         price
        //     ]
        // }
        console.log('name', name);
        console.log('price', price);
    }
    render() {
        console.log('onCkickB', this.props.onClickB);
        return (
            <div>
                <div>
                    Pay
                </div>
                {/* <Card onClickB={() => {}} />  */}
                <div><p>{this.state.total}</p></div>
                <div>
                    {this.props.items.map(elem => {
                        console.log('elem', elem);
                        return (
                            <Card key={elem.name} onClickB={this.handleSelect}  productName={elem.name} price={elem.price} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Pay