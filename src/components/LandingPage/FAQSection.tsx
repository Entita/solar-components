import React from 'react'
import { WrapperStyled, FAQBackgroundStyled, FAQWrapperStyled, FAQDescStyled, FAQDrowpdownContentTextStyled, FAQDrowpdownContentWrapperStyled, FAQDrowpdownTitleStyled, FAQDrowpdownWrapperStyled, FAQDrowpdownsWrapperStyled, FAQSubtitleStyled, FAQTitleStyled, FAQDrowpdownContainerWrapperStyled, FAQDrowpdownTopWrapperStyled, FAQSubtitleWrapperStyled } from './FAQSection.style'
import BottomArrow from '@/SVGs/BottomArrow'
import ReactGA from 'react-ga4'
const ebg13 = require('ebg13')

function FAQDropdown({ question, answer }: { question: string, answer: string }) {
  const [opened, setOpened] = React.useState<Boolean>(false)

  return (
    <FAQDrowpdownWrapperStyled>
      <FAQDrowpdownTopWrapperStyled onClick={() => {
        ReactGA.event({ action: question, category: 'questions' })
        setOpened(prev => !prev)
      }}>
        <FAQDrowpdownTitleStyled>{question}</FAQDrowpdownTitleStyled>
        <BottomArrow height={8} open={opened} />
      </FAQDrowpdownTopWrapperStyled>
      <FAQDrowpdownContentWrapperStyled open={opened}>
        <FAQDrowpdownContentTextStyled>{answer}</FAQDrowpdownContentTextStyled>
      </FAQDrowpdownContentWrapperStyled>
    </FAQDrowpdownWrapperStyled>
  )
}

export default function FAQSection() {
  return (
    <WrapperStyled>
      <FAQBackgroundStyled />
      <FAQWrapperStyled id='faq'>
        <FAQTitleStyled>FAQ</FAQTitleStyled>
        <FAQSubtitleWrapperStyled>
          <FAQSubtitleStyled>Frequently asked questions</FAQSubtitleStyled>
        </FAQSubtitleWrapperStyled>
        <FAQDrowpdownContainerWrapperStyled>
          <FAQDescStyled>Často kladené otázky</FAQDescStyled>
          <FAQDrowpdownsWrapperStyled>
            <FAQDropdown
              question='Jaké díly nabízíte pro solární elektrárny ?'
              answer='Odpověď: Nerezové a hliníkové komponenty pro uchycení panelů.'
            />
            <FAQDropdown
              question='Jaké jsou záruční podmínky na vaše díly ?'
              answer='Odpověď: Všechny naše produkty splňují normy a dáváme na ně plnou záruku.'
            />
            <FAQDropdown
              question='Jaká je běžná doba dodání dílů ?'
              answer='Odpověď: Objednávky vyřizujeme, co nejdříve s dodáním maximálně do 5 pracovních dnů.'
            />
            <FAQDropdown
              question='Můžete mi poskytnout poradenství při výběru správných dílů?'
              answer={`Odpověď: Ano, stačí se nám ozvat na email: ${ebg13('vasb@fbyne-pbzcbaragf.pm')}`}
            />
            <FAQDropdown
              question='Mohu si u Vás objednat i vzorky před první objednávkou?'
              answer='Odpověď: Ano objednat vzorky je určitě možné.'
            />
            <FAQDropdown
              question='Kdo uhradí dopravu?'
              answer='Odpověď: U větších objednávek je doprava vždy zdarma. U menších si dopravu hradí zákazník podle ceníku našich partnerů PPL.'
            />
          </FAQDrowpdownsWrapperStyled>
        </FAQDrowpdownContainerWrapperStyled>
      </FAQWrapperStyled>
    </WrapperStyled>
  )
}
