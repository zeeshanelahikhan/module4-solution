(function (window) {
    let helloSpeaker = {};
    helloSpeaker.speak = function (name) {
      console.log("Hello " + name);
    };
    window.helloSpeaker = helloSpeaker;
  })(window);
  