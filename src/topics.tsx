import React from "react";
import { topic, user } from "./types";
import "./App.css";

interface IProps {
  topic: topic;
  users: user[];
}

export function Topics(props: IProps) {
  return (
    <div className="Topic-wrapper">
      <div className="Topic-box">
        <h2>{props.topic.title}</h2>
        <img
          src={props.topic.thumbnail_url}
          alt={props.topic.file_name}
          className="topic-image"
        />
        <p>
          Posted : {new Date(props.topic.time_uploaded * 1000).toDateString()}
        </p>
        <h3>Comments</h3>
        {props.topic.comments.map((comment) => {
          const userOnComment = props.users.find(
            (user) => user.user_id === comment.user_id
          );
          return (
            <div className="Comment-wrapper">
              <div className="Comment-box">
                <p> {comment.comment}</p>
                {userOnComment ? (
                  <p>
                    Commented By:{" "}
                    {userOnComment?.first_name +
                      " " +
                      userOnComment?.last_name +
                      "  who is " +
                      userOnComment?.position +
                      " at " +
                      userOnComment?.company}
                  </p>
                ) : (
                  <p>Commented By: UNKNOWN</p>
                )}
                <p>
                  Commented At :{" "}
                  {new Date(comment.timestamp * 1000).toDateString()}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
