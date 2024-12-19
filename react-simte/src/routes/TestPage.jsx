import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TestItem from "../components/TestItem";

const TestPage = ({ allData }) => {
    const idx = useParams().id;

    const [qnaList, setQnaList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getQnaList = async() => {
        const data = await allData.filter(item => item.idx === idx);
        setQnaList(data[0].qnaList);
        setLoading(false);
    };

    useEffect(() => {
        getQnaList();
    });

    return (
        <section className="section section--qna">
            {loading ? "" : <TestItem listArr={qnaList} paramId={idx} />}
        </section>
    );
};

const mapStateToProps = (state) => {    
    return {
        allData: state.json
    };
};

TestPage.propTypes = {
    allData:PropTypes.array
};

export default connect(mapStateToProps)(TestPage);
