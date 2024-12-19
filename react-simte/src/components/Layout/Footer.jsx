import "../../scss/Layout/footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">&copy;Copyright {currentYear} simte</footer>
    );
};

export default Footer;
