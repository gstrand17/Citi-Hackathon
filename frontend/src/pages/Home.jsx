import './Home.css';
import financeGoalImg from '../assets/images/finance-goal.jpg';

function Home() {
    return (
        <main className="home-container">
            <section className="home-hero">
                <h1>Invest Early, Secure Your Future</h1>
                <p>
                    Empowering the next generation to build wealth, achieve financial security, and visualize their goals.
                </p>
            </section>
            <section className="home-benefits-section">
                <div>
                    <h2>Why Start Now?</h2>
                    <ul className="home-benefits-list">
                        <li>Save for retirement and build wealth</li>
                        <li>Gain financial security</li>
                        <li>Develop responsible money habits</li>
                    </ul>
                </div>
                <div>
                   <img src={financeGoalImg} alt="Financial Goals" className="home-image" />
                </div>
            </section>
            <section className="home-cta">
                <button className="home-cta-button">
                    Get Started
                </button>
            </section>
        </main>
    );
}
export default Home;