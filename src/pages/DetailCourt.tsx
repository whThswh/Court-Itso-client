import React, { useState } from 'react';
import styled from 'styled-components';
import { CourtDetailProps } from '../types/CourtType';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

const DetailContainer = styled.div`
  top: 60px;
  background-color: white;
  padding: 0.7rem;
  height: calc(100vh - 100px);
  overflow: scroll;
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

const Tab = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  color: ${(props) => (props.selected ? 'black' : 'gray')};
  border-bottom: ${(props) =>
    props.selected ? '2px solid black' : '2px solid gray'};
`;

const CourtDetail: React.FC<CourtDetailProps> = ({ court }) => {
  const [selectedTab, setSelectedTab] = useState('예약 테이블');

  const ReservationTable = (
    <>
      {court.reservationLink ? (
        <div>여기에 예약 테이블 내용을 표시합니다.</div>
      ) : (
        <div>
          <SportsTennisIcon fontSize="large" />
          <p>예약 정보는 사이트에서 확인해 주세요.</p>
        </div>
      )}
    </>
  );

  const FacilityInfo = (
    <div>
      <p>가격: 1면 1시간 {court.price}원</p>
      <p>이용시간: {court.usageTime}</p>
      <p>코트 유형: {court.indoorOrOutdoor}</p>
      <p>코트 재질: {court.courtMaterial}</p>
    </div>
  );

  return (
    <DetailContainer>
      <Thumbnail src={court.thumbnail} alt="court thumbnail" />
      <div>
        {court.type} and {court.courtMaterial}
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
        <Tab
          selected={selectedTab === '예약 테이블'}
          onClick={() => setSelectedTab('예약 테이블')}
        >
          예약 테이블
        </Tab>
        <Tab
          selected={selectedTab === '시설 정보'}
          onClick={() => setSelectedTab('시설 정보')}
        >
          시설 정보
        </Tab>
      </TabContainer>
      {selectedTab === '예약 테이블' ? ReservationTable : FacilityInfo}
    </DetailContainer>
  );
};

export default CourtDetail;
