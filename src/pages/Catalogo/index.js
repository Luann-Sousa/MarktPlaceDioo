import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FormatValue from '../../Utils/FormatValue';
import {
  Container,
  ProductConatiner,
  ProductImage,
  ProductList,
  Product,
  ProdutcTitle,
  PriceConatiner,
  ProductPrice,
  ProductButton,
  ProductButtonText
} from './styles';
export default function Catalogo() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title:"Assinatura Trimestral",
      image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      price:129.99
    },
    {
      "id": "2",
      "title": "Assinatura Anual",
      "image_url":
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
      "price": 540
    }
  ])
  return (
    <Container>


          <ProductList
            data={products}
            keyExtractor={ (item)=> item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80
            }}
            renderItem={ ({item})=>(
              <Product>
                <ProductImage source={{ uri: item.image_url}}/>
                  <ProdutcTitle>{item.title}</ProdutcTitle>
                  <PriceConatiner>
                    <ProductPrice>{FormatValue(item.price)}</ProductPrice>

                    <ProductButton onPress={ ()=> alert("oii")}>
                      <ProductButtonText>Adicionar</ProductButtonText>
                      <Icon name="plus-circle" size={30} color="#D1D7E9"/>
                    </ProductButton>
                  </PriceConatiner>

              </Product>
            )}

          />

    </Container>
  )
}

