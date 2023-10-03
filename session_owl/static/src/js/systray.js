/** @odoo-module **/
import { registry } from "@web/core/registry";
const { Component,useState} = owl;

class IncrementButton extends Component{
setup(){
 this.value=0
 this.state = useState({
            value: 0
        });
}
changeValue(val){
this.state.value=this.state.value+val
}
}
IncrementButton.template="increment"
const Systray = {
Component: IncrementButton,
isDisplayed: (env) => true
}

registry.category("systray").add("increment_button", Systray);


