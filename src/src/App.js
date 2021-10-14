import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Upload from './components/Upload';
import Table from './components/Table';
import ImgFrist from './components/FileShareOne';
import ImgSecond from './components/FileShareSecond'
function App() {
  return (
    <div className="apps">
      <BrowserRouter>
        <Switch>
          <Route>
            <Header />
            <ImgFrist />
            <Upload />
            <ImgSecond />
            <Table />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
