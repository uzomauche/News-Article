import React from 'react';
import axios from 'axios';
import Card from './Card';
import './News.css';

class News extends React.Component {
    state = {
        posts: []
    };


    API_KEY = '81f11c094bbd48c4ae0796313e3bb0c2';

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=' + this.API_KEY)
            .then(response => {
                const{articles, totalResults} = response.data;
                this.setState({
                    posts: articles
                })
                console.log(this.state.posts);
            });
    }

    render() {
        const{posts} = this.state;
        return (
            <div>
                <div className="main">
                    <div className="news-header"></div>
                <div className="card-wrapper">
                    {posts.length>0? posts.map((post) =>{
                        console.log(post);
                        return(
                            <Card post={post} />
                        )
                        }):null}

                </div>

                </div>
                
            </div>


        );
    }
}

export default News
