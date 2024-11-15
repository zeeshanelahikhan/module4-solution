(function () {
    let names = ["John", "Paul", "Jen", "Jason", "Frank", "Joe", "Laura", "Sarah", "Mike"];
  
    for (let i = 0; i < names.length; i++) {
      let firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === "j") {
        goodbyeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();
  