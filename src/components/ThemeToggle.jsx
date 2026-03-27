import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', icon: <SunIcon />, label: 'Light' },
    { id: 'dark', icon: <MoonIcon />, label: 'Dark' },
    { id: 'system', icon: <SystemIcon />, label: 'System' },
  ];

  return (
    <div className="theme-toggle">
      {themes.map((t) => (
        <button
          key={t.id}
          className={`theme-btn ${theme === t.id ? 'active' : ''}`}
          onClick={() => setTheme(t.id)}
          title={`Switch to ${t.label} mode`}
          aria-label={`Switch to ${t.label} mode`}
        >
          {t.icon}
        </button>
      ))}
      <style>{`
        .theme-toggle {
          display: flex;
          gap: 8px;
          padding: 4px;
          background: var(--accent-bg);
          border-radius: 20px;
          border: 1px solid var(--border);
          margin-left: 15px;
        }
        .theme-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: var(--text);
          opacity: 0.6;
        }
        .theme-btn:hover {
          background: rgba(0, 0, 0, 0.05);
          opacity: 1;
        }
        .theme-btn.active {
          background: var(--bg);
          color: var(--accent);
          box-shadow: var(--shadow);
          opacity: 1;
        }
        .theme-btn svg {
          width: 18px;
          height: 18px;
        }
      `}</style>
    </div>
  );
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SystemIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export default ThemeToggle;
