import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IndianFlag from '../../assests/images/indian-flag.png';
import styles from '../../styles/partnerstript.module.scss';

const CustomDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptionLabel, setSelectedOptionLabel] = useState('+91');
    const [selectedOptionImg, setSelectedOptionImg] = useState(IndianFlag);

    const options = [
        { label: '+91', image: IndianFlag },
        // { label: '+92', image: IndianFlag },
        // { label: '+93', image: IndianFlag },
        // { label: '+94', image: IndianFlag },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOptionLabel(option.label);
        setSelectedOptionImg(option.image);
        setIsOpen(false);
    };

    return (

        <div className={styles.select}>
            <div className={styles.optionSelect} onClick={toggleDropdown}>
                <img src={selectedOptionImg} alt="countryflagimage" className={styles.flagImage} /> <span style={{ marginLeft: '12px' }}>{selectedOptionLabel}</span> {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {isOpen && (
                <div >
                    {options.map((option) => (
                        <div
                            key={option}
                            className="select-option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            <img
                                src={option.image}
                                alt="countryflagimage"
                                className="option-image"
                                style={{ height: '15px', width: '15px' }}
                            />
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
        
    );
};

export default CustomDropDown;
