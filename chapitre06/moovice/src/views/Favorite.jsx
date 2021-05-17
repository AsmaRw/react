import React, { Component } from 'react';

class Favorite extends Component {
    constructor(){
        super()
        this.state={
            movies: [],
            favIDs: JSON.parse(localStorage.getItem("movies"))
        }
    }

    getMovie(id){
        const API_KEY = 'e441f8a3a151d588a4932d2c5d310769'
        const url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    }

    render() {
        return (
            <div>
                <h1 className="text-center" >favorites</h1>
            </div>
        );
    }
}

export default Favorite;
