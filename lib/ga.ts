export const GA_ID = 'G-5B9VRV78DN';

// log the page view with their URL
export const pageView: (url: string) => void = url => {
  if (typeof window !== 'undefined') {
    (window as any).gtag?.('config', GA_ID, {
      page_path: url,
    });
  }
};

// log specific events happening.
interface EventType {
  action: string;
  params: any;
}

export const event: (eventType: EventType) => void = ({ action, params }) => {
  if (typeof window !== 'undefined') {
    (window as any).gtag?.('event', action, params);
  }
};
