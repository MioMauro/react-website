import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx';
import { Analytics } from './components/Analytics.jsx';
import { NewsLetter } from './components/NewsLetter.jsx';
import { Cards } from './components/Cards.jsx';

function App() {
  return (
    <div className="App">
<Navbar />
<Hero />
<Analytics />
<NewsLetter />
<Cards />
    </div>
  );
}

export default App;
