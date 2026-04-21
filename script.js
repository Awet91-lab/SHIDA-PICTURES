document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;

    // Save student
    await db.collection("students").add({
        name,
        phone,
        course,
        date: new Date()
    });

    alert("Registered successfully! Proceed to payment.");

    // Redirect to payment
    window.location.href = "payment.html";
});