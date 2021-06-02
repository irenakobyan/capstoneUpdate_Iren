import React, {Component} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import PartnerItems from '../../components/Partners/PartnerItems';
import MissionItems from '../../components/Mission/MissionItems';
import About from '../../components/About/About';
import MainItems from './MainItems/MainItems';
import Cafes from '../../components/Cafes/Cafes';
import Footer from '../../components/Footer/Footer.js';
import Text from '../../components/Text/Text.js';
import Register from '../../components/Register/Register.js';
import Login from '../../components/Login/Login.js';
import Profile from '../../components/Profile/Profile.js';
import MyCafe from '../../components/MyCafe/MyCafe.js';
import Form from '../../components/RestRegister/RestRegister.js';
import CafeRegister from '../../components/CafeRegister/CafeRegister.js';
import ContactPage from '../../components/Contact/ContactPage.js';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import backImg from '../../assets/backImg.jpeg';
import classes from './Main.module.css';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';

class Main extends Component {
  state = {
    status: false
  };

  render() {
    const { history } = this.props;

      const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

    return(
      <div>
        <NavigationItems />
        <Switch>
          <Route path="/" exact component={MainItems} />
          <Route path="/whoweare" component={About} />
          <Route path="/filter" exact component={Cafes} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/mycafe" component={MyCafe} />
          <Route path="/partnership" component={CafeRegister} />
        </Switch>
        <Footer />
      </div>
  );
  }
}

export default withRouter(Main);
