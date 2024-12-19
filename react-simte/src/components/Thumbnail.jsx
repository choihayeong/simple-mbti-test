import PropTypes from "prop-types";
import style from "../scss/Thumbnail.module.scss";

const Thumbnail = ({bgUrl, altext}) => {
    return (
        <div className={style.thumbnail} style={{
            backgroundImage: bgUrl
        }}>
            <span className={bgUrl ? "blind" : style.thumbnail__info}>{altext}</span>
        </div>
    )
};

Thumbnail.propTypes = {
    bgUrl: PropTypes.string,
    altext: PropTypes.string
};

export default Thumbnail;
