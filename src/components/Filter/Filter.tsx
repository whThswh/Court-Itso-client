import React, { useState } from 'react';
import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const FilterContainer = styled.div`
  z-index: 7;
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

const FilterWrapper = styled.div`
  position: relative;
`;

const FilterContent = styled.div`
  position: absolute;
  width: 96%;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 2;
  top: 100%; /* 위치를 아래로 이동시킴 */
  left: 0;
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

function Filter() {
  const [selectedCourt, setSelectedCourt] = useState('코트 전체');
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);
  const [showDateRange, setShowDateRange] = useState<any>(false);
  const [showIndoorOutdoor, setShowIndoorOutdoor] = useState<any>(false);
  const [showCourtType, setShowCourtType] = useState<any>(false);
  const [showRegions, setShowRegions] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<any>([]);
  const [selectedIndoorOutdoor, setSelectedIndoorOutdoor] = useState<string[]>(
    []
  );
  const [selectedCourtType, setSelectedCourtType] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

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
    setSelectedDate(null);
    setSelectedIndoorOutdoor([]);
    setSelectedCourtType([]);
  };

  return (
    <FilterContainer>
      <FilterWrapper>
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
        <FilterContent>
          <DetailedFilter>
            <AllFilterButton>전체 필터</AllFilterButton>
            <button onClick={() => setShowRegions(!showRegions)}>지역</button>
            {/* {showRegions && (
              <RegionGrid>
                {regions.map((region) => (
                  <button
                    key={region}
                    disabled={region !== '서울'}
                    style={{ color: region === '서울' ? 'black' : 'gray' }}
                    onClick={() =>
                      setSelectedRegions([...selectedRegions, region])
                    }
                  >
                    {region}
                  </button>
                ))}
              </RegionGrid>
            )} */}
            <button onClick={() => setShowDateRange(!showDateRange)}>
              이용 날짜
            </button>

            {/* {showDateRange && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar disablePast={true} />
              </LocalizationProvider>
            )} */}
            <button onClick={() => setShowIndoorOutdoor(!showIndoorOutdoor)}>
              실내 / 실외
            </button>
            <button onClick={() => setShowCourtType(!showCourtType)}>
              코트 재질
            </button>
          </DetailedFilter>
          <div>
            {/* {showDateRange && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={
                    dates[0].startDate ? new Date(dates[0].startDate) : null
                  }
                  onChange={(newDate: any) =>
                    setDates([
                      {
                        startDate: newDate,
                        endDate: newDate,
                        key: 'selection',
                      },
                    ])
                  }
                />
              </LocalizationProvider>
            )} */}
            {showRegions && (
              <RegionGrid>
                {regions.map((region) => (
                  <button
                    key={region}
                    disabled={region !== '서울'}
                    style={{ color: region === '서울' ? 'black' : 'gray' }}
                    onClick={() =>
                      setSelectedRegions([...selectedRegions, region])
                    }
                  >
                    {region}
                  </button>
                ))}
              </RegionGrid>
            )}
            {showDateRange && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  disablePast={true}
                  value={selectedDate}
                  onChange={(newDate) => {
                    // console.log('New date object:', newDate);
                    setSelectedDate(newDate);
                  }}
                />
              </LocalizationProvider>
            )}
            {showIndoorOutdoor && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedIndoorOutdoor.includes('실내')) {
                        setSelectedIndoorOutdoor(
                          selectedIndoorOutdoor.filter(
                            (item) => item !== '실내'
                          )
                        );
                      } else {
                        setSelectedIndoorOutdoor([
                          ...selectedIndoorOutdoor,
                          '실내',
                        ]);
                      }
                    }}
                    checked={selectedIndoorOutdoor.includes('실내')}
                  />{' '}
                  실내
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedIndoorOutdoor.includes('실외')) {
                        setSelectedIndoorOutdoor(
                          selectedIndoorOutdoor.filter(
                            (item) => item !== '실외'
                          )
                        );
                      } else {
                        setSelectedIndoorOutdoor([
                          ...selectedIndoorOutdoor,
                          '실외',
                        ]);
                      }
                    }}
                    checked={selectedIndoorOutdoor.includes('실외')}
                  />{' '}
                  실외
                </label>
              </div>
            )}
            {showCourtType && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedCourtType.includes('하드')) {
                        setSelectedCourtType(
                          selectedCourtType.filter((item) => item !== '하드')
                        );
                      } else {
                        setSelectedCourtType([...selectedCourtType, '하드']);
                      }
                    }}
                    checked={selectedCourtType.includes('하드')}
                  />{' '}
                  하드
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedCourtType.includes('클레이')) {
                        setSelectedCourtType(
                          selectedCourtType.filter((item) => item !== '클레이')
                        );
                      } else {
                        setSelectedCourtType([...selectedCourtType, '클레이']);
                      }
                    }}
                    checked={selectedCourtType.includes('클레이')}
                  />{' '}
                  클레이
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedCourtType.includes('잔디')) {
                        setSelectedCourtType(
                          selectedCourtType.filter((item) => item !== '잔디')
                        );
                      } else {
                        setSelectedCourtType([...selectedCourtType, '잔디']);
                      }
                    }}
                    checked={selectedCourtType.includes('잔디')}
                  />{' '}
                  잔디
                </label>
              </div>
            )}
          </div>
          {(selectedRegions.length > 0 ||
            // dates[0].startDate ||
            selectedDate ||
            selectedIndoorOutdoor.length > 0 ||
            selectedCourtType.length > 0) && (
            <SelectedFilters>
              <div>
                {selectedRegions.map((region: any, index: any) => (
                  <span key={index}>{region} </span>
                ))}
                {selectedDate && (
                  <span>{selectedDate.format('YYYY/MM/DD')} </span>
                )}

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
        </FilterContent>
      </FilterWrapper>
    </FilterContainer>
  );
}

export default Filter;
