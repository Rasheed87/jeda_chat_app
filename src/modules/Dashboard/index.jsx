import "./index.css";
import avt from "../../Assets/aavt1.png";

const Dashboard = () => {
  const contacts = [
    {
      img: avt,
      name: "Ester",
      status: "Available",
    },
    {
      img: avt,
      name: "Michael",
      status: "Available",
    },
    {
      img: avt,
      name: "Princewill",
      status: "Available",
    },
    {
      img: avt,
      name: "Nnaka",
      status: "Available",
    },
    {
      img: avt,
      name: "Korede",
      status: "Available",
    },
    {
      img: avt,
      name: "Yinka",
      status: "Available",
    },
    {
      img: avt,
      name: "Ada",
      status: "Available",
    },
    {
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      img: avt,
      name: "Yemi",
      status: "Available",
    },
    {
      img: avt,
      name: "Yemi",
      status: "Available",
    },
  ];

  return (
    <div className="dashboard">
      <div className="msg">
        <div className="account">
          <div className="img">
            {" "}
            <img className="img1" src={avt} alt="" />
          </div>
          <div className="name-acc">
            <h3 className="name"> Ahmed Rasheed</h3>
            <p className="acc">My Account</p>
          </div>
        </div>
        <div className="messages">
          <p className="msg-text">Messages</p>
          <div className="scroll">
            {contacts.map(({ img, name, status }) => {
              return (
                <div className="account1">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
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
            className="input"
            type="text"
            placeholder="Type a message ..."
          />
          <div className="pic">
            <div className="point">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-send"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </div>
            <div className="point">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-sec"></div>
    </div>
  );
};

export default Dashboard;
