
function toggleDropdown() {
    var x = document.getElementById("dropdownMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleContactForm() {
    var form = document.getElementById("contactForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var heroImage = document.querySelector('.hero img');
    setTimeout(function() {
        heroImage.style.width = '100%';
        heroImage.style.height = '100%';
        heroImage.style.top = '0';
        heroImage.style.left = '0';
    }, 100);
});
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 34.11806869506836, lng: -118.30036926269531},
                zoom: 14
            });
        }
