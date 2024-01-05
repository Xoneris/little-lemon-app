import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from './components/header';
import Main from './components/main';
import Hero from "./components/hero";
import Footer from './components/footer';
import TableBooking from "./components/tableBooking";


function App() {

  const [availableTimes, setAvailableTimes] = useState(
    [
        {time: "17:00"},
        {time: "18:00"},
        {time: "19:00"},
        {time: "20:00"},
        {time: "21:00"},
        {time: "22:00"}
    ]
);

  return (
    <>
      <Header></Header> 
      <main>
      <Hero></Hero>
      <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="reservations" element={<TableBooking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>

          {/* 
          <Route path="/about" element={<About />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          
          <Route path="order" element={<OrderOnline />}></Route>
          <Route path="login" element={<Login />}></Route>
          */}
      </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
