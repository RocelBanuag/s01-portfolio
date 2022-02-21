import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: Column;
    padding: 20px;
`

const Logo = styled.h1`
    text-align: center;
    margin-right: 1%;
`
const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SocIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    color: white;
    margin-right: 20px;
    margin-top: 10px;
`

const Footer = () => {
    return (
        <Container>
            <Center>
                <Logo>React-Bootstrap</Logo>

                <SocialMediaContainer>
                    <SocIcon>
                        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="https://www.facebook.com/"/>
                    </SocIcon>
                    <SocIcon >
                        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="https://www.instagram.com/"/>
                    </SocIcon>
                    <SocIcon >
                        <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="https://twitter.com/"/>
                    </SocIcon>
                    <SocIcon >
                        <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="https://youtube.com/"/>
                    </SocIcon>
                </SocialMediaContainer>
            </Center>
        </Container   >
    )
}

export default Footer
