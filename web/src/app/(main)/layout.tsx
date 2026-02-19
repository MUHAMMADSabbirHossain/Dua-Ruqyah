import Navbar from "@/components/bars/Navbar";
import RightSidebar from "@/components/bars/RightSidebar";
import Header from "@/components/headers/Header";
import { FC, ReactNode } from "react";

const layout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <div
      className="flex-1 min-h-screen lg:ml-[68px] pb-16 lg:pb-0"
      style={{ backgroundColor: "#f8fffa00" }}
    >
      {/* Navbar - bottom view for mobile and left view for desktop */}
      <Navbar />

      <div className="">
        {/* Header - top view */}
        <Header />

        {/* Main content */}
        <main className="flex">
          {children}

          {/* Right sidebar - view for desktop */}
          <aside className="flex-shrink-0 hidden 2xl:block">
            <RightSidebar />
          </aside>
        </main>
      </div>
    </div>
  );
};

export default layout;
