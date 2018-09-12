import {
    Widget
} from '@phosphor/widgets';


export class VCSWidgetMain extends Widget {

    constructor() {
        super();
        this.id = 'vcs-widget-main';
        this.title.label = 'vcs';
        this.title.closable = true;
        this.addClass('vcs-widget-main');

        this.div = document.createElement('div');
        this.div.textContent = 'VCS Main display window';
        this.node.appendChild(this.div);
    }

    readonly div: any;
}
