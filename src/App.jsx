import { NavBar } from "./components/NavBar"
import { Aside } from "./components/Aside"
import { useState, useEffect } from "react";
import { GameContainer } from "./components/GameContainer"
import { NextPage } from "./components/NextPage"
import { ErrorComponent } from "./components/ErrorComponent";


// to do
// make modal appear in the middle of viewport screen
// make it responsive for phones and tablets (modal buttons in phone need to have more spacing)

function App() {
  const apiKey = 'e4ea2f4eb07c401585bb900622761b53';
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  const [gameList, setGameList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [currentURL, setCurrentURL] = useState(`https://api.rawg.io/api/games?token&key=${apiKey}&page=${pageIndex}`);


  function getGamesData(url) {
    fetch(url)
      .then(res => {
          if (!res.ok) {
          // Check for specific error conditions
          if (res.status === 502) {
            // refresh page
             getGamesData(url)
          } 
          else {
            // Display 404 page not found, come back another time
            setHasError(true);
          }
        }
        else {
          setHasError(false);
          return res.json();
        }
    })
    .then(data => setGameList(Object.entries(data.results)))
    .catch(error => console.error('Error:', error));
  }


  function getClassName(e) {
    // Set title
    setSubmittedTitle(e.target.textContent);
    // get the className of the element and put it into the url
    setCurrentURL(`https://api.rawg.io/api/games?token&key=${apiKey}&${e.target.parentElement.parentElement.className}=${e.target.className}&page=${pageIndex}`);
  }

  function goHome() {
    setSubmittedTitle("Popular All Time 🔥");
    setCurrentURL(`https://api.rawg.io/api/games?token&key=${apiKey}&page=${pageIndex}`);
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSearch() {
    if(inputValue !== ""){
      setSubmittedTitle(inputValue);
      setCurrentURL(`https://api.rawg.io/api/games?token&key=${apiKey}&search=${inputValue}&page=${pageIndex}`);
    } 
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  function handleNextPage() {
    // Get the current getGamesDataURL and then add the pages query and append one
    // if result is null, then don't show next page button;
    setPageIndex(pageIndex + 1);
  }

  function handlePrevPage() {
    if (pageIndex > 1)
    {
        setPageIndex(pageIndex - 1);
    }
  }

  useEffect(() => {
    goHome()
  }, []); 

  useEffect(() => {
    setCurrentURL(URL => `${URL.slice(0, -1)}${pageIndex}`);
  }, [pageIndex]);

  useEffect(() => {
    getGamesData(currentURL);
  }, [currentURL]);

  useEffect(() => {
    // Each time submittedTitle changes, set the pageIndex to 1
    setPageIndex(pageIndex => 1);
  }, [submittedTitle])



  return (
    <div className="App container">
        <NavBar handleInput={handleInput} inputValue={inputValue} searchTitle={handleSearch} handleKeyPress={handleKeyPress}/>
        <div className="main">
        {hasError ? (
          <ErrorComponent />
        ) : (
          <>
            <GameContainer list={gameList} title={submittedTitle}></GameContainer>
            <NextPage goToNextPage={handleNextPage} goToPrevPage={handlePrevPage}></NextPage>
          </>
        )}
        </div>
        <Aside getClassName={getClassName} handleHome={goHome}/>
    </div>
  )
}

export default App
