function Page1() {
  return (
    <div>
      <header class="bg-blue-900 text-white p-6 shadow">
    <h1 class="text-3xl font-bold">Understanding Roth Accounts</h1>
    <p class="text-sm">Learn the key differences between Roth IRA and Roth 401(k)</p>
  </header>

  <main class="max-w-4xl mx-auto py-10 px-4">
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">What is a Roth Account?</h2>
      <p>
        A Roth account is a type of retirement savings account where you contribute after-tax income.
        Unlike traditional accounts, your withdrawals in retirement are tax-free.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">Roth IRA vs Roth 401(k)</h2>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-xl font-bold">Roth IRA</h3>
          <ul class="list-disc ml-5 mt-2 space-y-1">
            <li>Income limits apply</li>
            <li>Max contribution (2025): $7,000 ($8,000 if 50+)</li>
            <li>Self-managed via broker</li>
            <li>Withdraw contributions anytime</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-xl font-bold">Roth 401(k)</h3>
          <ul class="list-disc ml-5 mt-2 space-y-1">
            <li>No income limits</li>
            <li>Max contribution (2025): $23,000 ($30,000 if 50+)</li>
            <li>Offered by employers</li>
            <li>Early withdrawals may face penalties</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">Which One is Right for You?</h2>
      <p>
        Choose a Roth IRA if you want more control and meet the income limits.
        Choose a Roth 401(k) if your employer offers one and you want higher contribution limits.
      </p>
    </section>

    <section class="mb-8 bg-yellow-100 p-6 rounded shadow">
      <h2 class="text-xl font-semibold">💡 Pro Tip</h2>
      <p class="mt-2">
        You can contribute to both a Roth IRA and a Roth 401(k) in the same year — maximize your retirement savings!
      </p>
    </section>
  </main>

  <footer class="text-center p-4 text-sm text-gray-600">
    &copy; 2025 Roth Insights. For educational purposes only.
  </footer>
    </div>
  );
}
export default Page1;