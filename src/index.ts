import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
    ICommandPalette
} from '@jupyterlab/apputils';

import {
    VCSWidgetMain
} from './vcs_widget_main'

import {
    VCSWidgetLeft
} from './vcs_widget_left'

import '../style/index.css';



function activate(app: JupyterLab, palette: ICommandPalette) {
    console.log('JupyterLab extension jupyterlab-vcs is activated!');
    console.log('ICommandPalette:', palette);

    let main_widget: VCSWidgetMain = new VCSWidgetMain();
    let left_widget: VCSWidgetLeft = new VCSWidgetLeft();

    const command: string = 'vcs:open';
    app.commands.addCommand(command, {
      label: 'vcs control',
      execute: () => {
        if (!main_widget.isAttached){
          app.shell.addToMainArea(main_widget);
        }
        if(!left_widget.isAttached){
            app.shell.addToLeftArea(left_widget);
        }
        app.shell.activateById(main_widget.id);
        app.shell.activateById(left_widget.id);
      }
    });

    palette.addItem({command, category: 'visualization'});
  }


/**
 * Initialization data for the jupyterlab-vcs extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-vcs',
  autoStart: true,
  requires: [ICommandPalette],
  activate: activate
};

export default extension;
