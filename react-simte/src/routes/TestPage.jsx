import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QnaItem from "../components/QnaItem";
import { actionCreators } from "../store";

const TestPage = ({ allData, calcResult }) => {
    const idx = useParams().id;
    let navigate = useNavigate();

    const [qnaList, setQnaList] = useState([]);
    const [qIdx, setIdx] = useState(0);

    const getQnaList = async() => {
        const data = await allData.filter(item => item.idx === idx);

        setQnaList(data[0].qnaList);
    };

    useEffect(() => {
        getQnaList();
    });

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
            {JSON.stringify(qnaList)}

            {/* <QnaItem question={qnaList[qIdx].q} answers={qnaList[qIdx].a} handleQuestion={getQuestionIdx} /> */}
        </section>
    );
};

const mapStateToProps = (state) => {    
    return {
        allData: state.json,
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
    allData:PropTypes.array,
    qnaList: PropTypes.array,
    result: PropTypes.array,
    calcResult: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
