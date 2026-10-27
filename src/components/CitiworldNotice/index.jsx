import React from 'react';
import { useTranslation} from 'react-i18next';


const CitiworldNotice = () => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative ">                    
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10">
            <div className="lg:pl-0 xlpl-10 lg:col-span-5">
            </div>
            <div className="flex lg:col-span-7 justify-start items-center mt-10 md:mt-0 relative">
                <div className='text-center md:text-left'>
                    <p className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{__html: t('CitiworldNotice.title')}}></p>
                    <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('CitiworldNotice.body')}}></p>
                                                 
                </div>
            </div>
        </div>
      </div>  
  );
}

export default CitiworldNotice;