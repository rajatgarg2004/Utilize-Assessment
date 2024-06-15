import React, { useEffect, useState } from 'react';
import { icons } from 'feather-icons';

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight,
    pickerWidth,
}) => {
    const iconsArray = Object.keys(icons);
    const iconsPerPage = parseInt(rowsInOnePage) * parseInt(columnsInOnePage);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(iconsArray.length / iconsPerPage);
    const [iconArray, setIconArray] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };
    

    const chunkArray = (array, rowsInOnePage, columnsInOnePage) => {
        const result = [];
        for (let i = 0; i < rowsInOnePage; i++) {
            result.push(array.slice(i * columnsInOnePage, (i + 1) * columnsInOnePage));
        }
        return result;
    };

    const renderIcons = () => {
        const startIndex = currentPage * iconsPerPage;
        const endIndex = Math.min(startIndex + iconsPerPage, iconsArray.length);
        const currentIcons = iconsArray.slice(startIndex, endIndex);
        const rows = chunkArray(currentIcons, parseInt(rowsInOnePage), parseInt(columnsInOnePage));
        setIconArray(rows);
    };

    useEffect(() => {
        renderIcons();
    }, [currentPage]);
    useEffect(()=>{
        renderIcons();
        setCurrentPage(0);
    },[totalPages])
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white" style={{ width: pickerWidth, height: pickerHeight }}>
            <div
                className="w-[100%] text-black font-bold h-auto border-4 border-black flex flex-row items-center justify-center "
            >
                {selectedIcon ? (
                    <img onClick={() => setSelectedIcon(null)} src={`data:image/svg+xml;utf8,${icons[selectedIcon].toSvg()}`} alt={selectedIcon} className='bg-white p-4 cursor-pointer' />
                ) : (
                    'Select App Icon'
                )}
            </div>
            <div className="flex justify-between w-[100%] p-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <div>
                    <span className="text-black font-bold">
                        Page {currentPage + 1} of {totalPages}
                    </span>
                </div>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                </button>
            </div>
            <div className="flex flex-col">
                {iconArray.map((row, rowIndex) => (
                    <div className="flex" key={rowIndex}>
                        {row.map((icon, iconIndex) => (
                            <div
                                key={iconIndex}
                                className="flex justify-center items-center cursor-pointer bg-white border-2 border-black m-1"
                                style={{ width: iconWidth, height: iconHeight }}
                                onClick={() => handleIconClick(icon)}
                            >
                                <img src={`data:image/svg+xml;utf8,${icons[icon].toSvg()}`} alt={icon} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconPicker;
