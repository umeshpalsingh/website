import Button from "../components/Button/Button";

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div className="page-not-found-container">
                <h1 className="big-msg">404</h1>
                <h2 className="small-msg">Page Not Found</h2>
                <Button content='Go Home' link='/' />
            </div>
        </div>
    );
}

export default PageNotFound;
