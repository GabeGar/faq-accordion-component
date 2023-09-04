import { useState } from "react";

import mobileWoman from "./assets/images/illustration-woman-online-mobile.svg";
import mobileShadow from "./assets/images/bg-pattern-mobile.svg";

import Page from "./components/Page";
import FAQSection from "./components/FAQSection";

import data from "./json/faq.json";

const App = () => {
    const [currentAnswerId, setCurrentAnswerID] = useState(null);
    const { faq } = data;

    return (
        <Page>
            <main className="card">
                <section className="illustration">
                    <img
                        src={mobileWoman}
                        alt="Woman managing her emails on a large screen"
                    />
                    <img src={mobileShadow} alt="" />
                </section>
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
