(function() {
    emailjs.init('user_apkQsm205og3YEkN2pR0z');
})();

$("#contact-form").on("submit", event => {
    event.preventDefault();
    event.currentTarget.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('service_sxz74ea', 'contact_form', event.currentTarget).then(function() {
        console.log("SUCCESS!");
    }, function(error) {
        console.log("FAILED...", error);
    });
    $("#nameInput").val("");
    $("#emailInput").val("");
    $("numberInput").val("");
    $("#timeInput").val("");
    $("#aboutInput").val("");
});