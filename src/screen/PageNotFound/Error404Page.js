
import { Link } from "react-router-dom"

function Error404Page() {
    return (
        <div class='c'>
            <div class='_404'>404</div>
            <div class='_1'>THE PAGE</div>
            <div class='_2'>WAS NOT FOUND</div>
            <Link to={"/home"}><button class='btn-back-home'>Back to Home</button></Link>
        </div>

    )
}
export default Error404Page