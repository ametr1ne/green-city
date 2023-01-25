import React, { useContext, useEffect, useState } from "react";
import {
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Context } from "../..";
import {
  createOrganization,
  fetchCategories,
  fetchProblems,
} from "../../http/organizationAPI";
import { observer } from "mobx-react-lite";

const CreateOrganization = observer(({ open, handleOpen }) => {
  const { orgs } = useContext(Context);

  useEffect(() => {
    fetchProblems().then((data) => orgs.setProblems(data.rows));
    fetchCategories().then((data) => orgs.setCategoriesOfOrganizations(data));
  }, []);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [problem, setProblem] = useState("");

  const [catId, setCatId] = useState(null);
  const [problemId, setProblemId] = useState(null);

  const addOrg = () => {
    console.log(catId, problemId);
    createOrganization({
      name: name,
      cityProblemId: problemId,
      categoryOfOrganizationId: catId,
    }).then((data) => {
      setName("");
      setCategory("");
      setProblem("");
      setCatId(null)
      setProblemId(null)
      handleOpen();
    }).catch((e) => alert(e.response.data.message));
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center"
    >
      <DialogHeader>Добавить организацию</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Название организации"
          />
        </div>
        <div className="w-96 mt-5">
          <Select
            label="Категория организации"
            value={category}
            onChange={value => setCategory(value)}
          >
            {orgs.categories_of_organizations.map((item) => (
              <Option
                value={item.name}
                onClick={() => setCatId(item.id)}
                key={item.id}
              >
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-96 mt-5">
          <Select
            value={problem}
            onChange={(value) => setProblem(value)}
            label="Проблемы, решаемые организацией"
          >
            {orgs.problems.map((item) => (
              <Option value={item.name} onClick={() => setProblemId(item.id)} key={item.id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Отменить</span>
        </Button>
        <Button type="button" variant="gradient" color="green" onClick={addOrg}>
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
});

export default CreateOrganization;
