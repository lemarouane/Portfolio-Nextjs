import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
    const [english, setEnglish] = useState(0);
    const [french, setFrench] = useState(0);

    useEffect(() => {
        const englishTimer = setInterval(() => {
            if (english < 90) {
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        const frenchTimer = setInterval(() => {
            if (french < 90) {
                setFrench(prevCount => prevCount + 1);
            }
        }, 30);

        return () => {
            clearInterval(englishTimer);
            clearInterval(frenchTimer);
        };
    }, [english, french]);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={french} size={75} />
                        <span className='text-xs font-bold text-Snow'>French</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
