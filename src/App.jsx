import { useState, useMemo, useRef, useEffect } from "react";
import { menuData, categories } from "./menuData";

// ─── Item Card ───────────────────────────────────────────────────────────────
function ItemCard({ item, index }) {
  return (
    <div
      className="item-card"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="item-top">
        <h3 className="item-name">{item.name}</h3>
        <span className="item-price">
          €{item.price}
          {item.priceNote && <span className="price-note">{item.priceNote}</span>}
        </span>
      </div>
      {item.desc && <p className="item-desc">{item.desc}</p>}
    </div>
  );
}

// ─── Section with flat items ──────────────────────────────────────────────────
function FlatSection({ data }) {
  return (
    <div className="items-grid">
      {data.items.map((item, i) => (
        <ItemCard key={i} item={item} index={i} />
      ))}
    </div>
  );
}

// ─── Section with subcategories ───────────────────────────────────────────────
function SubcategorySection({ data }) {
  return (
    <div>
      {data.subcategories.map((sub, si) => (
        <div key={si} className="subcategory">
          <h3 className="sub-title">{sub.name}</h3>
          <div className="items-grid">
            {sub.items.map((item, i) => (
              <ItemCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Search Results ───────────────────────────────────────────────────────────
function SearchResults({ query }) {
  const results = useMemo(() => {
    const q = query.toLowerCase();
    const found = [];
    for (const [key, section] of Object.entries(menuData)) {
      const catLabel = categories.find(c => c.key === key)?.label || section.label;
      if (section.items) {
        section.items.forEach(item => {
          if (
            item.name.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q))
          ) {
            found.push({ ...item, category: catLabel });
          }
        });
      }
      if (section.subcategories) {
        section.subcategories.forEach(sub => {
          sub.items.forEach(item => {
            if (
              item.name.toLowerCase().includes(q) ||
              (item.desc && item.desc.toLowerCase().includes(q))
            ) {
              found.push({ ...item, category: `${catLabel} – ${sub.name}` });
            }
          });
        });
      }
    }
    return found;
  }, [query]);

  if (results.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🔍</div>
        <p>No results for "<em>{query}</em>"</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <p className="results-count">{results.length} result{results.length !== 1 ? "s" : ""} for "<em>{query}</em>"</p>
      <div className="items-grid">
        {results.map((item, i) => (
          <div key={i} className="item-card search-card" style={{ animationDelay: `${i * 0.03}s` }}>
            <span className="search-category-badge">{item.category}</span>
            <div className="item-top">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">€{item.price}</span>
            </div>
            {item.desc && <p className="item-desc">{item.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeKey, setActiveKey] = useState("sparkling");
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const activeSection = menuData[activeKey];
  const activeCat = categories.find(c => c.key === activeKey);
  const isSearching = search.trim().length > 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeKey]);

  // Close nav on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setNavOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCatSelect = (key) => {
    setActiveKey(key);
    setSearch("");
    setNavOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── Layout ── */
        .app { min-height: 100vh; display: flex; flex-direction: column; }

        /* ── Hero Header ── */
        .hero {
          background: linear-gradient(180deg, #2A0808 0%, #1A0404 60%, var(--ink) 100%);
          padding: 3rem 1.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,26,26,0.4) 0%, transparent 70%);
        }
        .hero-ornament {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          display: block;
          position: relative;
        }
        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--gold);
          position: relative;
          line-height: 1.1;
          background: linear-gradient(135deg, #E2C47A 0%, #C9A84C 40%, #A07A2A 70%, #C9A84C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          margin-top: 0.5rem;
          position: relative;
        }
        .hero-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem auto;
          max-width: 300px;
          position: relative;
        }
        .hero-divider::before, .hero-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .hero-divider-icon {
          color: var(--gold);
          font-size: 1rem;
        }

        /* ── Search ── */
        .search-wrap {
          position: relative;
          max-width: 480px;
          margin: 0 auto;
        }
        .search-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 0.75rem 1.25rem 0.75rem 3rem;
          color: var(--cream);
          font-family: 'Raleway', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
        }
        .search-input::placeholder { color: rgba(245,240,232,0.3); }
        .search-input:focus {
          border-color: var(--gold);
          background: rgba(255,255,255,0.08);
        }
        .search-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1rem;
          pointer-events: none;
        }
        .search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1.1rem;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }
        .search-clear:hover { color: var(--cream); }

        /* ── Category Nav ── */
        .cat-nav-bar {
          background: rgba(10,2,2,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(107,26,26,0.3);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .cat-nav-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cat-nav-inner::-webkit-scrollbar { display: none; }
        .cat-btn {
          background: none;
          border: none;
          color: rgba(245,240,232,0.5);
          font-family: 'Raleway', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1rem 0.85rem;
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }
        .cat-btn-emoji { font-size: 1rem; }
        .cat-btn:hover { color: var(--cream); }
        .cat-btn.active {
          color: var(--gold);
          border-bottom-color: var(--gold);
        }

        /* ── Content Area ── */
        .content {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.25rem 4rem;
          width: 100%;
          flex: 1;
        }

        /* ── Section Title ── */
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.6s ease forwards;
        }
        .section-emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          color: var(--gold);
          letter-spacing: 0.1em;
          font-weight: 400;
        }
        .section-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 1rem auto 0;
        }

        /* ── Items Grid ── */
        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        /* ── Item Card ── */
        .item-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.25s ease;
          animation: fadeInUp 0.5s ease both;
          position: relative;
          overflow: hidden;
        }
        .item-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .item-card:hover {
          border-color: rgba(201,168,76,0.4);
          background: rgba(255,255,255,0.07);
          transform: translateY(-2px);
        }
        .item-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
        }
        .item-name {
          font-family: 'Cinzel', serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--cream);
          letter-spacing: 0.06em;
          line-height: 1.3;
        }
        .item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--gold);
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .price-note {
          font-size: 0.6rem;
          color: var(--text-muted);
          font-family: 'Raleway', sans-serif;
          font-style: italic;
          letter-spacing: 0.05em;
          margin-top: 1px;
        }
        .item-desc {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* ── Subcategory ── */
        .subcategory { margin-bottom: 2.5rem; }
        .sub-title {
          font-family: 'Cinzel', serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--burgundy-light);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(107,26,26,0.3);
        }

        /* ── Search Results ── */
        .search-results { animation: fadeIn 0.4s ease; }
        .results-count {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .search-card { position: relative; }
        .search-category-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--burgundy-light);
          margin-bottom: 0.5rem;
          background: rgba(107,26,26,0.2);
          padding: 2px 8px;
          border-radius: 20px;
        }
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-muted);
          animation: fadeIn 0.4s ease;
        }
        .no-results-icon { font-size: 3rem; margin-bottom: 1rem; }
        .no-results p { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; }

        /* ── Footer ── */
        .footer {
          text-align: center;
          padding: 2rem 1rem;
          border-top: 1px solid rgba(107,26,26,0.2);
          background: rgba(10,2,2,0.5);
        }
        .footer-logo {
          font-family: 'Cinzel', serif;
          color: var(--gold);
          letter-spacing: 0.15em;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }
        .footer-note {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .hero { padding: 2rem 1rem 1.5rem; }
          .items-grid { grid-template-columns: 1fr; }
          .cat-btn { padding: 0.8rem 0.6rem; font-size: 0.65rem; }
        }
      `}</style>

      <div className="app">
        {/* Hero */}
        <header className="hero">
          <span className="hero-ornament">🍹</span>
          <h1 className="hero-title">Il Caravellino</h1>
          <p className="hero-subtitle">Venezia · Since 1908</p>
          <div className="hero-divider">
            <span className="hero-divider-icon">⚜</span>
          </div>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              ref={searchRef}
              className="search-input"
              type="text"
              placeholder="Search cocktails, wines, spirits…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </header>

        {/* Category Nav */}
        <nav className="cat-nav-bar">
          <div className="cat-nav-inner">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`cat-btn${activeKey === cat.key && !isSearching ? " active" : ""}`}
                onClick={() => handleCatSelect(cat.key)}
              >
                <span className="cat-btn-emoji">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="content">
          {isSearching ? (
            <SearchResults query={search.trim()} />
          ) : (
            <>
              <div className="section-header">
                <span className="section-emoji">{activeCat?.emoji}</span>
                <h2 className="section-title">{activeSection?.label}</h2>
                <div className="section-line" />
              </div>

              {activeSection?.items ? (
                <FlatSection data={activeSection} />
              ) : activeSection?.subcategories ? (
                <SubcategorySection data={activeSection} />
              ) : null}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-logo">Il Caravellino</p>
          <p className="footer-note">All prices in Euro · Service included</p>
        </footer>
      </div>
    </>
  );
}
