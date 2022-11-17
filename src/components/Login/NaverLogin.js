import naverLogin from "../../assets/img/naverLogin.png"
import { NAVER_AUTH_URL } from '../../api/loginKeys';

const NaverLogin = ({ setGetToken, setUserInfo }) => {


    const handleLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    }
    return (
        <img type="button" onClick={handleLogin} src={naverLogin}></img>
    )
}

export default NaverLogin;

