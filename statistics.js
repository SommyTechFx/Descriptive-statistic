class descriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
   
    calculatingMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }

    calculatingMedian() {
        const sortedData = this.data.sort((a, b) => a - b);
        const middle = Math.floor(sortedData.length / 2);
    
        return sortedData.length % 2 === 0
          ? (sortedData[middle - 1] + sortedData[middle]) / 2
          : sortedData[middle];
      }
    
      calculatingMode() {
        const frequencyMap = new Map();
        let maxFrequency = 0;
        let mode;
    
        for (const value of this.data) {
          const frequency = (frequencyMap.get(value) || 0) + 1;
          frequencyMap.set(value, frequency);
    
          if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = value;
          }
        }
    
        return mode;
      }
}