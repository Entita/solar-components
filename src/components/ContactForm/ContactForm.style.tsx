import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 4px;
  z-index: 999;
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
  border-radius: 6px;
  border: 2px solid ${`${Colors.main.white}80`};
  backdrop-filter: blur(3px) contrast(0.85);
  background-color: ${`${Colors.main.orangish}50`};

  svg {
    position: absolute;
    color: ${Colors.main.white};
    top: 4px;
    right: 6px;
    cursor: pointer;
    z-index: 1;
  }

  *::-webkit-input-placeholder {
      color: ${Colors.main.orange};
  }
  *:-moz-placeholder {
      color: ${Colors.main.orange};
      opacity: 1;
  }
  *::-moz-placeholder {
      color: ${Colors.main.orange};
      opacity: 1;
  }
  *:-ms-input-placeholder {
      color: ${Colors.main.orange};
  }
  *::-ms-input-placeholder {
      color: ${Colors.main.orange};
  }
  *::placeholder {
      color: ${Colors.main.orange};
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
  color: ${Colors.main.white};
  letter-spacing: 2px;
`;

const InputStyled = styled.input<{ error: Boolean }>`
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  padding: 4px 6px;
  background-color: ${Colors.main.white};
  border-color: ${({ error }) => error ? '${Colors.main.white}' : Colors.main.orangish};
  color: ${Colors.main.orange};
  transition: .2s ease;
  outline: unset;

  &:focus {
    border-color: ${({ error }) => error ? 'red' : Colors.main.white};
  }
`;

export const NameFormStyled = styled(InputStyled)`
  
`;

export const EmailFormStyled = styled(InputStyled)`
  
`;

export const DescFormStyled = styled.textarea<{ error: Boolean }>`
  resize: none;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  padding: 4px 6px;
  background-color: ${Colors.main.white};
  border-color: ${({ error }) => error ? '${Colors.main.white}' : Colors.main.orangish};
  color: ${Colors.main.orange};
  min-height: 80px;
  min-width: 200px;
  transition: .2s ease;
  outline: unset;

  &:focus {
    border-color: ${({ error }) => error ? 'red' : Colors.main.white};
  }
`;

export const SendButtonFormStyled = styled.button`
  border-radius: 6px;
  border: 2px solid ${Colors.main.white};
  padding: 4px 0;
  letter-spacing: 3px;
  word-spacing: 3px;
  font-weight: bold;
  text-shadow: 0 0 3px ${Colors.main.lightGray};
  color: ${Colors.main.orange};
  background-color: ${Colors.main.white};
  transition: 0.2s ease;

  &:hover {
    color: ${Colors.main.white};
    background-color: transparent;
  }
`;
