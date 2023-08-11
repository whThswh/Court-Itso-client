import React from 'react';
import styled from 'styled-components';
import { CourtDetailProps } from '../types/CourtType';

const DetailContainer = styled.div`
  // position: absolute;
  top: 60px;
  // max-width: 480px;
  background-color: white;
  padding: 0.7rem;
  height: calc(100vh - 100px);
  overflow: scroll;
  // border: 3px solid black;
  // border-radius: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
`;

const InfoSection = styled.div`
  margin: 10px 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const Tab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CourtDetail: React.FC<CourtDetailProps> = ({ court }) => {
  return (
    <DetailContainer>
      <Thumbnail src={court.thumbnail} alt="court thumbnail" />
      <div>
        {court.type} and {court.privacy}
      </div>
      <InfoSection>
        <div>{court.name}</div>
        <div>{court.distance}</div>
        <div>{court.address}</div>
      </InfoSection>
      <Links>
        <a href={`tel:${court.phone}`}>전화하기</a>
        <a href={court.reservationLink}>예약 사이트 이동</a>
      </Links>
      <TabContainer>
        <Tab>예약 테이블</Tab>
        <Tab>시설 정보</Tab>
        <Tab>리뷰</Tab>
      </TabContainer>
      {/* 탭 내용 */}
    </DetailContainer>
  );
};

export default CourtDetail;
