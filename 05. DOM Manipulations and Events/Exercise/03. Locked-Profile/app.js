function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((button) =>
    button.addEventListener('click', onClick)    
    );

    function onClick(event)
    {
        const parent = event.target.parentElement;
        const unlocked = parent.querySelector('input[value="unlock"]');
        if (unlocked.checked) {
            const hiddenDiv = parent.querySelector('div');
            if (hiddenDiv.style.display === "block") {
                hiddenDiv.style.display = "none";
            }
            else {
                hiddenDiv.style.display = "block";
            }

            if (event.target.textContent === "Show more") {
                event.target.textContent = "Hide it";
            }
            else {
                event.target.textContent = "Show more";
            }
        }
    }
}