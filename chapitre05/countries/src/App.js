import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../src/componant/Button.jsx'
import Card from '../src/componant/Card.jsx'

class App extends Component {

    constructor() {
        super()

        this.state = {
            valueToSearch: "",
            countriesFound: []
        }

        this.handleInputSearch = this.handleInputSearch.bind(this)
    }

    searchCountries(valueToSearch) {
        // console.log("searchCountries", valueToSearch);

        const url = "http://localhost:8001/countries/search/" + valueToSearch

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in search countries", data);

                this.setState({
                    countriesFound: data
                })
            })
    }

    handleInputSearch(e) {
        // console.log("handleInputSearch", e.target.value);

        this.setState({
            valueToSearch: e.target.value
        })
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="offset-4 col-4">
                        <h1 className="text-center">Countries</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-4">
                        <input type="text" name="" id="" onInput={this.handleInputSearch} />
                        <Button onClick={() => this.searchCountries(this.state.valueToSearch)}>Search</Button>
                    </div>
                </div>

                <div className="row">
                    {
                        this.state.countriesFound.map(elem => {
                            return <div key={elem.name} className="col-6">
                                <Card
                                    name={elem.name}
                                    capital={elem.capital}
                                    flag={elem.flag}
                                    population={elem.population}
                                    region={elem.region}
                                />
                            </div>
                        })
                    }
                </div>


            </div>
        );
    }
}

export default App;