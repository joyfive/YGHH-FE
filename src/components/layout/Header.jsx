import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import navbarLogo from "../../assets/img/navbarLogo.svg"
const Header = () => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.gu !== undefined && params.gu !== "undefined") {
      localStorage.setItem("gu", params.gu)
    }
  }, [params])

  return (
    <div className="px-6 bg-bbLpurple border-b-[0.5px] border-bbBB flex justify-between items-center h-[52px]">
      <img onClick={() => navigate("/home")} src={navbarLogo}></img>
      <div className="flex items-center">
        {localStorage.getItem("nickName") !== (undefined || null) ? (
          <dl className="flex justify-end items-center ">
            <dt>
              <img
                className="m-3 object-cover rounded-full w-[18px] h-[18px]"
                src={localStorage.getItem("profileImage")}
              ></img>
            </dt>
            <dd className="text-xs text-bb22 after:ml-1">
              <span className="font-medium">
                {localStorage.getItem("nickName")}
              </span>
              님
            </dd>
          </dl>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-xs text-bb22 font-medium"
          >
            로그인
          </button>
        )}

        <svg
          onClick={() => navigate("/search/0/undefined/new")}
          className="ml-3"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_431_3145)">
            <path
              d="M8.04748 14.1975C4.73998 14.1975 2.04749 11.475 2.04749 8.1225C2.04749 4.77 4.73998 2.0475 8.04748 2.0475C11.355 2.0475 14.0475 4.77 14.0475 8.1225C14.0475 11.475 11.355 14.1975 8.04748 14.1975ZM8.04748 3.1725C5.35498 3.1725 3.17249 5.3925 3.17249 8.1225C3.17249 10.8525 5.36248 13.0725 8.04748 13.0725C10.7325 13.0725 12.9225 10.8525 12.9225 8.1225C12.9225 5.3925 10.7325 3.1725 8.04748 3.1725Z"
              fill="#222222"
            />
            <path
              d="M15.39 15.9525C15.2475 15.9525 15.0975 15.9 14.9925 15.7875L11.6025 12.3525C11.385 12.135 11.385 11.775 11.6025 11.5575C11.82 11.34 12.18 11.34 12.3975 11.5575L15.7875 14.9925C16.005 15.21 16.005 15.57 15.7875 15.7875C15.675 15.8925 15.5325 15.9525 15.39 15.9525Z"
              fill="#222222"
            />
          </g>
          <defs>
            <clipPath id="clip0_431_3145">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Header
