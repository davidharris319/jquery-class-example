$('#addHome')
    .removeClass('btn-danger')
    .addClass('btn-success');

$('h1').addClass('text-center');

//hasClass
const isStyled = $('p').hasClass('left-aligned big');

console.log('isStyled', isStyled);

// returns a jQuery set of new DOM elements
const $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );

console.log($newLink);

// Render to document
$('body').append($newLink);

// Modifying Attributes
$('#zillowLink').attr('target', '_blank');

// console.log href of #zillowLink
console.log($('#zillowLink').attr('href'));

//Typical Vanilla Event Listener
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('LOADED!!!');
});

//add event listeners in jquery
// $('#addHome').on('click', function(e) {
//     console.log(e.target);
// });

// listener that delegates only to remove button
$('#homes tbody').on('click', 'button', function() {
    console.log(this);
    $(this).closest('tr').fadeOut(1000, function() {
       // now that the tr is hidden, let's completely remove it from the DOM
        $(this).remove();
    });
  });

  // Practice Exercise - Add New Homes

  const newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];


$('#addHome').on('click', function(e) {
    console.log(e.target);
    const newHomeToAdd = newHomes.pop();
    
    const newHome = $(`
    <tr>
        <td>${newHomeToAdd.address}</td>
        <td>${newHomeToAdd.sf}</td>
        <td>${newHomeToAdd.bedrooms}</td>
        <td>${newHomeToAdd.baths}</td>
        <td>${newHomeToAdd.price}/td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>
    `);

    $('#homes tbody').append(newHome);
})