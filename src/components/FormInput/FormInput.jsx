import './form-input.scss';


const FormInput = ({lable, formWidth = '300px', formMarginRight = '40px', ...otherProps})=> (
    <div className='group' style={{width: formWidth, marginRight: formMarginRight}}>
        <input
        className='form-input'  {...otherProps}/>
        {
            lable ?  
            (<lable className={`form-input-lable `}>
            {lable}
            </lable>)
            : null
        }
    </div>

    )


export default FormInput;