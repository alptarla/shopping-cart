import { Layout } from './components/layout';
import { UserProvider } from './context/UserContext';
import Router from './Router';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Router />
      </Layout>
    </UserProvider>
  );
}

export default App;
