
const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-[80px] leading-[80px] font-bold mb-12 font-caveat relative inline-block before:absolute before:inset-0 before:rounded-full before:bg-[#714B67]/20 before:-z-10 px-1">
  Enterprise software
  <br />
  done right
</h2>



        <div className="flex flex-col lg:flex-row gap-5 m-10">
          {/* Left Column */}
          <div className="lg:w-7/12 space-y-5">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow">
              <div>
                <h4 className="text-xl font-semibold mb-5">Open source</h4>
                <p className="mb-6">
                  Behind the technology is a community of 100k+ developers collaborating worldwide. We were united by the
                  spirit of open source, and a common vision: to transform companies, empower employees.
                </p>
                <p className="mb-5">
                  Odoo is available in two editions:
                  <br /> • <strong>Community</strong>: Open Source, 100% free.
                  <br /> • <strong>Enterprise</strong>: extra apps, infrastructure and professional services.
                </p>
                <a href="/page/editions" className="bg-[#714B67] text-white px-5 py-2 rounded inline-block">
                  Compare Editions
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow">
              <div className="max-w-md">
                <h4 className="text-xl font-semibold mb-6">Highly customizable</h4>
                <p className="mb-4">
                  Use Odoo Studio to automate actions, design custom screens, custom reports, or web hooks.
                </p>
              </div>
              <img
                src="https://i.pinimg.com/1200x/b7/9d/cc/b79dcc004d7918b24e6d5d744afa3d72.jpg"
                alt="Highly customizable"
                className="rounded w-full h-64 p-3 object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow">
              <div>
                <h4 className="text-xl font-semibold mb-6">40k+ community apps</h4>
                <p className="mb-4">
                  Thanks to its open source development model, Odoo became the world’s largest business apps store.
                  Imagine getting an app for every business need.
                </p>
                <a
                  href="//apps.odoo.com/apps"
                  target="_blank"
                  className="bg-[#714B67] text-white px-5 py-2 rounded inline-block"
                >
                  Browse Community Apps
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded shadow">
              <div>
                <h4 className="text-xl font-semibold mb-6">No corporate bullsh*t</h4>
                <p className="italic mb-0">
                  With most systems, you get 70% of what you hoped. With Odoo, you get more than what you expected. You
                  guys will transform the market <br />
                  <small>- Anonymous competitor</small>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-5/12 space-y-10">
            {/* Card 5 */}
            <div className="bg-white p-6 rounded shadow">
              <div className="max-w-md mx-auto">
                <h4 className="text-xl font-semibold mb-2">No vendor lock-in</h4>
                <p className="mb-4">
                  No proprietary data format, just PostgreSQL: you own your data. No software lock-in: you get the
                  source code, GitHub access, and the flexibility to host on our infrastructure or on-premise.
                </p>
                <a
                  href="https://github.com/odoo"
                  target="_blank"
                  className="bg-[#714B67] text-white px-5 py-2 rounded inline-block"
                >
                  Follow us on GitHub
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded shadow">
              <div className="max-w-md mx-auto">
                <h4 className="text-xl font-semibold mb-2">Fair pricing</h4>
                <p className="mb-4">
                  No usage-based pricing, no feature upselling, no long-term contracts, no hosting limits, no
                  surprises… just a single price per user – all inclusive.
                </p>
                <a href="/pricing" className="bg-[#714B67] text-white px-5 py-2 rounded inline-block">
                  View Pricing
                </a>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-5">A unique value proposition</h4>
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/apps/home/unique-value-2024.svg"
                alt="Unique value"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
