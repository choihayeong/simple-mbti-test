import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "../scss/module/Button.module.scss";

const Button = ({ btntext, link, cssClass, onClickEvent }) => {
    const btnClasses = cssClass ? `${style.btn} ${style.btn}--${cssClass}` : style.btn;

    if (link) {
        return <Link to={link} className={btnClasses} onClick={onClickEvent}>{btntext} </Link>
    } else {
        return (
            <button type="button" className={btnClasses} onClick={onClickEvent}>{btntext}</button>
        );
    }

};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
    link: PropTypes.string,
    cssClass: PropTypes.string,
    onClickEvent: PropTypes.func
};

export default Button;
