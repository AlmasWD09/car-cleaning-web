import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";

const GroupAvater = () => {
  return (
    <div>
      <Avatar.Group>
        <Avatar src="/bannerAvater/avater4.png" size={50} />
        <Avatar src="/bannerAvater/avater3.png" size={50} />
        <Avatar src="/bannerAvater/avater2.png" size={50} />
        <Avatar src="/bannerAvater/avater1.png" size={50} />
        <Avatar src="/bannerAvater/avater4.png" size={50} />
        <Avatar
          src="/bannerAvater/avater5.svg"
          style={{ backgroundColor: "white", padding: "10px" }}
          size={50}
        />
      </Avatar.Group>
    </div>
  );
};

export default GroupAvater;
