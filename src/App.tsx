import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Hackathon/Header';
import Main from './components/Hackathon/Main';
import Footer from './components/Hackathon/Footer';
import DeleteBTN from './components/Hackathon/DeleteBTN';
export default function App() {
  return (
    <div>
      <Header></Header> 
      <Main></Main>
      <Footer></Footer>
      <DeleteBTN></DeleteBTN>
    </div>
  )
}
