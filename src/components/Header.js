import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutFun = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <h2>Header Component</h2>

      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Product</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutFun} className="btn btn-primary">
                logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default Header;
