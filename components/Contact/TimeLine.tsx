import React from 'react';
import styles from '../../styles/timeline.module.css';

interface TimeLineProps {
  experience: string;
  company: string;
  startTime: string;
  endTime?: string;
  lastItem?: boolean;
}

const TimeLineItem: React.FC<TimeLineProps> = props => {
  return (
    <div className={`${styles['timeline-event']} ${styles['is-done']}`}>
      {props.lastItem ? null : (
        <div
          className="color-theme"
          style={{
            content: '',
            display: 'inline-block',
            position: 'absolute',
            left: '-40px',
            height: '100%',
            width: '4px',
            borderLeft: '3px solid #000',
          }}
        />
      )}
      <p>{props.experience}</p>
      <p>{props.company}</p>
      <p className={styles['year'] + ' dark:text-gray-200 text-gray-500'}>
        {props.startTime} {props.endTime ? ` - ${props.endTime}` : ''}
      </p>
      <div
        className="color-theme"
        style={{
          content: '',
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: '-44px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          fontSize: '10px',
        }}
      />
    </div>
  );
};

const TimeLine: React.FC = () => {
  return (
    <div className={styles['timeline']}>
      <div className={styles['timeline-list']}>
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
          experience="🎓 Bachelor's degree"
          company="Software Engineering"
          startTime="2021"
        />
        <TimeLineItem
          experience="☀️ C++ Internship"
          company="Gameloft"
          startTime="03/2021"
          endTime="09/2021"
          lastItem={true}
        />
      </div>
    </div>
  );
};

export default TimeLine;
