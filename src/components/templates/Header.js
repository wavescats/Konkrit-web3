import SearchIcon from "../atoms/SearchIcon";
import Logo from "../atoms/Logo";
import HamburgerIcon from "../atoms/HamburgerIcon";
import * as colors from "../../styles/colors";
import Wallet from "../atoms/Wallet";
import styled from "styled-components";
import KaiKas_image from "../../assets/image/kaikas.png";
import { toast } from "react-toastify";
import useAuth from "src/hooks/useAuth";

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

const KaikasImage = styled.img`
  width: 20px;
  height: 20px;
`;

const klaytn = window.klaytn;

async function isKaikasAvailable() {
  const klaytn = window?.klaytn;
  if (!klaytn) {
    return false;
  }

  const results = await Promise.all([
    klaytn._kaikas.isApproved(),
    klaytn._kaikas.isEnabled(),
    klaytn._kaikas.isUnlocked(),
  ]);
  return results.every(res => res);
}

function Header() {
  const { user, setUser } = useAuth();
  async function loginWithKaikas() {
    if (!klaytn) {
      toast.error("kaikas 설치 해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      const accounts = await toast.promise(
        klaytn.enable(),
        {
          pending: "Kaikas 지갑 연동 중",
        },
        { closeButton: true }
      );
      setUser(accounts[0]);
      localStorage.setItem("_user", accounts[0]);
      toast.success(`${accounts[0].slice(0, 13)}...님 환영합니다~ ^^`);
    } catch {
      toast.error("로그인 실패..! 다시 시도해주세요~^^");
    }
  }

  function handleLogin() {
    loginWithKaikas();
  }

  async function handleDone() {
    const isAvailable = await isKaikasAvailable();
    if (isAvailable) {
      toast.success("엇 ..또 로그인 하실려구요?!");
      return;
    }

    toast.warn("다시 로그인 해주세요 ^^!");
    setUser("");
    localStorage.removeItem("_user");
  }

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
      <WalletBox onClick={user ? handleDone : handleLogin}>
        {user ? <KaikasImage src={KaiKas_image} /> : <Wallet />}
      </WalletBox>
      <GrayRoundBox>
        <HamburgerIcon />
      </GrayRoundBox>
    </Container>
  );
}

export default Header;
