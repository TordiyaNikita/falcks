import PropTypes from 'prop-types';

export function TextareaComponent({ jsRef, executeJavaScript, text }) {
    return (
        <>
            <p>{text}</p>
            <textarea
                id="javascriptCode"
                ref={jsRef}
                spellCheck="false"
                placeholder="Type JavaScript code here"
                onKeyDown={(event) => {
                    if (event.keyCode === 9) {
                        event.preventDefault();
                        const v = jsRef.current.value;
                        const s = jsRef.current.selectionStart;
                        const e = jsRef.current.selectionEnd;
                        jsRef.current.value = v.substring(0, s) + '\t' + v.substring(e);
                        jsRef.current.selectionStart = jsRef.current.selectionEnd = s + 1;
                    }
                }}
            />
            <button onClick={executeJavaScript}>Run JavaScript</button>
        </>
    );
}

TextareaComponent.propTypes = {
    jsRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element)
    }).isRequired,
    executeJavaScript: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
