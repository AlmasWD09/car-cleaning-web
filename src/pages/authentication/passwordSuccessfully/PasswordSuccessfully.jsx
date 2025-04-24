import { Button } from "antd"
import CustomContainer from "../../../components/shared/CustomContainer"
import { Link } from "react-router-dom"


const PasswordSuccessfully = () => {
  return (
    <section className="pt-[70px] md:pt-[100px] lg:pt-[57px] pb-[60px] bg-[#f6f6f6]">
      <CustomContainer>
        <div className="flex justify-center items-center">
          <div>
            <div className="w-full flex justify-center">
              <img src="/createAccountImage/successCar1.png" alt="car" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-degular font-semibold text-[#04AC20] py-4">Password Changed Successfully</h1>
            <Link to='/login'>
              <Button
                block
                style={{
                  backgroundColor: "#0063E5",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "600",
                  height: "50px",
                  borderRadius: "20px",
                  paddingInline: "20px",
                }}
              >
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default PasswordSuccessfully 