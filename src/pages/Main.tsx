import React from 'react';
import Navbar from '../components/common/Navbar';
import Filter from '../components/Filter/Filter';
import Map from '../Map/Map';
import CourtLists from './ListsCourt';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  // margin: auto;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`;

function Main() {
  return (
    <Container>
      <Navbar />
      <Filter />
      <Map />
      <CourtLists />
    </Container>
  );
}

export default Main;
