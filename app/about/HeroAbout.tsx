import React from "react";

function HeroAbout() {
  return (
    <div>
      <div
        className="dshero min-h-100vh"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605918321412-d6504db4748e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundAttachment: "fixed",
            backgroundPosition:"center"
        }}
      >
        <div className="dshero-overlay bg-opacity-60 py-20"></div>
        <div className="dshero-content text-center text-neutral-content">
          <div className="max-w-md my-10">
            <h1 className="mb-5  text-5xl font-bold">About Us</h1>
            {/* <p className="mb-5">
          Learn more about us
            </p> */}
            {/* <button className="dsbtn dsbtn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
