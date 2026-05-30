import { Link } from "react-router-dom";

export default function Faq({ t }) {
  return (
    <div className="faq-container">
      <h1>{t.faq}</h1>

      {t.faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <h3 className="faq-question">{item.question}</h3>

          <div className="faq-answer">
            {item.answer.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph}
                {item.problemsLink && paragraphIndex === item.answer.length - 1 && (
                  <>
                    {" "}
                    <Link to="/problems">{t.problems}</Link>.
                  </>
                )}
                {item.telegramLink && paragraphIndex === 0 && (
                  <>
                    {" "}
                    <a href="https://t.me/kazlingo" target="_blank" rel="noreferrer">
                      @kazlingo
                    </a>.
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}