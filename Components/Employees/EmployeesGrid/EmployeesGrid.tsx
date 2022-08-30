import UserCard from "../../Card/Card";
import { IEmployeeGrid } from "./EmployeeGridInterface";
import { removeEmployee } from "../logic";
import { useDispatch } from "react-redux";

const EmployeesGrid = ({ data }: IEmployeeGrid) => {
  const dispatch = useDispatch();
  return (
    <>
      {data?.map((data) => (
        <UserCard
          key={data._id}
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email}
          gender={data.gender}
          phone={data.phone}
          photo={data.photo}
          _id={data._id}
          onClickDelete={() => removeEmployee(data, dispatch)}
        />
      ))}
    </>
  );
};

export default EmployeesGrid;

// {posts.employees.map((post: any) => (
//     <UserCard firstName={post.firstName} photo={post.photo} />
//   ))}
