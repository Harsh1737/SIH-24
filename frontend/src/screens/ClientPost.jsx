import { useState } from "react";
import components from "../components";

const { SkillSelector } = components;
import "../index.css";

function ClientPost() {
  const [outputSkillsArray, setOutputSkillsArray] = useState([]);
  const [skillArray, setSkillArray] = useState([
    "JavaScript",
    "Python",
    "Java",
    "React",
    "AWS",
  ]);
  const [inputValue, setInputValue] = useState("");
  const [budgetType, setBudgetType] = useState("hourly");
  const [title, setTitle] = useState("");

  const handleAddSkill = (skill) => {
    if (!outputSkillsArray.includes(skill)) {
      setOutputSkillsArray((prevSkills) => [...prevSkills, skill]);
    }
  };
  const handleRemoveSkill2 = (skill) => {
    setOutputSkillsArray((prevSkills) => prevSkills.filter((s) => s !== skill));
  };
  const handleRemoveSkill = (skill) => {
    setSkillArray((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  return (
    <>
      <div className="my-16"></div>
      <div className="flex h-screen">
        <div className="w-1/3 bg-green-600 text-white p-5 fixed h-full">
          <h1 className="text-3xl font-bold mb-4">Fixed Text</h1>
          <p>
            This text will stay fixed while the form on the right can be
            scrolled.
          </p>
        </div>

        <div className="w-2/3 ml-auto h-full p-5">
          <form className="space-y-4">
            <h2 className="text-3xl font-semibold m-4 "> CREATE A POST :</h2>

            <div className="flex flex-col gap-2">
              <label htmlFor="jobTitle" className="text-lg mr-9 font-semibold">
                Write a title for your job post:
              </label>
              <input
                type="text"
                id="jobTitle"
                className="border-2 border-gray-600 w-full p-2 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="my-2">
              <h2 className="font-semibold">Example Titles:</h2>
              <ul className="list-disc ml-5">
                <li>
                  UX/UI designer to bring website mockup and prototype to life
                </li>
                <li>
                  React Developer Required for Dynamic Web EmpPostlication with
                  Authentication
                </li>
                <li className="mb-3">
                  Cloud Architect Required for Serverless Application
                  Development on AWS
                </li>
              </ul>
            </div>

            <div className="flex flex-col mb-2">
              <label
                htmlFor="projectDescription"
                className="text-xl mr-9 mb-2 font-semibold"
              >
                Project Description:
              </label>
              <textarea
                id="projectDescription"
                className="rounded-lg w-full p-2 border-2 border-gray-600"
                rows="5"
              ></textarea>
            </div>
            <div>
              <span className="text-xl mr-9 font-semibold mb-2">
                Add Skills:
              </span>
              <input
                className="w-[500px] h-[40px] mb-4 text-lg px-3 border-2 border-gray-600 rounded-lg hover:border-black"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                placeholder="Enter..."
                type="text"
              />
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white border-2 border-gray-600 font-bold py-2 px-4 mx-6 my-5 rounded"
                onClick={() => {
                  inputValue?.trim() && handleAddSkill(inputValue);
                  setInputValue("");
                }}
              >
                ADD
              </button>
              <div>
                {skillArray.map((skill) => (
                  <SkillSelector
                    key={skill}
                    text={skill}
                    onAddSkill={handleAddSkill}
                    onRemoveSkill={handleRemoveSkill}
                  />
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-xl mr-9  font-semibold mb-2 ">
                  Selected Skills:
                </h4>
                <div className="border p-2 rounded-md">
                  {outputSkillsArray.length > 0 ? (
                    <ul className="list-disc ml-5">
                      {outputSkillsArray.map((skill, index) => (
                        <button
                          type="button"
                          className="flex items-center justify-between "
                          style={{
                            backgroundColor: "rgb(255, 0, 0, 0.8)",
                            color: "#ffffff",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            margin: "4px",
                            cursor: "pointer",
                            border: "none",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgb(255, 0, 0, 1)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgb(255, 0, 0, 0.8)")
                          }
                          onClick={() => {
                            handleRemoveSkill2(skill);
                          }}
                          key={index}
                        >
                          {skill}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-x"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      ))}
                    </ul>
                  ) : (
                    <p>No skills selected yet.</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="text-xl mr-9  font-semibold ">Email:</label>
              <input type="email" className="border w-full p-2 mt-2" />
            </div>

            <div>
              <label className=" mr-9">
                <p className="text-xl mb-2 font-semibold">
                  Estimate the Scope of Your Work
                </p>
                <div className="radio-group">
                  <input type="radio" name="scope" value="large" />
                  <label htmlFor="large">Large</label>
                  <br />
                  <input type="radio" name="scope" value="medium" />
                  <label htmlFor="medium">Medium</label>
                  <br />
                  <input type="radio" name="scope" value="small" />
                  <label htmlFor="small">Small</label>
                </div>
              </label>
            </div>

            <div>
              <label className="text-xl mr-9  font-semibold mb-2">
                <h1> Tell us about your budget</h1>
                <input type="text" />
                <div className="flex gap-12 font-bold text-xl">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setBudgetType("hourly");
                    }}
                    className={` border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl hover:object-scale-down  ${
                      budgetType === "hourly"
                        ? "border-black"
                        : "border-gray-300"
                    } `}
                  >
                    <img
                      className="object-contain transform"
                      width="80"
                      height="80"
                      src="https://img.icons8.com/dotty/80/men-age-group-5.png"
                      alt="freelancer"
                    />
                    <p>Hourly rate</p>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setBudgetType("fixed");
                    }}
                    className={`border-[3px] shadow-lg p-6  h-[170px] w-[300px] rounded-xl  ${
                      budgetType === "fixed"
                        ? "border-black"
                        : "border-gray-300"
                    } `}
                  >
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/manager.png"
                      alt="manager"
                    />
                    <p>Fixed price</p>
                  </button>
                </div>
              </label>
            </div>
            <div>
              {budgetType === "hourly" ? (
                <div className="flex gap-96">
                  <div>
                    <h2 className="ml-10"> From </h2>
                    <span className="ml-10">Rs.</span>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-20 border rounded-md p-2 "
                    />
                    <span className="opacity-80">/hr</span>
                  </div>
                  <div>
                    <h2> To </h2>
                    <span>Rs.</span>
                    <input
                      type="number"
                      placeholder="100000"
                      className="w-24 border rounded-md p-2"
                    />
                    <span className="opacity-80">/hr</span>
                  </div>
                </div>
              ) : (
                <label className="flex justify-start items-center">
                  <h2 className="ml-10"> Price : </h2>
                  <span>Rs.</span>
                  <input
                    type="number"
                    placeholder="100000"
                    className="w-24 border rounded-md p-2"
                  />
                </label>
              )}
            </div>
            <div className=" flex justify-end m-28">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-4xl py-3 px-5 rounded-xl shadow-2xl">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ClientPost;
