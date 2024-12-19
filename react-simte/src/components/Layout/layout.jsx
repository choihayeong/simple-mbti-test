import PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <div id="wrap" className="wrap">
            {children}
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.element
};

export default Layout;