
import AuthWrapper from "./AuthWrapper"
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DashboardCreateNewPassword = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
        navigate("/auth/login");
    };
    return (
        <AuthWrapper>
            <div className="text-center mb-12 font-degular">
                <div className="flex py-6 justify-center">
                    <h3 className="font-semibold text-2xl text-[#333333]">
                        Set a new password
                    </h3>
                </div>
                <p className="text-[16px] font-normal mb-6 text-[#5C5C5C]">
                    Create a new password. Ensure it differs from <br /> previous ones for security
                </p>
            </div>

            <Form layout="vertical" onFinish={onFinish} className="font-degular">
                {/* New Password Field */}
                <div>
                    <p className="text-[24px] font-degular">New password</p>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please enter your new password" }]}
                    >
                        <Input.Password
                            placeholder="Write new password"
                            iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                            style={{ height: "50px", width: "481px", cursor: "pointer", }}
                        />
                    </Form.Item>
                </div>

                {/* Confirm Password Field */}
                <div>
                    <p className="text-[24px] font-degular">Confirm Password</p>
                    <Form.Item
                        name="confirmPassword"
                        rules={[{ required: true, message: "Please confirm your password" }]}
                    >
                        <Input.Password
                            placeholder="Write confirm password"
                            iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                            style={{ height: "50px", width: "481px", cursor: "pointer", }}
                        />
                    </Form.Item>
                </div>

                {/* Submit Button */}
                <Form.Item>
                    <div className="flex justify-center">
                        <Link to="/admin/dashboard/login">
                            <Button
                                className="bg-primary h-12 text-sm text-white font-bold mt-6 px-10"
                                htmlType="submit"
                            >
                                Update Password
                            </Button>
                        </Link>
                    </div>
                </Form.Item>
            </Form>
        </AuthWrapper>
    )
}

export default DashboardCreateNewPassword