const properties = [
  {
    name: "Port Austin Waterfront Home",
    location: "Port Austin",
    price: 425000,
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    description: "Waterfront home near Lake Huron with scenic views and spacious interior."
  },
  {
    name: "Traverse City Lake House",
    location: "Traverse City",
    price: 510000,
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    description: "Beautiful Michigan property close to the water, downtown, and local shops."
  },
  {
    name: "Petoskey Shore Property",
    location: "Petoskey",
    price: 389000,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Charming home with lake access, bright interior, and outdoor space."
  },
  {
    name: "Charlevoix Waterfront Retreat",
    location: "Charlevoix",
    price: 460000,
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable family home near the shoreline with large windows and updated features."
  }
];

const resultsGrid = document.getElementById("resultsGrid");
const detailsBox = document.getElementById("detailsBox");
const searchForm = document.querySelector(".search-form");

function displayProperties(list) {
  if (!resultsGrid) return;

  resultsGrid.innerHTML = "";

  if (list.length === 0) {
    resultsGrid.innerHTML = "<p>No matching properties found.</p>";
    return;
  }

  list.forEach((property, index) => {
    const card = document.createElement("div");
    card.className = "listing-card";

    card.innerHTML = `
      <img src="${property.image}" alt="${property.name}">
      <h3>${property.name}</h3>
      <p>Location: ${property.location}</p>
      <p>Price: $${property.price.toLocaleString()}</p>
      <p>Bedrooms: ${property.bedrooms}</p>
      <button onclick="showDetails(${index})">View Details</button>
    `;

    resultsGrid.appendChild(card);
  });
}

function showDetails(index) {
  if (!detailsBox) return;

  const property = properties[index];

  detailsBox.innerHTML = `
    <h3>${property.name}</h3>
    <p><strong>Location:</strong> ${property.location}</p>
    <p><strong>Price:</strong> $${property.price.toLocaleString()}</p>
    <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
    <p><strong>Description:</strong> ${property.description}</p>
  `;
}

if (searchForm) {
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const locationValue = document.getElementById("locationInput").value.toLowerCase();
    const priceValue = parseInt(document.getElementById("priceInput").value) || Infinity;
    const bedroomValue = parseInt(document.getElementById("bedroomInput").value) || 0;

    const filtered = properties.filter(property =>
      property.location.toLowerCase().includes(locationValue) &&
      property.price <= priceValue &&
      property.bedrooms >= bedroomValue
    );

    displayProperties(filtered);
  });
}

displayProperties(properties);

const priceCtx = document.getElementById("priceChart");

if (priceCtx) {
  new Chart(priceCtx, {
    type: "bar",
    data: {
      labels: ["Port Austin", "Traverse City", "Petoskey", "Charlevoix"],
      datasets: [{
        label: "Average Home Price ($1000s)",
        data: [425, 510, 389, 460],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

const listingCtx = document.getElementById("listingChart");

if (listingCtx) {
  new Chart(listingCtx, {
    type: "pie",
    data: {
      labels: ["Port Austin", "Traverse City", "Petoskey", "Charlevoix"],
      datasets: [{
        label: "Homes for Sale",
        data: [25, 15, 18, 22]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}