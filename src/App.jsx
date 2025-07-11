import { useEffect, useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import Login from './components/Login'
import MovieList from './components/MovieList'
import AnimalList from './components/AnimalList'
import MemeList from './components/MemeList'

function App() {
  //let number = 0;

  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  let myPlaceholder = "Escribe aquí";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us"
  };

  const [user, setUser] = useState({});

  // useEffect(() => {
//   console.log("Ejecución cada vez que se renderiza el componente raíz")
// })

// useEffect(() => {
//   console.log("Ejecución con cada cambio de la variable reactiva user")
// }, [user])

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }

  const [showMovies, setShowMovies] =useState(true);

  const condition = true;

  const addOne = () => {
    //number++;
    setNumber(number + 1);
    console.log(number);
  }

  const sayHello = () => {
    console.log("Hello!");
  }

const handleChange = (e) => {
  console.log(e.target.value);
}

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className='main-content'>
        <MemeList></MemeList>
        
        {/* {user.username && <h2 onClick={sayHello}>Hola {user.username}!</h2>}
        <Login handleLogin={login}></Login>

        <button onClick={() => {setShowMovies(!showMovies)}}>Toggle Movies</button>
        {showMovies && <MovieList></MovieList>}

        {/* <MovieList></MovieList>

        <AnimalList></AnimalList>

        {condition && <h2>La condición se cumple</h2>}
        {!condition && <h2>La condición no se cumple</h2>}

        { condition ? (
            <h2>La condición se cumple</h2>
          ) : (
            <h2>La condición no se cumple</h2>
        )}

        <h2 onClick={addOne}>Number: {number}</h2>

        <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange}/>

        <br />
        <br />
        <ButtonComponent></ButtonComponent> */}
      </main>
    </>
  )
}

export default App
