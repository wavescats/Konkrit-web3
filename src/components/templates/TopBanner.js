import * as colors from "../../styles/colors";
import styled from "styled-components";
import banner_image1 from "../../assets/image/tb_image_one.png";
import banner_image2 from "../../assets/image/tb_image_two.png";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 64px;
  padding: 20px;
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.textYellow};
  position: relative;
  background: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: 50% 50%;
`;

const TopLeftTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 61px solid ${colors.bgPrimary};
  border-right: 61px solid transparent;
  position: absolute;
  top: -1px;
  left: -1px;
`;

const BottomRightTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 60px solid ${colors.bgPrimary};
  border-left: 60px solid transparent;
  bottom: -1px;
  right: -1px;
  position: absolute;
  line-height: 0px;
`;

const BannerOrderBox = styled.div`
  width: 51px;
  height: 29px;
  background-color: ${colors.bgBannerButton};
  border-radius: 6px;
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-size: 14px;
  color: ${colors.textSecondary};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bannerImg = [
  {
    id: 1,
    imgUrl: banner_image1,
  },
  {
    id: 2,
    imgUrl: banner_image2,
  },
];

function TopBanner() {
  return (
    <Container>
      <BannerWrapper imgUrl={banner_image1}>
        <TopLeftTriangle />
        <BottomRightTriangle />
        <BannerOrderBox>1 / 2</BannerOrderBox>
      </BannerWrapper>
    </Container>
  );
}
export default TopBanner;
