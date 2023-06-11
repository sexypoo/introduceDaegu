import react,{Component} from 'react';
import './css/App.scss'
import Main from './pages/Main'
import About from './pages/About'
import Family from './pages/Family'

import {
    Route,
    Routes,
    Link,
  } from 'react-router-dom';


class App extends Component{
    render(){
        return(
            <div className="App">
            <Routes>
                <Route path='/About' element  = {<About/>}></Route>
                <Route exact path='/' element = {<Main/>}></Route>
                <Route path='/Family' element={<Family/>}></Route>
            </Routes>
            </div>
        )
    }
}
export default App;
