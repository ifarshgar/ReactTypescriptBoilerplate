import React, { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  // This method is called when an error is thrown in any of the child components
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // You could send error details to an analytics or logging service here
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Stack id="error-page" alignItems="center" mt={20}>
            <Typography variant="h1" fontSize={50}>
              Oops!
            </Typography>
            <Typography variant="body1" fontSize={26} fontWeight={300} mt={2}>
              Sorry, an unexpected error has occurred.
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }} mt={2}>
              {this.state?.error?.message}
            </Typography>
          </Stack>
        )
      );
    }

    return this.props.children;
  }
}
