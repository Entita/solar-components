import React from 'react'
import { ContentWrapper, MapAddressStyled, MapCityStyled, MapDescWrapperStyled, MapStyled, MapTextStyled, MapWrapperStyled, MoreInfoDescriptionStyled, MoreInfoStyled, MoreInfoTextStyled, MoreInfoTitleStyled, PersonDescWrapperStyled, PersonEmailStyled, PersonImageStyled, PersonNameStyled, PersonPhoneStyled, PersonRightDescWrapperStyled, PersonRightPhoneStyled, PersonRightWrapperStyled, PersonTextStyled, PersonWrapperStyled, RightPersonImageStyled, RightPersonNameStyled, TitleStyled, TitleWrapperStyled, WrapperStyled } from './ContactPage.style'
import Map from './Map'
const ebg13 = require('ebg13')

export default function ContactPage() {
  return (
    <WrapperStyled>
      <ContentWrapper>
        <TitleWrapperStyled>
          <TitleStyled>Kontakt</TitleStyled>
        </TitleWrapperStyled>

        <PersonWrapperStyled>
          <PersonImageStyled image="avatar" />
          <PersonDescWrapperStyled>
            <PersonTextStyled>zavolej, napiš</PersonTextStyled>
            <PersonNameStyled>Jakub Hampl</PersonNameStyled>
            <PersonEmailStyled>{ebg13('wnxho.unzcy@fbyne-pbzcbaragf.pm')}</PersonEmailStyled>
            <PersonPhoneStyled>(+420) 734 462 877</PersonPhoneStyled>
          </PersonDescWrapperStyled>
        </PersonWrapperStyled>

        <PersonRightWrapperStyled>
          <PersonRightDescWrapperStyled>
            <PersonTextStyled>zavolej, napiš</PersonTextStyled>
            <RightPersonNameStyled>Šárka Veverková</RightPersonNameStyled>
            <PersonEmailStyled>{ebg13('vasb@fbyne-pbzcbaragf.pm')}</PersonEmailStyled>
            <PersonRightPhoneStyled>(+420) 773 700 475</PersonRightPhoneStyled>
          </PersonRightDescWrapperStyled>
          <RightPersonImageStyled image="avatar_female" />
        </PersonRightWrapperStyled>

        <MapWrapperStyled>
          <MapStyled>
            <Map />
          </MapStyled>
          <MapDescWrapperStyled>
            <MapTextStyled>Kde nás najdete</MapTextStyled>
            <MapCityStyled>Chrudim</MapCityStyled>
            <MapAddressStyled>Palackého tř. 801, Chrudim III<br />537 01 Chrudim</MapAddressStyled>
          </MapDescWrapperStyled>
        </MapWrapperStyled>

        <MoreInfoStyled>
          <MoreInfoTextStyled>Další informace</MoreInfoTextStyled>
          <MoreInfoTitleStyled>Solar Components s.r.o.</MoreInfoTitleStyled>
          <MoreInfoDescriptionStyled>
            IČO: 194 13 190<br />
            DIČ: CZ 194 13 190<br />
            Sídlo firmy: Češkova 889, Zelené Předměstí, 530 02, Pardubice<br />
            Adresa skladu: Palackého tř. 801, Chrudim III 537 01 Chrudim<br />
            Email: {ebg13('vasb@fbyne-pbzcbaragf.pm')}<br />
            Web: www.solar-components.cz<br />
            Účet: 2302583095/2010<br />
            IBAN: CZ37 2010 0000 0023 0258 3095<br />
            SWIFT: FIOBCZPP<br />
          </MoreInfoDescriptionStyled>
        </MoreInfoStyled>
      </ContentWrapper>
    </WrapperStyled>
  )
}
