import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import facebook from "../assets/footer/facebook.png"
import instagram from "../assets/footer/instagram.png"
import linkedin from "../assets/footer/linkedin.png"
import twitter from "../assets/footer/twitter.png"

const Footer = () => {
    const formSchema = z.object({
        email: z.string().email({ message: "Invalid email address" })
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div className='h-[753px] bg-primary font-inter'>
            <div className='max-w-1440 mx-auto h-[753px]'>
                <div className='px-24 py-28  flex flex-col justify-center items-start gap-6'>
                    <h1 className=" text-[#ffffff] mb-4 text-4xl font-bold leading-normal">Start Building Your Global Dream Team Today!</h1>
                    <p className="text-xl font-normal leading-6 text-[#ffffff]  mb-6">Find out how much money you could be saving.</p>
                    <button
                        className="bg-[#37B6B7] text-[#ffffff]  text-inter text-base py-4 px-7 font-semibold rounded-full flex justify-center  items-center gap-2">
                        <span>
                            Get a Quote
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                </div>
                <div>
                    {/* Hireoid */}
                    <div className='border-b-2 pb-6 mb-6 border-white mx-24  flex justify-between items-center'>
                        <span className='text-3xl font-medium font-inter text-[#fff]'>Hireoid</span>
                        <div className='flex gap-3'>
                            <a href="#">
                                <img src={facebook} alt="" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={linkedin} alt="" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="" className='h-[16px] w-[27px] object-contain' />
                            </a>
                        </div>
                    </div>
                    {/* Footer Nav */}
                    <div className='flex justify-between mx-24 text-white'>
                        <div className='flex flex-col gap-2 flex-[2]'>
                            <div className='font-inter text-lg font-semibold '>Solutions</div>
                            <div className='font-inter text-base font-normal '>Screening, Matching, Onboarding</div>
                            <div className='font-inter text-base font-normal '>Integrated Staffing</div>
                            <div className='font-inter text-base font-normal '>Global Payroll</div>
                        </div>
                        <div className='flex flex-col gap-2 flex-[2]'>
                            <div className='font-inter text-lg font-semibold '>More</div>
                            <div className='font-inter text-base font-normal '>
                                <Link to="/FAQ">
                                    FAQ'S
                                </Link>
                            </div>
                            <div className='font-inter text-base font-normal '>Case studies</div>
                        </div>
                        <div className='flex flex-col gap-2  flex-[2]'>
                            <div className='font-inter text-lg font-semibold '>Help and Support</div>
                        </div>
                        <div className='flex flex-col gap-2 flex-[2]'>
                            <div className='font-inter text-lg font-semibold '>Affiliate Program</div>
                        </div>
                        <div className='flex flex-col gap-3 flex-[4]'>
                            <div className='font-inter text-lg font-semibold '> Get the Latest</div>
                            <span className="font-inter text-sm text-[#E4E4E4] mb-4">Sign up to receive benefits, news and insights in your inbox once a
                                month.</span>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="relative w-full">
                                                    <FormControl>
                                                        <Input placeholder="Email" {...field} className='pr-10 text-white bg-primary rounded-full py-6' />
                                                    </FormControl>
                                                    <button
                                                        type="submit"
                                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 "
                                                    >
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </form>
                            </Form>
                        </div>
                    </div>
                    {/* Footer Rights */}
                    <div className="flex justify-center gap-48 text-[#fff] mt-6">
                        <div className='font-inter text-sm font-regular '>© Hireold. All Rights Reserved.</div>
                        <div className='font-inter text-sm font-regular '>Terms and Condition</div>
                        <div className='font-inter text-sm font-regular '>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer