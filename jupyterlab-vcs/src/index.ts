import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-vcs extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-vcs',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab-vcs is activated!');
    console.log('ICommandPalette:', palette);

    let widget: Widget = new Widget();
    widget.id = 'vcs-jupyterlab';
    widget.title.label = 'vcs';
    widget.title.closable = true;

    const command: string = 'vcs:open';
    app.commands.addCommand(command, {
      label: 'vcs control',
      execute: () => {
        if (!widget.isAttached){
          app.shell.addToMainArea(widget);
        }
        app.shell.activateById(widget.id);
      }
    });

    palette.addItem({command, category: 'visualization'});
  }
};

export default extension;
