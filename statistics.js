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

    
    calculatingVariance() {
        const mean = this.calculatingMean();
        const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
        const sumSquaredDiff = squaredDifferences.reduce((acc, value) => acc + value, 0);
    
        return sumSquaredDiff / this.data.length;
      }
    
      calculatingStandardDeviation() {
        return Math.sqrt(this.calculatingVariance());
      }
    
      calculatingRange() {
        return Math.max(...this.data) - Math.min(...this.data);
      }
    
      calculatingInterquartileRange() {
        const quartile25 = this.calculatePercentile(25);
        const quartile75 = this.calculatePercentile(75);
        return quartile75 - quartile25;
      }
    
      calculatingCoefficientOfVariation() {
        const mean = this.calculatingMean();
        const standardDeviation = this.calculatingStandardDeviation();
        return (standardDeviation / mean) * 100; 
      }
    
      
      calculatePercentile(percentile) {
        const sortedData = this.data.sort((a, b) => a - b);
        const index = (percentile / 100) * (sortedData.length - 1);
        const lowerValue = Math.floor(index);
        const upperValue = Math.ceil(index);
    
        return sortedData[lowerValue] + (sortedData[upperValue] - sortedData[lowerValue]) * (index - lowerValue);
      }
}