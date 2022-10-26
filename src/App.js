import NavBar from './components/nav/nav';
import HeroBanner from './components/heroBanner/heroBanner';
import TwoColContent from './components/twoColContent';
import FilterGrid from './components/filterGrid/filterGrid';
import TwoColCards from './components/cards/twoColCards';
import SignupForm from './components/signupForm/signupForm';
import './scss/index.scss'
import Footer from './components/footer/footer';

function App() {
  return (
    <main className="App">
      <NavBar/>
      <HeroBanner/>
      <div className='page-content' id='page-content'>
        <div className='container'>
          <hr/>
          <TwoColContent/>
          <FilterGrid/>
          <TwoColCards/>
          <SignupForm/>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
