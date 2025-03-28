import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nobis iusto architecto doloribus consequuntur repudiandae fugiat minima eveniet molestiae velit?</p>
          <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tenetur. consectetur adipisicing elit. Ratione, nam?</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero perferendis eum eius mollitia sit assumenda nobis quos enim. Animi placeat laborum ipsam magni, incidunt quod.</p>
        </div>
      </div>
      <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore inventore incidunt, itaque possimus molestiae blanditiis amet harum voluptate commodi!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore inventore incidunt, itaque possimus molestiae blanditiis amet harum voluptate commodi!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore inventore incidunt, itaque possimus molestiae blanditiis amet harum voluptate commodi!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
