import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";

function Main() {
    return (
        <main>
            <section className="banner">
                <div className="banner__slides">
                    <img src="" alt="배너1" className="banner__slide" />
                    <img src="" alt="배너2" className="banner__slide" />
                    <img src="" alt="배너3" className="banner__slide" />
                </div>
                <ul className="banner__list">
                    <li className="banner__list-bar"></li>
                    <li className="banner__list-bar"></li>
                    <li className="banner__list-bar"></li>
                </ul>
                <button id="prev">
                    <GrPrevious />
                </button>
                <button id="next">
                    <GrNext />
                </button>
                <button className="">
                    <AiOutlinePause />
                    <IoPlaySharp />
                </button>
            </section>
        </main>
    );
}

export default Main;
