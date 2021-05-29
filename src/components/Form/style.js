import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#a6a6a6",
        alignItems: "center",
        borderTopRightRadius: 30, 
        borderTopLeftRadius: 30,
        marginTop: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 50,
        padding: 10,
    },

    textTitle: {
        textAlign: "center",
        color: "#ffe600",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
        fontSize: 50,
        fontWeight: "bold",
    },

    formLabel: {
        color: "#000000",
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 20,
    }, 

    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 20
    },

    buttonLogin: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ffe600",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,

    },

    textButtonLogin: {
        fontSize: 25,
        color: "#ffffff",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 3,
    }
});

export default styles 