//ASSETS
import WhiteArrow from '../../assets/Vector.svg'
import './Button.css'
function Button ({ arrow, buttonStyle, loading, children, ...props}) {
    return (
        <button className={`button ${buttonStyle}`}{...props}>
            {children} {arrow && <img src={WhiteArrow} />}  
        </button>
    )
}
export default Button