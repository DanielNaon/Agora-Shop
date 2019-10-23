import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Market from './Components/Market'

@observer
class App extends Component{
  
    render(){
      let store = this.props.Store
      console.log(store.items)
      return(
        <div>
          <Market store={store}/>
        </div>
      )
    }

}

export default App;
