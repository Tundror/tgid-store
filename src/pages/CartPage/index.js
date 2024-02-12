import Footer from "../../components/Footer/footer.js";
import Header from "../../components/Header/header.js";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../../contexts/cartContext.js";
import { ContainerCart, ContainerSubtotal, ContainerCartPage, ContainerLeft, ContainerRight, ContainerToCheckout, ContainerTotal, Product, SectionBreak, TableDescriptions } from "./style.js";
import jsonApi from "../../services/jsonApi.js";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
            setSubtotal(getSubtotal(JSON.parse(storedCart)));
        } else if (cart?.length === 0) {
            const products = await jsonApi.getCartProducts();
            setCart(products);
            setSubtotal(getSubtotal(products));
        } else {
            setSubtotal(getSubtotal(cart));
        }
    }

    async function handleChangeCart(e, index) {
        const newCart = [...cart];
        const newQuantity = Number(e.target.value);
        newCart[index].quantidade = newQuantity;
        setCart(newCart);
        if (newQuantity >= 1) {
            setSubtotal(getSubtotal(newCart));
            await jsonApi.postCartProducts(newCart);
        }
    }

    function getSubtotal(arr) {
        let total = 0;
        arr?.forEach(prod => total += (prod.quantidade * prod.preco));
        return total;
    }

    function deleteItem(index) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        setSubtotal(getSubtotal(newCart));
        jsonApi.postCartProducts(newCart);
    }

    return (
        <>
            <Header />
            <ContainerCartPage>
                <ContainerLeft>
                    <h1>Carrinho de compras</h1>
                    <SectionBreak />
                    <TableDescriptions>
                        <h2 style={{ width: "25px" }}></h2>
                        <h2 style={{ width: "172px" }}></h2>
                        <h2 style={{ width: "150px" }}>Produto</h2>
                        <h2 style={{ width: "80px", textAlign: "center" }}>Preço</h2>
                        <h2 style={{ width: "63px" }}>Quantidade</h2>
                        <h2 style={{ width: "63px", textAlign: "end" }}>Subtotal</h2>
                    </TableDescriptions>
                    <SectionBreak />
                    <ContainerCart>
                        {cart && cart.length !== 0 ? cart.map((product, index) => (
                            <Product key={index}>
                                <IoClose size={"25px"} style={{ cursor: "pointer" }} onClick={() => deleteItem(index)} />
                                <img src={product.imagem} alt={product.nome} />
                                <strong>
                                    <p>{product.nome}</p>
                                </strong>
                                <p>
                                    {product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </p>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={product.quantidade}
                                    min={1}
                                    onChange={e => handleChangeCart(e, index)} />
                                <span>
                                    {(product.quantidade * product.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </span>
                            </Product>
                        )) : "Você não tem produtos no seu carrinho :("}
                    </ContainerCart>
                </ContainerLeft>

                <ContainerRight>
                    <h1>Total do carrinho</h1>
                    <SectionBreak />
                    <ContainerToCheckout>
                        <ContainerTotal>
                            <p>Total</p>
                            <div>
                                <p>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        </ContainerTotal>
                        <Link to={'/checkout'}><button>Prosseguir para o check-out</button></Link>
                    </ContainerToCheckout>
                </ContainerRight>
            </ContainerCartPage>
            <Footer />
        </>
    )
}