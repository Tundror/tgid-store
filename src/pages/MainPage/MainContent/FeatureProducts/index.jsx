import { useRef, useState, useEffect } from 'react';
import { Container, ProductsArea, ProductCard, TitleContainer, ButtonArrow } from './styles';
import { FiShoppingCart, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import jsonApi from "../../../../services/jsonApi.js"

const FeatureProducts = () => {
  const scrollContainer = useRef(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await jsonApi.getProducts();
        console.log(response)
        setFeaturedProducts(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFeaturedProducts();
  }, []);

  function scrollLeft() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 500;
    }
  }

  function scrollRight() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 500;
    }
  }
  return (
    <Container>
      <TitleContainer>
        <h3>Produtos em Destaque</h3>
        <div>
          <ButtonArrow onClick={scrollLeft}>
            <FiArrowLeft />
          </ButtonArrow>

          <ButtonArrow onClick={scrollRight}>
            <FiArrowRight />
          </ButtonArrow>
        </div>

      </TitleContainer>
      <ProductsArea ref={scrollContainer}>
        {featuredProducts.map(product => (
          <ProductCard>
            <div className='productImageArea'>
              <img src={product.imagem} alt="" />
            </div>
            <div className='productDescArea'>
              <div className="descArea">
                <p>{product.nome.split(" ").slice(0, 3).join(" ")}</p>
                <p>R$ {product.preco.toFixed(2).replace(".", ",")}</p>
              </div>
              <div className='cartIconArea' onClick={() => navigate(`/products/${product.slug}`)}>
                <FiShoppingCart />
              </div>
            </div>
          </ProductCard>
        ))}
      </ProductsArea>

    </Container>
  );
};

export default FeatureProducts;