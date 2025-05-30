import Head from "next/head";
import Image from "next/image";

import React from "react";
import styles from "./layout.module.css";

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
}
