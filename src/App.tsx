import React , {Component} from 'react';
import { LoginScreen } from './screens/auth/LoginScreen';

export default class App extends Component {
  render(){
    return(
      <div>
        <LoginScreen/>
      </div>
    )
  }
}