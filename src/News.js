import React, { Component } from 'react'
import axios from 'axios'

class News extends Component {
    state = {
        posts: []
    };


    API_KEY = '81f11c094bbd48c4ae0796313e3bb0c2';

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=81f11c094bbd48c4ae0796313e3bb0c2')
            .then(res => {
                console.log(res)
                // this.setState({
                //     posts: res.data.slice(0, 10)
                // })
            })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default News
