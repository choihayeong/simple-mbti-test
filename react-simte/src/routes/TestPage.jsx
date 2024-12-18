import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QnaItem from "../components/QnaItem";
import { actionCreators } from "../store";

const TestPage = ({ qnaList, calcResult }) => {
    let navigate = useNavigate();

    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = (index) => {
        const question = qnaList[qIdx];
        const answer = question.a[index];

        if (qIdx + 1 === qnaList.length) {
            navigate('/test-result');
            calcResult(answer.part.toString());
        } else {
            setIdx(qIdx + 1);
            calcResult(answer.part.toString());
        }
    };

    return (
        <section id="qna" className="qna">
            <QnaItem question={qnaList[qIdx].q} answers={qnaList[qIdx].a} handleQuestion={getQuestionIdx} />
        </section>
    );
};

const mapStateToProps = (state) => {    
    return {
        qnaList: state.qnaList,
        result: state.result,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        calcResult: (type) => dispatch(actionCreators.getResult(type)),
    }
};

TestPage.propTypes = {
    qnaList: PropTypes.array,
    result: PropTypes.array,
    calcResult: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
