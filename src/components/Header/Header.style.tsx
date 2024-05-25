import styled from "styled-components";
import { Colors } from '../../utils/Colors'

export const MenuWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: max(6.5vw, 4rem);
  flex-wrap: wrap;

  & > svg {
    margin: 0 auto;
  }
`

export const NavbarWrapperStyled = styled.ul<{ width: Number, left: Number, anotherWidth: Number, anotherLeft: Number }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: max(5vw,3rem);
  row-gap: 6px;
  margin: 0;
  padding: 0;

  @media (max-width: 817px) {
    justify-content: center;
    padding-bottom: 8px;
    border-bottom: 1px solid ${Colors.main.orangish};
  }

  &::before {
    @media (max-width: 817px) {
      display: none;
    }
    position: absolute;
    content: '';
    background-color: ${Colors.main.yellow};
    height: 2px;
    bottom: 0;
    width: ${({ width }) => `${width}px`};
    left: ${({ left }) => `${left}px`};
    transition: all .4s ease;
  }

  &::after {
    @media (max-width: 817px) {
      display: none;
    }
    position: absolute;
    content: '';
    background-color: ${Colors.main.orangish};
    height: 2px;
    bottom: -2px;
    width: ${({ anotherWidth }) => `${anotherWidth}px`};
    left: ${({ anotherLeft }) => `${anotherLeft}px`};
    transition: all .4s ease;
  }
`

export const NavbarListStyled = styled.li<{ active: Boolean }>`
  list-style: none;

  & > a {
    text-decoration: none;
    font-size: 18px;
    color: ${Colors.main.black};
    transition: color .2s ease;
    user-select: none;
    white-space: nowrap;
  }
`

export const QAButtonStyled = styled.button`
  border: unset;
  font-size: 16px;
  font-weight: 500;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  padding: 0;

  & > a {
    transition: all .2s ease;
    text-decoration: none;
    background-color: ${Colors.main.orangish};
    padding: .4rem 1.8rem;
    border-radius: 12px;
    box-shadow: #00000025 -2px 2px 4px;
    color: ${Colors.main.white};
  }

  &:hover a {
    color: ${Colors.main.orangish};
    transition: all .2s ease, outline 0s ease, outline-offset 0s ease;
    background-color: ${Colors.main.white};
    outline: 2px solid ${Colors.main.orangish};
    outline-offset: -2px;
  }
`
