import './lext-to-right-underline.scss'

const LeftToRightUnderline = ({children, bgColor, fontSize})=> (
    <div className='left-to-right-underline' style={{fontSize:`${fontSize}`}}>
        {children}
        <div className='underline' style={{background: `${bgColor}`}}></div>
    </div>
)


export default LeftToRightUnderline;