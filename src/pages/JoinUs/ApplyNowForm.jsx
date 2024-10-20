import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mainImage from "../../assets/join-us/main-image.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import icon from "../../assets/apply-form/upload-icon.png"
import questionMark from '../../assets/apply-form/question-mark.png'

import * as z from "zod"



const ApplyNowForm = () => {
    const industryOptions = [
        "Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Manufacturing",
    ];

    const schema = z.object({
        firstname: z.string().min(1, { message: "First name is required" }).max(50, { message: "First name must be less than 50 characters" }),
        lastname: z.string().min(1, { message: "Last name is required" }).max(50, { message: "Last name must be less than 50 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
        phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).max(20, { message: "Phone number must be less than 15 digits" }),
        city: z.string().min(1, { message: "City is required" }).max(100, { message: "City must be less than 100 characters" }),
        state: z.string().min(1, { message: "State is required" }).max(100, { message: "State must be less than 100 characters" }),
        country: z.string().min(1, { message: "Country is required" }).max(100, { message: "Country must be less than 100 characters" }),
        industry: z.string().min(1, { message: "Industry is required" }).max(100, { message: "Industry must be less than 100 characters" })
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstname: 'Abdul',
            lastname: "Muneeb",
            email: "example@abc.com",
            phone: "+92 310 0786 197",
            city: "Faisalabad",
            state: "Faisalabad",
            country: "Pakistan",
            industry: "Select industry"
        }
    })
    const [file, setFile] = useState(null);

    const onSubmit = (data) => {
        console.log(data); 
    };

    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"], "application/msword": [".doc", ".docx"] },
    });

    return (
        <div className='flex max-h-[1080px] max-w-[1440px] mx-auto'>
            <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            <div className="pt-[50px] pb-[120px] pl-[32px] w-[680px] flex flex-col items-start gap-6">
                {/* Back Btn Link */}
                <Link to="/"
                    className=" text-btnBlack border border-btnBdr text-lg py-3 px-8 font-semibold rounded-full">
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 transform rotate-180" />
                    Back Home
                </Link>
                {/* Industry you are from */}
                <div className="w-full ">
                    <h1 className="text-primary font-inter text-6xl font-extrabold leading-normal mb-7">
                        Industry you are from?
                    </h1>

                    <div className="flex items-center text-xl font-inter font-normal text-formGray mt-6 mb-6">
                        <span className="text-red-500">*</span>
                        <span>Required fields</span>
                    </div>

                    <p className="font-inter font-mediumtext-2xl text-2xl pb-4 border-b border-formGray">
                        Personal Information
                    </p>
                </div>

                {/* Form */}

                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="flex gap-6">
                        {/* First Name */}
                        <div className="w-1/2">
                            <label htmlFor="firstname" className="block font-semibold text-xl mb-2"><span className="text-red-500 mr-2">*</span>First Name</label>
                            <input
                                id="firstname"
                                {...register("firstname")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your first name"
                            />
                            {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                        </div>

                        {/* Last Name */}
                        <div className="w-1/2">
                            <label htmlFor="lastname" className="block font-semibold text-xl mb-2"><span className="text-red-500 mr-2">*</span>Last Name</label>
                            <input
                                id="lastname"
                                {...register("lastname")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your last name"
                            />
                            {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* Email */}
                        <div className="w-1/2">
                            <label htmlFor="email" className="block font-semibold text-xl mb-2"><span className="text-red-500 mr-2">*</span>Email</label>
                            <input
                                id="email"
                                {...register("email")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your email"
                                type="email"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Phone */}
                        <div className="w-1/2">
                            <label htmlFor="phone" className="block font-semibold text-xl mb-2">Phone</label>
                            <input
                                id="phone"
                                {...register("phone")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your phone number"
                                type="tel"
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* City */}
                        <div className="w-1/2">
                            <label htmlFor="city" className="block font-semibold text-xl mb-2">City</label>
                            <input
                                id="city"
                                {...register("city")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your city"
                            />
                            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                        </div>

                        {/* State */}
                        <div className="w-1/2">
                            <label htmlFor="state" className="block font-semibold text-xl mb-2">State</label>
                            <input
                                id="state"
                                {...register("state")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your state"
                            />
                            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* Country */}
                        <div className="w-1/2">
                            <label htmlFor="country" className="block font-semibold text-xl mb-2">Country</label>
                            <input
                                id="country"
                                {...register("country")}
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                                placeholder="Enter your country"
                            />
                            {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="industry" className="block font-semibold text-xl mb-2">Industry</label>
                            <select
                                {...register}
                                id="industry"
                                className="border p-2 w-full font-inter font-normal text-md text-[#888B9A]"
                            >
                                <option value="">Select Industry</option>
                                {industryOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors && <p className="text-red-500">{errors.message}</p>}
                        </div>
                    </div>

                    <label htmlFor="resume" className="font-semibold text-xl flex gap-2 items-center ">
                        <span className="text-red-500 ">*</span>
                        Resume
                        <img src={questionMark} className="object-fit h-4 w-4" alt="" />
                    </label>
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-lg p-6 text-center ${isDragActive ? "border-blue-500" : "border-gray-300"}`}
                        style={{ cursor: "pointer" }}
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : file ? (
                            <p>{file.name}</p>
                        ) : (
                            <div>
                                <img src={icon} className="h-10 w-10 mx-auto mb-2 text-gray-500 object-fill" alt="" />
                                <p className="text-gray-500"><span className="font-semibold font-inter text-sm text-primary">Upload a file</span><span className="font-normal font-inter text-sm text-gray"> or drag and drop here</span></p>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex w-full justify-center items-center">
                        <button className="bg-primary text-white font-semibold font-inter text-md py-3 px-7 rounded-lg" type="submit">
                            Submit application
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ApplyNowForm