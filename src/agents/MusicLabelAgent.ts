interface MusicProject {
  artistName: string;
  trackTitle: string;
  genre: string;
  releaseDate: string;
  marketingBudget: number;
  distributionPlatforms: string[];
}

export class MusicLabelAgent {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || '';
  }

  async planDistributionStrategy(project: MusicProject): Promise<Response> {
    try {
      const response = await fetch('/api/copilot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          stream: true,
          messages: [
            {
              role: 'system',
              content: 'You are a music distribution strategist. Format your response in markdown with proper headers, lists, and sections.',
            },
            {
              role: 'user',
              content: `Create a detailed distribution strategy for artist ${project.artistName}'s track "${project.trackTitle}" (${project.genre}). Budget: $${project.marketingBudget}. Platforms: ${project.distributionPlatforms.join(", ")}. Include sections for budget allocation, strategy overview, action plan, and timeline.`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate strategy');
      }

      return response;
    } catch (error) {
      throw error instanceof Error ? error : new Error('Failed to generate strategy');
    }
  }
}
