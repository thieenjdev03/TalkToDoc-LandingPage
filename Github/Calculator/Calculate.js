
let currentExpression = "";
    
    function appendToDisplay(value) {
        currentExpression += value;
        document.getElementById("Display").textContent = currentExpression;
    }

    function calculateResult() {
        try {
            const result = eval(currentExpression);
            currentExpression = result.toString();
            document.getElementById("Display").textContent = currentExpression;
        } catch (e) {
            document.getElementById("Display").textContent = "Error";
        }
    }
    function clearDisplay() {
      currentExpression = "";
      document.getElementById("Display").textContent = "";
  }
  function deleteLastChar() {
    if (currentExpression.endsWith('Math.sqrt(') ) {
      currentExpression = currentExpression.slice(0, -10); // Xóa phần 'Math.sqrt('
  }else if(currentExpression.endsWith('**')) {
    currentExpression = currentExpression.slice(0, -2); // Xóa phần 'Math.sqrt('
}
  else {
      // Nếu không phải 'Math.sqrt(', xóa ký tự cuối cùng
      currentExpression = currentExpression.slice(0, -1);
  }
  document.getElementById("Display").textContent = currentExpression;
}
document.addEventListener('keydown', function(event) {
  const key = event.key; // Lấy phím nhấn từ bàn phím

  // Kiểm tra nếu người dùng nhấn phím số, toán tử hoặc dấu ngoặc
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.', 'Enter'].includes(key)) {
        if (key === 'Enter') {
          calculateResult();
          event.preventDefault(); // Ngừng hành động mặc định của phím Enter (nếu có)
      } else {
          appendToDisplay(key);
      }
  }

  // Xử lý phím Backspace (xóa ký tự)
  if (key === 'Backspace') {
      deleteLastChar();
  }

  // Xử lý phím Escape (xóa toàn bộ)
  if (key === 'Escape') {
      clearDisplay();
  }

  // Xử lý phím √
  if (key === 'V') {
      appendToDisplay('Math.sqrt(');
  }

  if (key === '^'){
    appendToDisplay('**')
  }

  if (key === 'Delete'){
    clearDisplay()
  }
});