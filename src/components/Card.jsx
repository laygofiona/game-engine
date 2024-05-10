import React from 'react'
import { useState } from 'react';
import { Modal } from './Modal';

export function Card({title, img, images, modalStores, platforms, esrb_rating, score, rating, tags}) {

    // Define state
    const [isModalOpen, setIsModalOpen] = useState(false);

     // Define function that will open the modal
    const handleOpen = () => {
        setIsModalOpen(true);
    };    

    // Define function that will close the modal
    const handleClose = () => {
        setIsModalOpen(false);
    };



    return(
        <>
            <div className="card-outer" onClick={handleOpen}>
                <img src={img} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
            <div className={isModalOpen ? "modal-container active" : "modal-container"}>
                <Modal title={title} stores={modalStores} images={images} platforms={platforms} esrb_rating={esrb_rating} score={score} rating={rating} tags={tags} setModalClose={handleClose} isModalOpen={isModalOpen}></Modal>
            </div>
        </>
    );
};
