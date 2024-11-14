import PropTypes from "prop-types";

const Button = (props) => {
    const { text, onClickEvent } = props;

    return (
        <button type="button" onClick={onClickEvent}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickEvent: PropTypes.func,
};

export default Button;
