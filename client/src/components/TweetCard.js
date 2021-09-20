import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard() {

    let data = props.data;

    return (
        //clicking the tweet will send you to tweet on twitter site 
        <div className="container">
            <div id="tweet-card" className="row" >
                <div className="col-1">
                    <img id="profile-photo" src={data.user.profile_image_url} alt={data.user.name} className="circle responsive-img" />
                </div>
                <div id="tweet-body" className="col-11">
                    <div id="twitter-name" className="row">
                        <p>
                            <span id="bold-name">{data.user.name} {data.verified = true ? <img src={verified}/> : null}</span>
                            <span> </span>
                            <span className="grey">{`@${data.user.screen_name}`} </span>
                            <span className="grey">∙ {data.created_at}</span>
                        
                        </p>
                    </div>
                    <div className="row">
                        <span>{data.text}</span>
                    </div>
                    <div className="row">
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> 2 </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> 3 </span>
                        <span className="icon"><img className="icon-image"src={heart}/> 4 </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
