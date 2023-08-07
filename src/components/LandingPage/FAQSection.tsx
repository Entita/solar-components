import React from 'react'
import { WrapperStyled, FAQBackgroundStyled, FAQWrapperStyled, FAQDescStyled, FAQDrowpdownContentTextStyled, FAQDrowpdownContentWrapperStyled, FAQDrowpdownTitleStyled, FAQDrowpdownWrapperStyled, FAQDrowpdownsWrapperStyled, FAQSubtitleStyled, FAQTitleStyled, FAQDrowpdownContainerWrapperStyled, FAQDrowpdownTopWrapperStyled, FAQSubtitleWrapperStyled } from './FAQSection.style'
import BottomArrow from '@/SVGs/BottomArrow'

function FAQDropdown({ question, answer }: { question: string, answer: string }) {
  const [opened, setOpened] = React.useState<Boolean>(false)

  return (
    <FAQDrowpdownWrapperStyled>
      <FAQDrowpdownTopWrapperStyled onClick={() => setOpened(prev => !prev)}>
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
              question='Jaké náhradní díly nabízíte pro solární panely ?'
              answer='Odpověď: Nabízíme širokou škálu náhradních dílů pro solární panely, včetně solárních článků, inverzních měničů, nosných konstrukcí, kabelů, konektorů, diod, pojistek a dalších součástí.'
            />
            <FAQDropdown
              question='Můžu si náhradní díly pro solární panely instalovat sám/sama ?'
              answer='Odpověď: Nabízíme širokou škálu náhradních dílů pro solární panely, včetně solárních článků, inverzních měničů, nosných konstrukcí, kabelů, konektorů, diod, pojistek a dalších součástí.'
            />
            <FAQDropdown
              question='Jaké jsou záruční podmínky na vaše náhradní díly ?'
              answer='Odpověď: Nabízíme širokou škálu náhradních dílů pro solární panely, včetně solárních článků, inverzních měničů, nosných konstrukcí, kabelů, konektorů, diod, pojistek a dalších součástí.'
            />
            <FAQDropdown
              question='Jaká je běžná doba dodání náhradních dílů ?'
              answer='Odpověď: Nabízíme širokou škálu náhradních dílů pro solární panely, včetně solárních článků, inverzních měničů, nosných konstrukcí, kabelů, konektorů, diod, pojistek a dalších součástí.'
            />
            <FAQDropdown
              question='Můžete mi poskytnout poradenství při výběru správného náhradního dílu ?'
              answer='Odpověď: Nabízíme širokou škálu náhradních dílů pro solární panely, včetně solárních článků, inverzních měničů, nosných konstrukcí, kabelů, konektorů, diod, pojistek a dalších součástí.'
            />
          </FAQDrowpdownsWrapperStyled>
        </FAQDrowpdownContainerWrapperStyled>
      </FAQWrapperStyled>
    </WrapperStyled>
  )
}
