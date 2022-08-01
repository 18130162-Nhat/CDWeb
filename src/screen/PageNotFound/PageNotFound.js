import Error404Page from './Error404Page'
import './error404.css'

function PageNotFound(){

    return(
        <div className='container-page-not-found'>
            <div class="404 error">
            <Error404Page></Error404Page>
        </div>
        </div>
    )
}
export default PageNotFound