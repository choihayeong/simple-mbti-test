import PropTypes from "prop-types";
import Button from "./Button";
import "../scss/QnaItem.scss";

const QnaItem = (props) => {
    const {question, answers, handleQuestion} = props;

    return (
        <div className="qna__item">
            <div className="qna__question">
                {question}
            </div>
            <div className="qna__answers">
                {answers.map((item, index) => <Button key={index} btntext={item.answer} onClickEvent={() => handleQuestion(index)} />)}
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
