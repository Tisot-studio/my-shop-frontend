import './form-input.scss';


const Forminput = ({lable, formWidth = '300px', formMarginRight = '40px', ...otherProps})=> (
    <div className='group' style={{width: formWidth, marginRight: formMarginRight}}>
        <input
        className='form-input'  {...otherProps}/>
        {
            lable ?  // есть ли значение у переменной lable
            // если есть то показать это значение с такими условиями:
            (<lable className={`form-input-lable `}>
            {lable}
            </lable>)
            // если нет, то ничего не показывать
            : null
        }
    </div>

    )


export default Forminput;