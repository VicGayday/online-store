import {gql} from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
query {
  category {
    name
    products {
      id
      name
      gallery
      prices {
        amount
        currency
      }
    }
  }
}
`
export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;
export const GET_CURRENCY = gql`
  query {
    currencies
  }
`