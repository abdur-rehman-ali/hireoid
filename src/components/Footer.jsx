import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom";

import {
    Form,
    FormControl,
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
        <div className='h-auto bg-primary font-inter'>
            <div className='max-w-1440 mx-auto py-12 px-6 md:px-24'>
                <div className='flex flex-col justify-center items-start gap-6 text-center md:text-left'>
                    <h1 className="text-[#e0e0e0] mb-4 text-3xl md:text-5xl font-bold leading-normal">Start Building Your Global Dream Team Today!</h1>
                    <p className="text-lg font-normal leading-6 text-[#e0e0e0] mb-6">Find out how much money you could be saving.</p>
                    <button
                        className="bg-[#37B6B7] text-[#ffffff] text-inter text-base py-4 px-7 font-semibold rounded-full flex justify-center items-center gap-2">
                        <span>
                            Get a Quote
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                </div>
                <div>
                    {/* Hireoid */}
                    <div className='border-b-2 pb-6 mb-6 border-white flex flex-col md:flex-row justify-between items-center'>
                        <span className='text-3xl font-medium font-inter text-[#ffffff]'>Hireoid</span>
                        <div className='flex gap-3 mt-3 md:mt-0'>
                            <a href="#">
                                <img src={facebook} alt="Facebook" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="Instagram" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={linkedin} alt="LinkedIn" className='h-[16px] w-[27px] object-contain' />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="Twitter" className='h-[16px] w-[27px] object-contain' />
                            </a>
                        </div>
                    </div>
                    {/* Footer Nav */}
                    <div className='flex flex-col md:flex-row justify-between text-white'>
                        <div className='flex flex-col gap-2 flex-[1]'>
                            <div className='font-inter text-lg font-semibold text-[#e0e0e0]'>Solutions</div>
                            <div className='font-inter text-base font-normal text-[#ffffff]'>Screening, Matching, Onboarding</div>
                            <div className='font-inter text-base font-normal text-[#ffffff]'>Integrated Staffing</div>
                            <div className='font-inter text-base font-normal text-[#ffffff]'>Global Payroll</div>
                        </div>
                        <div className='flex flex-col gap-2 flex-[1]'>
                            <div className='font-inter text-lg font-semibold text-[#e0e0e0]'>More</div>
                            <div className='font-inter text-base font-normal text-[#ffffff]'>
                                <Link to="/FAQ">FAQ'S</Link>
                            </div>
                            <div className='font-inter text-base font-normal text-[#ffffff]'>Case studies</div>
                        </div>
                        <div className='flex flex-col gap-2 flex-[1]'>
                            <div className='font-inter text-lg font-semibold text-[#e0e0e0]'>Help and Support</div>
                        </div>
                        <div className='flex flex-col gap-2 flex-[1]'>
                            <div className='font-inter text-lg font-semibold text-[#e0e0e0]'>Affiliate Program</div>
                        </div>
                        <div className='flex flex-col gap-3 flex-[1]'>
                            <div className='font-inter text-lg font-semibold text-[#e0e0e0]'>Get the Latest</div>
                            <span className="font-inter text-sm text-[#E4E4E4] mb-4">Sign up to receive benefits, news and insights in your inbox once a month.</span>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="relative w-full">
                                                    <FormControl>
                                                        <Input placeholder="Email" {...field} className='pr-10 text-white bg-primary rounded-full py-3 md:py-6' />
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
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-[#fff] mt-6">
                        <div className='font-inter text-sm font-regular'>© Hireoid. All Rights Reserved.</div>
                        <div className='font-inter text-sm font-regular'>Terms and Condition</div>
                        <div className='font-inter text-sm font-regular'>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
