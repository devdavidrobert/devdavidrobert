import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// Replace with a custom hook or alternative logic for form status
const useFormStatus = () => {
  const [pending, setPending] = React.useState(false);
  // Add logic to update 'pending' based on form submission status
  return { pending };
};

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-10 sm:h-12 w-full sm:w-[8rem] bg-primary-600 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-primary-700 active:scale-100 dark:bg-primary-600 dark:hover:bg-primary-500 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
