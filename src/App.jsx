import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './componentes/HomePage';
import CountryDetail from './componentes/CountryDetail';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:alpha3Code" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;
