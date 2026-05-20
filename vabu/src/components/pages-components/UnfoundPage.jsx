import { Link } from "react-router-dom";
import "./UnfoundPage.css"

function UnfoundPage() {
    return (
    <div id="colorlib-notfound">
    <div class="colorlib-notfound">
        <div class="colorlib-notfound-404">
            <h1>404</h1>
        </div>
        <h2 id="colorlib_404_customizer_page_heading">Oops !</h2>
        <div id="colorlib_404_customizer_content">Page Not Found!</div>
        <Link to={"/"} id="colorlib_404_customizer_button_text">Back to homepage</Link>
    </div>
</div>

    )
}

export default UnfoundPage;