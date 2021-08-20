const GA_ID = 'UA-201839371-1';

// log the page view with their URL
export const pageView: (url: string) => void = (url) => {
  if (process.browser) {
    (window as any).gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

// log specific events happening.
interface EventType {
  action: string;
  params: any;
}
export const event: (eventType: EventType) => void = ({ action, params }) => {
  if (process.browser) {
    (window as any).gtag('event', action, params);
  }
}
