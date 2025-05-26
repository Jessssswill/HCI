document.addEventListener('DOMContentLoaded', function() {
    const profileElement = document.getElementById("user-profile");
    const profileDropdown = document.getElementById("profile-dropdown");
    const loginRegister = document.querySelector(".login-register");
    let isDropdownVisible = false;

    if (profileElement) {
    profileElement.addEventListener("click", function(event) {
        
        const clickedElement = event.target;

        
        if (!profileElement.contains(clickedElement) || clickedElement.classList.contains("chat-icon")) return;

        event.stopPropagation();
        if (isDropdownVisible) {
            profileDropdown.style.display = "none";
        } else {
            profileDropdown.style.display = "block";
        }
        isDropdownVisible = !isDropdownVisible;
    });
}


    document.addEventListener("click", function(event) {
        if (profileDropdown && isDropdownVisible &&
            !profileElement.contains(event.target) &&
            !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = "none";
            isDropdownVisible = false;
        }
    });

    if (loginRegister) {
        loginRegister.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    }
    
    const animationElement = document.querySelector('.animation');
    const animationBackground = document.querySelector('.animation-child');
    
    const backgroundColors = [
        '#e0e0e0',
        '#ffb6b6',
        '#d8ffa6',
        '#a67d7d',
        '#9999ff'
    ];
    
    let currentColorIndex = 0;
    
    function changeBackgroundColor() {
        animationBackground.style.backgroundColor = backgroundColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }
    
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 300);
});
