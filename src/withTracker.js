import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

/**
 * HOC to add GA tracker. Taken directly from react-ga repo wiki
 * @param {React.Component} WrappedComponent Component to receive tracker
 * @param {Object} options ReactGA.set options
 */
export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  const HOC = props => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
