import React from 'react'
import tweet1 from './images/tweet1.jpg'
import tweet2 from './images/tweet2.jpg'
import tweet3 from './images/tweet3.jpg'
import ninersSched from './images/49ersSched.jpg'
import TweetCard from './components/TweetCard';
// import LiveTweetList from './components/LiveTweetList'


export default function TweetGallery() {
    return (
        <div className="container-fluid">
            <h1 className="page-title">Live</h1>
            <div className="row">
                <div id="tweet-column" className="tweet-column col-2">
                    <h2>Tweets</h2>
                </div>
                <div id="tweet-column" className="tweet-column col-2">
                    <h2>Tweets</h2>
                </div>
                <div id="tweet-column" className="tweet-column col-2">
                    <h2>Tweets</h2>
                </div>
                <div id="tweet-column" className="tweet-column col-2">
                    <h2>Tweets</h2>
                </div>
                <div id="tweet-column" className="tweet-column col-2">
                    <h2>Tweets</h2>
                </div>
                
            </div>
        </div>
    )
}
