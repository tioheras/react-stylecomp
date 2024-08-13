import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from '../feed/styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Heron de Carli" image="https://avatars.githubusercontent.com/u/162379438?v=4" percentual={25}/>
                <UserInfo nome="Heron de Carli" image="https://avatars.githubusercontent.com/u/162379438?v=4" percentual={65}/>
                <UserInfo nome="Heron de Carli" image="https://avatars.githubusercontent.com/u/162379438?v=4" percentual={45}/>
                <UserInfo nome="Heron de Carli" image="https://avatars.githubusercontent.com/u/162379438?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 