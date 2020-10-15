// แบบกรอกเลข 4444 แต่อยากให้โชว์ในinput 4,444.00
// พิม 3500.5 แสดง 3,500.50

// Example 1:
// Input: 4444
// Output: "4,444.00"

// Example 2:
// Input: 3500.5
// Output: "3,500.50"

const formatPriceValue = price => price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Test cases
// 1
// 1.0
// 1.00
// 1.01
// 1.1
// 1.10
// 999
// 9999999999999