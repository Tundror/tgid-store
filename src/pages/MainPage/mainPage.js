import Footer from "../../components/Footer/footer.js";
import Header from "../../components/Header/header.js";
import { motion } from 'framer-motion';
import MainContent from "./MainContent/index.js";

export default function MainPage() {
    return(
        <div>
            <Header></Header>
            <motion.div
                initial={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.1,
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }
                }}
                exit={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}>
                <MainContent></MainContent>
            </motion.div>
            <Footer></Footer>
        </div>
    )
}