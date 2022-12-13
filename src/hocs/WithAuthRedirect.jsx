import {useSelector} from "react-redux";

export const WithAuthRedirect = (Component) => {

    const RedirectComponent = () => {
        let isLogged = useSelector(state => state.auth.isLogged);
        if (!isLogged) {
            // redirect('./login');
        }
        return <Component/>;
    }
    return RedirectComponent;
}