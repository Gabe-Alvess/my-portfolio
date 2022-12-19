import React, { useRef } from "react";
import { PageInfo, PageInfoFR, PageInfoNL, PageInfoPT } from "../../typings";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { MessageValidationSchema } from "../../validations/MessageValidation";
import { XCircleIcon } from "@heroicons/react/24/solid";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  pageInfoNL: PageInfoNL;
  pageInfoFR: PageInfoFR;
  pageInfoPT: PageInfoPT;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export const Form = ({ pageInfo, pageInfoNL, pageInfoFR, pageInfoPT }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(MessageValidationSchema) });

  const formRef: any = useRef<HTMLFormElement>();

  const sendEmail = () => {
    emailjs.sendForm("service_qf0uwc9", "template_vqleujr", formRef.current, "TR66B9-_SuDIa6Jhg").then(
      (result) => {
        console.log(result);
        result.status === 200 ? formRef.current.reset() : null;
        result.status === 200 ? formRef.current[0].focus() : null;
      },
      (error) => {
        console.log(error.text);
        toast.error("👎 Something went wrong!", {
          position: "bottom-left",
          transition: Slide,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    );
  };

  const toastMessage = async () => {
    let formData = {
      firstName: formRef.current[0].value,
      lastName: formRef.current[1].value,
      email: formRef.current[2].value,
      subject: formRef.current[3].value,
      message: formRef.current[4].value,
    };
    const result = await MessageValidationSchema.isValid(formData);
    result
      ? toast.success("👌 Message successfully sent!", {
          position: "bottom-left",
          transition: Slide,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        })
      : toast.error("👎 Message was not sent!", {
          position: "bottom-left",
          transition: Slide,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
  };

  let router = useRouter();

  const name =
    router.locale === "en"
      ? pageInfo?.placeholderName
      : router.locale === "nl"
      ? pageInfoNL?.placeholderName
      : router.locale === "fr"
      ? pageInfoFR?.placeholderName
      : router.locale === "pt"
      ? pageInfoPT?.placeholderName
      : "";

  const surname =
    router.locale === "en"
      ? pageInfo?.placeholderSurname
      : router.locale === "nl"
      ? pageInfoNL?.placeholderSurname
      : router.locale === "fr"
      ? pageInfoFR?.placeholderSurname
      : router.locale === "pt"
      ? pageInfoPT?.placeholderSurname
      : "";

  const subject =
    router.locale === "en"
      ? pageInfo?.placeholderSubject
      : router.locale === "nl"
      ? pageInfoNL?.placeholderSubject
      : router.locale === "fr"
      ? pageInfoFR?.placeholderSubject
      : router.locale === "pt"
      ? pageInfoPT?.placeholderSubject
      : "";

  const message =
    router.locale === "en"
      ? pageInfo?.placeholderMessage
      : router.locale === "nl"
      ? pageInfoNL?.placeholderMessage
      : router.locale === "fr"
      ? pageInfoFR?.placeholderMessage
      : router.locale === "pt"
      ? pageInfoPT?.placeholderMessage
      : "";

  const submit =
    router.locale === "en"
      ? pageInfo?.submitButton
      : router.locale === "nl"
      ? pageInfoNL?.submitButton
      : router.locale === "fr"
      ? pageInfoFR?.submitButton
      : router.locale === "pt"
      ? pageInfoPT?.submitButton
      : "";

  return (
    <form ref={formRef} onSubmit={handleSubmit(sendEmail)} className="flex flex-col items-center w-fit mx-auto max-h-[400px] ">
      <div className="flex space-x-2">
        <div className="flex flex-col items-center justify-center">
          <input type="text" {...register("firstName")} placeholder={name} className="contactInput h-[50px] w-[275px]" />

          <div className="flex">
            <XCircleIcon className={`errorIcon ${errors.firstName?.message ? "show" : ""}`} />
            <p className={`errorMessage ${errors.firstName?.message ? "show" : ""}`}>{errors.firstName?.message}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <input type="text" {...register("lastName")} placeholder={surname} className="contactInput h-[50px] w-[275px]" />

          <div className="flex">
            <XCircleIcon className={`errorIcon ${errors.lastName?.message ? "show" : ""}`} />
            <p className={`errorMessage ${errors.lastName?.message ? "show" : ""}`}>{errors.lastName?.message}</p>
          </div>
        </div>
      </div>

      <input type="email" {...register("email")} placeholder={pageInfo?.placeholderEmail} className="contactInput h-[40px]" />

      <div className="flex">
        <XCircleIcon className={`errorIcon ${errors.email?.message ? "show" : ""}`} />
        <p className={`errorMessage ${errors.email?.message ? "show" : ""}`}>{errors.email?.message}</p>
      </div>

      <input type="text" {...register("subject")} placeholder={subject} className="contactInput h-[40px]" />

      <div className="flex">
        <XCircleIcon className={`errorIcon ${errors.subject?.message ? "show" : ""}`} />
        <p className={`errorMessage ${errors.subject?.message ? "show" : ""}`}>{errors.subject?.message}</p>
      </div>

      <textarea {...register("message")} placeholder={message} className="contactInput h-[150px]" />

      <div className="flex">
        <XCircleIcon className={`errorIcon ${errors.message?.message ? "show" : ""}`} />
        <p className={`errorMessage ${errors.message?.message ? "show" : ""}`}>{errors.message?.message}</p>
      </div>
      <button
        onClick={toastMessage}
        type="submit"
        className="submitBtn"
      >
        {submit}
      </button>
      <ToastContainer
        position="bottom-left"
        transition={Slide}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </form>
  );
};
