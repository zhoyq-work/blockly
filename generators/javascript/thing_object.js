goog.require('Blockly.JavaScript');

Blockly.JavaScript['thing_object'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, '查询条件', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "THING.App.current.query("+ value +")\n";
  return [code, Blockly.JavaScript.ORDER_NONE];
};