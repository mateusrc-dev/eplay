import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsam
      sint perferendis dolore, consequuntur quia, vel quaerat quas nemo
      repellat, a ullam molestiae earum corrupti odio tempore magnam quos
      asperiores.
    </Descricao>
  </Card>
)

export default Product
