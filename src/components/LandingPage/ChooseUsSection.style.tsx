import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  column-gap: 5vw;
  margin-top: 25vh;
  padding: 20vh 5vw 30vh 0;
`;

export const ChooseUsTopBackgroundStyled = styled.div`
  position: absolute;
  top: calc(-25vh - 2px);
  left: calc(-10vw - 2px);
  width: calc(100vw + 4px);
  background-image: url('svg/chooseTop.svg');
  aspect-ratio: 864/157;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`;

export const ChooseUsSectionsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15vh;
`;

export const ChooseUsSectionWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

export const ChooseUsSectionTitleStyled = styled.h5`
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
`;

export const ChooseUsSectionTextStyled = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
`;

export const ChooseUsOrangeTextStyled = styled.span`
  color: ${Colors.main.orangish};
  font-weight: 600;
`;

export const IconsWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: max-content;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 2px;
    background-color: ${Colors.main.orange};
    z-index: -1;
  }
`;

export const IconWrapperStyled = styled.div`
  position: relative;
  border: 2px solid ${Colors.main.orange};
  border-radius: 50%;
  background-color: ${Colors.main.white};
  width: 130px;
  aspect-ratio: 1/1;

  & > svg {
    position: absolute;
    top: -26px;
    right: -18px;
  }
`;

export const IconNumberStyled = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -50px;
  color: ${Colors.main.orangish};
  
  font-weight: 500;
  font-size: 21px;
  user-select: none;
`;

export const ChooseUsBottomBackgroundStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(-10vw - 2px);
  width: calc(100vw + 4px);
  background-image: url('svg/chooseBottom.svg');
  aspect-ratio: 861/155;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`;
