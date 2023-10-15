import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from './components/compo/card';
import './components/compo/card.css';
// import { Superover } from './superover/superover';
import { Social } from './components/social/social';
import { Notification } from './components/notification/notification';
import { Login } from './components/login/login';
import { Technology } from './components/technology/technology';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu } from './components/router/menu';
import { Counter } from './components/counter/counter';
import { Feedback } from './components/feedback/feedback';
import { Feedback1 } from './components/feedback/feedback1';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Fruties } from './components/fruties/fruites';
import { Data } from './components/data/data';
import { Date } from './components/date/date';
import { Datacard } from './components/data/data2';
import {Portfolio} from './components/portfolio/portfolio'
import { Home } from './components/portfolio/home';
import  {About}  from './components/portfolio/About';
import { Contact } from './components/portfolio/contact';
import {  Project } from './components/portfolio/project';

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          
          <Route path='/Home' element={[<Portfolio/>,<Home/>]}></Route>
          <Route path='/about' element={[<Portfolio/>,<About/>]}></Route>
          <Route path='/contact' element={[<Portfolio/>,<Contact/>]}></Route>
          <Route path='/Project' element={[<Portfolio/>,<Project/>,<Menu/>]}></Route>
           <Route path='/Login' element={[<Menu />, <Login />]}></Route>
          <Route path='/Card' element={[<Menu />, <Card />]}></Route>
          <Route path='/Notification' element={[<Menu />, <Notification />]}></Route>
          <Route path='/Social' element={[<Menu />, <Social />]}></Route>
          <Route path='/Technology' element={[<Menu />, <Technology />]}></Route>
          <Route path='/Counter' element={[<Menu />, <Counter />]}></Route>
          <Route path='/Feedback' element={<Feedback />}></Route>
          <Route path='/Feedback1' element={<Feedback1 />}></Route>
          <Route path='/Date' element={[<Menu />, <Date />]}></Route>
          <Route path='/Fruties' element={[<Menu />, <Fruties />]}></Route>
          <Route path='/Data' element={[<Menu />, <Data />]}></Route>
          <Route path='/Datacard/:id' element={[<Menu />,<Datacard />]}></Route> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
