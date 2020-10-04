const courses = document.querySelectorAll(".course-cards");

courses.forEach(function(card)
{
    card.addEventListener("mouseover", function()
    {
        this.classList.add("shade");
    });
});

courses.forEach(function(card)
{
    card.addEventListener("mouseout", function()
    {
        this.classList.remove("shade");
    });
});
