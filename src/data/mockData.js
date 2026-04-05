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

export const whyIngram = [
  '#1 Microsoft distributor globally',
  'Azure, Dynamics, M365, Copilot — fully stacked',
  'One partner from licensing to deployment to support',
]

export const sessions = [
  {
    id: 1,
    title: 'Azure Copilot Security Deep-Dive',
    time: '9:00 AM – 10:15 AM',
    location: 'Hall B, Room 210',
    speaker: 'Sarah Chen, Microsoft',
    priority: 'critical',
    why: 'Pacific Mutual is evaluating Copilot for compliance workflows. Ingram is a top Microsoft distributor — they can bundle licensing, implementation, and ongoing support in one conversation at Booth 1200.',
  },
  {
    id: 2,
    title: 'Azure Cost Management: Real-World Playbooks',
    time: '11:00 AM – 12:00 PM',
    location: 'Hall A, Room 104',
    speaker: 'Marcus Webb, Ingram Micro',
    priority: 'high',
    why: 'Ingram\'s practice lead Marcus Webb is on this panel. He\'ll cover the exact cost framework Pacific Mutual is mid-deployment on. This is your warm intro before you hit the booth.',
  },
  {
    id: 3,
    title: 'M365 Copilot for IT Teams',
    time: '2:00 PM – 3:30 PM',
    location: 'Innovation Hub, Lab 3',
    speaker: 'Priya Sharma, Microsoft',
    priority: 'medium',
    why: 'Ingram distributes the full M365 stack. If you like what you see here, Marcus can scope a deployment and licensing package in 15 minutes at Booth 1200.',
  },
]

export const booths = [
  {
    id: 1,
    number: '1200',
    name: 'Ingram Micro',
    badge: 'Your rep is here',
    badge2: 'Consultation Station',
    context: 'Marcus Webb is running the Consultation Station — a one-on-one session where he\'ll assess your current Microsoft stack and show you what\'s leaving money on the table. He has Dell AI PCs, HP, and Surface running live demos. Also ask about XVantage — Ingram\'s platform that manages your entire Microsoft licensing in one place. Bring your Azure cost report.',
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
    text: 'Ingram is Microsoft\'s top global distributor — they move more Azure, M365, and Copilot than anyone. That means better pricing, faster deployment, and one partner who owns the whole thing.',
  },
  {
    id: 2,
    text: 'Microsoft Marketplace booth is right next to Ingram at Booth 1200 — ideal for back-to-back conversations so you can hear the product story and the procurement path in one pass.',
  },
  {
    id: 3,
    text: 'The Consultation Station at Booth 1200 is a 15-minute working session — not a sales pitch. Marcus will look at your actual stack and tell you what\'s costing you money.',
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
    subline: 'Ingram\'s invite-only reception — top Microsoft partners and IT decision-makers only. Open bar, no agenda, no sales pitch. Just the people you actually want to meet. 12 spots left.',
    spotsRemaining: 12,
    delaySeconds: 8,
  },
  {
    id: 'stack-assessment',
    headline: 'Free Microsoft stack assessment. Right now.',
    subline: 'Ingram\'s team at Booth 1200 will run a live 10-minute analysis of your Microsoft licensing — find gaps, flag savings, and tell you exactly what PAX8 won\'t. First 8 slots today.',
    spotsRemaining: 8,
    delaySeconds: 30,
    ctaLabel: 'Reserve Your Slot',
    confirmedLabel: 'Slot reserved — head to Booth 1200 ✓',
  },
]
