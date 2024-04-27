import Section from '../Section'

import { Item, Items } from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="Imagem do Link" />
      </Item>
      <Item>
        <img src={zelda} alt="Imagem do Link" />
      </Item>
      <Item>
        <img src={zelda} alt="Imagem do Link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
