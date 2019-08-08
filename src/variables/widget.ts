import { Panel } from "@phosphor/widgets";
import { VariableDescription } from './utils';

export class VariablesWidget extends Panel {
    
    readonly header: Panel;
    readonly label: Panel;
    readonly body: Panel;
    readonly variableDescription: Panel;


    readonly model_header = {
        label:'Variables',
        class:'debugger-variables__header'
    };

    constructor(){
        super();
        // header
        this.header = new Panel();
        this.header.addClass(this.model_header.class);
        this.addWidget(this.header);

        this.label = new Panel();
        this.label.node.textContent = this.model_header.label;
        this.label.addClass(this.model_header.class+'-label');
        this.header.addWidget(this.label);

        //body
        this.variableDescription = new VariableDescription();
        this.variableDescription.addClass('debugger-variables__body')
        this.addWidget(this.variableDescription);

    }


}