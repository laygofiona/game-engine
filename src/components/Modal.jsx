import React from 'react'
import { useState } from 'react';
import CustomSlider from "./CustomCarousel";

export function Modal({title, stores, images, platforms, esrb_rating, score, rating, tags, setModalClose, isModalOpen}) {
    /*  <Modal title={modalTitle} desc={modalDesc} trailer={modalTrailer} creators={modalCreators} achievements={modalAchievements} stores={modalStores} img={img} setModalClose={handleClose} isModalOpen={isModalOpen}></Modal> */
    return(
        <div className={isModalOpen ? "modal active" : "modal"}>
            <button className="close-button" onClick={setModalClose}><i className="fa-solid fa-minus"></i></button>
            <CustomSlider>
                {images.map((image, index) => {
                    return <img key={index} src={image.image} alt="Screenshot of gameplay" />;
                 })}
            </CustomSlider>
            <div className="info">
                <div>
                    <h3>{title}</h3>
                    <h4>Metacritic Score: <span>{score !== null ? score : "n/a"}</span></h4>
                    <h4>Rating (out of 5): <span>{rating !== null ? rating : "n/a" }</span></h4>
                    <p>{
                     tags !== null ?
                        tags.map((tag, i) => {
                            if(i == tags.length - 1) {
                                return <span key={i}>{tag.name}</span>
                            }
                            return <span key={i}>{tag.name}, </span>
                        })
                    : "n/a"}</p>
                </div>
                <div>
                    <ul>
                        <li key={1}><span>Platforms: </span>{
                        platforms !== null ? 
                        platforms.map((platform, i) => {
                            if(i == platforms.length - 1){
                                return <span key={i}>{platform.platform.name}</span>
                            }
                            return <span key={i}>{platform.platform.name}, </span>
                        }) : "n/a" }</li>
                        <li key={2}><span>Stores: </span>{
                            stores !== null ?
                        stores.map((store, i) => {
                            if(i == stores.length - 1){
                                return <span key={i}>{store.store.name} </span>
                            }
                            return <span key={i}>{store.store.name}, </span>
                        }) : "n/a"}</li>
                        <li><span>ESRB Rating: </span>{esrb_rating !== null ? esrb_rating : "n/a"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
