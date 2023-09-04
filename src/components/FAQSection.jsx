import arrow from "../assets/images/icon-arrow-down.svg";

const FAQSection = ({
    id,
    question,
    answer,
    currentAnswerID,
    setCurrentAnswerID,
}) => {
    const isCurrent = currentAnswerID === id;

    const questionClasses = `question ${(isCurrent && "bold") || ""}`;
    const answerClasses = `answer ${(isCurrent && "show") || ""}`;
    const arrowClasses = `arrow ${(isCurrent && "flip") || ""}`;

    const handleShowAnswer = () => {
        isCurrent ? setCurrentAnswerID(null) : setCurrentAnswerID(id);
    };

    return (
        <section className="QnA" onClick={handleShowAnswer}>
            <div className="q-flex">
                <span className={questionClasses} onClick={handleShowAnswer}>
                    {question}
                </span>
                <span className={arrowClasses} onClick={handleShowAnswer}>
                    <img src={arrow} alt="arrow" />
                </span>
            </div>
            <p className={answerClasses}>{answer}</p>
        </section>
    );
};

export default FAQSection;
