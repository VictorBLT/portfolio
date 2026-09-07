import './header.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NAV_LINKS = [
    { id: 'about', path: '#about', labelKey: 'about.title.short' },
    { id: 'experiences', path: '#experiences', labelKey: 'experiences.title.short' },
    { id: 'skills', path: '#skills', labelKey: 'skills.title.short' },
    { id: 'portfolio', path: '#portfolio', labelKey: 'projects.title.short' },
];

export default function Header() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header>
            <nav>
                <h1>
                    <Link to="/">{t('name')}</Link>
                </h1>
                <input type="checkbox" name="" />
                <div className="burger-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    {NAV_LINKS.map(({ id, path, labelKey }) => (
                        <li key={id}>
                            <HashLink to={`/${path}`}>{t(labelKey)}</HashLink>
                        </li>
                    ))}
                </ul>

                <div className="language-selector">
                    <select value={i18n.resolvedLanguage || 'en'} onChange={handleLanguageChange}>
                        <option value="fr">🇫🇷 FR</option>
                        <option value="en">🇬🇧 EN</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}
