import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import { GrapesjsReact } from 'grapesjs-react';
import gjspresetwebpage from 'grapesjs-preset-webpage';
import gjsblockbasic from 'grapesjs-blocks-basic';
import gjsforms from 'grapesjs-plugin-forms';
import gjscountdown from 'grapesjs-component-countdown';
import gjscustomcode from 'grapesjs-custom-code';
import gjsexportcode from 'grapesjs-plugin-export';

export function PageEditor() {

	const onInit = (editor) => {
	  window.editor = editor;
	        let pn = editor.Panels;
	        let cmdm = editor.Commands;
	        pn.addButton('options', [{
		        id: 'save-page',
		        className: 'fa fa-floppy-o',
		        command: 'save-page',
		        attributes: {
		            title: 'Save page',
		            'data-tooltip-pos': 'bottom'
		        }
	    	}]);
	    	cmdm.add('save-page', {
		        run: function(em, sender) {
		            sender.set('active', true);

		            /*saveContent();*/
		            console.log('save');
		        }
    		});
    		editor.StorageManager.config = {
    			id: 'gjs-', // Prefix identifier that will be used on parameters
	            type: 'remote', //type: 'local', type: 'remote',Type of the storage
	            autosave: false, // Store data automatically
	            autoload: true, // Autoload stored data on init
	            /*urlStore: 'store.php?id=<?php echo $id; ?>',
	            urlLoad: 'load.php?id=<?php echo $id; ?>',*/
	            contentTypeJson: false,
	            storeComponents: true,
	            storeStyles: true,
	            storeHtml: true,
	            storeCss: true
    		};
    		editor.on('component:selected', function(args) { // make components resizable by default with mouse (like already enable for images)
    			args.set('resizable', true)
    		});
    		editor.on(`component:mount`, model => {  // trigger on mount, when you drag a component
		        const getResizableTrait = model.getTrait('resizable')
		        if (getResizableTrait == null) { // avoid duplicate resizable checkbox for same component
		            model.addTrait({ // add Resizable checkbox
		            type: 'checkbox',
		            name: 'resizable',
		            label: 'resizable'

		            })
		        }
		    });

		    editor.on('component:update', comp => {
		    if (comp.attributes.attributes.resizable != null) {
		        comp.attributes.resizable = comp.attributes.attributes.resizable // update resizable attribute
		    }
		    });
	}
	return <GrapesjsReact
	    id='grapesjs-react'
	    plugins={[
	      gjspresetwebpage,
	      gjsblockbasic,
	      gjsforms,
	      gjscountdown,
	      gjscustomcode,
	      gjsexportcode
	    ]}
	   	onInit={onInit}
	>
		<h1>test</h1>
	</GrapesjsReact>
};