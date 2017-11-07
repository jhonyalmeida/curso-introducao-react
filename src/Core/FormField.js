import React from 'react'

function renderField(type, props) {
    switch(type) {
        case 'select':
            return (
                <select name={props.name} onChange={props.onChange} className="form-control" >
                    {props.options.map(o => (
                        <option value={o.id} key={o.id} >{o.label}</option>
                    ))}
                </select>
            )
        case 'textarea':
            return <textarea name={props.name} rows={5} onChange={props.onChange} 
                    className="form-control"></textarea>;
        default:
            return <input name={props.name} type={type} onChange={props.onChange} 
                    className="form-control" />;
    }
}

const FormField = (props) => {
    const label = props.label;
    const colSize = props.colSize || 4;
    const field = renderField(props.type, props);
    return (
        <div className="row">
            <div className={`form-group col-lg-${colSize}`}>
                <label>{label}</label>
                {field}
            </div>
        </div>
    );
}

export default FormField;