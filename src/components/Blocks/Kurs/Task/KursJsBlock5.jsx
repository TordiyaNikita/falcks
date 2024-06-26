export function KursJsBlock5() {
    return (<>
        <p>alert — это встроенная функция в JavaScript, которая используется для отображения модального диалогового окна с текстовым сообщением и одной кнопкой `OK`. Когда alert вызывается, оно приостанавливает выполнение скрипта до тех пор, пока пользователь не закроет окно, нажав на кнопку `OK``. Это полезно для вывода важных сообщений или уведомлений пользователю. Синтаксис</p>
        <pre><code>{`alert(message);`}</code></pre>
        <li>message (сообщение) — строка, которая отображается в диалоговом окне. Это может быть текст, число или результат выражения.</li>
        <h1>Пример использования</h1>
        <p>Вот несколько примеров использования функции alert:</p>
        <ul>
            <li>
                <p>Простой текст</p>
                <pre><code>{`alert("Привет, мир!");`}</code></pre>
                <p>Это вызовет диалоговое окно с сообщением `Привет, мир!`.</p>
            </li>
            <li>
                <p>Переменные и выражения</p>
                <pre><code>{`let name = "Джон";
alert(name);`}</code></pre>
                <p>Здесь будет выведено значение переменной name, которое равно `Джон`.</p>
            </li>
            <li>
                <p>Числовые значения</p>
                <pre><code>{`alert(42);`}</code></pre>
                <p>Это отобразит число 42 в диалоговом окне.</p>
            </li>
            <li>
                <p>Результат выражения</p>
                <pre><code>{`let a = 5;
let b = 10;
alert(a + b);`}</code></pre>
                <p>Это покажет результат сложения переменных a и b, то есть 15.</p>
            </li>
        </ul>
    </>)
}