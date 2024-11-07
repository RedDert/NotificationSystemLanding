export const strings = {
  githubUrl: "https://github.com/RedDert/notificationSystem",
  org: "RedDert",
  repo: "notificationSystem",
  hero: {
    title: "Nansi",
    tagline: "Not Another Notification System Implementation",
    description: "Not yet operational :(",
    githubButton: "View on GitHub",
  },
  features: [
    {
      title: "Platform agnostic",
      description: "Plans on implementing for Browsers, Mobile devices, Windows and Linux",
    },
    {
      title: "Fine-Grained Notifications",
      description: "Decide from when where and who you receive notifications from",
    },
    {
      title: "Actionable Notifications",
      description: "Directly Snooze, dismiss or reply to a notification",
    },

  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Nansi. All rights reserved.`,
  },
  //dummy data for now
  profile: {
    avatarUrl: '',  
    name: 'Lionel Messi',
    bio: 'The goat',
    activityTitle: 'Recent Activity',
    activities: [
      'Changed notification settings',
      'Updated profile picture',
      'Joined a new team',
      'Set up email notifications',
    ],
    preferencesTitle: 'Preferences',
    preferences: [
      { label: 'Generic exemple', defaultChecked: true },
      { label: 'Another exemple', defaultChecked: false },
    ],
  },
};
