// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035 },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
      [{ lat:-35.33263514010367, lng:-72.3846042210987 }, "Isla Constitucion"],
      [{ lat: -35.351398693584, lng: -72.44168162901836 }, "Playa El Cable"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
  
  window.initMap = initMap;