const form = document.getElementById("customerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const customerData = {};
  formData.forEach((value, param) => {
    customerData[param] = value;
  });

  displayMessage(customerData);
});

function displayMessage(data) {
  const messageContent = `
        <h2>Customer Data Submitted Successfully:</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Age:</strong> ${data.age}</p>
    `;
  message.innerHTML = messageContent;
  message.classList.remove("hidden");
}
