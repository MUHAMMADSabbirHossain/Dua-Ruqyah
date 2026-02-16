import Navbar from "@/components/bars/Navbar";
import Header from "@/components/headers/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 min-h-screen lg:ml-[68px] pb-16 lg:pb-0">
      {/* Navbar - bottom view for mobile and left view for desktop */}
      <Navbar />

      <div className="flex-1">
        {/* Header - top view */}
        <Header />

        {/* Main content */}
        <main className="flex">
          <section>
            <ul className="space-y-10">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </section>
          {children}

          {/* Right sidebar - view for desktop */}
          <aside>
            <ul className="space-y-10">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default layout;
