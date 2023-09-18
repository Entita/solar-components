import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 4px;
`;

export const ContactUsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.main.orange};
  border-radius: 24px;
  cursor: pointer;

  & > svg {
    box-shadow:
    inset 0 0 0 0px ${Colors.main.white},
    inset 0 0 0 4px ${Colors.main.lightOrange};
    border-radius: 50%;
    padding: 12px;
    color: ${Colors.main.orange};
    background-color: ${Colors.main.white};
  }
`;

export const ContactUsButtonStyled = styled.span`
  text-transform: uppercase;
  color: ${Colors.main.white};
  padding: 0 12px 0 6px;
`;

export const ContentWrapperStyled = styled.div`
  background-color: white;
  border-radius: 6px;
  border: 1px solid ${Colors.main.black};

  svg {
    position: absolute;
    top: 4px;
    right: 6px;
    cursor: pointer;
    z-index: 1;
  }
`;

export const BlurWrapperStyled = styled.div<{ disabled: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 6px 12px;
  pointer-events: ${({ disabled }) => disabled && `none`};
  filter: ${({ disabled }) => disabled && `blur(2px)`};
`;

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
`;

export const TitleTextStyled = styled.div`
  
`;

const InputStyled = styled.input<{ error: Boolean }>`
  border-width: 1px;
  border-color: ${({ error }) => error ? 'red' : 'black'};
`;

export const TitleFormStyled = styled(InputStyled)`
  
`;

export const NameFormStyled = styled(InputStyled)`
  
`;

export const EmailFormStyled = styled(InputStyled)`
  
`;

export const DescFormStyled = styled.textarea<{ error: Boolean }>`
  border-color: ${({ error }) => error ? 'red' : 'black'};
  resize: none;
`;

export const SendButtonFormStyled = styled.button`
  
`;
