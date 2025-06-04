import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";


const PrivacyAndPolicy = () => {
  const [content, setContent] = useState('');
  const editor = useRef(null);


  const handleUpdate = () => {
    console.log('cickk')
  }
  return (
    <>
      <div className="w-full mt-6">
        <JoditEditor
          ref={editor}
          value={content}
          // config={{
          //   height: "400px", // Set your desired height
          // }}
          onChange={(newContent) => {
            console.log("Editor Content:", newContent);
            setContent(newContent);
          }}
        />
      </div>

      <div className="flex justify-end ">
        <Button
          htmlType="submit"
          style={{ backgroundColor: "#0063E5", color: "white", fontFamily: "degularDisplay", padding: "24px 80px", fontSize: "16px", fontWeight: "bold", margin: "10px 0px" }}
          onClick={handleUpdate}
        >
          Save
        </Button>
      </div>
    </>
  )
}

export default PrivacyAndPolicy



