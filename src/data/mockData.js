export const user = {
  name: 'Jordan',
  fullName: 'Jordan Mercer',
  title: 'Director of IT',
  company: 'Pacific Mutual',
  points: 2190,
  rank: 3,
}

export const missions = [
  { id: 1, text: 'Connect with Ingram rep at Booth 1200', done: false },
  { id: 2, text: 'Attend Azure Copilot Security deep-dive', done: false },
  { id: 3, text: 'Scan 3 partner booths for cost optimization intel', done: false },
]

export const sessions = [
  {
    id: 1,
    title: 'Azure Copilot Security Deep-Dive',
    time: '9:00 AM – 10:15 AM',
    location: 'Hall B, Room 210',
    speaker: 'Sarah Chen, Microsoft',
    priority: 'critical',
    why: 'Pacific Mutual is evaluating Copilot for compliance workflows — this session covers the exact guardrails your CISO asked about.',
  },
  {
    id: 2,
    title: 'Azure Cost Management: Real-World Playbooks',
    time: '11:00 AM – 12:00 PM',
    location: 'Hall A, Room 104',
    speaker: 'Marcus Webb, Ingram Micro',
    priority: 'high',
    why: 'Your Ingram rep Marcus is on this panel. Perfect moment to discuss your Azure spend optimization project face-to-face.',
  },
  {
    id: 3,
    title: 'M365 Copilot Hands-On Lab',
    time: '2:00 PM – 3:30 PM',
    location: 'Innovation Hub, Lab 3',
    speaker: 'Priya Sharma, Microsoft',
    priority: 'medium',
    why: 'Hands-on time with the M365 Copilot API — bring your laptop. You\'ll leave with a working prototype for your team.',
  },
]

export const booths = [
  {
    id: 1,
    number: '1200',
    name: 'Ingram Micro',
    badge: 'Your rep is here',
    context: 'Marcus Webb is expecting you. Bring your Azure cost report — he has allocation templates that saved similar-sized orgs 30% on cloud spend.',
  },
  {
    id: 2,
    number: '800',
    name: 'Microsoft Security',
    badge: null,
    context: 'Ask about the new Defender XDR integration with Copilot. Relevant to the compliance automation project Pacific Mutual kicked off in Q3.',
  },
  {
    id: 3,
    number: '1540',
    name: 'Palo Alto Networks',
    badge: null,
    context: 'Their new SASE offering competes with your current Zscaler contract. Worth a 15-minute conversation to benchmark pricing before renewal.',
  },
]

export const leaderboard = [
  { rank: 1, name: 'Dana Osei', company: 'Vertex Health', points: 2840 },
  { rank: 2, name: 'Rachel Kim', company: 'NovaTech Solutions', points: 2410 },
  { rank: 3, name: 'Jordan Mercer', company: 'Pacific Mutual', points: 2190, isUser: true },
  { rank: 4, name: 'Marcus Tran', company: 'Apex Digital', points: 1750 },
  { rank: 5, name: 'Priya Nair', company: 'CloudBridge Inc.', points: 1420 },
]

export const secretDrop = {
  headline: 'Private rooftop. Tonight. You\'re in.',
  subline: 'Exclusive Ingram Micro reception — top connectors only.',
  spotsRemaining: 12,
  delaySeconds: 8,
}
