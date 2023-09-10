import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;


const styles=StyleSheet.create({
    container:{
        padding: screenWidth < 400 ? 4 : 8,
    },
    tabContent:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    tabText:
    {
        fontWeight:'bold',
        color:'#134484'
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
        fontWeight:'bold',
        color:'#134484',
        paddingBottom:16
      }
})

export default styles;