import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../components/Button";
import "../scss/TestGate.scss";

const TestGate = ({ allData }) => {
    const [title, setTitle] = useState("");
    const idx = useParams().id;

    useEffect(() => {
        const data = allData.filter(item => item.idx === idx);
        setTitle(data[0].title);
    }, [allData, idx]);
    
    return (
        <section className="section section--gate">
            <div className="inner">
                <h2 className="section__title">{title}</h2>

                <div className="gate-image"></div>

                <div className="btn-group">
                    <Button cssClass={`gate`} btntext={`시작하기`} link={`/test/${idx}`} />
                </div>
                
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        allData: state.json
    }
};

TestGate.propTypes = {
    allData: PropTypes.array,
};

export default connect(mapStateToProps)(TestGate);
