import * as Blockly from 'blockly';

const workspaceContainer = document.getElementById('blocklyDiv');
 
// Define the options for the workspace
const workspaceOptions = {
    toolbox: {
        "kind": "categoryToolbox",	
        "contents": [
            {
                "kind": "category",
                "name": "Logic",	
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_if"
                    },
                    {
                        "kind": "block",
                        "type": "logic_compare"
                    },
                ]
            }]
        },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    },
    trashcan: true
  };

if (workspaceContainer) {
  // Create the workspace with the container element and options
    const workspace = Blockly.inject(workspaceContainer, workspaceOptions);
    console.log(workspace)
}