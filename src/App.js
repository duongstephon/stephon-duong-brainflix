import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/video/:videoId" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </Router>
  );
}

export default App;
