import React, { Component } from "react";
import Logger from "common/utils/logger/logger";

/** 
 * ErrorBoundary - class use to cache the unhandled error occures on the child component
 * @param {boolean} hasError - Boolean value used to show/hide  the erro message component
 */
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      Logger.errorBoundry(errorInfo)
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }


export default ErrorBoundary;