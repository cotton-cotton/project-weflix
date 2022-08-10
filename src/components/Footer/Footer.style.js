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
  /* border-top: ${({ theme }) => theme.mainBottomLine}; */
`;
export const TopContainer = styled.section``;
export const WeFlix = styled.p`
  margin-bottom: 12px;
`;
export const Tel = styled.p``;
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
`;
export const FirstRow = styled.p``;
export const SecondRow = styled.p``;
export const BottomContainer = styled.section``;
export const Title = styled.p`
  margin-bottom: 20px;
`;
export const Intro = styled.p`
  line-height: 30px;
`;
