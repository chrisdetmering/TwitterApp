import React, { useState } from 'react'

export default function AccountSearchBar({ handleSearch }) {
    const [text, setText] = useState('')    

    const onSearch = e => {
        handleSearch(e, text)
        setText('')
    }

    const handleChange = e => {
        setText(e.target.value)
    }

    return (
        <div className ="search">
            <form onSubmit={onSearch}>
                <input 
                    type='text'
                    className="form-control"
                    placeholder="Search by keyword or username"
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </div>
    )
}
