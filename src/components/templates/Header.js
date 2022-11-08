import SearchIcon from "../atoms/SearchIcon";
import Logo from "../atoms/Logo";
import HamburgerIcon from "../atoms/HamburgerIcon";
import * as colors from "../../styles/colors";
import Wallet from "../atoms/Wallet";
import styled from "styled-components";
import KaiKas_image from "../atoms/MetaMaskIcon";

const Container = styled.header`
  width: 100%;
  height: 64px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  background-color: ${colors.bgBlack};
`;

const LogoWrapper = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const GrayRoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgSecondary};
  border-radius: 20px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

const WalletBox = styled(GrayRoundBox)`
  margin-right: 8px;
  background-color: ${colors.textYellow};
`;

const SearchIconWrapper = styled.div`
  margin-left: 16px;
`;

function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBarWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
      <WalletBox>
        <Wallet />
      </WalletBox>
      <GrayRoundBox>
        <HamburgerIcon />
      </GrayRoundBox>
    </Container>
  );
}

export default Header;
