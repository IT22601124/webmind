import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      

      <main className="content">
        <section className="years">
          <p>2015</p>
          <p>2014 – 2013</p>
        </section>

        <section className="main-text">
          <h2>An extensive dealer network of our company.</h2>
          <p className="date">20.06</p>
          <p>Eco-friendly materials & best European quality.</p>
          <p className="date">05.06</p>
          <p>New arrivals. Building and finishing materials.</p>
          <p className="date">17.05</p>
        </section>

        <footer className="footer">
          <ul>
            <li>ABOUT</li>
            <li>NEWS</li>
          </ul>
          <ul>
            <li>Rus</li>
            <li>Eng</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default Home;
