import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        padding: width < 400 ? 4 : 8,
    },
    tabContent: {
        paddingHorizontal: width * 0.1 / 2,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    tabText:
    {
        fontWeight: 'bold',
        color: '#134484'
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    dropdownText: {
        fontSize: 16,
        color: 'black',
    },
    dropdownContainer: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    dropdownItemText: {
        fontSize: 16,
        color: 'black',
        padding: 10,
    },
    question:
    {
        fontWeight: 'bold',
        color: '#134484',
        paddingBottom: 16
    },
    label: {
        color: 'gray', // Customize label text color
    },
    input: {
        borderBottomWidth: 1,
        paddingVertical: width * 0.1 / 5,
        borderBottomColor: '#134484',
        marginBottom: width * 0.1 / 7
    },
    TitleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Title: {
        padding: width * 0.1 / 5,
        margin: width * 0.1 / 5
    },
    TitleText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#191c4a'
    },
    RenderConHeading: {
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
        overflow: "scroll",
    }
})

export default styles;