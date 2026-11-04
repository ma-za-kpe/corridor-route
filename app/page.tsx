// Generated from the crew's page by trusted code (T-0914); edit the page, not this file.
import facts from "@/app/content.json";
import Reveal from "@/components/kit/Reveal";
import FuelLogStrip from "@/components/FuelLogStrip";
import LitreKmMeter from "@/components/LitreKmMeter";
import RouteLedger from "@/components/RouteLedger";
import ScenarioSlider from "@/components/ScenarioSlider";
import SiteCompare from "@/components/SiteCompare";
import SlipCompare from "@/components/SlipCompare";

export default function Page() {
  return (
    <>
      <meta name="description" content="Corridor Route is a working prototype for logistics and real estate teams and customers in Ethiopia, built on StartupTribunal research. Data stays on this device." />
      <meta property="og:title" content={"Corridor Route — a working prototype for Ethiopia"} />
      <meta property="og:description" content="A working prototype for logistics and real estate teams and customers in Ethiopia, built on StartupTribunal research. Data stays on this device." />
      <title>
        Corridor Route — a working prototype for Ethiopia
      </title>
      <a className="skip" href="#main">
        Skip to content
      </a>
      {"\n"}
      <header className="site-header">
        {"\n"}
        <div className="container header-inner">
          {"\n"}
          <a className="brand" href="#top">
            {"\n"}
            <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
              {"\n"}
              <rect x="2" y="2" width="36" height="36" rx="9" fill="none" stroke="var(--color-ink)" strokeWidth="2.5"></rect>
              {"\n"}
              <path d="M11 27 C 17 27, 17 13, 23 13" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round"></path>
              {"\n"}
              <circle cx="11" cy="27" r="3" fill="var(--color-ink)"></circle>
              {"\n"}
              <circle cx="23" cy="13" r="3" fill="var(--color-ink)"></circle>
              {"\n"}
            </svg>
            {"\n"}
            <span className="brand-name">
              Corridor Route
            </span>
            {"\n"}
          </a>
          {"\n"}
          <nav className="site-nav" aria-label="Sections">
            {"\n"}
            <a href="#slip">
              Slip
            </a>
            {"\n"}
            <a href="#meter">
              Meter
            </a>
            {"\n"}
            <a href="#ledger">
              Ledger
            </a>
            {"\n"}
            <a href="#compare">
              Compare
            </a>
            {"\n"}
            <a href="#scenarios">
              Scenarios
            </a>
            {"\n"}
            <a href="#sites">
              Sites
            </a>
            {"\n"}
            <a href="#assumptions">
              Assumptions
            </a>
            {"\n"}
          </nav>
          {"\n"}
        </div>
        {"\n"}
      </header>
      {"\n"}
      <main id="main" className="container">
        {"\n"}
        <span id="top"></span>
        {"\n"}
        <section className="hero" aria-labelledby="hero-title">
          {"\n"}
          <div className="hero-grid">
            {"\n"}
            <div className="hero-copy">
              {"\n"}
              <Reveal order={0}>
                {"\n"}
                <p className="eyebrow">
                  Corridor Route
                </p>
                {"\n"}
                <h1 id="hero-title">
                  Price a Djibouti-to-Ethiopia tanker trip before you commit.
                </h1>
                {"\n"}
              </Reveal>
              {"\n"}
              <Reveal order={1}>
                {"\n"}
                <p className="lede">
                  A working prototype for logistics and real estate teams and customers in Ethiopia. Enter the route, the tanker, and the price per litre, and read the trip cost before you commit.
                </p>
                {"\n"}
              </Reveal>
              {"\n"}
              <Reveal order={2}>
                {"\n"}
                <p className="hero-meta">
                  Built on StartupTribunal research. Data stays on this device.
                </p>
                {"\n"}
              </Reveal>
              {"\n"}
            </div>
            {"\n"}
            <Reveal order={3}>
              {"\n"}
              <div className="hero-art" aria-hidden="true">
                {"\n"}
                <svg viewBox="0 0 320 220" role="img" focusable="false">
                  {"\n"}
                  <rect x="1" y="1" width="318" height="218" rx="14" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2"></rect>
                  {"\n"}
                  <line x1="1" y1="46" x2="319" y2="46" stroke="var(--color-ink)" strokeWidth="1.5"></line>
                  {"\n"}
                  <text x="16" y="30" fontFamily="monospace" fontSize="12" letterSpacing="2" fill="var(--color-ink)">
                    CORRIDOR SLIP
                  </text>
                  {"\n"}
                  <text x="304" y="30" textAnchor="end" fontFamily="monospace" fontSize="11" fill="var(--color-ink)">
                    DJB → ET
                  </text>
                  {"\n"}
                  <path d="M28 150 C 110 150, 120 96, 200 96 S 292 120, 292 120" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round"></path>
                  {"\n"}
                  <circle cx="28" cy="150" r="7" fill="var(--color-ink)"></circle>
                  {"\n"}
                  <circle cx="292" cy="120" r="7" fill="var(--color-ink)"></circle>
                  {"\n"}
                  <g transform="translate(150,86) rotate(-18)">
                    {"\n"}
                    <rect x="-22" y="-13" width="44" height="26" rx="4" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2.5"></rect>
                    {"\n"}
                    <circle cx="-12" cy="13" r="5" fill="var(--color-ink)"></circle>
                    {"\n"}
                    <circle cx="12" cy="13" r="5" fill="var(--color-ink)"></circle>
                    {"\n"}
                  </g>
                  {"\n"}
                  <g fontFamily="monospace" fontSize="11" fill="var(--color-ink)">
                    {"\n"}
                    <text x="28" y="182">
                      ROUTE KM
                    </text>
                    {"\n"}
                    <text x="120" y="182">
                      TANKER L
                    </text>
                    {"\n"}
                    <text x="212" y="182">
                      ETB / L
                    </text>
                    {"\n"}
                  </g>
                  {"\n"}
                  <g fontFamily="monospace" fontSize="15" fill="var(--color-ink)">
                    {"\n"}
                    <text x="28" y="202">
                      ____
                    </text>
                    {"\n"}
                    <text x="120" y="202">
                      ____
                    </text>
                    {"\n"}
                    <text x="212" y="202">
                      ____
                    </text>
                    {"\n"}
                  </g>
                  {"\n"}
                </svg>
                {"\n"}
              </div>
              {"\n"}
            </Reveal>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="problem" aria-labelledby="problem-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              The corridor problem
            </p>
            {"\n"}
            <h2 id="problem-title">
              Fuel moves by road, and the cost shows.
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <p className="prose">
              Without a functional petroleum pipeline, Ethiopia depends on road tankers to move fuel from Djibouti. StartupTribunal describes this as creating high logistics costs, frequent supply disruptions, inflated fuel prices, and a major bottleneck to industrial growth.
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={2}>
            {"\n"}
            <p className="prose">
              The need for a $660 million pipeline project signals how severe and long-standing this infrastructure gap has been for the entire region.
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={3}>
            {"\n"}
            <p className="caveat">
              {"Research status: rejected by the StartupTribunal AI Tribunal and published with caveats. These claims are StartupTribunal's and are not established fact."}
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="evidence" aria-labelledby="evidence-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Evidence
            </p>
            {"\n"}
            <h2 id="evidence-title">
              Two points from the research
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <div className="evidence-grid">
              {"\n"}
              <article className="card">
                {"\n"}
                <h3>
                  Road-tanker dependency
                </h3>
                {"\n"}
                <p>
                  High logistics costs from moving fuel by road tanker from Djibouti.
                </p>
                {"\n"}
                <p className="card-src">
                  Research by StartupTribunal
                </p>
                {"\n"}
              </article>
              {"\n"}
              <article className="card">
                {"\n"}
                <h3>
                  The $660M pipeline signal
                </h3>
                {"\n"}
                <p>
                  A $660 million pipeline project signals a severe, long-standing infrastructure gap for the entire region.
                </p>
                {"\n"}
                <p className="card-src">
                  Research by StartupTribunal
                </p>
                {"\n"}
              </article>
              {"\n"}
            </div>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="features" aria-labelledby="features-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Scope
            </p>
            {"\n"}
            <h2 id="features-title">
              {"Five features, the team's own concept"}
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <ol className="feature-list">
              {"\n"}
              <li className="feature">
                {"\n"}
                <div>
                  {"\n"}
                  <h3>
                    Corridor trip-cost estimate
                  </h3>
                  {"\n"}
                  <p>
                    Price a single tanker trip from the route, tanker, and price per litre.
                  </p>
                  {"\n"}
                </div>
                {"\n"}
              </li>
              {"\n"}
              <li className="feature">
                {"\n"}
                <div>
                  {"\n"}
                  <h3>
                    Saved estimate comparison
                  </h3>
                  {"\n"}
                  <p>
                    Put two saved estimates side by side and read the difference.
                  </p>
                  {"\n"}
                </div>
                {"\n"}
              </li>
              {"\n"}
              <li className="feature">
                {"\n"}
                <div>
                  {"\n"}
                  <h3>
                    Disruption scenario slider
                  </h3>
                  {"\n"}
                  <p>
                    Move the disruption factor and watch the delivered cost change.
                  </p>
                  {"\n"}
                </div>
                {"\n"}
              </li>
              {"\n"}
              <li className="feature">
                {"\n"}
                <div>
                  {"\n"}
                  <h3>
                    Site logistics cost comparison
                  </h3>
                  {"\n"}
                  <p>
                    Compare the fuel logistics cost of serving two candidate sites.
                  </p>
                  {"\n"}
                </div>
                {"\n"}
              </li>
              {"\n"}
              <li className="feature">
                {"\n"}
                <div>
                  {"\n"}
                  <h3>
                    Estimate history and export
                  </h3>
                  {"\n"}
                  <p>
                    Browse saved estimates and export a plain-text summary.
                  </p>
                  {"\n"}
                </div>
                {"\n"}
              </li>
              {"\n"}
            </ol>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="caveats" aria-labelledby="caveats-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Caveats
            </p>
            {"\n"}
            <h2 id="caveats-title">
              Read before you rely on it
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <ul className="caveat-list">
              {"\n"}
              <li>
                This is a working prototype.
              </li>
              {"\n"}
              <li>
                {"Its features are the team's own concept."}
              </li>
              {"\n"}
              <li>
                Its data stays on this device.
              </li>
              {"\n"}
              <li>
                {"Research claims are StartupTribunal's and are not established fact."}
              </li>
              {"\n"}
            </ul>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="source" aria-labelledby="source-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Source
            </p>
            {"\n"}
            <h2 id="source-title">
              Where this comes from
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <p className="prose">
              {"Research by StartupTribunal: "}
              <a className="src-link" href="https://startuptribunal.com/catalog/ethiopian-fuel-supply-blocked-without-petroleum-pipeline">
                Ethiopian Fuel Supply Blocked Without Petroleum Pipeline
              </a>
              .
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={2}>
            {"\n"}
            <p className="caveat">
              {facts.F4}
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="slip" id="slip" aria-labelledby="slip-title">
          {"\n"}
          <div className="slip-grid">
            {"\n"}
            <div className="slip-copy">
              {"\n"}
              <Reveal order={0}>
                {"\n"}
                <p className="eyebrow">
                  {"Today's corridor slip"}
                </p>
                {"\n"}
                <h2 id="slip-title">
                  Enter the run, then stamp it.
                </h2>
                {"\n"}
              </Reveal>
              {"\n"}
              <Reveal order={1}>
                {"\n"}
                <p className="prose">
                  One horizontal fuel-log strip, like a depot slip: route distance, tanker capacity, and price per litre. Stamp it to keep the entry on this device.
                </p>
                {"\n"}
              </Reveal>
              {"\n"}
            </div>
            {"\n"}
            <Reveal order={2}>
              {"\n"}
              <FuelLogStrip />
              {"\n"}
            </Reveal>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="meter" id="meter" aria-labelledby="meter-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Litre / km tick meter
            </p>
            {"\n"}
            <h2 id="meter-title">
              Check the slip before you stamp it.
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <LitreKmMeter />
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="ledger" id="ledger" aria-labelledby="ledger-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Kept slips
            </p>
            {"\n"}
            <h2 id="ledger-title">
              The route ledger
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <RouteLedger />
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="compare" id="compare" aria-labelledby="compare-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Saved estimate comparison
            </p>
            {"\n"}
            <h2 id="compare-title">
              Put two kept slips side by side.
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <p className="prose">
              Pick two estimates you have stamped on this device and read the difference in cost per litre and delivery window.
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={2}>
            {"\n"}
            <SlipCompare />
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="scenarios" id="scenarios" aria-labelledby="scenarios-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Disruption scenario slider
            </p>
            {"\n"}
            <h2 id="scenarios-title">
              See how disruption changes your delivered cost.
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <p className="prose">
              Move the disruption factor along the slider and watch the delivered cost per litre and the delivery window change, to decide whether to buffer stock.
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={2}>
            {"\n"}
            <ScenarioSlider />
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="sites" id="sites" aria-labelledby="sites-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              Site logistics cost comparison
            </p>
            {"\n"}
            <h2 id="sites-title">
              Compare the fuel logistics cost of two candidate sites.
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <p className="prose">
              Enter two distances from the corridor and read the fuel logistics cost per litre for each, to factor into the site decision.
            </p>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={2}>
            {"\n"}
            <SiteCompare />
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
        <section className="assumptions" id="assumptions" aria-labelledby="assumptions-title">
          {"\n"}
          <Reveal order={0}>
            {"\n"}
            <p className="eyebrow">
              {"Corridor assumptions & device"}
            </p>
            {"\n"}
            <h2 id="assumptions-title">
              What the slip assumes
            </h2>
            {"\n"}
          </Reveal>
          {"\n"}
          <Reveal order={1}>
            {"\n"}
            <ul className="assumption-list">
              {"\n"}
              <li>
                Djibouti road-tanker context.
              </li>
              {"\n"}
              <li>
                Price is ETB per litre.
              </li>
              {"\n"}
              <li>
                Offline device status: data stays on this device.
              </li>
              {"\n"}
            </ul>
            {"\n"}
          </Reveal>
          {"\n"}
        </section>
        {"\n"}
      </main>
      {"\n"}
      <footer className="site-footer">
        {"\n"}
        <div className="container footer-inner">
          {"\n"}
          <p className="footer-brand">
            Corridor Route
          </p>
          {"\n"}
          <p className="footer-note">
            A working prototype for logistics and real estate teams and customers in Ethiopia. Data stays on this device.
          </p>
          {"\n"}
          <p className="footer-src">
            {"Research by StartupTribunal — "}
            <a className="src-link" href="https://startuptribunal.com/catalog/ethiopian-fuel-supply-blocked-without-petroleum-pipeline">
              Ethiopian Fuel Supply Blocked Without Petroleum Pipeline
            </a>
            {". "}
            {facts.F4}
          </p>
          {"\n"}
        </div>
        {"\n"}
      </footer>
    </>
  );
}
