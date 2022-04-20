import './lext-to-right-underline.scss'

const LeftToRightUnderline = ({children, fontSize, ...otherProps})=> (
    <div className='left-to-right-underline' {...otherProps} style={{fontSize:`${fontSize}`}}>
        {children}
    </div>
)


export default LeftToRightUnderline;