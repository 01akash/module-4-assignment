
(function () {

var names = ["Yashu", "Akash", "Jimjam", "Juli", "Mithlesh", "Pawan", "Mukesh", "Krishna", "Vidit", "Juneja"];
for (var i = 0; i < names.length; i++) 
{
var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } 
  else 
  {
    helloSpeaker.speak(names[i]);
  }
}

}
)
();
