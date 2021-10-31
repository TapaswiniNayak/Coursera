(function () {

var names = ["Spandana", "Aditya", "Becca", "Megan", "Rhea", "Liza", "Rahul", "Maya", "Simriti", "Jhanvi"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();