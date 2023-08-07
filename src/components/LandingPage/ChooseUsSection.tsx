import React from 'react'
import { ChooseUsBottomBackgroundStyled, ChooseUsOrangeTextStyled, ChooseUsSectionTextStyled, ChooseUsSectionTitleStyled, ChooseUsSectionWrapperStyled, ChooseUsSectionsWrapperStyled, ChooseUsTopBackgroundStyled, IconNumberStyled, IconWrapperStyled, IconsWrapperStyled, WrapperStyled } from './ChooseUsSection.style'
import FistIcon from '@/SVGs/FistIcon'
import ParachuteIcon from '@/SVGs/ParachuteIcon'
import LightningIcon from '@/SVGs/LightningIcon'

export default function ChooseUsSection() {
  const iconWidth = 150

  return (
    <WrapperStyled id='choose-us'>
      <ChooseUsTopBackgroundStyled />
      <IconsWrapperStyled>
        <IconWrapperStyled>
          <IconNumberStyled>01</IconNumberStyled>
          <ParachuteIcon width={iconWidth} height={iconWidth} />
        </IconWrapperStyled>
        <IconWrapperStyled>
          <IconNumberStyled>02</IconNumberStyled>
          <FistIcon width={iconWidth} height={iconWidth} />
        </IconWrapperStyled>
        <IconWrapperStyled>
          <IconNumberStyled>03</IconNumberStyled>
          <LightningIcon width={iconWidth} height={iconWidth} />
        </IconWrapperStyled>
      </IconsWrapperStyled>

      <ChooseUsSectionsWrapperStyled>
        <ChooseUsSectionWrapperStyled>
          <ChooseUsSectionTitleStyled>solidní výběr< br/>dodavatelů</ChooseUsSectionTitleStyled>
          <ChooseUsSectionTextStyled>Naše společnost nabízí kvalitní a certifikované komponenty, které jsou vhodné pro různé typy solárních panelů a systémů od <ChooseUsOrangeTextStyled>evropských dodavatlů</ChooseUsOrangeTextStyled>.</ChooseUsSectionTextStyled>
        </ChooseUsSectionWrapperStyled>
        <ChooseUsSectionWrapperStyled>
          <ChooseUsSectionTitleStyled>kvalitní komponenty</ChooseUsSectionTitleStyled>
          <ChooseUsSectionTextStyled>S naším širokým portfoliem <ChooseUsOrangeTextStyled>kvalitních solárních komponentů</ChooseUsOrangeTextStyled> nabízíme jedinečnou šanci pro vaši firmu či domácnost přizpůsobit se novým ekologickým standardům a snížit závislost na fosilních palivech.</ChooseUsSectionTextStyled>
        </ChooseUsSectionWrapperStyled>
        <ChooseUsSectionWrapperStyled>
          <ChooseUsSectionTitleStyled>důraz na rychlost< br/>a komunikaci</ChooseUsSectionTitleStyled>
          <ChooseUsSectionTextStyled><ChooseUsOrangeTextStyled>Věnujeme zvláštní péči rychlé expedici a účinné komunikaci</ChooseUsOrangeTextStyled>, abychom našim zákazníkům zajišťovali nejen kvalitní materiály pro solární panely, ale i <ChooseUsOrangeTextStyled>bezproblémové a spolehlivé služby</ChooseUsOrangeTextStyled>.</ChooseUsSectionTextStyled>
        </ChooseUsSectionWrapperStyled>
      </ChooseUsSectionsWrapperStyled>

      <ChooseUsBottomBackgroundStyled />
    </WrapperStyled>
  )
}
