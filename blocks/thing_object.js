goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldColour');
goog.require('Blockly.FieldLabel');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "thing_object",
    "message0": "查询对象 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "查询条件",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "查询对象",
    "helpUrl": "https://www.thingjs.com"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)