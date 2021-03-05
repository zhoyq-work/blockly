'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldVariable');

Blockly.Blocks['test'] = {
  init: function() {
    this.setColour(285);
    this.setTooltip("s");
    this.setHelpUrl("s");
  }
};