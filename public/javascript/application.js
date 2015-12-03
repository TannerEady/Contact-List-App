$(function() {

  var handlers = {
    container: $("#contacts").find('tbody'),
    addContact: function(index, contact) {
      var tr = $("<tr>").appendTo(handlers.container);
      $("<td>").text(contact.firstname).appendTo(tr);
      $("<td>").text(contact.lastname).appendTo(tr);
      $("<td>").text(contact.email).appendTo(tr);
    },
    receiveContacts: function(contacts) {
      $.each(contacts, handlers.addContact);
    },
    getContacts: function() {
      handlers.container.empty();
      $.getJSON("/contacts", handlers.receiveContacts);
    }
  };

  $("#load_contacts").on('click', handlers.getContacts);
  $("#new_contact").on('click', function() {
    var fname = $("#firstname").val();
    var lname = $("#lastname").val();
    var email = $("#email").val();
    var contact = {firstname: fname, lastname: lname, email: email};
    
    $.post("/new_contact", contact, function(data) {
      if (data.result) {
        handlers.addContact(0, contact); 
        $('#firstname').val("");
        $('#lastname').val("");
        $('#email').val(""); 
      } else {
        alert("Unable to create contact.");
      }
    }, 'json');
  });

});
