import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer.js";
import Header from "../../components/Header/header.js";
import { useContext, useEffect, useRef, useState } from "react";
import jsonApi from "../../services/jsonApi.js"
import { AddToCart, BigMiniature, DescriptionArea, FinishOrderArea, LeftColumn, MainContainer, Miniature, MiniatureArea, Price, ProductDetailArea, Quantity, RightColumn } from "./styles.js";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../contexts/cartContext.js";

export default function ProductsPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const quantityRef = useRef(1);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fechProduct() {
            try {
                const response = await jsonApi.getOneProduct(id);
                setProduct(response);
            } catch (error) {
                console.error(error);
            }
        }
        fechProduct();
    }, []);

    const updateQuantity = (increment) => {
        const convertedValue = Number(quantityRef.current?.value);
        const newQuantity = increment ? convertedValue + 1 : convertedValue - 1;
        const quantity = newQuantity < 1 ? 1 : newQuantity;
        quantityRef.current.value = quantity;
    };

    const addToCart = (cart) => {
        const trueCart = cart ? cart : []
        const { nome, id, imagem, preco, descricao } = product;
        const productToAdd = { nome, id, imagem, preco, descricao, quantidade: Number(quantityRef.current.value) };
        const newCart = [...trueCart];
        newCart.push(productToAdd);
        setCart(newCart)

        localStorage.setItem('cart', JSON.stringify(newCart));

        jsonApi.postCartProducts(newCart)
            .then(() => navigate('/cart'))
            .catch(err => alert(err.message));
    }

    return (
        <div>
            <Header />
            <MainContainer>
                <LeftColumn>
                    <BigMiniature>
                        <img src={product?.imagem} alt="" />
                    </BigMiniature>

                    <MiniatureArea>
                        {[...Array(3)].map((_, index) => (
                            <Miniature key={index}>
                                <img src={product?.imagem} alt="" />
                            </Miniature>
                        ))}
                    </MiniatureArea>
                </LeftColumn>

                <RightColumn>
                    <ProductDetailArea>
                        {product ? (
                            <>
                                <h4>{product.nome}</h4>
                                <Price>R$ {product.preco?.toFixed(2).replace(".", ",")}</Price>
                            </>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </ProductDetailArea>

                    <FinishOrderArea>
                        <Quantity>
                            <button onClick={() => updateQuantity(false)}>
                                <FiMinus />
                            </button>
                            <input type="text" disabled value={1} ref={quantityRef} />
                            <button onClick={() => updateQuantity(true)}>
                                <FiPlus />
                            </button>
                        </Quantity>

                        <AddToCart onClick={() => addToCart(cart)}>
                            Adicionar ao carrinho
                            <FiShoppingCart />
                        </AddToCart>
                    </FinishOrderArea>
                </RightColumn>
            </MainContainer>
            <DescriptionArea>
                <h4>Descrição</h4>
                <p>
                    {product?.descricao}
                </p>
            </DescriptionArea>
            <Footer />
        </div>
    )
}