

const AuthWrapper = ({
    children,
    className,
  }) => {
  return (
    <div className={` bg-[#ffffff] shadow-lg border rounded-xl ${className}`}>{children}</div>
  )
}

export default AuthWrapper