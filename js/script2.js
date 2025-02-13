document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const displayArea = document.createElement("div");
        displayArea.innerHTML = `
            <h2>Informações Digitadas:</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
        `;
        
        document.body.appendChild(displayArea);
    });
});
