function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.

    // get form values
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var number = document.getElementById('number').value;
    var plural1 = document.getElementById('plural1').value;
    var plural2 = document.getElementById('plural2').value;
    var plural3 = document.getElementById('plural3').value;
    var plural4 = document.getElementById('plural4').value;
    var liquid = document.getElementById('liquid').value;






    // Set title of story.
    var title = "Fire Fighters";

    // Build story.
    var paragraph1 = " When I was ten years old, my " + adjective1 +" ambition in life was to be a fire fighter -- but here I am, nothing but a " + adjective2 + noun1 + " If I werwe a fire fighter , I'd get to wear a huge, red " + noun2 + ". And I could ride on the fire engines that carry 80-foot " + plural1 + " and travel " + number + " miles and hour. When fire engines blow their " + plural2 + ", all cars have to pull over to the side of the " + noun3 + ".";

    var paragraph2 = "Fire department have to hook and " + noun4 + " wagons as well as pump trucks which carry " + adjective3 + " hoses that pump " + liquid + " into burning " + plural3 + ". Fire fighters have to go into " + adjective4 + " buildings and fight their way through smoke and " + noun5 + " to rescue any " + plural4 + " who may be trapped inside. We should all be thankful that our fire firgters are on the job 24 hours a " + noun6;
    // Display story.

  document.getElementById('paragraph1').innerHTML = paragraph1;

  document.getElementById('paragraph2').innerHTML = paragraph2;

  document.getElementById('title').innerHTML = title;

  document.getElementById('img').style.display = "block";



}
