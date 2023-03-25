import Slider from "~/components/Slider";
import { slider } from "~/data/slide";

function Home() {
    return (
        <div className="home">
            <Slider data={slider} timeOut={5000} auto={true} />
        </div>
    );
}

export default Home;
