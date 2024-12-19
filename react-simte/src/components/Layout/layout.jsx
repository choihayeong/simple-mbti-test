import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div id="wrap" className="wrap">
            <Header />
            {children}
            <Footer />
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.element
};

export default Layout;
