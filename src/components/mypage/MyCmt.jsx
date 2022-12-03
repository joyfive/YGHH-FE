import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __postMyNotice } from "../../redux/modules/mySlice"

const MyCmt = (cmt) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [tab, setTab] = useState(false)

  const onTab = () => {
    setTab(!tab)
  }
  const onCheck = (id) => {
    dispatch(__postMyNotice(id))
    navigate(`/detail/${cmt.cmt.postId}`)
  }
  return (
    <>
      {/* <div>{cmt.commentId}</div> */}
      <div
        onClick={onTab}
        className="shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-md bg-white w-full mb-3 pl-[24px] flex h-full"
      >
        <div style={{ display: cmt.cmt.checked ? "none" : "block" }}>
          <div
            className="bg-bbpink w-2 h-2 rounded-full mr-5 mt-0.5"
            style={{
              display: tab ? "none" : "block",
            }}
          >
            <div className="mt-[26px] bg-bbpink w-2 h-2 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-[24px] text-bb66 text-[11px]">
            {cmt.cmt.content}에 새 댓글이 달렸습니다.
          </div>

          <div className="mb-[24px] pr-[20px] text-bb22 text-xs break-all mt-1">
            <span className="font-bold mr-1">{cmt.cmt.accountName}</span>
            {cmt.cmt.comment}
          </div>
        </div>
        <button
          className=" w-[60px] ml-4 bg-bbpurple rounded-r-md text-white text-b11 text-center text-xs h-full]"
          onClick={() => onCheck(cmt.cmt.commentId)}
          style={{
            display: tab ? "block" : "none",
          }}
        >
          확인
        </button>
      </div>
    </>
  )
}

export default MyCmt

//
