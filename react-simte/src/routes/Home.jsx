import Button from "../components/Button";

const Home = () => {

    return (
        <>
            <main className="main">
                <h1>Simple MBTI Test</h1>
                <Button btntext={`시작하기`} link={"/test-page"} />
            </main>
        </>
    );
};

export default Home;
