 document.getElementById("showDefaultImages").addEventListener("click", function() {
      var defaultImages = document.querySelector(".default-images");
      defaultImages.style.display = (defaultImages.style.display === "none") ? "flex" : "none";
    });

    document.querySelectorAll(".default-image").forEach(function(element) {
      element.addEventListener("click", function() {
        document.getElementById("profileImg").src = element.src;
      });
    });

    document.getElementById("imageInput").addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      
      reader.onload = function(e) {
        document.getElementById("profileImg").src = e.target.result;
      }
      
      reader.readAsDataURL(file);
    });

    document.querySelector(".profile-card form").addEventListener("submit", function(event) {
      event.preventDefault();
      var location = document.getElementById("locationInput").value;
      document.getElementById("profileLocation").textContent = "Location: " + location;
    });