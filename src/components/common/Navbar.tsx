import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchBar = styled.input`
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
  background-color: green;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>코트있소</Logo>
      <SearchBar type="search" placeholder="지역명, 키워드로 검색해 보세요." />
      <LoginButton>로그인</LoginButton>
    </NavbarContainer>
  );
}

export default Navbar;
