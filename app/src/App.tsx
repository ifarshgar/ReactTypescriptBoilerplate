import { ErrorBoundary } from 'Common/components/ErrorBoundary';
import { Router } from './Routes';

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
