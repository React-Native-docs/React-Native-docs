export const markdownStyle = {
    singleLineMd: {
        text: {
            color: 'blue',
            textAlign: "left"
        },
        view: {
            alignSelf: 'stretch',
        }
    },
    collectiveMd: {
        heading1: {
            color: 'black'
        },
        heading2: {
            color: 'green',
            textAlign: "left"
        },
        strong: {
            color: 'blue'
        },
        em: {
            color: 'black',
            fontStyle: 'normal',
        },
        text: {
            color: 'black',
            fontSize: 12,
        },
        blockQuoteText: {
            color: 'grey'
        },
        blockQuoteSection: {
            flexDirection: 'row',
        },
        blockQuoteSectionBar: {
            width: 3,
            height: null,
            backgroundColor: '#DDDDDD',
            marginRight: 15,
        },
        codeBlock: {
            fontFamily: 'Courier',
            fontWeight: '500',
            backgroundColor: '#DDDDDD',
        },
        table: {
            borderWidth: 0,
        },
        tableHeader: {
            backgroundColor: 'white',
            borderColor: "black",
            borderWidth: 1,
        },
        tableRow: {
            borderBottomWidth: 0.3,
            borderColor: '#222222',
        },
    },
};