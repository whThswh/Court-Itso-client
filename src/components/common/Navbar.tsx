import styled from 'styled-components';
import { ReactComponent as Logo } from 'logo.svg';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0f93ff;
`;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

const SearchBar = styled.input`
  width: 65%;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

// const LoginButton = styled.button`
//   background-color: green;
//   color: white;
//   padding: 0.5rem 1rem;
//   border: none;
//   cursor: pointer;
// `;

function Navbar() {
  return (
    <NavbarContainer>
      {/* <Logo>코트있소</Logo> */}
      <Logo />
      <SearchBar type="search" placeholder="지역, 지하철역" />
      {/* <LoginButton>로그인</LoginButton> */}
    </NavbarContainer>
  );
}

export default Navbar;
