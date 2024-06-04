document.addEventListener("DOMContentLoaded", function() {
    const workItems = document.querySelectorAll(".work__item");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup__title");
    const popupList = document.getElementById("popup__list");
    const popupLive = document.getElementById("popup__live");
    const popupSource = document.getElementById("popup__source");
    const popupClose = document.getElementById("popup__close");
  
    workItems.forEach(workItem => {
      workItem.addEventListener("click", function() {
        const description = this.getAttribute("data-description");
        const liveLink = this.getAttribute("data-live");
        const sourceLink = this.getAttribute("data-source");
  
        popupTitle.innerText = description;
        popupList.innerHTML = "";
        // Assuming description is a string of bullet points separated by '|'
        description.split("|").forEach(point => {
          const li = document.createElement("li");
          li.innerText = point.trim();
          popupList.appendChild(li);
        });
  
        popupLive.href = liveLink;
        popupSource.href = sourceLink;
  
        popup.style.display = "block";
      });
    });
  
    popupClose.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  