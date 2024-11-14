import PropTypes from "prop-types";
import Button from "./Button";
// import style from "../scss/QnaItem";

const QnaItem = (props) => {
    const {question, answers, handleQuestion} = props;

    return (
        <div className="qna__item">
            <div className="qna__question">
                {question}
            </div>
            <div className="qna__answers">
                {answers.map((item, index) => <Button key={index} text={item.answer} onClickEvent={handleQuestion} />)}
            </div>
        </div>
    )
};

QnaItem.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    handleQuestion: PropTypes.func,
};

export default QnaItem;