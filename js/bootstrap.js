yepnope([
  {
    load: {
      'jquery':'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
      'taikai': 'js/taikai.js'
    },
    callback: {
      'jquery' : function (url, result, key) {
        if (!window.jQuery) {
          yepnope('js/libs/jquery-1.7.2.min.js');
        }
      }
    },
    complete: function () {
      new Taikai();
    }
  },
]);