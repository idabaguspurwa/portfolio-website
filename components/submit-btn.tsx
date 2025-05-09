import React, { forwardRef, useImperativeHandle } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export type SubmitButtonRef = {
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitBtn = forwardRef<SubmitButtonRef>((props, ref) => {
  const [isPending, startTransition] = React.useTransition();
  const [showSuccess, setShowSuccess] = React.useState(false);

  useImperativeHandle(ref, () => ({
    setShowSuccess
  }));

  React.useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <button
      type="submit"
      className={`group relative flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
                 rounded-full outline-none transition-all duration-300
                 focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100
                 ${showSuccess 
                   ? "bg-green-500 hover:bg-green-600" 
                   : "bg-gray-900 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10"
                 }
                 disabled:opacity-70 text-white`}
      disabled={isPending || showSuccess}
    >
      {isPending ? (
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
          <span className="text-sm">Sending...</span>
        </div>
      ) : showSuccess ? (
        <div className="flex items-center gap-2">
          <FaCheck className="text-sm animate-bounce" />
          <span className="text-sm">Sent!</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span>Submit</span>
          <FaPaperPlane 
            className="text-xs opacity-70 transition-all duration-300
                       group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </div>
      )}

      {/* Success ripple effect */}
      {showSuccess && (
        <span 
          className="absolute inset-0 flex items-center justify-center">
          <span 
            className="animate-ripple absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          ></span>
        </span>
      )}
    </button>
  );
});

SubmitBtn.displayName = "SubmitBtn";

export default SubmitBtn;
