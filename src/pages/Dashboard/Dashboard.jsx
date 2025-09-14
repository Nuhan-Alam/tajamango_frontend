import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorAlert from "../../components/ErrorAlert";
import ProfileForm from "../../components/Dashboard/Profile/ProfileForm";
import PasswordChangeForm from "../../components/Dashboard/Profile/PasswordChangeForm";
import ProfileButtons from "../../components/Dashboard/Profile/ProfileButtons";
import SuccessAlert from "../../components/SuccessAlert";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated,setIsUpdated] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } =
    useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Profile update
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
        email: user.email,
      };
      await updateUserProfile(profilePayload);
      // Password Change
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
      setIsEditing(false)
      setIsUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-1 border-[#8FA31E]/60 card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body flex justify-center items-center">
        {errorMsg && <ErrorAlert error={errorMsg} />}
        <h2 className="card-title text-2xl mb-8">Profile Information</h2>
        {isUpdated && <SuccessAlert message="Profile Info Updated" setIsUpdated={setIsUpdated} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          <ProfileButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;