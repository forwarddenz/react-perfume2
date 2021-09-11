import { Header } from './Components/Header/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Route path='/' component={Home} exact />
        <Route path='/Cart' component={Cart} exact />
      </div>
    </>
  );
}

export default App;
