import React, { useEffect, useState } from "react";
import "./App.css";
import { jsonData } from "./data";
import { topic, user } from "./types";
import { Topics } from "./topics";

function App() {
  const [topics, setTopics] = useState<topic[]>([]);
  const [users, setUsers] = useState<user[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    setTopics(
      jsonData.topics
        .map((topic) => {
          return {
            ...topic,
            comments: jsonData.comments
              .filter((comment) => comment.topic_id === topic.topic_id)
              .sort((comment1, comment2) =>
                comment1.timestamp > comment2.timestamp ? +1 : -1
              ),
          };
        })
        .sort((topic1, topic2) =>
          topic1.time_uploaded > topic2.time_uploaded ? +1 : -1
        )
    );

    setUsers(jsonData.users);
    setLoading(false);
  }, []);

  useEffect(() => {
    setTopics(
      jsonData.topics
        .filter(
          (topic) =>
            topic.title.toLowerCase().search(filterText.toLowerCase()) !== -1 ||
            filterText.length == 0
        )
        .map((topic) => {
          return {
            ...topic,
            comments: jsonData.comments
              .filter((comment) => comment.topic_id === topic.topic_id)
              .sort((comment1, comment2) =>
                comment1.timestamp > comment2.timestamp ? +1 : -1
              ),
          };
        })
        .sort((topic1, topic2) =>
          topic1.time_uploaded > topic2.time_uploaded ? +1 : -1
        )
    );
  }, [filterText]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Look a list of topics</h1>
        <input
          type="text"
          name="filterTopicName"
          placeholder="Filter By Topic Name"
          onChange={(event) => {
            if (/[^A-Z a-z0-9]/.test(event.target.value)) {
              event.target.value = event.target.value.substring(
                0,
                event.target.value.length - 1
              );
            } else {
              setFilterText(event.target.value);
            }
          }}
        />
      </header>

      {loading ? (
        <p>loading....</p>
      ) : topics.length === 0 ? (
        <p>nothing to show here</p>
      ) : (
        topics.map((topic) => <Topics topic={topic} users={users} />)
      )}
    </div>
  );
}

export default App;
