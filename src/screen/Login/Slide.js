
function Slide({image , title}){

    return (
        <div className="slide">
            <div className="slide">
        <img  src={image} alt=""/>
           {title}
    </div>
        </div>
    )
}
export default Slide