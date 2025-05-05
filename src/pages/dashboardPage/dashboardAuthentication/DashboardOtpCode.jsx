import AuthWrapper from "./AuthWrapper"
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const DashboardOtpCode = () => {
    const navigate = useNavigate();

    // Define the `onChange` handler with the correct type
    const onChange = (text) => {
        console.log("onChange:", text);
    };

    const handleVerify = () => {
        navigate("");
    };
    return (
        <AuthWrapper>
            <div className="text-center mb-12 font-degular">
                <div className="flex py-8 justify-center ">
                    <h3 className="font-semibold text-2xl text-[#333333]">
                        Verification code
                    </h3>
                </div>
                <p className="text-[16px] font-normal mb-6 text-[#5C5C5C] ">
                    We sent a reset link to contact@dscode...com <br />
                    enter 5 digit code that is mentioned in the email
                </p>
            </div>

            {/* Assuming `Input.OTP` is a custom component */}
            <Input.OTP
                size="large"
                className="otp-input"
                style={{ width: "100%", height: "50px" }}
                length={5}
                formatter={(str) => str.toUpperCase()}
                onChange={onChange}
            />

            <div className="flex justify-center pt-11">
                <Link to="/admin/dashboard/create-new-password">
                    <Button
                        className="bg-primary h-12 text-sm text-white font-bold  "
                        htmlType="submit"
                        onClick={handleVerify}
                    >
                        Verify Code
                    </Button>
                </Link>
            </div>

            <p className="text-center mt-10 text-sm font-normal mb-6 text-[#5C5C5C]">
                You have not received the email?
                <Button className="pl-1 text-primary " type="link">
                    Resend
                </Button>
            </p>
        </AuthWrapper>
    )
}

export default DashboardOtpCode