import Image from 'next/image';
import { useRouter } from 'next/router'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export const Product = () => {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        {/* <Image /> */}
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa sed distinctio cupiditate at corrupti laborum corporis ipsam omnis alias dignissimos sapiente in recusandae assumenda, fugit laboriosam consectetur vitae excepturi.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export default Product;