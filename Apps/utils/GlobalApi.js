import { gql, request } from 'graphql-request'

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwcl1lpt02x207w9pen80qf7/master'

const getSlider = async () => {
  const query = gql`
  query getSider {
    slides {
      id
      name
      image {
        url
      }
    }
  }  
`
const result = await request(MASTER_URL, query)
return result;
}

export default {
  getSlider
}


