import "./index.css";
import avt from "../../Assets/aavt1.png";
import call from "../../Assets/caller.png"
import plus from "../../Assets/plus.svg"
import send from "../../Assets/send.png"
import { useState, useEffect } from "react";


const Dashboard = () => {
  const contacts = [
    {
     index: 0,
      img: avt,
      name: "Ester",
      status: "Available",
    },
    {
      index: 1,
      img: avt,
      name: "Michael",
      status: "Available",
    },
    {
      index: 2,
      img: avt,
      name: "Princewill",
      status: "Available",
    },
    {
      index: 3,
      img: avt,
      name: "Nnaka",
      status: "Available",
    },
    {
      index: 4,
      img: avt,
      name: "Korede",
      status: "Available",
    },
    {
      index: 5,
      img: avt,
      name: "Yinka",
      status: "Available",
    },
    {
      index: 6,
      img: avt,
      name: "Ada",
      status: "Available",
    },
    {
      index: 7,
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      index: 8,
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      index: 9,
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      index: 10,
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      index: 11,
      img: avt,
      name: "Yemi",
      status: "Available",
    },
  ];

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user:detail"));
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:8000/api/conversations/${loggedInUser?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      setConversations(resData);
      console.log("resData :>> ", resData);
    };
    fetchConversations();
  }, []);

const [user, setUser] = useState(JSON.parse(localStorage.getItem("user:detail")));
const [conversation, setConversations] = useState([])
console.log("user :>> ", user);
  

  return (
    <div className="dashboard">
      <div className="msg">
        <div className="account">
          <div className="img">
            {" "}
            <img className="img1" src={avt} alt="" />
          </div>
          <div className="name-acc">
            <h3 className="name">{user?.fullName}</h3>
            <p className="acc">My Account</p>
          </div>
        </div>
        <div className="messages">
          <p className="msg-text">Messages</p>
          <div className="scroll">
            {contacts.map(({ img, name, status }, index) => {
              return (
                <div key={index} className="account1">
                  <div className="img2">
                    <img className="img3" src={img} alt="" />
                  </div>
                  <div className="name-acc1">
                    <h3 className="name1"> {name}</h3>
                    <p className="acc1">{status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="chat-sec">
        <div className="header">
          <div className=" img-name">
            <img
              className="photo"
              style={{ width: "40px", height: "40px" }}
              src={avt}
              alt="avt"
            />
            <div className="name-online">
              <h3 className="nam">Yinka</h3>
              <p className="online">Online</p>
            </div>
          </div>

          <div className="caller">
            <img style={{ width: "26px", height: "26px" }} src={call} alt="" />
          </div>
        </div>

        <div className="body-chat">
          <div className=" message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className=" message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message coming-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
          <div className="message going-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae?
          </div>
        </div>

        <div className="footer">
          <input
            className="surf"
            type="text"
            placeholder="Type a message ..."
          />
          <div className="pic">
            <div className="point">
              <img
                style={{ width: "26px", height: "26px" }}
                src={send}
                alt=""
              />
            </div>
            <div className="point">
              <img
                style={{ width: "26px", height: "26px" }}
                src={plus}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-sec"></div>
    </div>
  );
};

export default Dashboard;
