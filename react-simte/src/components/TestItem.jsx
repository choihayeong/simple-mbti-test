import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actionCreators } from "../store";
import QnaItem from "./QnaItem";
import ProgressBar from "./ProgressBar";

const TestItem = ({ paramId, listArr, calcResult }) => {
    const navigate = useNavigate();
    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = (index) => {
        const question = listArr[qIdx];
        const answer = question.a[index];

        if (qIdx + 1 === listArr.length) {
            navigate(`/result/${paramId}`);
            calcResult(answer.part.toString());
        } else {
            setIdx(qIdx + 1);
            calcResult(answer.part.toString());
        }
    };

    return (
        <div className="qna">
            <ProgressBar current={qIdx + 1} total={listArr.length + 1} />

            <div className="inner">
                <QnaItem question={listArr[qIdx].q} answers={listArr[qIdx].a} handleQuestion={getQuestionIdx} />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        calcResult: (type) => dispatch(actionCreators.getResult(type)),
    }
};

TestItem.propTypes = {
    paramId: PropTypes.string.isRequired,
    listArr: PropTypes.array.isRequired,
    calcResult: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TestItem);
