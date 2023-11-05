"use client";
import { ContentView, Header, Modal, SideBar } from "@components";
import React from "react";

const page = () => {
  return (
    <div>
      <SideBar />
      <Header />
      <ContentView />
    </div>
  );
};

export default page;
