import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Course: NextPage = () => {
  const router = useRouter();

  const { course } = router.query;

  return <div>This is an {course} course</div>;
};

export default Course;
