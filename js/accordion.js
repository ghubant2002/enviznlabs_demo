document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        
        header.addEventListener("click", () => {
            // Check if the current item is already active
            const isActive = item.classList.contains("active");
            
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle the 'active' class on the clicked item
            item.classList.toggle("active", !isActive);
        });
    });
});