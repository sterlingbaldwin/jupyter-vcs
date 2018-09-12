import {
    Widget
} from '@phosphor/widgets';

export class VCSWidgetLeft extends Widget {

    constructor() {
        super();
        this.id = 'vcs-widget-left';
        this.title.label = 'vcs-options';
        this.title.closable = false;
        this.addClass('vcs-widget-left');

        this.div = document.createElement('div');
        this.div.textContent = 'VCS options area';
        this.node.appendChild(this.div);
    }

    readonly div: any;
}