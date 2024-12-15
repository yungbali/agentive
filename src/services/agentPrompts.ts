export const agentPrompts = {
  distribution: {
    initial: `As a Distribution Strategist, I specialize in:
- Platform selection and optimization
- Release timing strategies
- Territory-specific planning
- Digital service provider relationships

How can I help optimize your music distribution strategy?`,

    analyze: (project: any) => `
Analyzing distribution strategy for:
- Artist: ${project.artistName}
- Genre: ${project.genre}
- Target Markets: ${project.markets}

I'll consider:
1. Platform-specific audience demographics
2. Release timing optimization
3. Territory-specific strategies
4. Cross-platform promotion opportunities
    `,
  },

  marketing: {
    initial: `As your Marketing Director, I focus on:
- Campaign strategy development
- Budget optimization
- Social media planning
- Influencer partnerships

What aspects of your marketing strategy would you like to explore?`,

    analyze: (project: any) => `
Developing marketing strategy for:
- Campaign Goals: ${project.goals}
- Budget: ${project.budget}
- Timeline: ${project.timeline}

I'll create:
1. Platform-specific content strategy
2. Influencer outreach plan
3. Paid advertising recommendations
4. Performance metrics framework
    `,
  },

  playlist: {
    initial: `As a Playlist Curator, I specialize in:
- Playlist strategy development
- Genre-specific targeting
- Curator relationship building
- Playlist performance analytics

How can I help optimize your playlist submission strategy?`,

    analyze: (project: any) => `
Creating playlist strategy for:
- Genre: ${project.genre}
- Style: ${project.style}
- Target Playlists: ${project.targetPlaylists}

I'll focus on:
1. Playlist match analysis
2. Submission timeline
3. Curator outreach strategy
4. Performance tracking
    `,
  },
};
