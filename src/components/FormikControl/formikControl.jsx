import Checkbox from "../CheckBox/checkbox"
import DatePicker from "../Datepicker/datePicker"
import Input from "../Input/input"
import RadioButtons from "../Radio/radio"
import Select from "../Select/select"
import TextArea from "../TextArea/textArea"

const FormikControl=(props)=>{
 const {control,...rest}=props 
 switch(control){
    case 'input': 
      return <Input {...rest} />
    case 'textarea':
        return <TextArea {...rest}/>
    case 'select':
        return <Select {...rest}/>
    case 'radio':
        return <RadioButtons {...rest}/>
    case 'checkbox':
        return <Checkbox {...rest}/>
    case 'date':
        return <DatePicker {...rest}/>
    default:return null
 }
    
}
export default FormikControl;