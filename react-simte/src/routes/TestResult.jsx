import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "../components/Button";
import { actionCreators } from "../store";
import "../scss/TestResult.scss";

const TestResult = ({ result, resetTest }) => {
    // console.log(result);
    const idx = useParams().id;

    const [resultMBTI, setResultMBTI] = useState("");

    const getMBTIResult = () => {
        let aa = result.join().split(",");
        let allMBTI = "";

        let mbtiObj = [
            {part: "E", value: 0, key: 0},
            {part: "I", value: 0, key: 1},
            {part: "S", value: 0, key: 2},
            {part: "N", value: 0, key: 3},
            {part: "F", value: 0, key: 4},
            {part: "T", value: 0, key: 5},
            {part: "P", value: 0, key: 6},
            {part: "J", value: 0, key: 7},
        ];

        for (let i = 0; i < aa.length; i++) {
            for (let j = 0; j < mbtiObj.length; j++) {
                if (aa[i] === mbtiObj[j].part) {
                    mbtiObj[j].value = mbtiObj[j].value + 1;
                }
            }
        }

        for (let n = 0; n < mbtiObj.length / 2; n++) {
            if (mbtiObj[n * 2 + 1].value > mbtiObj[n*2].value) {
                allMBTI += mbtiObj[n * 2 + 1].part;
            } else {
                allMBTI += mbtiObj[n * 2].part;
            }
        }

        setResultMBTI(allMBTI);
    };

    useEffect(() => {
        getMBTIResult();
    });

    return (
        <section className="section section--result">
            <div className="inner">
                <div className="result">
                    <h2 className="section__title blind">ㄷㄱㄷㄱ 결과는...?</h2>

                    <div className="result-image">
                        {resultMBTI}
                    </div>

                    <div className="btn-group">
                        <Button btntext={`처음으로`} link={"/"} onClickEvent={resetTest} />
                        <Button btntext={`테스트 다시하기`} link={`/test/${idx}`} onClickEvent={resetTest} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        result: state.result
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetTest: () => dispatch(actionCreators.resetResult()),
    }
}

TestResult.propTypes = {
    result: PropTypes.array,
    resetTest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
