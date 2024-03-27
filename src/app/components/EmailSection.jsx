"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();



    if (response.status === 200) {
      setEmailSubmitted(true);
    }

  };

  return (

    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-6 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-primary-500 my-2">
          Des questions ?
        </h5>
        <p className="text-[#075985] mb-4 max-w-md">
          {" "}
          Contactez-nous dès aujourd&apos;hui et bénéficiez de notre offre de services professionnels et fiables de dépannage informatique à domicile à Saint-Martin-de-Crau et ses environs.
        </p>
        <h5 className="text-xl font-bold text-primary-500 my-2">
          Nous suivre
        </h5>
        <p className="text-[#075985] mb-4 max-w-md">
          {" "}
          Rejoignez IT Soluce sur les réseaux sociaux pour ne rien manquer de nos actualités, conseils et astuces informatiques. Ensemble, restons connectés !
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.facebook.com/people/It-Soluce/61557586771816/">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (

          <p className="text-[#075985] text-sm ">
            Merci pour votre message ! Il a bien été envoyé. <br/>
            Nous nous engageons à le traiter avec attention et vous recontacterons dans les plus brefs délais.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-primary-500 block mb-2 text-sm font-medium"
              >
                Votre email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#e0d9e0] border border-[#e0d9e0] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="itsoluce@it-soluce.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-primary-500 block text-sm mb-2 font-medium"
              >
                Sujet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#e0d9e0] border border-[#e0d9e0] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Sujet"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-primary-500 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#e0d9e0] border border-[#e0d9e0] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
