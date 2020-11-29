import React from 'react';
import logo from './logo.svg';
import './App.css';
import InpUT from './input';
import {Auth} from "@aws-amplify/auth";
import Amplify from "aws-amplify";

const InputTag = (props) => {
    return (<input type="number" style={{color : "red"}} defaultValue={props.val}></input>);
  }
  
  const ClassComponent = (props) => {
    return ( 
      <div>
        {
          props.arr.map((e, index) => {
            return <InputTag key={index} val={index} />;
          })
        }
      </div>
    )
  }
  
  const Button = (props) => {
    return (
      <input type="button" onClick={props.doIt} name={props.name}></input>
    );
  }
  
class FILE extends React.Component {

    login() {
      Auth.signIn('username', 'password').then((user) => {
        console.log(user)
      }).catch(err => {
        console.log(err);
      });    
    }
  
    state = {
        arr : [ 1, 2], counter : 0
    };


    componentDidMount() {
        this.state.counter = 1;
        Amplify.configure({
          Auth: {
              region: 'eu-west-2',
              userPoolId: 'eu-west-2_T6oAlINsR',
              userPoolWebClientId: 'fi4vnuthua6deeb37vba9r0fo'
          },
      });

      this.login();
    }


    add = () => {
        this.setState(
            {
            arr : [...this.state.arr, Math.random()],
            counter : (this.state.counter + 1) 
            }
        );
    }

    deleteIt = () => {
        let arr = this.state.arr;
        arr.pop();
        this.setState(
            {
            arr : arr, counter : (this.state.counter + 1)
            }
    )

    console.log(this.state.arr);
        }
    
    emptyIt = () => {
    this.setState(
        {
        arr : [], counter : (this.state.counter + 1)
        }
    )
    }

    getCount = () => {
        console.log(this.state.counter);
        alert(this.state.counter);
    }

    render() {
        return (
      
            <div className="App">
              <header className="App-header">
                <ClassComponent arr={this.state.arr}/>
                <Button key="1" doIt={this.add} name="Push"/>
                <Button key="2" doIt={this.deleteIt} name="Pop"/>
                <Button key="3" doIt={this.emptyIt} name="Empty"/>
                <Button key="4" doIt={this.getCount} name="Print"/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>

                <InpUT id="one" type="number" style={{color : 'red'}}></InpUT>
              </header>
            </div>
          );
    }
        
}

export default FILE;