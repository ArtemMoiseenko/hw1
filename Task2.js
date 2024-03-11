function Click(id) {
    const square = document.getElementById(id);
    square.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const max_width = square.parentElement.clientWidth;
    const max_height = square.parentElement.clientHeight;
    square.style.top = Math.floor(Math.random() * (max_height - square.clientHeight)) + 'px';
    square.style.left = Math.floor(Math.random() * (max_width - square.clientWidth)) + 'px';
}
