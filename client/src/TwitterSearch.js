import React from 'react';
import AccountSearchBar from './components/AccountSearchBar';

export default function TwitterSearch() {
    
    function handleSearch(e, query) {
        e.preventDefault();
        setCurrentPageUrl(`https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified`);
      }
    
    return (
        <div className="container" >
            <h1 className="page-title">Search</h1>
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        {/* <p>Search by name, content or hashtag</p> */}
                        <AccountSearchBar handleSearch={handleSearch} />
                    </div>
                    <br />
                    <div className="row">
                        Search Results
                    </div>
                    
                </div>
                <div className="col-9">
                    <h2>Results</h2>
                </div>
            </div>
        
        </div>
    )
}
