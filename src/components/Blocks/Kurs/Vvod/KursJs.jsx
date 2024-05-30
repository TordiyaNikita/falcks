import { useState, useRef } from 'react';
import { Header } from '../../../Header/Header';
import { TextareaComponent } from '../Component/TextareaComponent';
import { KursJsBlock1 } from '../Task/KursJsBlock1';
import { KursJsBlock2 } from '../Task/KursJsBlock2';
import { KursJsBlock3 } from '../Task/KursJsBlock3';
import { KursJsBlock4 } from '../Task/KursJsBlock4';
import { KursJsBlock5 } from '../Task/KursJsBlock5';
import { Footer } from '../../../Footer/Footer';

export function KursJs() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [activeTask, setActiveTask] = useState(null);
    const jsRef = useRef(null);


    const handleButtonClickd = (taskId) => {
        setActiveTask(taskId === activeTask ? null : taskId);
    };

    const handleCloseButtond = () => {
        setActiveTask(null);
    };
    const tasks = {
        1: "При помощи цикла for выведите чётные числа от 2 до 10.",
        2: `Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
         1, если значение больше нуля,
          -1, если значение меньше нуля,
           0, если значение равно нулю.
            Предполагается, что пользователь вводит только числа.`,
        3: `Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.
        Пример вызовов:
        min(2, 5) == 2
        min(3, -1) == -1
        min(1, 1) == 1`,
        4: `Напишите код, выполнив задание из каждого пункта отдельной строкой:
        Создайте пустой объект user.
        Добавьте свойство name со значением John.
        Добавьте свойство surname со значением Smith.
        Измените значение свойства name на Pete.
        Удалите свойство name из объекта.`,
        5: `Объявите две переменные: admin и name.
        Запишите строку "Джон" в переменную name.
        Скопируйте значение из переменной name в admin.
        Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).`,
    };

    const validations = {
        1: (code) => {
            try {
                const originalAlert = window.alert;
                let alertOutput = [];
                window.alert = (msg) => alertOutput.push(Number(msg));

                eval(code);

                window.alert = originalAlert;
                const expectedOutput = [2, 4, 6, 8, 10];
                return JSON.stringify(alertOutput) === JSON.stringify(expectedOutput);
            } catch (error) {
                return false;
            }
        },
        2: (code) => {
            try {
                const originalPrompt = window.prompt;
                const originalAlert = window.alert;
                let alertOutput = [];
                window.prompt = () => 1;
                window.alert = (msg) => alertOutput.push(Number(msg));

                eval(code);

                window.prompt = originalPrompt;
                window.alert = originalAlert;
                const expectedOutput = [1];
                return JSON.stringify(alertOutput) === JSON.stringify(expectedOutput);
            } catch (error) {
                return false;
            }
        },
        3: (code) => {
            try {
                const minFunc = eval(`(${code})`);
                return minFunc(2, 5) === 2 && minFunc(3, -1) === -1 && minFunc(1, 1) === 1;
            } catch (error) {
                return false;
            }
        },
        4: (code) => {
            try {
                eval(code);
                const user = {};
                user.name = "John";
                user.surname = "Smith";
                user.name = "Pete";
                delete user.name;

                return !user.name && user.surname === "Smith";
            } catch (error) {
                return false;
            }
        },
        5: (code) => {
            try {
                const originalAlert = window.alert;
                let alertOutput = [];
                window.alert = (msg) => alertOutput.push(msg);

                eval(code);

                window.alert = originalAlert;
                const expectedOutput = ["Джон"];
                return JSON.stringify(alertOutput) === JSON.stringify(expectedOutput);
            } catch (error) {
                return false;
            }
        },
    };

    const executeJavaScript = (taskNumber) => {
        const javascriptCode = jsRef.current.value;
        const iframe = document.getElementById('viewer').contentWindow.document;
        iframe.open();
        iframe.write(`
            <script>
                (function() {
                    try {
                        ${javascriptCode}
                    } catch (error) {
                        console.error(error);
                    }
                })();
            </script>
        `);
        iframe.close();
        validateJavaScript(taskNumber);
    };

    const validateJavaScript = (taskNumber) => {
        const javascriptCode = jsRef.current.value;
        try {
            if (validations[taskNumber](javascriptCode)) {
                setErrorMessage('');
                closePopup();
            } else {
                setErrorMessage('Ваш код неверен. Пожалуйста, попробуйте еще раз.');
            }
        } catch (error) {
            setErrorMessage('В вашем коде есть ошибка. Пожалуйста, попробуйте еще раз.');
        }
    };

    const handleButtonClick = (taskNumber) => {
        const content = (
            <TextareaComponent
                jsRef={jsRef}
                executeJavaScript={() => executeJavaScript(taskNumber)}
                text={tasks[taskNumber]}
            />
        );

        setPopupContent(content);
        setPopupVisible(true);
        setErrorMessage('');
    };

    const closePopup = () => {
        setPopupVisible(false);
        setPopupContent(null);
    };

    return (
        <div>
        <div className='block__container margin'>
            <Header />
            <p>JavaScript</p>
            <div className="f">
                <button onClick={() => handleButtonClickd(1)}>For и другие</button>
                {activeTask === 1 && (
                    <div className="container__task">
                        <button onClick={handleCloseButtond} className="close__pop_up">&times;</button>
                        <KursJsBlock1 />
                        <button onClick={() => handleButtonClick(1)}>Задание</button>
                    </div>
                )}
                <button onClick={() => handleButtonClickd(2)}>If else</button>
                {activeTask === 2 && (
                    <div className="container__task">
                        <button onClick={handleCloseButtond} className="close__pop_up">&times;</button>
                        <KursJsBlock2 />
                        <button onClick={() => handleButtonClick(2)}>Задание</button>
                    </div>
                )}
                <button onClick={() => handleButtonClickd(3)}>Объекты</button>
                {activeTask === 3 && (
                    <div className="container__task">
                        <button onClick={handleCloseButtond} className="close__pop_up" >&times;</button>
                        <KursJsBlock3 />
                        <button onClick={() => handleButtonClick(4)}>Задание</button>
                    </div>
                )}
                <button onClick={() => handleButtonClickd(4)}>Функции</button>
                {activeTask === 4 && (
                    <div className="container__task">
                        <button onClick={handleCloseButtond} className="close__pop_up">&times;</button>
                        <KursJsBlock4 />
                        <button onClick={() => handleButtonClick(3)}>Задание</button>
                    </div>
                )}
                <button onClick={() => handleButtonClickd(5)}>Alert</button>
                {activeTask === 5 && (
                    <div className="container__task">
                        <button onClick={handleCloseButtond} className="close__pop_up">&times;</button>
                        <KursJsBlock5 />
                        <button onClick={() => handleButtonClick(5)}>Задание</button>
                    </div>
                )}
            </div>
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-button" onClick={closePopup}>&times;</span>
                        {popupContent}
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        <iframe id="viewer"></iframe>
                    </div>
                </div>
            )}
        <Footer />
        </div>
        </div>
    );
}
