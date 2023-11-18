function toggleFAQ(button) {
    const content = button.nextElementSibling;
    button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
    content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
}