"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const NewRealEstate = () => {
  const [formData, setFormData] = useState({
    cityName: "",
    citySquareFee: "",
    cityGDP: "",
    developmentStage: "",
    supply: "",
    indexSymbol: "",
    developmentStageStatus: "",
    file: null as File | null,  // Add file to formData
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files ? files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Handle file upload and other submission logic here
    // For example, you might want to send formData to a server
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Create New Real Estate Index</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="cityName">City Name</label>
          <input
            type="text"
            name="cityName"
            placeholder="City Name"
            value={formData.cityName}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="citySquareFee">City Square Fee</label>
          <input
            type="text"
            name="citySquareFee"
            placeholder="City Square Fee"
            value={formData.citySquareFee}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cityGDP">City GDP</label>
          <input
            type="text"
            name="cityGDP"
            placeholder="City GDP"
            value={formData.cityGDP}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="developmentStage">Development Stage</label>
          <input
            type="text"
            name="developmentStage"
            placeholder="Development Stage"
            value={formData.developmentStage}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="supply">Supply</label>
          <input
            type="text"
            name="supply"
            placeholder="Supply"
            value={formData.supply}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="indexSymbol">City Index Symbol</label>
          <input
            type="text"
            name="indexSymbol"
            placeholder="City Index Symbol"
            value={formData.indexSymbol}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="developmentStageStatus">Development Stage Status</label>
          <input
            type="text"
            name="developmentStageStatus"
            placeholder="Current Stage of City's Development"
            value={formData.developmentStageStatus}
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="file">Upload Document/Picture</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="input p-2 bg-slate-900 rounded-md border-2"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 col-span-2 w-fit m-auto text-white py-2 px-4 rounded"
        >
          Verify With ZKC
        </button>
      </form>
    </div>
  );
};

export default NewRealEstate;
