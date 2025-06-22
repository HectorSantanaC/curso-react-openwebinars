import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import Login from './components/Login'
import MovieList from './components/MovieList'
import AnimalList from './components/AnimalList'

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

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }

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
        {user.username && <h2 onClick={sayHello}>Hola {user.username}!</h2>}
        <Login handleLogin={login}></Login>

        <MovieList></MovieList>

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
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
