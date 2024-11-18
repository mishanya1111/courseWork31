import { useRouteError, Link } from 'react-router-dom';

export default function NotFoundPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="not-found-container">
            <h1>{error.status} </h1>
            <p>{error.statusText}</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
