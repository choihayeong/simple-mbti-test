import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Thumbnail from "../components/Thumbnail";
import "../scss/Home.scss";

const Home = ({ allData }) => {
    return (
        <main className="main">
            <div className="inner">
                <h1 className="main__title">Simple MBTI Test</h1>
                <ul className="main__list">
                    {allData.map((item, index) => <li key={index}> <Link to={`/gate/${item.idx}`}>
                        <Thumbnail altext={item.title} />
                    </Link> </li>)}
                </ul>
            </div>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        allData: state.json
    }
};

Home.propTypes = {
    allData: PropTypes.array
};

export default connect(mapStateToProps)(Home);
