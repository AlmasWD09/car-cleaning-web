import AuthWrapper from "./AuthWrapper"
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";


const DashboardForgetPassword = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    navigate("");
  };
  return (
    <AuthWrapper>
       <p className="font-popping font-semibold text-2xl text-[#333333 mb-6 font-degular]">
        Forgot password ?
      </p>
      <Form layout="vertical" onFinish={onFinish} className="font-degular">
        <Form.Item
          label="Email"
          name="email"
          // rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            placeholder="abidhasan@gmail.com"
            style={{ height: "50px", width: "481px" }}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-center">
            <Link to="/admin/dashboard/otp-code">
            <Button
              className="bg-primary h-12 text-sm text-white font-bold  mt-6"
              htmlType="submit"
            >
              Send Code
            </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </AuthWrapper>
  )
}

export default DashboardForgetPassword