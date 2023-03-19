import webVitals from 'web-vitals';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof webVitals === 'object') {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
