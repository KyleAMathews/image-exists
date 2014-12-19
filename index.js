var checks = {};

module.exports = function(src, callback) {
  if (src in checks) {
    return callback(checks[src]);
  }

  var img = new Image();

  img.onload = function() {
    checks[src] = true;
    callback(true);
  };

  img.onerror = function() {
    checks[src] = false;
    callback(false);
  };

  img.src = src;
};
