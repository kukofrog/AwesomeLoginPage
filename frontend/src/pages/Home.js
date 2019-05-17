// @flow
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    margin-top: 55px;
`

class Home extends React.Component{
    render(){
        return(
            <>
                형탁이와 함께하는 즐거운 웹프교실
                <a href="/auth/signin">로그인하기</a>
            </>
        )
    }
}

export default Home;