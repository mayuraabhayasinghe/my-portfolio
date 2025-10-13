/**
 * Utility functions for analytics
 */

/**
 * Track an event (placeholder for actual analytics implementation)
 * @param {string} eventName - Name of the event to track
 * @param {Object} eventProps - Properties associated with the event
 */
export const trackEvent = (eventName, eventProps = {}) => {
  // This is a placeholder for actual analytics implementation
  // In a real app, you would use something like Google Analytics, Mixpanel, etc.
  console.log(`Event tracked: ${eventName}`, eventProps);

  // Example integration with Google Analytics (if implemented)
  if (window.gtag) {
    window.gtag("event", eventName, eventProps);
  }
};

/**
 * Track a page view
 * @param {string} pageName - Name of the page viewed
 */
export const trackPageView = (pageName) => {
  trackEvent("page_view", { page_title: pageName });
};

/**
 * Track a download event
 * @param {string} fileName - Name of the file downloaded
 */
export const trackDownload = (fileName) => {
  // Get additional information about the user's device and browser
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const language = navigator.language;

  trackEvent("file_download", {
    file_name: fileName,
    version: "1.0", // You can update this with your CV version
    user_agent: userAgent,
    platform: platform,
    language: language,
    timestamp: new Date().toISOString(),
  });
};
