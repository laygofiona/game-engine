import React from 'react'
import { CardList } from '../components/CardList'

export const GameContainer = ({ list, title }) =>
{
  return(
    <div className="">
      <h2>{title}</h2>
      <CardList list={list}></CardList>
    </div>
  );
};

export default GameContainer;