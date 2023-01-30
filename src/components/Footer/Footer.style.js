import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 380px;
  padding: 30px 0;
  color: ${({ theme }) => theme.middleGray};
  background-color: ${({ theme }) => theme.navBlack};
  @media ${({ theme }) => theme.device.medium} {
    height: 340px;
  }
  @media ${({ theme }) => theme.device.small} {
    height: 320px;
  }
`;
export const TopContainer = styled.section``;
export const WeFlix = styled.p`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.large};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiLarge};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
`;
export const Tel = styled.p`
  font-size: ${({ theme }) => theme.semiLarge};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
  }
`;
export const CenterContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  line-height: 40px;
  font-size: ${({ theme }) => theme.semiLarge};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
  }
`;
export const FirstRow = styled.p``;
export const SecondRow = styled.p``;
export const BottomContainer = styled.section``;
export const Title = styled.p`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.semiLarge};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 0.813rem;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
  }
`;
export const Intro = styled.p`
  line-height: 30px;
  font-size: ${({ theme }) => theme.semiLarge};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.semiMedium};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.small};
    line-height: 25px;
  }
`;
