import React from 'react';

interface TimeLineProps {
  experience: string;
  company: string;
  startTime: string;
  endTime?: string;
  lastItem?: boolean;
}

const TimeLineItem: React.FC<TimeLineProps> = props => {
  return (
    <div className="relative">
      <p className="font-semibold text-md mb-0">{props.experience}</p>
      <p className="mb-0">{props.company}</p>
      <p className={'text-gray-200'}>
        {props.startTime} {props.endTime ? ` - ${props.endTime}` : ''}
      </p>
    </div>
  );
};

const TimeLine: React.FC = () => {
  return (
    <div className="my-1.5">
      <TimeLineItem
        experience="☀️ Full-stack Developer"
        company="FPT Software"
        startTime="02/2023"
        endTime="current"
      />
      <TimeLineItem
        experience="☀️ Backend Developer"
        company="Vietnam AI System"
        startTime="02/2022"
        endTime="12/2022"
      />
      <TimeLineItem
        experience="☀️ C++ Internship"
        company="Gameloft"
        startTime="03/2021"
        endTime="09/2021"
      />
      <TimeLineItem
        experience="🎓 Bachelor's degree"
        company="Software Engineering"
        startTime="10/2017"
        endTime="12/2021"
        lastItem={true}
      />
    </div>
  );
};

export default TimeLine;
