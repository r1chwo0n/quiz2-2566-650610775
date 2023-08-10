"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Comme } from "next/font/google";
import { useState } from "react";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          userImage="/profileImages/princess.jpg"
          name="Nawawan Thaichim 650610775"
          text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          like="100 คน"
        ></PostOwner>

        {/* Reply Example */}
        {/* <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div> */}
        {/* map-loop render Comment component here */}
        {comments.map((comment) => (
          <Comment
            key={comment.username}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          ></Comment>
        ))}
      </div>
    </div>
  );
}
