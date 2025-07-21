// Analytics utility for tracking form submissions and conversions
// This is a placeholder that can be extended with Google Analytics, Facebook Pixel, etc.

export const trackFormSubmission = (formName: string, success: boolean) => {
  // Google Analytics tracking (if gtag is available)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formName,
      value: success ? 1 : 0
    });
  }

  // Console log for debugging
  console.log('Form submission tracked:', { formName, success });
};

export const trackPixelFormSubmission = (formName: string, success: boolean) => {
  // Facebook Pixel tracking (if fbq is available)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    if (success) {
      (window as any).fbq('track', 'Lead', {
        content_name: formName,
        content_category: 'Airco Installation'
      });
    }
  }

  // Console log for debugging
  console.log('Pixel form submission tracked:', { formName, success });
};

export const trackPageView = (pageName: string) => {
  // Google Analytics page view tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }

  // Console log for debugging
  console.log('Page view tracked:', pageName);
};