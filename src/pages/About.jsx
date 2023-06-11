import react,{Component} from 'react';

import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

import '../css/About.scss'


const StyledText = styled.div`
font-size:30px;
font-family:sans-serif;
font-weight:1000;
text-align:center;
`

class About extends Component{
    render(){
        return(
            <div>
                <NavLink to='/'>
                    돌아가기
                </NavLink>
    
                <StyledText>
                    나는 여자아이고, 2019년 9월 9일에 태어났어!
                    <br></br>
                    고은이 언니랑은 2020년 2월 15일부터 같이 살고있지 😸
                    <br></br>
                    기력딸려서 디자인 못했어요..
                </StyledText>
            </div>
        )
    }
}

export default About