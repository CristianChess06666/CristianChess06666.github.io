// scripts.js
function toggleSidePanel() {
    var sidePanel = document.getElementById('side-panel');
    if (sidePanel.style.left === '0px') {
        sidePanel.style.left = '-250px';
    } else {
        sidePanel.style.left = '0px';
    }
}
