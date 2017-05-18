// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// CONFIGURE & "Handshake"
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNyK2dVB4Da7Dzo'
});
var base = Airtable.base('appYjgGyxE7AXQYex');
// Check-Check
console.log(base);

// Get Records
base('YaHURR').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        
        // console.log('Retrieved', record.get('Name'));
        var students = `<h1>${record.get('Name')}</h1>`
        console.log(students);
        
        // Display
        $('body').html(students);
        
    });
});



// Template Literal
var students = `
    <section class="ui card">
        <div class="image">
           <img src="http://placehold.it/400x300" alt="">
        </div>
       <div class="content">
           <h3>First Last</h3>
           <p class="description">
               <a href="">GitHub</a> and <a href="mailto:">Email</a>
           </p>
       </div>
    </section>
`;

