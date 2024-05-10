import React from 'react'
import { Card } from './Card'

export function CardList({list}){
   return (
    <div className="cards-container">
        {list.map(game => {
          return <Card id={game[1].id} key={game[1].id} title={game[1].name} img={game[1].background_image} images={game[1].short_screenshots.slice(0, 4)}  modalStores={game[1].stores} platforms={game[1].platforms} esrb_rating={"0"} score={game[1].metacritic} rating={game[1].rating} tags={game[1].tags.filter(tag => tag.language == "eng")}></Card>
          })}
    </div>
   )

};