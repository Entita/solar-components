import { Colors } from "@/utils/Colors";
import styled, { css } from "styled-components";

export const CopyrightBottomBackgroundStyled = styled.div`
  position: absolute;
  bottom: -2px;
  left: calc(-10vw - 2px);
  width: calc(100vw + 4px);
  background-image: url('svg/copyrightBottomOrange.svg');
  aspect-ratio: 1728/421;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`;

export const CopyrightBackgroundStyled = styled.div`
  position: absolute;
  bottom: -2px;
  left: -10vw;
  width: 100vw;
  height: calc(100% + 4px);
  background-color: ${Colors.main.white};
  z-index: -2;
`;

export const LeftTextStyled = styled.h4`
  position: relative;
  writing-mode: vertical-lr;
  rotate: 180deg;
  color: ${Colors.main.white};
  font-weight: 600;
  text-shadow: 0 0 3px ${Colors.main.blackish};
  margin: 0;
  user-select: none;
  text-align: end;

  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 75%;
    top: -2px;
    left: -10px;
    border: 2px solid ${Colors.main.whitish};
  }

  &::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 50%;
    top: -2px;
    left: -8px;
    background-color: ${Colors.main.white};
  }
`;

export const ContactUsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .2rem;
  padding-bottom: 1.5rem;
  margin-top: -1rem;
  color: ${Colors.main.orangish};
`;

export const RightTextStyled = styled.h4`
  position: relative;
  writing-mode: vertical-rl;
  color: ${Colors.main.orangish};
  letter-spacing: 4px;
  font-weight: 600;
  margin: 0;
  user-select: none;

  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 75%;
    bottom: -2px;
    left: -10px;
    border: 2px solid ${Colors.main.orangish};
  }

  &::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 50%;
    bottom: -2px;
    left: -8px;
    background-color: ${Colors.main.orangish};
  }
`;

export const ContactUsTitleStyled = styled.h5`
  font-size: 64px;
  letter-spacing: 2px;
  color: ${Colors.main.white};
  text-shadow: -1px -1px 0 ${Colors.main.blackish}, 1px -1px 0 ${Colors.main.blackish}, -1px 1px 0 ${Colors.main.yellowish}, 1px 1px 0 ${Colors.main.yellowish};
  margin: 0;
`;

export const ContactCINStyled = styled.span`
  font-weight: 200;
  padding-bottom: .4rem;
  color: ${Colors.main.blackish};
`;

export const ContactUsMailStyled = styled.span`
  color: ${Colors.main.blackish};
  font-weight: 600;
  text-decoration: underline;
  letter-spacing: 1px;
`;

export const ContactUsNumberStyled = styled.span`
  color: ${Colors.main.blackish};
  font-weight: 600;
`;

export const CopyrightStyled = styled.span`
  color: ${Colors.main.blackish};
  padding-top: .6rem;
  font-size: 14px;
  font-weight: 200;
`;

export const WrapperStyled = styled.div<{ orange: Boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: calc(10vh + 3rem) 0 0 0;

  ${({ orange }) => orange && css`
    ${CopyrightBottomBackgroundStyled} {
      background-image: url('svg/copyrightBottom.svg');
      aspect-ratio: 584/107;
    }

    ${CopyrightBackgroundStyled} {
      background-color: ${Colors.main.yellowish};
    }

    ${LeftTextStyled}, ${ContactUsWrapperStyled}, ${RightTextStyled} {
      color: ${Colors.main.white};
    }

    ${ContactUsTitleStyled} {
      color: ${Colors.main.yellowish};
      text-shadow: -1px -1px 0 ${Colors.main.white}, 1px -1px 0 ${Colors.main.white}, -1px 1px 0 ${Colors.main.white}, 1px 1px 0 ${Colors.main.white};
    }

    ${RightTextStyled} {
      text-shadow: 0 0 2px ${Colors.main.lightGray};

      &::before {
        border: 2px solid ${Colors.main.white};
      }

      &::after {
        background-color: ${Colors.main.white};
      }
    }

    ${LeftTextStyled} {
      text-shadow: 0 0 2px ${Colors.main.lightGray};
      color: ${Colors.main.orangish};

      &::before {
        border: 2px solid ${Colors.main.orangish};
      }

      &::after {
        background-color: ${Colors.main.orangish};
      }
    }
  `}
`;
