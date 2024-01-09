import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min_height">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Company">
          <Company />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/NewProject">
          <NewProject />
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
