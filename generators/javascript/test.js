goog.require('Blockly.JavaScript');

Blockly.JavaScript['test'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'THING.App.current.camera.flyTo({object: THING.App.current.query(\'.Thing\')[0]})\n';
  return code;
};