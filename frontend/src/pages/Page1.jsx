import './page1.css';
import Quiz from './quiz.jsx';

function Page1() {
  return (
    <div>
      <header className="page-header">
        <h1>Understanding Roth Accounts</h1>
        <p>Learn the key differences between Roth IRA and Roth 401(k)</p>
      </header>

      <main className="page-container">
        <section className="mb-8">
          <h2 className="section-title">What is a Roth Account?</h2>
          <p className="section-subtitle">
            A Roth account is a type of retirement savings account where you contribute after-tax income.
            Unlike traditional accounts, your withdrawals in retirement are tax-free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title">Roth IRA vs Roth 401(k)</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="card">
              <h3>Roth IRA</h3>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Income limits apply</li>
                <li>Max contribution (2025): $7,000 ($8,000 if 50+)</li>
                <li>Self-managed via broker</li>
                <li>Withdraw contributions anytime</li>
              </ul>
            </div>
            <div className="card">
              <h3>Roth 401(k)</h3>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>No income limits</li>
                <li>Max contribution (2025): $23,000 ($30,000 if 50+)</li>
                <li>Offered by employers</li>
                <li>Early withdrawals may face penalties</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="section-title">Which One is Right for You?</h2>
          <p className="section-subtitle">
            Choose a Roth IRA if you want more control and meet the income limits.
            Choose a Roth 401(k) if your employer offers one and you want higher contribution limits.
          </p>
          <Quiz />
        </section>

        <section className="mb-8 card bg-yellow-100">
          <h2 className="text-xl font-semibold">💡 Pro Tip</h2>
          <p className="mt-2">
            You can contribute to both a Roth IRA and a Roth 401(k) in the same year — maximize your retirement savings!
          </p>
        </section>
      </main>

      <footer>
        &copy; 2025 Roth Insights. For educational purposes only.
      </footer>
    </div>
  );
}

export default Page1;
