import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import simformlogo from "../../../public/assets/simformlogo.svg";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";

const items: MenuProps["items"] = [
  {
    label: (
      <Link href="/">
        <Image
          src={simformlogo}
          alt="Refine"
          width={200}
          height={50}
          style={{
            width: "200px",
            padding: "12px 5px",
          }}
        />
      </Link>
    ),
    style: { backgroundColor: "transparent" },
    key: "home",
  },
  {
    label: <Link href="/projects">Projects</Link>,
    key: "projects",
  },

  {
    label: <Link href="/users">Users</Link>,
    key: "users",
  },

];

const Navbar = () => {
  // find out active navlink
  const router = useRouter();
  let currentPath = router.pathname.slice(1);


  const [current, setCurrent] = useState(
    currentPath == "/" ? "home" : currentPath
  );


  useEffect(() => {
  }, [current]);



  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="light"
      className={styles.navstyle}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    >
    </Menu>
  );
};

export default Navbar;
