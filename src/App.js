import React from 'react';
import './App.css';
import FILE from './file';
import InnerComponent from './InnerComponent';
import Dispatcher from './dispatcher';
import {BrowserRouter, Route, Link, Switch, HashRouter, Redirect} from "react-router-dom";
import {Auth} from "@aws-amplify/auth";
import Amplify from "aws-amplify";

class App extends React.Component {

  login() {
    Auth.signIn('username', 'password').then((user) => {
      console.log(user)
    }).catch(err => {
      console.log(err);
    });    
  }

  componentDidMount() {
    Amplify.configure({
        Auth: {
            region: 'eu-west-2',
            userPoolId: 'eu-west-2_T6oAlINsR',
            userPoolWebClientId: 'fi4vnuthua6deeb37vba9r0fo'
        },
    });

    this.login();
}

  render() {
    return (
      <div>
        <BrowserRouter>

          <div className="col-4">
            <Link to="/home">HOME</Link>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to="/routeFirst">Link 1</Link>
            </div>
            <div className="col-4">
              <Link to="/second">Link 2</Link>
            </div>
            <div className="col-4">
            <Link to="/redirect">Redirect</Link>
            </div>
            <div className="col-4">
            <Link to="/dispatcher">Dispatcher</Link>
            </div>


          </div>

          {/* <HashRouter> */}
            <Switch>
              <Route path="/routeFirst/" component={InnerComponent}></Route>
              <Route path="/second" component={FILE}></Route>
              <Route path="/redirect"><Redirect to="/second"></Redirect> </Route>
              <Route path="/home" exact render={() => <div> Home Component </div> }> HOME COMPONENT </Route>
              <Route path="/dispatcher" component={Dispatcher}></Route>
              {/* <Redirect from="/" to="/unknown"></Redirect> */}
              <Route render={() => { return <h1>Not Found</h1>; }} />
            </Switch>
          {/* </HashRouter> */}
          
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;