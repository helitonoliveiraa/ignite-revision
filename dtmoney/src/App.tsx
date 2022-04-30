import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { globalStyle } from './styles/global';

function App() {
  globalStyle();

  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export { App };
