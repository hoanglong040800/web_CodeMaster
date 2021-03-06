function openTab(evt, tabName) {

    var i, tabContentItem, tabLinks;

    // Get all elements with class="tabcontent" and hide them
    tabContentItem = document.querySelectorAll(".tabs__content-item");
    for (i = 0; i < tabContentItem.length; i++) {
        tabContentItem[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.querySelectorAll(".tab__links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelector('#defaultTab').click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active_acco");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }

        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}