import React from 'react'

export function ErrorComponent({}) {
    return(
        <div className="error-message">
            <span><i className="fa-solid fa-skull-crossbones"></i></span>
            <h2>Sorry, the page your looking for doesn't exist</h2>
            <h3>Come back another time!</h3>
        </div>
    )
}