//funcao que formata valor de para valor em moedar BR
const formatValue = (value) =>
  //cara nativo do js para trabalhar com numero
  Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value)



export default formatValue;
