const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="grid grid-cols-2 gap-2 space-y-4">
      <div className="form-control">
        <label className="label">First Name</label>
        <input
          type="text"
          className="input input-bordered bg-[#EFF5D2]/50 disabled:bg-[#EFF5D2]/50 w-full"
          disabled={!isEditing}
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-red-500">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label">Last Name</label>
        <input
          type="text"
          className="input input-bordered bg-[#EFF5D2]/50 disabled:bg-[#EFF5D2]/50 w-full"
          disabled={!isEditing}
          {...register("last_name")}
        />
      </div>

      <div className="form-control">
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input input-bordered bg-[#EFF5D2]/50 disabled:bg-[#EFF5D2]/50 w-full"
          disabled
          {...register("email")}
        />
      </div>

      <div className="form-control">
        <label className="label">Address</label>
        <input
          type="text"
          className="input input-bordered bg-[#EFF5D2]/50 disabled:bg-[#EFF5D2]/50 w-full"
          disabled={!isEditing}
          {...register("address")}
        />
      </div>

      <div className="form-control">
        <label className="label">Phone Number</label>
        <input
          type="text"
          className="input input-bordered bg-[#EFF5D2]/50 disabled:bg-[#EFF5D2]/50 w-full"
          disabled={!isEditing}
          {...register("phone_number")}
        />
      </div>
    </div>
  );
};

export default ProfileForm;