import { useEffect, useState } from "react";

import mobileWoman from "./assets/images/illustration-woman-online-mobile.svg";
import mobileShadow from "./assets/images/bg-pattern-mobile.svg";
import desktopWoman from "./assets/images/illustration-woman-online-desktop.svg";
import desktopBox from "./assets/images/illustration-box-desktop.svg";
import desktopShadow from "./assets/images/bg-pattern-desktop.svg";

import Page from "./components/Page";
import FAQSection from "./components/FAQSection";

import data from "./json/faq.json";

const App = () => {
    const [isViewPortMobile, setIsViewPortMobile] = useState(false);
    const [currentAnswerId, setCurrentAnswerID] = useState(null);
    const { faq } = data;

    useEffect(() => {
        const handleResize = (e) => {
            e.target.innerWidth >= 986
                ? setIsViewPortMobile(false)
                : setIsViewPortMobile(true);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Page>
            <main className="card">
                {isViewPortMobile && (
                    <section className="illustration">
                        <img
                            src={mobileWoman}
                            alt="Woman managing her emails on a large screen"
                        />
                        <img src={mobileShadow} alt="" />
                    </section>
                )}
                {!isViewPortMobile && (
                    <section className="illustration-desktop">
                        <div className="outer">
                            <img
                                src={desktopWoman}
                                alt="Woman managing her emails on a large screen"
                            />
                            <img src={desktopShadow} alt="" />
                            <img src={desktopBox} alt="" />
                        </div>
                    </section>
                )}
                <section className="faq">
                    <h1>FAQ</h1>
                    {faq.map((infoObj) => {
                        return (
                            <FAQSection
                                key={infoObj.id}
                                id={infoObj.id}
                                question={infoObj.q}
                                answer={infoObj.a}
                                currentAnswerID={currentAnswerId}
                                setCurrentAnswerID={setCurrentAnswerID}
                            />
                        );
                    })}
                </section>
            </main>
        </Page>
    );
};

export default App;
