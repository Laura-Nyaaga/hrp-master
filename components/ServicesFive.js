import React from 'react';

const services = [
  {
    icon: 'flaticon-global',
    title: 'Strategic & Growth Consulting',
    description: 'Expanding impact through strategy, leadership, and sustainability.',
  },
  {
    icon: 'flaticon-trolley',
    title: 'Operational & Administrative Support',
    description: 'Streamlining processes for efficiency, productivity, and compliance.',
  },
  {
    icon: 'flaticon-suitcase',
    title: 'Financial & Compliance Advisory',
    description: 'Ensuring financial health, accountability, and regulatory adherence.',
  },
];

const ServicesFive = () => {
      const splitTitle = (title) => {
        const words = title.split(' ');
        if (words.length <= 1) return [title, ''];
        const lastWord = words.pop();
        return [words.join(' '), lastWord];
      };
      
  return (
    <div className="service__five section-padding">
      <div className="container-fluid px-0">
        <div className="row no-gutters justify-content-center gy-4">
          {services.map((s, idx) => {
                const [firstPart, lastPart] = splitTitle(s.title);
                return (
            <div key={idx} 
            className="col-xl-4 col-lg-6 px-2">
              <div className="service__five-card">
                <div className="icon">
                  <i className={s.icon}></i>
                </div>
                <div className="content">
                    <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                        {firstPart}
                        <br />
                        {lastPart}
                      </h5>
                  <p>{s.description}</p>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesFive;