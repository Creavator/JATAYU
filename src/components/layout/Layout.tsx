import { Outlet } from 'react-router-dom';
import { Sidebar } from '../navigation/Sidebar';
import { Header } from './Header';
import { colors } from '../../styles/theme';

export function Layout() {
  return (
    <div className={`min-h-screen ${colors.primary.bg} ${colors.primary.text}`}>
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16 p-4">
        <div className="max-w-[80%] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}