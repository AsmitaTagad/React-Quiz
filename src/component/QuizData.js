
const questionData = [
    {
        Question: 'The full form of CSS is:',
        Options: [
            { option: ' CSS is a style sheet language' },
            { option: ' CSS is designed to separate the presentation and content, including layout, colors, and fonts' },
            { option: ' CSS is the language used to style the HTML documents' },
            { option: 'All of the mentioned' },
        ],
        correct: 'All of the mentioned',
        Flag: '1',
    },
    {
        Question: "Which of the following CSS framework is used to create a responsive design?",
        Options: [
            { option: " django" },
            { option: " rails" },
            { option: " larawell" },
            { option: " bootstrap" },
        ],
        correct: "bootstrap",
        Flag: '2',
    },
    {
        Question: "Which of the following type of HTML tag is used to define an internal style sheet?",
        Options: [
            { option: " <script>" },
            { option: " <link>" },
            { option: " <class>" },
            { option: " <style>" },
        ],
        correct: "<style/>",
        Flag: '3',
    },
    {
        Question: " Which of the following is not the property of the CSS box model?",
        Options: [
            { option: " margin" },
            { option: " color" },
            { option: " width" },
            { option: " height" },
        ],
        correct: "color",
        Flag: '4',
    },
    {
        Question: "Which of the following CSS selector selects the elements that are checked?",
        Options: [
            { option: " :checked" },
            { option: " E ~ F" },
            { option: " ::after" },
            { option: " none of the mentioned" },
        ],
        correct: ":checked",
        Flag: '5',
    },
    {
        Question: " Which of the following is an appropriate value for the overflow element?",
        Options: [
            { option: " scroll" },
            { option: " hidden" },
            { option: " auto" },
            { option: " all of the mentioned" },
        ],
        correct: "all of the mentioned",
        Flag: '6',
    },
    {
        Question: "Which of the following CSS Property sets the stacking order of positioned elements?",
        Options: [
            { option: " y-index" },
            { option: " z-index" },
            { option: " x-index" },
            { option: "all of the mentioned" },
        ],
        correct: "z-index",
        Flag: '7',
    },
    {
        Question: " Which of the following CSS3 property can be used to allow line breaks within words?",
        Options: [
            { option: " line-break" },
            { option: " line-wrap" },
            { option: " word-wrap" },
            { option: " word-break" },
        ],
        correct: "word-break",
        Flag: '8',
    },
    {
        Question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
        Options: [
            { option: " <link rel=”stylesheet” href=”style.css” />" },
            { option: " <link rel=”stylesheet” src=”style.css” />" },
            { option: " <style rel=”stylesheet” src=”style.css” />" },
            { option: " <style rel=”stylesheet” link=”style.css” />" },
        ],
        correct: "<link rel=”stylesheet” href=”style.css” />",
        Flag: '9',
    },

    {
        Question: "Which of the following CSS property is used to set the color of the text?",
        Options: [
            { option: "text-decoration" },
            { option: "pallet" },
            { option: "pallet" },
            { option: "colour" },
            { option: "color" },
        ],
        correct: "color",
        Flag: '10',
    }


]
export default questionData;