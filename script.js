const form = document.getElementById("registration-form");
        const dataDisplay = document.getElementById("data-display");
        const dataBody = document.getElementById("data-body");
        const clearButton = document.getElementById("clear-button");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const age = document.getElementById("age").value;
            const gender = document.getElementById("gender").value;

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${age}</td>
                <td>${gender}</td>
            `;
            dataBody.appendChild(newRow);

            dataDisplay.style.display = "block";

            // Clear the form fields after submission
            form.reset();
        });

        clearButton.addEventListener("click", function() {
            // Clear the form fields
            form.reset();
        });