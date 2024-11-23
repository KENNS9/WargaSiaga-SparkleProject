document.addEventListener("DOMContentLoaded", function () {
  // Username display
  const usernameElement = document.getElementById("username");
  const username = "Niken"; // Example username

  if (usernameElement) {
    usernameElement.textContent = `Halo, ${username}`;
  } else {
    console.warn("Username element not found");
  }

  // Fetch navbar and footer
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.innerHTML = data;
      } else {
        console.warn("Navbar element not found");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
  
  fetch("navbar_admin.html")
    .then((response) => response.text())
    .then((data) => {
      const navbar = document.getElementById("navbar_admin");
      if (navbar) {
        navbar.innerHTML = data;
      } else {
        console.warn("Navbar element not found");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footer = document.getElementById("footer-placeholder");
      if (footer) {
        footer.innerHTML = data;
      } else {
        console.warn("Footer element not found");
      }
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Month navigation and table filtering
  const posNames = ["Pos 1", "Pos 2", "Pos 3", "Pos 4", "Pos 5"];
  let currentPosIndex = 0; // Start at Pos 1 (0-based index)

  const currentPosElement = document.getElementById("current-pos");
  const scheduleTable = document.getElementById("schedule-table");
  const rows = scheduleTable
    ? scheduleTable.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
    : [];

  function updatePosDisplay() {
    if (currentPosElement) {
      currentPosElement.textContent = posNames[currentPosIndex];
    }
    filterTableByPos(currentPosIndex + 1); // Convert to 1-based index for position
  }

  function filterTableByPos(pos) {
    if (rows.length > 0) {
      for (let row of rows) {
        const rowPos = parseInt(row.getAttribute("data-pos"));
        row.style.display = rowPos === pos ? "" : "none";
      }
    } else {
      console.warn("No rows found in schedule table");
    }
  }

  const prevPosButton = document.getElementById("prev-pos");
  const nextPosButton = document.getElementById("next-pos");

  if (prevPosButton) {
    prevPosButton.addEventListener("click", function () {
      currentPosIndex =
        (currentPosIndex - 1 + posNames.length) % posNames.length; // Move to previous pos
      updatePosDisplay();
    });
  } else {
    console.warn("Previous pos button not found");
  }

  if (nextPosButton) {
    nextPosButton.addEventListener("click", function () {
      currentPosIndex = (currentPosIndex + 1) % posNames.length; // Move to next pos
      updatePosDisplay();
    });
  } else {
    console.warn("Next pos button not found");
  }

  // Initial display
  updatePosDisplay();
});

const locations = [
  { name: "Bapak Aji" },
  { name: "Mang Alek" },
  { name: "Haji Ucup" },
  { name: "Dandi" },
];

document.addEventListener("DOMContentLoaded", function () {
  const locationListElement = document.querySelector(".location-list");
  locationListElement.innerHTML = "";

  // Populate list dynamically
  locations.forEach((location) => {
    const listItem = document.createElement("li");
    listItem.textContent = location.name;
    locationListElement.appendChild(listItem);
  });
});
