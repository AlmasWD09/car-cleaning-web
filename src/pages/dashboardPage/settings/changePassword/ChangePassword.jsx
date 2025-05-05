import { Form, Input, Tabs, Upload } from "antd";
import { useState } from "react";


const ChangePassword = () => {
  const [previewImage, setPreviewImage] = useState(null);

  // Called before upload
  const handleBeforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      alert("Please upload an image file.");
      return false;
    }

    // Create a preview URL and save to state
    setPreviewImage(URL.createObjectURL(file));
    return false; // prevents auto upload
  };

    const onChange = (key) => {
      console.log(key);
    };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // tabs 1 end

  // tabs 2
  const onFinishTabs2 = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailedTabs2 = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };










  const items = [
    {
      key: "1",
      label: "Edit profile",
      children: (
        <Form
          name="edit-profile"
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/*Edit profile  title input*/}
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your title!" }]}
            className="mb-7"
            colon={false}
            label=""
          >
            <span className="font-semibold font-roboto text-lg block mb-2">
              Name
            </span>
            <Input
              placeholder="John Doe"
              className="p-4 border-none w-[1112px] bg-[#ffffff]"
            />
          </Form.Item>
          {/*Edit profile email input */}
          <Form.Item
            label=""
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            colon={false}
          >
            <span className="font-semibold font-roboto text-lg block mb-2">
              Email
            </span>
            <Input
              placeholder="example@gmail.com"
              className="p-4 border-none w-[1112px] bg-[#ffffff]"
            />
          </Form.Item>
          {/*Edit profile save button */}
          <div className="text-center mt-5 ">
            <button className="text-white bg-primary  font-semibold font-degular text-xl py-2 px-10 rounded-md ">
              Save
            </button>
          </div>
        </Form>
      ),
    },
    {
      key: "2",
      label: "Change Password",
      children: (
        <Form
          name="change-password"
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinishTabs2}
          onFinishFailed={onFinishFailedTabs2}
          autoComplete="off"
        >
          {/*Edit profile  title input*/}
          <Form.Item
            name="currentPassword"
            label=""
            rules={[
              { required: true, message: "Please input your Current Password" },
            ]}
            className="mb-7"
            colon={false}
          >
            <span className="font-semibold font-roboto text-lg block mb-2">
              Current password
            </span>
            <Input.Password
              placeholder="**********"
              className="p-4 border-none w-[1112px] bg-[#ffffff]"
            />
          </Form.Item>
          {/*Edit profile email input */}
          <Form.Item
            label=""
            name="newPassword"
            rules={[{ required: true, message: "Please Input New Password" }]}
            colon={false}
          >
            <span className="font-semibold font-roboto text-lg block mb-2">
              New password
            </span>
            <Input.Password
              placeholder="**********"
              className="p-4 border-none w-[1112px] bg-[#ffffff]"
            />
          </Form.Item>
          {/*Edit profile email input */}
          <Form.Item
            name="ConfirmNewPassword"
            label=""
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please input Confirm new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "The two passwords that you entered do not match!"
                  )
                );
              },
            }),
          ]}
          colon={false}
          >
            <span className="font-semibold font-roboto text-lg block mb-2">
              Confirm new password
            </span>
            <Input.Password
              placeholder="**********"
              className="p-4 border-none w-[1112px] bg-[#ffffff]"
            />
          </Form.Item>
          {/*Edit profile save button */}
          <div className="text-center mt-5 ">
            <button className="text-white bg-primary  font-semibold font-degular text-xl py-2 px-10 rounded-md ">
              Save
            </button>
          </div>
        </Form>
      ),
    },
  ];
  return (
    <div>
      {/* profile section  */}
      <div className="bg-white  mx-52 mt-5 rounded-lg flex flex-col justify-center items-center py-8">
        <div className="relative">
          {previewImage ? <img src={previewImage} alt="" className="w-[100px] rounded-full h-[100px] object-cover" /> : <img src="/privacyPolicy/photo1.png" alt="" className="w-[100px] rounded-full h-[100px] object-cover"/>}
          <Upload
            showUploadList={false}
            beforeUpload={handleBeforeUpload}
            accept="image/*"
          >
            <button className="w-8 bg-white flex justify-center items-center p-2 shadow-lg rounded-full absolute right-0 bottom-5">
              <img src="/choose/photo2.png" className="w-5" alt="" />
            </button>
          </Upload>
        </div>
        <h3 className="font-roboto font-medium text-[30px]">Jhon Doe</h3>
        <p className="text-[#B1A8A8] font-roboto font-medium text-xl">
          example@gmail.com
        </p>
      </div>

      {/* and tabs */}
      <div className="mx-52">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default ChangePassword