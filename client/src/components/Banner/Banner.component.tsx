import { FC } from 'react';
import styles from './Banner.component.module.scss';

interface BannerProps {
    onCloseBanner: () => void;
}

const Banner: FC<BannerProps> = ({ onCloseBanner }) => {
    const onCloseHandler = () => {
        onCloseBanner();
    };

    return (
        <div className={`${styles.banner} bg-primary-500 fixed w-full z-4`}>
            <div className='flex text-sm text-color py-2 px-4 md:px-8 flex flex-row justify-content-between align-items-center'>
                <div></div>
                <div className='flex align-items-center'>
                    <p className='font-semibold'>🔥 Black Friday!</p>
                    <p className='pl-2 pr-8 hidden md:block'>Jetzt tolle Angebote sichern.</p>
                </div>
                <i className='pl-2 px-2 pi pi-times cursor-pointer' onClick={onCloseHandler} />
            </div>
        </div>
    );
};

export default Banner;
