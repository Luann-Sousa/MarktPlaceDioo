import styled from "styled-components/native";
import {FlatList} from 'react-native'
export const Container = styled.View`
  flex:1;
  background: #4F5564;
`;

export const ProductConatiner = styled.View`
  flex:1;
  flex-direction:row;
  margin-top:40px;
  border-radius:5px;
`;

export const ProductList = styled(FlatList).attrs({
  numColumns: 1,

})`
  flex:1;
  padding:40px 20px;
  margin-top:150px;
`;

export const Product = styled.View`
  flex:1;
  margin:8px;
  background: #626878;
  padding:32px 12px;
  border-radius:25px;
`;

export const ProductImage = styled.Image`
  width:90%;
  height:220px;
  align-self:center;
`;

export const ProdutcTitle = styled.Text`
  color:#69C0D2;
  font-size:22px;
  margin-top:10px;
  font-weight:400;
  line-height:40px;
  letter-spacing:3.5px;
  text-align:center;
`;

export const PriceConatiner = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-top:auto;
  padding: 24px 32px 4px;
`;

export const ProductPrice = styled.Text`
  color:#F3F9FF;
  font-size:22px;
  font-weight:bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #4F5564;
  padding:4px 8px;
  border-radius:100px;
  align-items:center;
  flex-direction:row
`;

export const ProductButtonText = styled.Text`
  color:#B9C0D2;
  font-weight:800,
  padding: 0 4px;
`;
