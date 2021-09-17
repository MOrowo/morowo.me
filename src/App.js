import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './pages';
import About from './pages/about';
import RecentProject from './pages/recent_project'

function App() {
  const [isShow, set_isShow] = useState(false)

  const toggle = () => {
    set_isShow(!isShow);
  }

  useEffect(() => {
    const showDropdown = () => {
      if ((window.innerWidth > 768) && isShow) {
        set_isShow(false);
      } //768 is medium size for tailwind
    }

    window.addEventListener('resize', showDropdown)

    return () => {
      window.addEventListener('resize', showDropdown)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isShow={isShow}></Dropdown>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/recent-projects" component={RecentProject}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
