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

  async planDistributionStrategy(project: MusicProject): Promise<string> {
    try {
      const response = await fetch('/api/copilot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are a music distribution strategist. Format your response in markdown with proper headers, lists, and sections.',
            },
            {
              role: 'user',
              content: `Create a distribution strategy for artist ${project.artistName}'s track "${project.trackTitle}" (${project.genre}). Budget: $${project.marketingBudget}. Platforms: ${project.distributionPlatforms.join(", ")}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.details || data.error || 'Failed to generate strategy');
      }

      const text = await response.text();
      return text;
    } catch (error) {
      throw error instanceof Error ? error : new Error('Failed to generate strategy');
    }
  }
}
