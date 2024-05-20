function loadFooter() {
    fetch('/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

window.addEventListener('DOMContentLoaded', loadFooter);