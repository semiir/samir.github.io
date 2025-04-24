"use client";

import MyHeader from "@/components/ui/header";
import TheForms from "@/app/util/theforms";
import Footer from "@/app/util/footer";

export default function Contacts() {
  return (
    <>
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
      <MyHeader />
      <div className="flex flex-col md:flex-row m-10 gap-4 justify-between">
        <div>
          <h1 className="text-start text-3xl font-bold pt-5 pb-5">Contact Me</h1>
          <p className="text-balance text-start text-muted-foreground lg:max-w-2xl text-lg">
            Please fill in the form below to contact me. 
            <br/>
            I will get back to you as soon as possible.<br/>Thank you.
          </p>
          <p className="text-balance text-start text-muted-foreground lg:max-w-2xl text-lg pt-5">
            You can also contact me directly through my email: 
            <br/>
            <span className="font-extrabold">semiir04@gmail.com</span>
          </p>
        </div>
        <div className="flex-1"> 
          <TheForms />
        </div> 
      </div>
    </div>
    <Footer/>
    </>
  );
}