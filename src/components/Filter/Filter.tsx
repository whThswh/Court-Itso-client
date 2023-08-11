import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const BasicFilter = styled.div`
  display: flex;
  // justify-content: space-between;
  padding: 10px;
`;

const DetailedFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const AllFilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

function Filter() {
  return (
    <FilterContainer>
      <BasicFilter>
        <button>전체</button>
        <button>공공</button>
        <button>사설</button>
      </BasicFilter>
      <DetailedFilter>
        <AllFilterButton>전체 필터</AllFilterButton>
        <button>지역</button>
        <button>이용 날짜</button>
        <button>실내/실외</button>
      </DetailedFilter>
    </FilterContainer>
  );
}

export default Filter;
