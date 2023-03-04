import { Component } from "react";
import ImagenError from "../img/error.gif";

interface ErrorBoundaryProps{}
interface ErrorBoundaryState{
    hasError: boolean;
}

class ErrorBoundary extends Component <ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        const audioError = new Audio("../src/audio/error.mp3");
        audioError.play();
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <>
            <h1>Algo salió mal.</h1>
            <img src={ImagenError} />
          </>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;