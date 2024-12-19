import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "../scss/Button.module.scss";

const Button = (props) => {
    const { btntext, link, onClickEvent } = props;

    if (link) {
        return <Link to={link} className={style.btn} onClick={onClickEvent}>{btntext} </Link>
    } else {
        return (
            <button type="button" className={style.btn} onClick={onClickEvent}>{btntext}</button>
        );
    }

};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClickEvent: PropTypes.func
};

export default Button;
