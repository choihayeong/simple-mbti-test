import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ allData }) => {
    return (
        <main className="main">
            <h1>Simple MBTI Test</h1>
            <ul>
                {allData.map((item, index) => <li key={index}> <Link to={`/gate/${item.idx}`}>{item.title}</Link> </li>)}
            </ul>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        allData: state.json
    }
};

Home.propTypes = {
    allData: PropTypes.array,
};

export default connect(mapStateToProps)(Home);
