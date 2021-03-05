goog.require('Blockly.JavaScript');

Blockly.JavaScript['thing_camera_flyTo'] = function(block) {
  var value= Blockly.JavaScript.valueToCode(block, '对象', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'THING.App.current.camera.flyTo({object: ' + value + '[0], time: 3000});\n';
  return code;
};