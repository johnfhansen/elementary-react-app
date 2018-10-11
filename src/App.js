import React, { Component} from "react";
import { ElementaryComponent } from './elementary-component';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Elementary helo</h1>
        <ElementaryComponent name={'boris'}/>
      </div>
    );
  }
}

export default App;

