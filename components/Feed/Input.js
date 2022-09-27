import React, { useState, useRef } from 'react';
import { PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const Input = () => {
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const filePickerRef = useRef(null);

  const addImageToPost = () => {};

  const addEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll
      `}
    >
      <img
        src='http://www.qianhuaji.net/uploads/f6334e255e77e3dc1a13dc75f34dbe91.jpg'
        alt=''
        className='h-11 w-11 rounded-full curor-pointer'
      />
      <div className='w-full divide-y divide-gray-700'>
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows='2'
            placeholder='What is happening?'
            className='bg-transparent outline-none text-[#d9d9d9] text-lg
            placeholder-[#6e767d] tracking-wide w-full min-h-[50px]'
          />
          {selectedFile && (
            <div className='relative'>
              <div
                className='absolute w-8 h-8 bg-[#15181c] 
            hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center
            justify-center top-1 left-1 cursor-pointer'
                onClick={() => setSelectedFile(null)}
              >
                <XCircleIcon className='text-white h-5' />
              </div>
              <img
                src={selectedFile}
                alt=''
                className='rounded-2xl max-h-80 object-contain'
              />
            </div>
          )}
        </div>
        <div className='flex items-center justify-between pt-2.5'>
          <div className='flex items-center'>
            <div className='icon' onClick={() => filePickerRef.current.click()}>
              <PhotoIcon className='h-[22px] text-[#1d9bf0]' />
              <input
                type='file'
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
              <FaceSmileIcon className='text-[#1d9bf0] h-[22px]' />
            </div>
            {showEmojis && (
              <div
                className='absolute mt-[465px] ml-[-40px] max-w-[320px]
              rounded-[20px]'
              >
                <Picker data={data} onEmojiSelect={addEmoji} theme='dark' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
