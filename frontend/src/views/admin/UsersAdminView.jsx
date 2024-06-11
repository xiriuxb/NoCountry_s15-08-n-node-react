import userData from "../../assets/users.json"

const UsersAdminView = () => {
  return (
    <section className="h-full overflow-hidden flex flex-col">
      <h2 className="text-2xl py-2 shadow-lg">Users Admin</h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              userData.map((user)=>{
                return(
                  <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div> */}
                      <div>
                        <div className="font-bold">{`${user.name} ${user.last_name}`}</div>
                        <div className="text-sm opacity-50">{user.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.email}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.role}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                )
              })
            }
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default UsersAdminView;
