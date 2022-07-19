
import loading from '../Image/loading-cat.gif'
import './style/loading.css'

function Loading(){

    return(
        <div className='shoe-loading'>
            <div className='container-loading'>
            <img src={loading}/> 
            </div>
        </div>
    )
}
export default Loading
