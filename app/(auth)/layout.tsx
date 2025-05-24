import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-bgdark/90 bg-glass text-textmain min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Sidebar Section */}
        <section className="relative flex h-32 items-end bg-bgdark/90 bg-glass lg:col-span-5 lg:h-full xl:col-span-6 backdrop-blur-lg">
          <img
            alt="Background"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              Welcome to Abdulrahman Habiba Web Apps 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-textmuted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        {/* Dynamic Content Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl bg-glass rounded-3xl p-8 shadow-xl border border-primary-dark/30">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Layout;
