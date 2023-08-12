import React, { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const BasicFilter = styled.div`
  display: flex;
  padding: 10px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    color: gray;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const DetailedFilter = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`;

const AllFilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const SelectedFilters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f5f5f5;
`;

function Filter() {
  const [selectedCourt, setSelectedCourt] = useState('코트 전체');
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);
  const [showDateRange, setShowDateRange] = useState(false);
  const [showIndoorOutdoor, setShowIndoorOutdoor] = useState(false);
  const [showCourtType, setShowCourtType] = useState(false);
  const [showRegions, setShowRegions] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<any>([]);
  const [selectedIndoorOutdoor, setSelectedIndoorOutdoor] = useState([]);
  const [selectedCourtType, setSelectedCourtType] = useState([]);

  const regions = [
    '서울',
    '경기',
    '인천',
    '부산',
    '대구',
    '광주',
    '대전',
    '울산',
    '강원',
    '경남',
    '경북',
    '전남',
    '전북',
    '충남',
    '충북',
    '세종',
  ];

  const clearFilters = () => {
    setSelectedRegions([]);
    setSelectedIndoorOutdoor([]);
    setSelectedCourtType([]);
  };

  return (
    <FilterContainer>
      <BasicFilter>
        {['코트 전체', '공공 코트', '사설 코트'].map((court) => (
          <button
            key={court}
            onClick={() => setSelectedCourt(court)}
            style={{
              fontWeight: selectedCourt === court ? 'bold' : 'normal',
              color: selectedCourt === court ? 'black' : 'gray',
            }}
          >
            {court}
          </button>
        ))}
      </BasicFilter>
      <DetailedFilter>
        <AllFilterButton>전체 필터</AllFilterButton>
        <button onClick={() => setShowRegions(!showRegions)}>지역</button>
        {showRegions && (
          <RegionGrid>
            {regions.map((region) => (
              <button
                key={region}
                // disabled={region !== '서울'}
                // style={{ color: region === '서울' ? 'black' : 'gray' }}
                onClick={() => setSelectedRegions([...selectedRegions, region])}
                style={{
                  color: selectedRegions.includes(region) ? 'black' : 'gray',
                }}
              >
                {region}
              </button>
            ))}
          </RegionGrid>
        )}
        <button onClick={() => setShowDateRange(!showDateRange)}>
          이용 날짜
        </button>
        {showDateRange && (
          <Calendar
            ranges={dates}
            onChange={(item: any) => setDates([item.selection])}
          />
        )}
        <button onClick={() => setShowIndoorOutdoor(!showIndoorOutdoor)}>
          실내 / 실외
        </button>
        {showIndoorOutdoor && (
          <div>
            <label>
              <input type="checkbox" /> 실내
            </label>
            <label>
              <input type="checkbox" /> 실외
            </label>
          </div>
        )}
        <button onClick={() => setShowCourtType(!showCourtType)}>
          코트 재질
        </button>
        {showCourtType && (
          <div>
            <label>
              <input type="checkbox" /> 하드
            </label>
            <label>
              <input type="checkbox" /> 클레이
            </label>
            <label>
              <input type="checkbox" /> 잔디
            </label>
          </div>
        )}
      </DetailedFilter>
      {(selectedRegions.length ||
        selectedIndoorOutdoor.length ||
        selectedCourtType.length) && (
        <SelectedFilters>
          <div>
            {selectedRegions.map((region: any, index: any) => (
              <span key={index}>{region} </span>
            ))}
            {selectedIndoorOutdoor.map((type, index) => (
              <span key={index}>{type} </span>
            ))}
            {selectedCourtType.map((type, index) => (
              <span key={index}>{type} </span>
            ))}
          </div>
          <button onClick={clearFilters}>초기화</button>
        </SelectedFilters>
      )}
    </FilterContainer>
  );
}

export default Filter;
