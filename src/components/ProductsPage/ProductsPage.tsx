import React from 'react'
import { ProductsDescStyled, ProductsDownloadStyled, ProductsHeaderWrapperStyled, ProductsTitleStyled, WrapperStyled } from './ProductsPage.style'
import LazyLoadWrapper from './LazyLoadWrapper'
import Zoom from './Zoom';
import { download } from './Product';

export const products = [
  {
    id: 'hak',
    name: 'Nastavitelný vario hák 120mm',
    desc: '<p>Střešní držák pro upevnění montážních profilů pro fotovoltaické panely na střechách pokrytých taškami. Zaručuje správnou stabilitu celé konstrukce.</p><span>K háku dodáváme <b>zdarma 3x vruty do dřeva</b> 6x50mm/50mm o materiálu A2.</span><br/><br /><span><b>Material:</b> Nerezová ocel h17 1.4016</span>',
  },
  {
    id: 'omega',
    name: 'Příchytka “Omega”',
    desc: '<p>Příchytka omega slouží k upevnění solárního panelu na hliníkový montážní profil viz. <a href=/montaz>[montáž]</a>. Používá se k montáži solárních panelů na ploché a šikmé střechy.</p><span><b>Material:</b> Hliník 6060</span>',
  },
  {
    id: 'z',
    name: 'Příchytka “Z”',
    desc: '<p>Příchytka Z slouží k upevnění solárního panelu k hliníkovému konstrukčnímu profilu. Používá se k montáži solárních panelů na ploché i šikmé střechy.</p><span><b>Material:</b> Hliník 6060</span>',
  },
  {
    id: 'M10_hex',
    name: 'Šroub s šestihrannou hlavou, M10x25mm',
    desc: '<b>DIN 933</b><p>Šroub s šestihrannou hlavou se používá k uchycení montážního profilu k Vario hákům. Kvalitní ocel zaručí dlouhou životnost.</p><span><b>Material:</b> Nerezová ocel A2</span>',
  },
  {
    id: 'M10_valcova',
    name: 'Šroub IMBUS s válcovou hlavou, M8x22mm',
    desc: '<b>DIN 912</b><p>Imbusový šroub je nezbytným prvkem pro montáž fotovoltaických panelů. Šroub slouží k připojení koncové příchytky Z k hlavnímu montážnímu profilu.</p><span><b>Material:</b> Nerezová ocel A2</span>',
  },
  {
    id: 'M10_valcova_25',
    name: 'Šroub IMBUS s válcovou hlavou, M8x25mm',
    desc: '<b>DIN 912</b><p>Imbusový šroub je nezbytným prvkem pro montáž fotovoltaických panelů. Šroub slouží k připojení středové svorky omega k hlavnímu montážnímu profilu.</p><span><b>Material:</b> Nerezová ocel A2</span>',
  },
  {
    id: 'M10',
    name: 'Šestihranná matice s límcem M10',
    desc: '<b>DIN 6923</b><p>Šestihranná matka s přírubou se zářezy s vroubkovanou přírubou. Tyto matice se používají především k upevnění střešních háků.</p><span><b>Material:</b> Nerezová ocel A2</span>',
  },
  {
    id: 'nut',
    name: 'Čtyrhranná matice M8',
    desc: '<b>DIN 557</b><p>Čtyřhranná matice M8 se používá v kombinaci s příchytkami omega a “Z” k uchycení solárních panelů.</p><span><b>Material:</b> Nerezová ocel A2</span>',
  },
]

export default function ProductsPage() {
  const [zoomedElement, setZoomedElement] = React.useState<string>('')

  return (
    <>
      <WrapperStyled>
        {zoomedElement && <Zoom zoomedElement={zoomedElement} setZoomedElement={setZoomedElement} />}
        <ProductsHeaderWrapperStyled>
          <ProductsTitleStyled>Naše produkty</ProductsTitleStyled>
          <ProductsDescStyled>Naše produkty splňují všechny normy. Jsou vyrobeny z kvalitní nerezové oceli nebo hliníku, proto vydrží po mnoho let a neztrácí své vlastnosti. Ke každému z našich produktů máme materiálové certifikáty a na vyžádání je možné dodat spolu s objednávkou.</ProductsDescStyled>
          <ProductsDownloadStyled type='submit' onClick={() => download(`/models/Produkty.pdf`)}>Stáhnout PDF všech produktů</ProductsDownloadStyled>
        </ProductsHeaderWrapperStyled>
        {products.map((product, index) =>
          <LazyLoadWrapper
          key={index}
          model={product.id}
          name={product.name}
          desc={product.desc}
          setZoomedElement={setZoomedElement}
          />
          )}
      </WrapperStyled>
    </>
  )
}
