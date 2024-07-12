document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("input").innerHTML;
    const output = document.getElementById("output");


    function generateRuby(input) {
        let result = "";

        const sentStart = input.indexOf("<sent>");
        const sentEnd = input.indexOf("</sent>");
        if (sentStart === -1 || sentEnd === -1) {
            return "Error: Invalid input format";
        }

        const content = input.substring(sentStart + 6, sentEnd);

        const parts = content.split("<nota></nota>");
        if (parts.length !== 2) {
            return "Error: Invalid input format";
        }

        const chinesePart = parts[0].split("&amp;");
        const pinyinPart = parts[1].split("&amp;");

        if (chinesePart.length !== pinyinPart.length) {
            return "Error: Mismatched Chinese and Pinyin parts";
        }

        for (let i = 0; i < chinesePart.length; i++) {
            if (chinesePart[i]) {
                result += `<ruby>${chinesePart[i]}<rt>${pinyinPart[i]}</rt></ruby>`;
            }
        }

        return result;
    }

    const rubyContent = generateRuby(input);
    output.innerHTML = rubyContent;
});