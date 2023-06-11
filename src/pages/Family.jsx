import react,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Family extends Component{
    render(){
        return(
            <div>
                <NavLink to='/'>돌아가기</NavLink>
                <div>우리집에는 엄마 아빠 오빠 언니 동생이 있는데 동생은 고양이야 살구지</div>
            </div>
        )
    }
}

export default Family