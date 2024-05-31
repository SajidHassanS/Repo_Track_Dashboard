import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  client: string;
  tierName: string;
  rdnInstance: string;
  classification: string;
  jobType: string;
  placement: string;
  billableAmount: string;
  tierNeeds: string;
  smartAssign: string;
  rejectionWaterfall: string;
  waterfallDays: string;
}

const TierForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    client: 'For All',
    tierName: 'For All',
    rdnInstance: '',
    classification: '',
    jobType: '',
    placement: 'Lorum',
    billableAmount: 'Lorum',
    tierNeeds: 'Lorum',
    smartAssign: 'Yes',
    rejectionWaterfall: 'Yes',
    waterfallDays: '10 days',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      client: 'For All',
      tierName: 'For All',
      rdnInstance: '',
      classification: '',
      jobType: '',
      placement: 'Lorum',
      billableAmount: 'Lorum',
      tierNeeds: 'Lorum',
      smartAssign: 'Yes',
      rejectionWaterfall: 'Yes',
      waterfallDays: '10 days',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-black dark:text-white mb-3">Client</label>
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Client"
          />
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Tier Name</label>
          <input
            type="text"
            name="tierName"
            value={formData.tierName}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Tier Name"
          />
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">RDN Instance</label>
          <select
            name="rdnInstance"
            value={formData.rdnInstance}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Instance 1">Instance 1</option>
            <option value="Instance 2">Instance 2</option>
          </select>
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Classification</label>
          <select
            name="classification"
            value={formData.classification}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
          </select>
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Placement</label>
          <input
            type="text"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Placement"
          />
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Billable Amount</label>
          <input
            type="text"
            name="billableAmount"
            value={formData.billableAmount}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Billable Amount"
          />
        </div>
        <div className="md:col-span-3">
          <label className="block text-black dark:text-white mb-3">Tier Notes</label>
          <input
            type="text"
            name="tierNeeds"
            value={formData.tierNeeds}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Tier Notes"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 mt-16 gap-6">
        <div>
          <label className="block text-black dark:text-white mb-3">Smart Assign</label>
          <select
            name="smartAssign"
            value={formData.smartAssign}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
        <label className="block text-black dark:text-white mb-3">Rejection Waterfall</label>
          <select
            name="rejectionWaterfall"
            value={formData.rejectionWaterfall}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block text-black dark:text-white mb-3">Waterfall Days</label>
          <input
            type="text"
            name="waterfallDays"
            value={formData.waterfallDays}
            onChange={handleChange}
            className="w-full p-2 border border-black dark:border-myBorder rounded dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white focus:border-red-500"
            placeholder="Waterfall Days"
          />
        </div>
        {/* Additional "Waterfall Days" input field removed */}
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-8 py-2 rounded-full bg-red-500 dark:text-black text-white"
        >
          Save Tier
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-8 py-2 rounded-full border border-green-500 bg-transparent text-black dark:text-white ml-4"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TierForm;

