import React from 'react'
import { ContentWrapper, MapAddressStyled, MapCityStyled, MapDescWrapperStyled, MapStyled, MapTextStyled, MapWrapperStyled, MoreInfoDescriptionStyled, MoreInfoStyled, MoreInfoTextStyled, MoreInfoTitleStyled, PersonDescWrapperStyled, PersonEmailStyled, PersonImageStyled, PersonNameStyled, PersonPhoneStyled, PersonRightDescWrapperStyled, PersonRightPhoneStyled, PersonRightWrapperStyled, PersonTextStyled, PersonWrapperStyled, RightPersonImageStyled, RightPersonNameStyled, TitleStyled, TitleWrapperStyled, WrapperStyled } from './ContactPage.style'
import Map from './Map'

export default function ContactPage() {
  return (
    <WrapperStyled>
      <ContentWrapper>
        <TitleWrapperStyled>
          <TitleStyled>Kontakt</TitleStyled>
        </TitleWrapperStyled>

        <PersonWrapperStyled>
          <PersonImageStyled />
          <PersonDescWrapperStyled>
            <PersonTextStyled>zavolej, napiš</PersonTextStyled>
            <PersonNameStyled>Jakub Hampl</PersonNameStyled>
            <PersonEmailStyled>jakub.hampl@solar-components.cz</PersonEmailStyled>
            <PersonPhoneStyled>(+420) 734 462 877</PersonPhoneStyled>
          </PersonDescWrapperStyled>
        </PersonWrapperStyled>

        <PersonRightWrapperStyled>
          {/* <PersonRightDescWrapperStyled>
            <PersonTextStyled>zavolej, napiš</PersonTextStyled>
            <RightPersonNameStyled>Miroslav Pelikán</RightPersonNameStyled>
            <PersonEmailStyled>miroslav.pelikan@solar-components.cz</PersonEmailStyled>
            <PersonRightPhoneStyled>(+420) 607 885 468</PersonRightPhoneStyled>
          </PersonRightDescWrapperStyled>
          <RightPersonImageStyled /> */}
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
            Email: info@solar-components.cz<br />
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
