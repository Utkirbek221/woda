import React, { useState } from 'react';
import axios from 'axios';
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const TelegramBot = () => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [response, setResponse] = useState('');
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const { t } = useTranslation();

    const handleSendMessage = async () => {
        let valid = true;
        if (number.length < 9) {
            setIsNumberValid(false);
            setNumber('');
            valid = false;
        } else {
            setIsNumberValid(true);
        }

        if (!email) {
            setIsEmailValid(false);
            valid = false;
        } else {
            setIsEmailValid(true);
        }

        if (!valid) {
            return;
        }

        const botToken = '7249681231:AAHdRb2JGAgy_mV6Eg4BzdMp76SRmpd1Hqo';
        const chatId = '1005236949';
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const message = `Email: ${email}\nNumber: +998${number}`;

        try {
            const res = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: message,
            });

            if (res.data.ok) {
                setResponse('Message sent successfully');
                setEmail('');
                setNumber('');
            } else {
                setResponse('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
            setResponse('Error sending message to Telegram');
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-[28px] font-[600] max-md:text-[16px]">
                    {t("contacts.text2")}
                </h1>
                <p className="text-[16px] max-w-[360px] text-[#222222] font-[400] leading-[24px] mt-[6px] mb-[24px] max-md:text-[12px] max-md:leading-[18px] max-md:mt-[10px] max-md:mb-[20px]">
                    {t("contacts.texts6")}
                </p>
                <div className="w-[360px] border-[1px] border-[#E4E4E4] max-md:hidden"></div>
                <h5 className="font-[400] text-[12px] leading-[14px] mt-[32px] mb-[8px] max-md:text-[10px] max-md:mt-[0px]">
                    {t("contacts.text3")}
                </h5>
                <div className="flex">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={!isEmailValid ? t('contacts.invalidEmail') : ''}
                        className={`bg-[#F9F9F9] p-[10px] rounded-[8px] outline-none flex-grow ${!isEmailValid && 'placeholder-red-500'}`}
                    />
                </div>
                <h5 className="font-[400] text-[12px] leading-[14px] mt-[18px] mb-[8px] max-md:text-[10px]">
                    {t("contacts.text4")}
                </h5>
                <div className="flex">
                    <span className="bg-[#F9F9F9] p-[10px] rounded-l-[8px] border-r border-[#E4E4E4]">
                        +998
                    </span>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        placeholder={!isNumberValid ? t('contacts.invalidNumber') : ''}
                        className={`bg-[#F9F9F9] p-[10px] rounded-r-[8px] outline-none flex-grow ${!isNumberValid && 'placeholder-red-500'}`}
                    />
                </div>
                <button
                    onClick={handleSendMessage}
                    className="w-full h-[39px] bg-[#0E2A75] text-[#FFFFFF] rounded-[8px] mt-[40px] flex justify-center items-center gap-[6px] max-md:mt-[30px]"
                >
                    {t("contacts.text5")}
                    <GoArrowUpRight className="text-[20px]" />
                </button>
                {response && <p>{response}</p>}
            </div>
        </div>
    );
};

export default TelegramBot;
