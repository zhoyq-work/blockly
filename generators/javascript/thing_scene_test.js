goog.require('Blockly.JavaScript');

Blockly.JavaScript['thing_scene_test'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, '链接', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_complete = Blockly.JavaScript.statementToCode(block, 'complete');

  var code = "var app = new THING.App({\n" +
    "el: 'thingDiv',\n" +
    "url: " + value_url + ",\n" +
    "complete: () => {\n" +
      "const thingDiv = document.getElementById('thingDiv');\n" +
      "thingDiv.style.top = '35px';\n" +
      "thingDiv.style.right = '0px';\n" +
      "thingDiv.style.left = 'auto';\n" +
      "thingDiv.style.position = 'absolute';\n" +

      statements_complete + 
    "}\n" +
  "});\n";
  return code;
};