import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QnaItem from "./QnaItem";
import { actionCreators } from "../store";

const TestItem = ({ listArr, calcResult }) => {
    const navigate = useNavigate();
    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = (index) => {
        const question = listArr[qIdx];
        const answer = question.a[index];

        if (qIdx + 1 === listArr.length) {
            navigate('/test-result');
            calcResult(answer.part.toString());
        } else {
            setIdx(qIdx + 1);
            calcResult(answer.part.toString());
        }
    };

    return (
        <>
            <QnaItem question={listArr[qIdx].q} answers={listArr[qIdx].a} handleQuestion={getQuestionIdx} />
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        calcResult: (type) => dispatch(actionCreators.getResult(type)),
    }
};

TestItem.propTypes = {
    listArr: PropTypes.array.isRequired,
    calcResult: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TestItem);