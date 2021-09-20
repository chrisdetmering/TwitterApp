import React from 'react'    


export default function Home() {
    return (
        <div id="home-container" className="container">
            <div className="row">
                <div className="col-2" />
                <div className="home-descriptions col-8">
                    <h1 className="page-title">Home</h1>
                    <p>Are you a super-fan?  Want to know what the experts are saying during your 
                    favorite team's game?  Team Tweets Live is here to keep you up to date with 
                    live Tweets from the voices you want to hear.</p>
                </div>
            </div>
            <div id="home-body" className="row">                
                <div className="home-descriptions col-6">
                    <h2>Live</h2>
                    <p>See scores, stats, and live tweets about your favorite team as the game goes on</p>
                    <img src="https://i.giphy.com/d8QcGOStfk8b1Q5lTJ.gif" alt="funny GIF" width="50%"></img>
                </div>
                <div className="home-descriptions col-6">
                    <h2>Search</h2>
                    <p>Search for accounts to add to your stream as well as remove accounts you're not
                    interested in</p>
                    <img src="https://i.giphy.com/d8QcGOStfk8b1Q5lTJ.gif" alt="funny GIF" width="50%"></img>
                </div>
            </div>
        </div>
    )
}
