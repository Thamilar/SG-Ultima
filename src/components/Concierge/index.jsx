import React from 'react';
import GoldButton from '../../components/GoldButton';
import { useTranslation} from 'react-i18next';


const Concierge = () => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative ">                    
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10">
            <div className="lg:pl-0 xlpl-10 lg:col-span-5 flex items-center">
                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey max-w-sm' dangerouslySetInnerHTML={{__html: t('concierge.conciergeTitle')}}></h2>
            </div>
            <div className="flex lg:col-span-7 justify-start items-center mt-10 md:mt-0 relative">
                <div className='text-center md:text-left'>
                    <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('concierge.conciergeBody')}}></p>
                    <GoldButton href='#/dedication?icid=SGULUXPENULTDCAUS' text={t('concierge.conciergeButton')} className='mt-16' position="bottom"/>                                   
                </div>
            </div>
        </div>
      </div>  
  );
}

export default Concierge;