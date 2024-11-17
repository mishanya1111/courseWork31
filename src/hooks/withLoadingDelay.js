import { useState, useEffect } from 'react';

function withLoadingDelay(WrappedComponent) {
    return function WithDelayComponent(props) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        }, []);

        if (isLoading) {
            return (
                <div className="spinBox">
                    <div className="spinner"></div>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    };
}

export default withLoadingDelay;
