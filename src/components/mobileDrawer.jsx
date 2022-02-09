import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const MobileDrawer = (setInputValue) => {
  const [toggle, setToggle] = useState(false);

  // Toggle drawer
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      {!toggle ? (
        <MenuOutlined className="mDrawerHandler" onClick={toggleHandler} />
      ) : (
        <CloseOutlined className="mDrawerHandler" onClick={toggleHandler} />
      )}
      {toggle && (
        <Menu
          className="mDrawerMenu"
          defaultSelectedKeys={["nftMarket"]}
          mode="vertical"
        >
          <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")}>
            <NavLink to="/NFTMarketPlace" onClick={toggleHandler}>
              🛒 Explore Market
            </NavLink>
          </Menu.Item>
          <Menu.Item key="nft">
            <NavLink to="/nftBalance" onClick={toggleHandler}>
              🖼 Your Collection
            </NavLink>
          </Menu.Item>
          <Menu.Item key="transactions">
            <NavLink to="/Transactions" onClick={toggleHandler}>
              📑 Your Transactions
            </NavLink>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};

export default MobileDrawer;
