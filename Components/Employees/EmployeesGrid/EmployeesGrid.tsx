import UserCard from "../../Card/Card";
import { IEmployeeGrid } from "./EmployeeGridInterface";

const EmployeesGrid = ({ data }: IEmployeeGrid) => {
  return (
    <>
      {data.map((data) => (
        <UserCard
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email}
          gender={data.gender}
          phone={data.phone}
          photo={data.photo}
          id={data._id}
        />
      ))}
    </>
  );
};

export default EmployeesGrid;

// {posts.employees.map((post: any) => (
//     <UserCard firstName={post.firstName} photo={post.photo} />
//   ))}
