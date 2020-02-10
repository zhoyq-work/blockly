/**
 * @license
 * Copyright 2011 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Object representing a trash can icon.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.WorkspaceSearch');

/**
 * Class for a trash can.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace to sit in.
 * @constructor
 */
Blockly.WorkspaceSearch = function(workspace) {
  /**
   * The workspace the trashcan sits in.
   * @type {!Blockly.WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  /**
   * The svg group
   * @type {Element}
   */
  this.svgGroup_ = null;
};

/**
 * Given a term search the workspace.
 */
Blockly.WorkspaceSearch.prototype.search = function() {
};

