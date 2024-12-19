import PropTypes from "prop-types";
import style from "../scss/module/ProgressBar.module.scss";

const ProgressBar = ({ current, total, split="/" }) => {
    return (
        <>
            <div className={style.progressbar}>
                <span className={style.progressbar__current} style={{
                    "--current-width": `${(current / total) * 100}%`
                }}></span>
            </div>
            <div className={style.progress}>
                <span>{current}</span>
                <span>{split}</span>
                <span>{total}</span>
            </div>
        </>

    )
};

ProgressBar.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    split: PropTypes.string,
};

export default ProgressBar;
