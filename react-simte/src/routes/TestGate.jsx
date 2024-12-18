import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../components/Button";

const TestGate = ({ allData }) => {
    const [title, setTitle] = useState("");
    const idx = useParams().id;

    useEffect(() => {
        const data = allData.filter(item => item.idx === idx);
        setTitle(data[0].title);
    }, [allData, idx]);
    
    return (
        <>
            <main className="main">
                <h2>{title}</h2>
                <Button btntext={`시작하기`} link={`/test/${idx}`} />
            </main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        allData: state.json
    }
};

TestGate.propTypes = {
    allData: PropTypes.array,
};

export default connect(mapStateToProps)(TestGate);
