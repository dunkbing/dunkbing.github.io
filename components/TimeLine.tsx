import React from 'react';
import styles from '../styles/timeline.module.css';

interface TimeLineProps {
  experience: string;
  company: string;
  time: string;
  lastItem?: boolean;
};

const TimeLineItem: React.FC<TimeLineProps> = (props) => {
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
      <p className={styles['year']}>{props.time}</p>
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
      ></div>
    </div>
  );
};

const TimeLine: React.FC = () => {
  return (
    <div className={styles['timeline']}>
      <div className={styles['timeline-list']}>
        <TimeLineItem
          experience="🎓 Bachelor's degree"
          company="Software Engineering"
          time="2022"
        />
        <TimeLineItem
          experience="☀️ C++ Fresher"
          company="Gameloft"
          time="2021"
        />
        <TimeLineItem
          experience="☀️ Nodejs Internship"
          company="VietIS Corp"
          time="2020"
          lastItem={true}
        />
      </div>
    </div>
  );
};

export default TimeLine;
