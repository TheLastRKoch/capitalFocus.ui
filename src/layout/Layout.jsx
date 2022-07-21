// components
import Footer from "../components/layout/Footer"
import Menu from "../components/layout/Menu"

const Layout = ({ children }) => {
    return (
        <>
            <Menu></Menu>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;