import { Colors } from "@/utils/Colors";
import styled, { keyframes } from "styled-components";

export const WrapperStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Colors.main.orange};
  color: ${Colors.main.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulsIn = keyframes`
  0% {
    box-shadow: inset 0 0 0 1rem #fff;
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 #fff;
    opacity: 0;
  }
`

const pulsOut = keyframes`
  0%, 50% {
    box-shadow: 0 0 0 0 #fff;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem #fff;
    opacity: 1;
  }
`

export const LoaderStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;
  letter-spacing: 4px;

  :before, :after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: ${pulsOut} 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }

  :before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: ${pulsIn};
  }

  :after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }
` 
