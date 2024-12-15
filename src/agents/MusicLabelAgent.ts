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
              content: 'You are a music industry expert helping to create distribution strategies.',
            },
            {
              role: 'user',
              content: `Create a detailed distribution strategy for:
                Artist: ${project.artistName}
                Track: ${project.trackTitle}
                Genre: ${project.genre}
                Release Date: ${project.releaseDate}
                Marketing Budget: $${project.marketingBudget}
                Platforms: ${project.distributionPlatforms.join(', ')}

                Please include:
                1. Timeline for release
                2. Budget allocation
                3. Platform-specific strategy
                4. Marketing recommendations
                5. Key performance indicators`,
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
