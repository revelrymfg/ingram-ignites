export const user = {
  name: 'Jordan',
  fullName: 'Jordan Mercer',
  title: 'Director of IT',
  company: 'Pacific Mutual',
  points: 2190,
  rank: 3,
  context: 'Evaluating Ingram\'s Microsoft cloud solutions. Focused on Azure cost optimization and Copilot rollout. Mid-migration to Azure — hybrid environment. Has attended Ignite twice before but never engaged deeply with the Ingram booth.',
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
    why: 'Pacific Mutual is mid-migration and evaluating Copilot for compliance workflows — this session covers the exact guardrails your CISO asked about.',
  },
  {
    id: 2,
    title: 'Azure Cost Management: Real-World Playbooks',
    time: '11:00 AM – 12:00 PM',
    location: 'Hall A, Room 104',
    speaker: 'Marcus Webb, Ingram Micro',
    priority: 'high',
    why: 'Your Ingram rep Marcus is on this panel. With your hybrid environment, his cost optimization frameworks are directly applicable to your Azure spend.',
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
    context: 'Large 40x40 island booth facing the Microsoft Marketplace. Walk the heritage timeline walls, charge your devices at the center kiosks, and hit the live Azure demo stations. Marcus Webb is expecting you — ask him to run the cost analysis tool on your current cloud spend.',
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

export const floorIntel = [
  {
    id: 1,
    text: 'PAX8 is making a big presence this year — Ingram\'s team has a counter-story ready. Ask Marcus about it at Booth 1200.',
  },
  {
    id: 2,
    text: 'Microsoft Marketplace is right next to the Ingram booth — perfect for back-to-back conversations.',
  },
]

export const leaderboard = [
  { rank: 1, name: 'Dana Osei', company: 'Pacific NorthWest Health System', points: 2840 },
  { rank: 2, name: 'Rachel Kim', company: 'Meridian Financial Group', points: 2410 },
  { rank: 3, name: 'Jordan Mercer', company: 'Pacific Mutual', points: 2190, isUser: true },
  { rank: 4, name: 'Marcus Tran', company: 'Cascade Technology Partners', points: 1750 },
  { rank: 5, name: 'Priya Nair', company: 'Summit Unified School District', points: 1420 },
]

export const secretDrops = [
  {
    id: 'rooftop',
    headline: 'Private rooftop. Tonight. You\'re in.',
    subline: 'Exclusive Ingram Micro reception — top connectors only.',
    spotsRemaining: 12,
    delaySeconds: 8,
  },
  {
    id: 'azure-tool',
    headline: 'Azure cost analysis tool — live at Booth 1200.',
    subline: 'Ingram\'s team will run a 10-min analysis of your current cloud spend. First 15 companies only.',
    spotsRemaining: 15,
    delaySeconds: 30,
    ctaLabel: 'Book Your Slot',
    confirmedLabel: 'Slot booked — see you at Booth 1200 ✓',
  },
]
