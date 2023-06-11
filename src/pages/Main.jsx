import react,{Component} from 'react';

import {
    Link
  } from 'react-router-dom';

import '../css/Main.scss'

import blue from './imgs/blue.svg'
import daegu from './imgs/daegu_main.png'

class Main extends Component{
    render(){
        return(
            <div className='Main'>
                <div className='img'>
                    <div className='blue'>
                        <img src={blue}></img>
                    </div>
                    <div className='daegu'>
                        <img src={daegu}></img>
                    </div>
                </div>
                <div className='text'>
                    <div>안녕 👋 <br></br> 내 이름은 대구야 🐱</div>
                    <ul className='list'>
                        <li><Link to='/About'>나에 대해 소개할게</Link></li>
                        <li><Link to='/Family'>내 가족을 소개할게</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main