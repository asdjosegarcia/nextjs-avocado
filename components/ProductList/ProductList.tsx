import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {//creamos un type de como teine que ser la variable que llame a este type
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>//recivimos los productos que nos envia product list (arro de abajo) al parecer como array
  products.map(({ name, id, price, image }) => (//hacemos un map con el nombre, id, precio, imagen de cada producto enviando la iformacion a card para renderizarla multiples veces
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (//recivimos los productos que nos envian
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}{/* llama la arrow function de arriba  */}
  </Card.Group>
)

export default ProductList
