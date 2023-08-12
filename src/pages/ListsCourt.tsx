import React, { useState } from 'react';
import styled from 'styled-components';
import CourtDetail from './DetailCourt';
import { CourtDetailProps } from '../types/CourtType';
// import Map from '../Map/Map';

const CourtInfoContainer = styled.div<{ expanded: boolean }>`
  // z-index: 20;
  position: absolute;
  bottom: 0;
  // max-width: 480px;
  width: 450px;
  background-color: white;
  padding: 0.7rem;
  height: ${(props) => (props.expanded ? 'calc(100vh - 100px)' : '200px')};
  overflow: scroll;
  transition: height 0.3s ease-in-out;
  border: 3px solid black;
  border-radius: 10px;
`;

const DragHandle = styled.div`
  display: flex;
  cursor: grab;
  margin: auto;
  width: 30%;
  border: 2px solid gray;
`;

const CourtItem = styled.div`
  display: flex;
  margin: 10px;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const CourtInfo = styled.div`
  margin-left: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const CourtLists: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedCourt, setSelectedCourt] = useState<CourtDetailProps | null>(
    null
  );
  // const [distanceFromCourt, setDistanceFromCourt] = useState<number | null>(
  //   null
  // );

  const handleDragStart = (e: any) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  // 더미
  const court = {
    name: '테니스장A',
    address: '영동구 영동대로 30',
    distance: '내 위치에서 5km',
    thumbnail: 'https://example.com/thumbnail.jpg',
    type: '코트',
    courtMaterial: '하드',
    phone: '02-0202-0303',
    reservationLink: '',
    price: 15000,
    usageTime: '06:00~22:00',
    indoorOrOutdoor: '실내',
    mapX: 37.3595704,
    mapY: 127.105399,
  };

  const handleCourtClick = () => {
    setSelectedCourt({ court });
  };

  const handleCloseDetail = () => {
    setSelectedCourt(null);
  };

  return (
    <div>
      {/* <Map setDistanceFromCourt={setDistanceFromCourt} /> */}
      <CourtInfoContainer expanded={expanded}>
        <DragHandle onMouseDown={handleDragStart}></DragHandle>
        {selectedCourt ? (
          <>
            <CloseButton onClick={handleCloseDetail}>X</CloseButton>{' '}
            <CourtDetail court={selectedCourt.court} />
          </>
        ) : (
          <CourtItem onClick={handleCourtClick}>
            <Thumbnail src={court.thumbnail} alt="court thumbnail" />
            <CourtInfo>
              <div>{court.name}</div>
              <div>{court.address}</div>
              <div>{court.distance}</div>
              {/* <div>
                {distanceFromCourt
                  ? `내 위치에서 ${distanceFromCourt.toFixed(2)}km`
                  : court.distance}
              </div> */}
            </CourtInfo>
          </CourtItem>
        )}
      </CourtInfoContainer>
    </div>
  );
};

export default CourtLists;
