import { useNavigate } from "react-router-dom";
import CustomContainer from "../../components/shared/CustomContainer"
import { Upload } from "antd";
import { useState } from "react";


const UserProfile = () => {
    const navigate = useNavigate();
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
    return (
        <section className="w-full overflow-x-auto pt-10">
            <CustomContainer>
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 pt-10 lg:pt-0">
                    <div>
                        <span onClick={() => navigate(-1)} className="cursor-pointer">
                            <svg
                                className="w-[30px] md:w-[40px] lg:w-[60px] h-auto"
                                viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="60" height="60" rx="30" fill="#0063E6" />
                                <path d="M37.707 31.0001H26.121L30.621 35.5001L29.207 36.9141L22.293 30.0001L29.207 23.0861L30.621 24.5001L26.121 29.0001H37.707V31.0001Z" fill="white" />
                            </svg>
                        </span>
                    </div>

                    <div className="flex justify-center w-full">
                        <h2 className='text-[20px] md:text-[50px] font-medium font-degular'>Profile</h2>
                    </div>
                </div>


                {/* *************** */}
               <div className="bg-gray-200 h-[400px] w-full flex justify-between">
                <div className=" flex justify-center w-full border border-red-700">
                    <img src="/termsConditions/photo1.png" alt="" className="h-[300px] w-[300px] rounded-full object-cover"/>
                </div>
                <div className="w-[50%] flex justify-end">
                   <div className="flex flex-col justify-between">
                   <button>one</button>
                   <button>two</button>
                   </div>
                </div>
               </div>
            </CustomContainer>
        </section>
    )
}

export default UserProfile