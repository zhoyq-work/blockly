goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldColour');
goog.require('Blockly.FieldLabel');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "thing_camera_flyTo",
    "message0": "相机飞向 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "对象"
      }
    ],
    "previousStatement": null,
    "colour": 230,
    "tooltip": "相机飞向对象",
    "helpUrl": "https://www.thingjs.com"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)