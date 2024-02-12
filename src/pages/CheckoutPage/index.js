import { Link } from "react-router-dom";
import Header from "../../components/Header/header.js";
import { FinalContainer, FinalMessage, HomeButton } from "./style.js";

export default function CheckoutPage() {
    return (
        <>
            <Header></Header>
            <FinalContainer>
                <FinalMessage>Obrigado por comprar conosco!</FinalMessage>
            </FinalContainer>

            <HomeButton>
                <Link to="/"><button>Home</button></Link>
            </HomeButton>
        </>
    )
}