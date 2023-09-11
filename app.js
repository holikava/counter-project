const result = document.getElementById('result');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(function(btn) {
   btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
        count--;
    } else if (styles.contains('increase')) {
        count++;
    } else {
        count = 0;
    }
    
    result.textContent = count;

    if (count > 0) {
        result.style.color = 'green';
    } else if (count < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
    }
   });
});