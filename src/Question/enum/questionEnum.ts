import { ObjectId } from "mongodb";
import { QUESTION_TYPE } from "./questionType.enum";

export const QUESTION_DATA = {
    //short
    [QUESTION_TYPE.SHORT_ANSWER]: {
        questionData: null
    },
    //paragraph
    [QUESTION_TYPE.PARAGRAPH]: {
        questionData: null
    },
    // multiple-choice
    [QUESTION_TYPE.MULTIPLE_CHOICE]: {
        questionData: [
            {
                _id: new ObjectId(),
                name: "Option 1",
                imgSrc: "",
                points: 0
            }
        ],
    },
    // Checkbox
    [QUESTION_TYPE.CHECKBOX]: {
        questionData: [
            {
                name: "Option 1",
                imgSrc: "",
                points: 0
            }
        ]
    },
    // Dropdown
    [QUESTION_TYPE.DROPDOWN]: {
        questionData: [
            {
                name: "Option 1",
                imgSrc: "",
                points: 0
            }
        ]
    },
    // Linear scale
    [QUESTION_TYPE.LINEAR_SCALE]: {
        questionData: {
            startIndex: 1,
            endIndex: 5,
            startLabel: "",
            endLabel: ""
        },
    },
    // Multiple choice grid
    [QUESTION_TYPE.MULTIPLE_CHOICE_GRID]: {
        questionData: {
            rowData: [
                {
                    name: "Row 1",
                    points: 0
                },
            ],
            colData: [
                {
                    name: "Col 1",
                    points: 0
                },
                
            ],
        }
    },
    // Checkbox grid
    [QUESTION_TYPE.CHECKBOX_GRID]: {
        questionData: {
            rowData: [
                {
                    name: "Row 1",
                    points: 0
                },
            ],
            colData: [
                {
                    name: "Col 1",
                    points: 0
                },
                
            ],
        }
    },
    // Date
    [QUESTION_TYPE.DATE]: {
        questionData: null
    },
    // Time
    [QUESTION_TYPE.TIME]: {
        questionData: null
    },
    // Title
    [QUESTION_TYPE.TITLE] : {
        questionData: ""
    },
    // Image
    [QUESTION_TYPE.IMAGE] : {
        questionData: ""
    },
    // Video
    [QUESTION_TYPE.VIDEO] : {
        questionData: ""
    },
}