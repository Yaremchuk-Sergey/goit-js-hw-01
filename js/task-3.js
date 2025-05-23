function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const contentPading = parseFloat(padding) * 2;
  const contentBorder = parseFloat(border) * 2;
  const totalWidth = contentWidth + contentPading + contentBorder;
  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
