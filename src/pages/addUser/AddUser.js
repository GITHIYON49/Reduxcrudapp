import React, { useContext } from "react";
import { Input, Label, Button } from "../../components";
import { UserContex } from "../../App";
import { stringData } from "../../data";

const AddUser = () => {
  const { personData, setPersonData, name, setName, age, setAge, id } =
    useContext(UserContex);

  function handleAddUser() {
    const newData = { name, age, id };
    const data = [...personData];
    data.push(newData);
    setPersonData(data);
  }

  return (
    <>
      <section className="w-full flex items-center justify-center mt-5">
        <form className="w-3/5 flex flex-col gap-3 items-center">
          <div className="w-4/5">
            <Label labelName={stringData.Name} />
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={`Enter your name`}
            />
          </div>
          <div className="w-4/5">
            <Label labelName={stringData.Age} />
            <Input
              onChange={(e) => setAge(e.target.value)}
              placeholder={`Enter your Age`}
            />
          </div>
          <div className="w-4/5">
            <Button
              type="button"
              className="bg-green-500 w-full"
              btnName={stringData.createBtn}
              handleClick={() => {
                handleAddUser();
              }}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddUser;
