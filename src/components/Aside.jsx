import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export function Aside({ getClassName, handleHome }){
  return (
    <div className='aside'>
        <div>
            <h4 onClick={handleHome}>Home</h4>
        </div>
        <div className="genres">
            <h3>Genres</h3>
            <ul>
              <li onClick={getClassName} className="action"><i className="fa-solid fa-fire"></i>Action</li>
              <li onClick={getClassName} className="indie"><i className="fa-solid fa-seedling"></i>Indie</li>
              <li onClick={getClassName} className="adventure"><i className="fa-solid fa-explosion"></i>Adventure</li>
              <li onClick={getClassName} className="role-playing-games-rpg"><i className="fa-solid fa-hat-cowboy"></i>Role Playing Games</li>
              <li onClick={getClassName} className="strategy"><i className="fa-solid fa-chess-knight"></i>Strategy</li>
              <li onClick={getClassName} className="shooter"><i className="fa-solid fa-gun"></i>Shooter</li>
              <li onClick={getClassName} className="casual"><i className="fa-solid fa-comment"></i>Casual</li>
              <li onClick={getClassName} className="simulation"><i className="fa-solid fa-user"></i>Simulation</li>
              <li onClick={getClassName} className="puzzle"><i className="fa-solid fa-puzzle-piece"></i>Puzzle</li>
              <li onClick={getClassName} className="arcade"><i className="fa-brands fa-space-awesome"></i>Arcade</li>
              <li onClick={getClassName} className="platformer"><i className="fa-solid fa-gamepad"></i>Platformer</li>
              <li onClick={getClassName} className="racing"><i className="fa-solid fa-car"></i>Racing</li>
              <li onClick={getClassName} className="massively-multiplayer"><i className="fa-solid fa-users"></i>Massively Multiplayer</li>
              <li onClick={getClassName} className="sports"><i className="fa-solid fa-basketball"></i>Sports</li>
              <li onClick={getClassName} className="fighting"><i className="fa-solid fa-hand-fist"></i>Fighting</li>
              <li onClick={getClassName} className="family"><i className="fa-solid fa-people-roof"></i>Family</li>
              <li onClick={getClassName} className="board-games"><i className="fa-solid fa-chess-board"></i>Board Games</li>
              <li onClick={getClassName} className="educational"><i className="fa-solid fa-graduation-cap"></i>Educational</li>
              <li onClick={getClassName} className="card"><i className="fa-solid fa-hat-wizard"></i>Card</li>
            </ul>
        </div>
        <div className='publishers'>
            <h3>Publishers</h3>
            <ul>
              <li onClick={getClassName} className="electronic-arts"><i className="fa-solid fa-building"></i>Electronic arts</li>
              <li onClick={getClassName} className="square-enix"><i className="fa-solid fa-building"></i>Square Enix</li>
              <li onClick={getClassName} className="ubisoft-entertainment"><i className="fa-solid fa-building"></i>Ubisoft Entertainment</li>
              <li onClick={getClassName} className="microsoft-studios"><i className="fa-brands fa-microsoft"></i>Microsoft</li>
              <li onClick={getClassName} className="sega-2"><i className="fa-solid fa-building"></i>SEGA</li>
              <li onClick={getClassName} className="2k-games"><i className="fa-solid fa-building"></i>2K Games</li>
              <li onClick={getClassName} className="valve"><i className="fa-solid fa-building"></i>Valve</li>
              <li onClick={getClassName} className="bethesda-softworks"><i className="fa-solid fa-building"></i>Bethesda Softworks</li>
              <li onClick={getClassName} className="feral-interactive"><i className="fa-solid fa-building"></i>Feral Interactive</li>
              <li onClick={getClassName} className="sony-computer-entertainment"><i className="fa-solid fa-building"></i>Sony Computer</li>
            </ul>
        </div>     
    </div>
  )
}




