import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <>
            <h1>Simple MBTI Test</h1>

            <Button text={`시작하기`} onClickEvent={() => navigate('/test-page')} />
        </>
    );
};

export default Home;
