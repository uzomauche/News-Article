import React from 'react';

class Card extends React.Component{
    render(){
        const {post}=this.props;
        return(
            <div className="card">
            <h4>{post.title}</h4>
            <a target="_blank" href="http://www.bbc.co.uk/news/world-australia-51369140"><img src={post.urlToImage} width="200"/></a>
            <p>{post.author}</p>
            <p>{post.description}</p>
            </div>
            
        );
    }
};

export default Card;