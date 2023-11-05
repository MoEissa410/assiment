"use client";
import { SideBar, Header, EmptyState, Modal, ContentView } from "@components";
import { useAppSelector } from "@redux/store";

export default function Home() {
  const currentState = useAppSelector((state) => state.backdrop.backdrop);

  return (
    <div className="relative bg-base-white w-full h-screen overflow-hidden text-left text-lg text-gray-900 font-button-large">
      <SideBar />
      <Header />
      <EmptyState />
      {currentState && <Modal />}
    </div>
  );
}
