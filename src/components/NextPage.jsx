import React from 'react'

export function NextPage({ goToNextPage, goToPrevPage }) {
    return(
        <>
            <div className="next-page">
                <button onClick={goToPrevPage}><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={goToNextPage}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </>
    )
}