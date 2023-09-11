import { Colors } from "@/utils/Colors";
import styled, { keyframes } from "styled-components";

export const WrapperStyled = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  border: 2px solid ${Colors.main.black};
  border-radius: 4px;
  background-color: white;
`;

export const ContactUsButtonStyled = styled.button`
  border: unset;
  display: block;
`;

export const ContentWrapperStyled = styled.div<{ disabled: Boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 6px 12px;
  pointer-events: ${({ disabled }) => disabled && `none`};
  filter: ${({ disabled }) => disabled && `blur(2px)`};
`;

const pulsOut = keyframes`
  0%, 50% {
    box-shadow: 0 0 0 0 black;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem black;
    opacity: 1;
  }
`

export const LoadingWrapperStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  & > div::before, & > div::after {
    animation: ${pulsOut} 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.75));
  }

  & > div::before{
    box-shadow: inset 0 0 0 1rem black;
  }

  & > div::after{
    box-shadow: 0 0 0 0 black;
  }
`;

export const TitleFormWrapperStyled = styled.div`
  display: flex;

  & > svg {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const TitleTextStyled = styled.div`
  
`;

export const TitleFormStyled = styled.input`
  
`;

export const NameFormStyled = styled.input`
  
`;


export const EmailFormStyled = styled.input`
  
`;

export const DescFormStyled = styled.textarea`
  resize: none;
`;

export const SendButtonFormStyled = styled.button`
  
`;
