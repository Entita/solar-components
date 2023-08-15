import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  min-height: 75vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vw;
`;

export const TitleWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  width: 300px;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: -120px;
    transform: translateY(-50%);
    background-color: ${Colors.main.black};
    width: 100px;
    height: 2px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    right: -120px;
    transform: translateY(-50%);
    background-color: ${Colors.main.black};
    width: 100px;
    height: 2px;
  }
`;

export const TitleStyled = styled.h2`
  color: ${Colors.main.black};
  font-size: 64px;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 4px;
  margin: 0;
`;

export const PersonWrapperStyled = styled.div`
  display: flex;
  column-gap: 4rem;
`;

export const PersonRightWrapperStyled = styled(PersonWrapperStyled)`
  position: relative;
  margin-left: auto;

  &::before {
    position: absolute;
    content: '';
    top: -100%;
    right: -10vw;
    background-image: url('svg/contactBackground.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    aspect-ratio: 72/65;
    width: 100vw;
    z-index: -1;
  }
`;

export const PersonImageStyled = styled.div`
  border-radius: 50%;
  width: 250px;
  aspect-ratio: 1/1;
  border: 12px solid ${Colors.main.orangish};
`;

export const RightPersonImageStyled = styled(PersonImageStyled)`
  border-color: ${Colors.main.white};
`;

export const PersonDescWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4px;
  margin-top: -2rem;
`;

export const PersonRightDescWrapperStyled = styled(PersonDescWrapperStyled)`
  text-align: right;
`;

export const PersonTextStyled = styled.span`
  font-weight: 200;
  font-size: 14px;
  text-transform: uppercase;
`;

export const PersonNameStyled = styled.h4`
  margin: 0;
  color: ${Colors.main.orangish};
  font-weight: 600;
  font-size: 24px;
  margin-top: 1rem;
`;

export const RightPersonNameStyled = styled(PersonNameStyled)`
  color: ${Colors.main.white};
`;

export const PersonEmailStyled = styled.span`
  color: ${Colors.main.black};
  font-weight: 400;
  font-size: 21px;
`;

export const PersonPhoneStyled = styled.span`
  position: relative;
  color: ${Colors.main.black};
  font-weight: 400;
  font-size: 21px;
  width: fit-content;

  &::after {
    position: absolute;
    content: '';
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${Colors.main.black};
  }
`;

export const PersonRightPhoneStyled = styled(PersonPhoneStyled)`
  margin-left: auto;
`

export const MapWrapperStyled = styled.div`
  display: flex;
  column-gap: 4rem;
`

export const MapStyled = styled.div`
  border: 2px solid #00000025;
  box-shadow: #00000025 -2px 2px 4px;
  border-radius: 8px;
  aspect-ratio: 2/1;
  height: 300px;
`

export const MapDescWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`

export const MapTextStyled = styled(PersonTextStyled)``

export const MapCityStyled = styled(RightPersonNameStyled)`
  margin: 0;
`

export const MapAddressStyled = styled.span`
  color: ${Colors.main.black};
  font-weight: 400;
  font-size: 18px;
`

export const MoreInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`

export const MoreInfoTextStyled = styled(PersonTextStyled)`
  
`

export const MoreInfoTitleStyled = styled.h3`
  font-weight: 600;
  font-size: 32px;
  margin: .6rem 0;
`

export const MoreInfoDescriptionStyled = styled.span`
  
`
