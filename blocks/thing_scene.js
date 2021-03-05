goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldColour');
goog.require('Blockly.FieldLabel');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "thing_scene",
    "message0": "加载场景 %1 完成后 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "链接",
        "check": "String"
      },
      {
        "type": "input_statement",
        "name": "complete"
      }
    ],
    "colour": 20,
    "tooltip": "加载场景",
    "helpUrl": "https://www.thingjs.com"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)