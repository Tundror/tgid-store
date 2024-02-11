import { Link } from "react-router-dom";
import { Container, List, ListItem } from "./style.js";

export default function Header() {

    return (
        <Container>
            <Link to="/" className="title">TgidStore</Link>
            <List>
                <ListItem>
                    <Link to="/">
                        Home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/cart">
                        Carrinho
                    </Link>
                </ListItem>
            </List>
        </Container>
    )
}