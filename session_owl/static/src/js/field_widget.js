/** @odoo-module **/
import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
const { Component,} = owl;

class BoolWidget extends Component{
setup(){
const options = this.props.options || {}
this.DefaultColor= "white"
this.trueColor= options.DefaultColor || "green"
this.falseValue= options.DefaultColor || "No"
this.falseColor= options.DefaultColor || "red"
this.trueValue= options.DefaultColor || "Yes"
}
updateVal(val){
this.props.update(val)
}
}
BoolWidget.template="bool_widget"
BoolWidget.props = {...standardFieldProps,
option:{type.Object,optional:true}
}
BoolWidget.supportedFieldTypes= ['boolean']
BoolWidget.extractProps = ({attrs})=>{return{option:attrs.option}}
registry.category("fields").add("bool_widget", BoolWidget);


