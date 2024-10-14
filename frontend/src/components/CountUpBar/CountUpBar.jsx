import React, { useState } from 'react';
import './CountUpBar.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUpBar = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
            <div className="countup-container">
                <div className="countup-item">
                    {counterOn && (
                        <p className="countup-value text-2xl font-medium">
                            <CountUp start={0} end={10} duration={2} />+
                        </p>
                    )}
                    <p className="countup-label text-base font-light">Active Employees</p>
                </div>
                <div className="countup-separator" />
                <div className="countup-item">
                    {counterOn && (
                        <p className="countup-value text-2xl font-medium">
                            <CountUp start={0} end={28} duration={2} />
                        </p>
                    )}
                    <p className="countup-label text-base font-light">Active Projects</p>
                </div>
                <div className="countup-separator" />
                <div className="countup-item">
                    {counterOn && (
                        <p className="countup-value text-2xl font-medium">
                            <CountUp start={0} end={103} duration={2} />
                        </p>
                    )}
                    <p className="countup-label text-base font-light">Completed Projects</p>
                </div>
                <div className="countup-separator" />
                <div className="countup-item">
                    {counterOn && (
                        <p className="countup-value text-2xl font-medium">
                            <CountUp start={0} end={31} duration={2} />
                        </p>
                    )}
                    <p className="countup-label text-base font-light">Returning Clients</p>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CountUpBar;
