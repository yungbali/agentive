export interface AudioFeatures {
  tempo: number;
  key: string;
  scale: string;
  mood: string;
  energy: number;
  danceability: number;
}

export class AudioAnalysisService {
  private audioContext: AudioContext;
  private analyser: AnalyserNode;

  constructor() {
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
  }

  async analyzeMusicFile(file: File): Promise<AudioFeatures> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      
      const tempo = await this.detectTempo(audioBuffer);
      const { key, scale } = await this.detectKeyAndScale(audioBuffer);
      const mood = await this.analyzeMood(audioBuffer);
      const energy = await this.calculateEnergy(audioBuffer);
      const danceability = await this.calculateDanceability(audioBuffer);

      return {
        tempo,
        key,
        scale,
        mood,
        energy,
        danceability
      };
    } catch (error) {
      console.error('Audio analysis failed:', error);
      throw error;
    }
  }

  private async detectTempo(audioBuffer: AudioBuffer): Promise<number> {
    const data = audioBuffer.getChannelData(0);
    const peaks = this.findPeaks(data);
    const intervals = this.getIntervals(peaks);
    
    // Calculate BPM from intervals
    const bpm = this.calculateBPM(intervals, audioBuffer.sampleRate);
    return Math.round(bpm);
  }

  private findPeaks(data: Float32Array): number[] {
    const peaks: number[] = [];
    const threshold = 0.8;

    for (let i = 1; i < data.length - 1; i++) {
      if (data[i] > data[i - 1] && 
          data[i] > data[i + 1] && 
          data[i] > threshold) {
        peaks.push(i);
      }
    }

    return peaks;
  }

  private getIntervals(peaks: number[]): number[] {
    const intervals: number[] = [];
    for (let i = 1; i < peaks.length; i++) {
      intervals.push(peaks[i] - peaks[i - 1]);
    }
    return intervals;
  }

  private calculateBPM(intervals: number[], sampleRate: number): number {
    const averageInterval = intervals.reduce((a, b) => a + b) / intervals.length;
    return (60 * sampleRate) / averageInterval;
  }

  private async detectKeyAndScale(audioBuffer: AudioBuffer): Promise<{ key: string; scale: string }> {
    // Implement chromagram analysis for key detection
    // This is a simplified version - would need more complex FFT analysis for accuracy
    return {
      key: 'C',
      scale: 'Major'
    };
  }

  private async analyzeMood(audioBuffer: AudioBuffer): Promise<string> {
    const energy = await this.calculateEnergy(audioBuffer);
    const danceability = await this.calculateDanceability(audioBuffer);
    
    // Simple mood classification based on energy and danceability
    if (energy > 0.8) return 'Energetic';
    if (energy > 0.6 && danceability > 0.7) return 'Happy';
    if (energy < 0.4) return 'Calm';
    return 'Neutral';
  }

  private async calculateEnergy(audioBuffer: AudioBuffer): Promise<number> {
    const data = audioBuffer.getChannelData(0);
    let energy = 0;
    
    for (let i = 0; i < data.length; i++) {
      energy += data[i] * data[i];
    }
    
    return energy / data.length;
  }

  private async calculateDanceability(audioBuffer: AudioBuffer): Promise<number> {
    // Simplified danceability calculation based on beat consistency
    const data = audioBuffer.getChannelData(0);
    const peaks = this.findPeaks(data);
    const intervals = this.getIntervals(peaks);
    
    // Calculate variance in intervals (lower variance = more danceable)
    const mean = intervals.reduce((a, b) => a + b) / intervals.length;
    const variance = intervals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / intervals.length;
    
    return 1 - Math.min(variance / mean, 1);
  }
} 