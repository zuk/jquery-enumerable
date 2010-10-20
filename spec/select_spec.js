Screw.Unit(function() {
  describe("select", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery.select(enumerator, callback) 
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator).select(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("given a callback as a parameter, returns a new array containing only the elements for which the callback, called with the current index, returned true", [1,2], function(f) {
         return f([1,2,3], function(index) { return this == 1 || index == 1})
      });

      expect_result("is not NaN", [1], function(f) {
         return f([1], function(index) { return isNaN(this) === false; })
      });

      expect_result("equals a number", [1], function(f) {
         return f([1], function(index) { return this == 1; })
      });

      expect_result("is a number", [1], function(f) {
         return f([1], function(index) { return this === 1; })
      });

      expect_result("is of type 'number'", [1], function(f) {
         return f([1], function(index) { return typeof this === "number"; })
      });

      it_protects_from_invalid_callback();
    });
  });
});
