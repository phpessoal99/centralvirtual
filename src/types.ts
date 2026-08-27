export interface NotificationItem {
  id: string;
  name: string;
  action: string;
  timeAgo: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  comment: string;
  rating: number;
}

export interface FeatureItem {
  id: string;
  icon: 'zap' | 'play' | 'clock' | 'check';
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}
