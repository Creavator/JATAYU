import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, Video, Vote, User, TrendingUp } from 'lucide-react';
import { Logo } from '../common/Logo';
import { colors } from '../../styles/theme';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Vote, label: 'Governance', path: '/governance' },
  { icon: Video, label: 'Shorts', path: '/shorts' },
  { icon: Users, label: 'Protest', path: '/protest' },
  { icon: TrendingUp, label: 'Trending', path: '/trending' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`fixed left-0 top-0 h-full w-64 ${colors.primary.bg} ${colors.primary.border} border-r p-4`}>
      <div className="mb-8">
        <Logo />
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-white'
                    : `${colors.secondary.text} ${colors.primary.hover}`
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-lg">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}