const NativeUI = require('NativeUI');
const Scene = require('Scene');
const Textures = require('Textures');

// Locate the plane in the Scene
const plane = Scene.root.find('plane0');

//==============================================================================
// Setup the configuration for the picker
//==============================================================================

// Locate the textures in the Assets
const texture0 = Textures.get('ARC-Titian');
const texture1 = Textures.get('ARC-Squid-effect');
const texture2 = Textures.get('ARC-Angel');
const texture3 = Textures.get('ARC-DarkAngel');
const texture4 = Textures.get('ARC-Serpentine');
const texture5 = Textures.get('JKM-HARDCORE');
const texture6 = Textures.get('JKM-ERGOTISM');
const texture7 = Textures.get('JKM-BIOHAZCHEM');
const texture8 = Textures.get('JKM-23-SMILEY');
const texture9 = Textures.get('JKM-SUN');



// Store a reference to the picker
const picker = NativeUI.picker;

// Set a starting index (optional, will be 0 by default)
const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  items: [
    {image_texture: texture0},
    {image_texture: texture1},
    {image_texture: texture2},
    {image_texture: texture3},
    {image_texture: texture4},
    {image_texture: texture5},
    {image_texture: texture6},
    {image_texture: texture7},
    {image_texture: texture8},
    {image_texture: texture9}
  ]

};

//==============================================================================
// Apply the configuration and show the picker
//==============================================================================

// Configure the picker using the configuration object
picker.configure(configuration);

// Set the picker to be visible (visible is false by default)
picker.visible = true;

//==============================================================================
// Use the picker to set the texture of the plane
//==============================================================================

// Subscribe to the selectedIndex scalar signal
picker.selectedIndex.monitor().subscribe(function(index) {
  // Update the texture of the material assigned to the plane to be the selected
  // texture
  plane.material.diffuse = configuration.items[index.newValue].image_texture;
});