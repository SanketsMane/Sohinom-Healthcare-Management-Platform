import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <div className="mx-auto h-16 w-16 text-red-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary w-full"
              >
                Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="btn-secondary w-full"
              >
                Go to Homepage
              </button>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                  Technical Details (Development Mode)
                </summary>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-xs text-red-700 overflow-auto">
                  <pre>{this.state.error && this.state.error.toString()}</pre>
                  <pre>{this.state.errorInfo.componentStack}</pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
