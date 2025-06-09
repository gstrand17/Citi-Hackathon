import './home.css';
import financeGoalImg from '../assets/images/finance-goal.jpg';
import { useState } from 'react';

function Home() {
    const [showMore, setShowMore] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const financeTopics = [
        {
          title: "What is Compound Interest?",
          content: "Compound interest is the process where the interest you earn on an investment begins to earn its own interest. Unlike simple interest, which only applies to your original investment (the principal), compound interest allows your money to grow exponentially over time. For example, if you invest $1,000 at a 5% annual interest rate, after one year you’ll have $1,050. In the second year, you earn interest not just on the original $1,000, but on the $1,050 — and so on. The earlier you start investing, the more you benefit from this effect, making time one of the most powerful tools in building wealth."
        },
        {
          title: "Why Start Investing Early?",
          content: "Investing early gives your money more time to grow and smooths out market ups and downs. Even modest contributions made early can outperform large contributions made later due to the power of compounding. Additionally, starting early allows you to take more calculated risks, recover from market downturns, and develop smart financial habits over time. Young investors also benefit from flexibility — they can afford to invest in growth-oriented assets, reinvest dividends, and explore diverse financial products, giving them a long-term edge over those who delay."
        },
        {
          title: "Building a Diversified Portfolio",
          content: "A diversified portfolio spreads your investments across different asset classes, such as stocks, bonds, real estate, and commodities. The goal is to reduce the overall risk by ensuring that a decline in one investment doesn’t have a devastating effect on your entire portfolio. For example, if tech stocks drop but your portfolio also includes bonds or real estate, your losses are partially offset. Diversification can also include geographic regions (U.S. vs international), industries, and investment styles (value vs growth). It’s a key principle of modern investing and is especially important for managing risk in uncertain markets."
        },
        {
          title: "Emergency Fund vs Investing",
          content: "Before jumping into investing, it's crucial to build an emergency fund. This fund — ideally 3 to 6 months' worth of living expenses — acts as a financial safety net in case of unexpected situations like job loss, medical emergencies, or car repairs. Without it, you might be forced to withdraw your investments at a bad time, potentially incurring losses or penalties. Investing is about building wealth over the long term, whereas an emergency fund provides immediate security and peace of mind. Think of the emergency fund as your financial foundation, and investing as the framework you build on top of it."
        },
        {
          title: "How to Get Started",
          content: "Getting started with investing can feel intimidating, but it doesn’t have to be. Begin by defining your financial goals — are you saving for retirement, a house, or just trying to grow your wealth? Next, choose an investment account, such as a Roth IRA or a brokerage account. Then, select beginner-friendly investments like index funds or ETFs that offer broad exposure to the market with low fees. Automate your contributions so you consistently invest each month, even in small amounts. Most importantly, educate yourself continuously. Read books, follow reliable financial blogs, and avoid 'get rich quick' schemes. Building wealth is a marathon, not a sprint."
        },
        {
          title: "What Are Index Funds?",
          content: "Index funds are a type of investment that track a specific market index, like the S&P 500. Instead of trying to beat the market, they aim to match its performance. This passive investing strategy offers several advantages: lower fees, less risk of poor fund manager decisions, and historically solid returns over time. Index funds are ideal for beginner investors because they offer broad diversification and require little maintenance. By investing in an index fund, you’re essentially buying a tiny piece of hundreds or even thousands of companies in a single purchase — which reduces your risk and keeps costs low."
        },
        {
          title: "Understanding Risk Tolerance",
          content: "Risk tolerance refers to how comfortable you are with the possibility of losing money on your investments. It varies from person to person and depends on factors like age, income, financial goals, and personality. A younger person saving for retirement in 40 years might have high risk tolerance and invest mostly in stocks, while someone nearing retirement may prioritize stability and prefer bonds. Understanding your risk tolerance helps you choose the right mix of investments. If your portfolio doesn’t align with your comfort level, you might panic during market drops and make emotional decisions that hurt your long-term success."
        }
      ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <main className="home-container">
                <section className="home-hero">
                    <h1>Invest Early, Secure Your Future</h1>
                    <p>
                        Empowering the next generation to build wealth, achieve financial security, and visualize their goals.
                    </p>
                </section>

                <section className="home-benefits-section">
                    <div className="home-benefits-text">
                        <h2>🌱 Why Start Investing Now?</h2>
                        <p className="benefits-intro">
                        The sooner you begin, the greater your potential to build lasting financial freedom. Start with small steps today that grow into big wins tomorrow.
                        </p>
                        <ul className="home-benefits-list">
                        <li>📈 Build long-term wealth with compounding</li>
                        <li>🛡️ Gain peace of mind through financial security</li>
                        <li>💡 Learn habits that empower your future self</li>
                        </ul>
                    </div>
                    <div className="home-benefits-image-container">
                        <img
                        src={financeGoalImg}
                        alt="Financial Goals"
                        className="home-image"
                        />
                    </div>
                    </section>

                <section className="home-cta">
                    <button className="home-cta-button">
                        Get Started
                    </button>
                </section>
                
                 {/* 🔽 Existing Learn More Toggle */}
                 <section className="home-dropdown-section">
                    <button className="dropdown-toggle" onClick={() => setShowMore(prev => !prev)}>
                        {showMore ? 'Hide Details ▲' : 'Learn More ▼'}
                    </button>
                    {showMore && (
                        <div className="dropdown-content">
                            <p>
                                Investing early lets you take advantage of compound interest, reduce long-term risk, and achieve financial freedom.
                            </p>
                            <p>
                                The earlier you start, the more time your money has to grow. Even small amounts saved consistently make a big difference.
                            </p>
                        </div>
                    )}
                </section>
            </main>

            {/* 💡 Finance Insights Dropdown (outside .home-container) */}
            <section className="finance-section">
                <h2 className="finance-title">Finance & Investing Insights</h2>
                <div className="finance-list">
                    {financeTopics.map((item, index) => (
                       <div key={index} className={`finance-item ${openIndex === index ? 'active' : ''}`}>
                       <div
                           className="finance-header"
                           onClick={() => toggleDropdown(index)}
                       >
                           <h3>{item.title}</h3>
                           <span>{openIndex === index ? '▲' : '▼'}</span>
                       </div>
                       <div className="finance-content">
                           <p>{item.content}</p>
                       </div>
                   </div>
                    ))}
                </div>
            </section>

            <section className="video-section">
            <h2 className="video-title">Recommended Videos</h2>
            <div className="video-grid">
                <div className="video-card">
                <iframe
                    src="https://www.youtube.com/embed/wf91rEGw88Q"
                    title="Compound Interest Explained"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p>📈 What is Compound Interest?</p>
                </div>
                <div className="video-card">
                <iframe
                    src="https://www.youtube.com/embed/5beqHhziyhs"
                    title="Why Invest Early"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p>⏳ Why Start Investing Early?</p>
                </div>
                <div className="video-card">
                <iframe
                    src="https://www.youtube.com/embed/UfNFA9naLX4"
                    title="Diversified Portfolio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p>🧩 Building a Diversified Portfolio</p>
                </div>
            </div>
            </section>
        </>
    );
}

export default Home;