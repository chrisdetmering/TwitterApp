import React from 'react';
import FollowedAccountList from './components/FollowedAccountList';
import AccountSearchBar from './components/AccountSearchBar';

export default function TwitterSearch() {
    return (
        <div className="container" >
            <h1 className="page-title">Search</h1>
            <div className="row">
                <div className="col-3">
                    <h2>My Stream</h2>
                    <FollowedAccountList />
                </div>
                <div className="col-6">
                    <div className="row">
                        <p>Search by name, content or hashtag</p>
                        <AccountSearchBar />
                    </div>
                    <br />
                    <div className="row">
                        Search Results
                    </div>
                    
                </div>
                <div className="col-2">

                </div>
            </div>
        
        </div>
    )
}
