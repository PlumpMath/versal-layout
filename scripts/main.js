(function() {
  'use strict';

  var gadgets;

  function $(el) {
    return document.querySelectorAll(el);
  }

  function addEditListener(gadget) {
    var draggie = new Draggabilly(gadget);

    draggie.on('dragStart', function(instance, event) {
      var el = event.target;

      el.classList.add('moving');
    });

    draggie.on('dragEnd', function(instance, event) {
      var el = event.target;

      el.classList.remove('moving');
    });
  }

  function init() {
    gadgets = $('.gadget');

    for (var i = 0; i < gadgets.length; i++) {
      addEditListener(gadgets[i]);
    }
  }

  window.onload = function() {
    init();
  };
}());
