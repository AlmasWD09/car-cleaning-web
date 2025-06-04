import { Button, Flex, Form, Input } from "antd"
import CustomContainer from "../../../components/shared/CustomContainer";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const OtpCode = () => {
    const [forgetPasswordForm] = Form.useForm();

    const forgetPasswordFinish = (values) => {
        console.log(values)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-[70px] md:pt-[100px] lg:pt-[57px] pb-[52px] bg-[#f6f6f6]">
            <CustomContainer>
                <div className="flex flex-col lg:flex-row justify-between items-end gap-3">
                    <div className="w-full p-4">
                        <div>
                            <div>
                                <Link to='/forget-password'>
                                    <span>
                                        <svg
                                            className="w-[30px] md:w-[40px] lg:w-[60px] h-auto"
                                            viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="30" fill="#0063E6" />
                                            <path d="M37.707 31.0001H26.121L30.621 35.5001L29.207 36.9141L22.293 30.0001L29.207 23.0861L30.621 24.5001L26.121 29.0001H37.707V31.0001Z" fill="white" />
                                        </svg>
                                    </span>
                                </Link>
                                <div className="pt-[20px] lg:pt-[105px]">
                                    <h2 className="text-[28px] md:text-[48px] font-degular font-medium">Enter Code</h2>
                                    <p className="text-[20px] font-degular pt-[6px] py-[19px] text-[#00000] text-wrap">Enter the code that we sent to your email.</p>
                                </div>
                            </div>



                            <Form form={forgetPasswordForm} onFinish={forgetPasswordFinish}>
                                {/* otp code */}
                                <div>
                                    <Flex gap="middle" align="flex-start" vertical className="pb-8">
                                        <Input.OTP />
                                    </Flex>
                                </div>




                                {/* submit button component */}
                                <Link to='/create-new-password'>
                                    <Button
                                        htmlType="submit"
                                        block
                                        style={{
                                            backgroundColor: "#0063E5",
                                            color: "#ffffff",
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            height: "60px",
                                            borderRadius: "20px",
                                            paddingInline: "20px",
                                        }}
                                    >
                                        Verify Code
                                    </Button>
                                </Link>
                            </Form>
                        </div>
                    </div>

                    {/* right side image */}
                    <div className="w-full md:flex justify-center items-center">
                        <img src="/createAccountImage/car1.png" alt="car" />
                    </div>
                </div>
            </CustomContainer>
        </section>
    )
}

export default OtpCode