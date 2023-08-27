import React from "react";

function page() {
  let groom = "Salman Khan";
  let bride = "Katrina Kaif";
  let marks = 80;
  return (
    <>
      <h1>
        {bride} weds {groom}
      </h1>
      <h1>Hello Badsha</h1>
      <p className="bg-red-500 font-bold">My total mark is {marks}</p>
    </>
  );
}

export default page;
