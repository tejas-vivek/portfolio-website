import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import SigmaTenant from './works/sigmaTenant';
import FaxonDigital from './works/FaxonDigital';
import KanooIT from './works/KanooIT';

const Experience = () => {
  const [workSigmaTenant, setWorkSigmaTenant] = useState(true);
  const [workFaxonDigital, setWorkFaxonDigital] = useState(false);
  const [workKanooIT, setWorkKanooIT] = useState(false);

  const handleSigmaTenant = () => {
    setWorkSigmaTenant(true);
    setWorkFaxonDigital(false);
    setWorkKanooIT(false);
  }

  const handleFaxonDigital = () => {
    setWorkSigmaTenant(false);
    setWorkFaxonDigital(true);
    setWorkKanooIT(false);
  }

  const handleKanooIT = () => {
    setWorkSigmaTenant(false);
    setWorkFaxonDigital(false);
    setWorkKanooIT(true);
  }

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li onClick={handleSigmaTenant}
            className={`${workSigmaTenant ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-10 font-medium`} >Sigma Tenant</li>

          <li onClick={handleFaxonDigital}
            className={`${workFaxonDigital ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-10 font-medium`}>Faxon Digital</li>

          <li onClick={handleKanooIT}
            className={`${workKanooIT ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-10 font-medium`}>Kanoo IT</li>
        </ul>
        {workSigmaTenant && <SigmaTenant />}
        {workFaxonDigital && <FaxonDigital />}
        {workKanooIT && <KanooIT />}
      </div>
    </section>
  );
};

export default Experience