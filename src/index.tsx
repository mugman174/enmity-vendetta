import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import manifest from '../manifest.json';

const Vendetta: Plugin = {
   ...manifest,

   async onStart() {
     const response = await fetch("https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js");
     const data = await response.text()
     eval(data)
   },

   onStop() {
      alert("Reload Discord to stop")
   },
};

registerPlugin(Vendetta);
