import { useLocation } from "react-router-dom";

const usePathname = () => {
    const location = useLocation();
    console.log(location.pathname)
    return location.pathname;
  }
 const PathRoutes = {
HOME : '/home',
ABOUT : '/about',
DETAILID : '/detail/',
DETAIL : '/detail/:id'
//ERROR : usePathname
}


export default PathRoutes